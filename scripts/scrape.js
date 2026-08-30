#!/usr/bin/env node

/**
 * 通用导航网站采集与入库工具 (Universal Nav Scraper & Importer)
 * 
 * 使用方式：
 *   1. 采集并生成 JSON + SQL 文件：
 *      node scripts/scrape.js https://target-nav-website.com
 * 
 *   2. 采集并直接自动导入到 Cloudflare D1 远端数据库：
 *      node scripts/scrape.js https://target-nav-website.com --import
 * 
 *   3. 指定默认分类：
 *      node scripts/scrape.js https://target-nav-website.com --category="动漫动画" --import
 * 
 *   4. 从本地保存的 HTML 文件采集：
 *      node scripts/scrape.js ./saved_page.html --import
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');
const cheerio = require('cheerio');

// 数据库分类映射（ID 1~10）
const CATEGORY_MAP = {
  '综合影视': 1,
  '动漫动画': 2,
  '聚合搜索': 3,
  '网盘资源': 4,
  '电视剧': 5,
  '电影专区': 6,
  '字幕资源': 7,
  '纪录片': 8,
  '综艺娱乐': 9,
  '短剧短视频': 10
};

// 渐变色预设池，自动随机丰富卡片视觉
const BG_PRESETS = [
  'from-rose-50/40 to-pink-50/40 dark:from-rose-950/20 dark:to-pink-950/20',
  'from-orange-50/40 to-red-50/40 dark:from-orange-950/20 dark:to-red-950/20',
  'from-purple-50/40 to-pink-50/40 dark:from-purple-950/20 dark:to-pink-950/20',
  'from-green-50/40 to-emerald-50/40 dark:from-green-950/20 dark:to-emerald-950/20',
  'from-cyan-50/40 to-blue-50/40 dark:from-cyan-950/20 dark:to-blue-950/20',
  'from-indigo-50/40 to-purple-50/40 dark:from-indigo-950/20 dark:to-purple-950/20',
  'from-amber-50/40 to-orange-50/40 dark:from-amber-950/20 dark:to-orange-950/20',
  'from-sky-50/40 to-blue-50/40 dark:from-sky-950/20 dark:to-blue-950/20',
];

// 解析命令行参数
function parseArgs() {
  const args = process.argv.slice(2);
  let target = '';
  let defaultCategory = '';
  let autoImport = false;
  let outputFile = 'drizzle/scraped_sites.json';
  let sqlFile = 'drizzle/import_scraped.sql';

  for (const arg of args) {
    if (arg === '--import') {
      autoImport = true;
    } else if (arg.startsWith('--category=')) {
      defaultCategory = arg.split('=')[1].replace(/["']/g, '');
    } else if (arg.startsWith('--output=')) {
      outputFile = arg.split('=')[1];
    } else if (arg.startsWith('--sql=')) {
      sqlFile = arg.split('=')[1];
    } else if (!arg.startsWith('--')) {
      target = arg;
    }
  }

  return { target, defaultCategory, autoImport, outputFile, sqlFile };
}

// 获取网页 HTML 内容
async function fetchHtml(target) {
  if (!target) {
    console.error('❌ 错误：请提供目标网址或本地 HTML 文件路径！');
    console.log('示例: node scripts/scrape.js https://i8k.tv/ --import');
    process.exit(1);
  }

  if (fs.existsSync(target)) {
    console.log(`📂 正在读取本地 HTML 文件: ${target}`);
    return { html: fs.readFileSync(target, 'utf8'), baseUrl: 'https://example.com' };
  }

  if (!target.startsWith('http://') && !target.startsWith('https://')) {
    target = 'https://' + target;
  }

  console.log(`🌐 正在请求抓取目标网页: ${target} ...`);
  const headers = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36',
    'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,*/*;q=0.8',
    'Accept-Language': 'zh-CN,zh;q=0.9,en;q=0.8',
  };

  const res = await fetch(target, { headers });
  if (!res.ok) {
    throw new Error(`HTTP 请求失败，状态码: ${res.status} ${res.statusText}`);
  }
  const html = await res.text();
  return { html, baseUrl: target };
}

// 智能判断分类
function inferCategory(text, defaultCategory = '') {
  if (defaultCategory && CATEGORY_MAP[defaultCategory]) {
    return defaultCategory;
  }

  const lower = (text || '').toLowerCase();
  if (/动漫|二次元|番剧|新番|acg|anime|baha|age/.test(lower)) return '动漫动画';
  if (/字幕|subhd|射手|downsub|翻译|srt|ass/.test(lower)) return '字幕资源';
  if (/网盘|夸克|阿里|百度网盘|云盘|迅雷|磁力|bt|种子/.test(lower)) return '网盘资源';
  if (/搜索|聚合|引擎|全网|搜片|茶杯狐/.test(lower)) return '聚合搜索';
  if (/电视剧|剧集|美剧|韩剧|日剧|泰剧|国产剧|9分好剧/.test(lower)) return '电视剧';
  if (/纪录片|documentary/.test(lower)) return '纪录片';
  if (/综艺|娱乐|真人秀|脱口秀/.test(lower)) return '综艺娱乐';
  if (/短剧|短视频|tiktok|快手|微短剧/.test(lower)) return '短剧短视频';
  if (/电影|影院|4k电影|蓝光|高清mp4|片库/.test(lower)) return '电影专区';
  
  return '综合影视';
}

// 提取页面中的网站信息
function extractSites(html, baseUrl, defaultCategory) {
  const $ = cheerio.load(html);
  const sites = [];
  const seenUrls = new Set();
  const seenNames = new Set();

  // 遍历所有可能的卡片或外链
  $('a').each((i, el) => {
    const $a = $(el);
    let href = $a.attr('href') || '';
    
    // 忽略内部锚点、javascript、空链接或后台管理
    if (!href || href.startsWith('#') || href.startsWith('javascript:') || href.startsWith('mailto:') || href.startsWith('/admin') || href.startsWith('/api')) {
      return;
    }

    // 转换为绝对 URL
    try {
      if (href.startsWith('//')) {
        href = 'https:' + href;
      } else if (href.startsWith('/')) {
        href = new URL(href, baseUrl).toString();
      }
    } catch {
      return;
    }

    // 去除来源参数 (如 ?ref=xxx)
    let cleanUrl = href.replace(/[?&]ref=[^&]+/, '').replace(/\?$/, '').replace(/\/$/, '') + '/';

    // 过滤掉同域名内部导航链接 (如 /about, /login 等)
    try {
      const u = new URL(cleanUrl);
      const baseDomain = new URL(baseUrl).hostname.replace(/^www\./, '');
      if (u.hostname.replace(/^www\./, '') === baseDomain && !u.pathname.includes('site')) {
        return;
      }
    } catch {
      return;
    }

    if (seenUrls.has(cleanUrl)) return;

    // 1. 查找名称
    let name = $a.find('h1, h2, h3, h4, h5, h6, [class*="title"], [class*="name"], strong, b').first().text().trim();
    if (!name) {
      name = $a.attr('title') || $a.text().trim();
    }
    // 过滤无意义名称
    name = name.replace(/HOT|⭐|推荐|最新|4K|无广告/g, '').trim();
    if (!name || name.length < 2 || name.length > 50 || seenNames.has(name) || /^(首页|关于|登录|注册|更多|详情|下载)$/.test(name)) {
      return;
    }

    // 2. 查找简介
    let desc = $a.find('p, [class*="desc"], [class*="summary"], [class*="info"], [class*="text-gray"]').first().text().trim();
    if (!desc) {
      desc = $a.attr('aria-label') || `${name} - 优质影视资源导航推荐`;
    }
    desc = desc.replace(/\s+/g, ' ').slice(0, 200);

    // 3. 查找图标 Logo
    let logoUrl = '';
    const $img = $a.find('img').filter((idx, imgEl) => {
      const src = $(imgEl).attr('src') || $(imgEl).attr('data-src') || '';
      return !src.includes('girl') && !src.includes('avatar') && !src.includes('banner');
    }).first();

    if ($img.length) {
      logoUrl = $img.attr('src') || $img.attr('data-src') || '';
      if (logoUrl.includes('url=')) {
        const m = logoUrl.match(/url=([^&]+)/);
        if (m) logoUrl = decodeURIComponent(m[1]);
      }
      if (logoUrl.startsWith('/')) {
        try {
          logoUrl = new URL(logoUrl, baseUrl).toString();
        } catch {}
      }
    }

    if (!logoUrl || logoUrl.includes('placeholder')) {
      try {
        const u = new URL(cleanUrl);
        logoUrl = `${u.origin}/favicon.ico`;
      } catch {
        logoUrl = '';
      }
    }

    // 4. 查找标签
    const tags = [];
    $a.find('[class*="tag"], [class*="badge"], [class*="rounded-full"]').each((_, tagEl) => {
      const t = $(tagEl).text().trim();
      if (t && t.length <= 8 && !['HOT', '⭐ 推荐', '⭐推荐', '推荐', '置顶'].includes(t)) {
        tags.push(t);
      }
    });

    // 5. 判断分类
    // 检查卡片所在父级区域标题
    const parentSectionTitle = $a.closest('section, div[id], div[class*="category"]').find('h1, h2, h3, [class*="category-title"]').first().text();
    const contextText = `${parentSectionTitle} ${name} ${desc} ${tags.join(' ')}`;
    const categoryName = inferCategory(contextText, defaultCategory);

    // 6. 是否热门/推荐
    const isHot = $a.text().includes('HOT') || $a.find('[class*="red"]').length > 0;
    const isRecommended = $a.text().includes('推荐') || $a.text().includes('⭐');

    // 7. 渐变背景
    const bgGradient = BG_PRESETS[sites.length % BG_PRESETS.length];

    seenUrls.add(cleanUrl);
    seenNames.add(name);

    sites.push({
      name,
      url: cleanUrl,
      description: desc,
      logoUrl,
      tags: tags.length > 0 ? tags : ['免费', '高清'],
      rating: 5,
      isHot,
      isRecommended,
      bgGradient,
      categoryName
    });
  });

  return sites;
}

// 生成导入 SQL 文件
function generateSql(sites) {
  const sqlList = [];
  const catSortOrder = {};

  for (const site of sites) {
    const catId = CATEGORY_MAP[site.categoryName] || 1;
    catSortOrder[catId] = (catSortOrder[catId] || 0) + 1;
    const sortOrder = catSortOrder[catId];

    const escape = (s) => (s || '').replace(/'/g, "''");
    const name = escape(site.name);
    const url = escape(site.url);
    const desc = escape(site.description);
    const logo = escape(site.logoUrl);
    const tagsJson = escape(JSON.stringify(site.tags || []));
    const bgGradient = escape(site.bgGradient);
    const isHot = site.isHot ? 1 : 0;
    const isRec = site.isRecommended ? 1 : 0;

    sqlList.push(`
INSERT INTO sites (category_id, name, description, url, logo_url, tags, rating, is_hot, is_recommended, bg_gradient, sort_order)
SELECT ${catId}, '${name}', '${desc}', '${url}', '${logo}', '${tagsJson}', ${site.rating}, ${isHot}, ${isRec}, '${bgGradient}', ${sortOrder}
WHERE NOT EXISTS (SELECT 1 FROM sites WHERE url = '${url}' OR name = '${name}');
    `.trim());
  }

  return sqlList.join('\n');
}

// 主入口函数
async function main() {
  const { target, defaultCategory, autoImport, outputFile, sqlFile } = parseArgs();

  try {
    const { html, baseUrl } = await fetchHtml(target);
    const sites = extractSites(html, baseUrl, defaultCategory);

    if (sites.length === 0) {
      console.warn('⚠️ 未能从该页面自动识别到网站卡片，请检查页面是否需要 JavaScript 渲染或提供具体的 HTML 片段。');
      return;
    }

    console.log(`\n🎉 成功抓取并解析到 ${sites.length} 个站点！`);

    // 分类统计
    const stats = {};
    for (const s of sites) {
      stats[s.categoryName] = (stats[s.categoryName] || 0) + 1;
    }
    console.log('📊 分类统计:');
    console.table(stats);

    // 确保输出目录存在
    const outDir = path.dirname(outputFile);
    if (!fs.existsSync(outDir)) {
      fs.mkdirSync(outDir, { recursive: true });
    }

    // 写入 JSON 文件
    fs.writeFileSync(outputFile, JSON.stringify(sites, null, 2), 'utf8');
    console.log(`✅ 数据已保存至 JSON: ${outputFile}`);

    // 生成并写入 SQL 文件
    const sql = generateSql(sites);
    fs.writeFileSync(sqlFile, sql, 'utf8');
    console.log(`✅ 导入 SQL 文件已生成: ${sqlFile}`);

    // 自动导入到远端 D1 数据库
    if (autoImport) {
      console.log('\n🚀 正在自动执行 SQL 导入至 Cloudflare D1 远端数据库 (i8k-db)...');
      try {
        const output = execSync(`npx wrangler d1 execute i8k-db --remote --file=${sqlFile}`, {
          encoding: 'utf8',
          stdio: 'pipe'
        });
        console.log('✅ 数据库导入完成！');
        console.log(output);
      } catch (err) {
        console.error('❌ 执行 wrangler 导入时出错:', err.message);
        if (err.stdout) console.log(err.stdout);
        if (err.stderr) console.error(err.stderr);
      }
    } else {
      console.log('\n💡 提示：如需一键导入数据库，可添加 --import 参数重新运行，或手动执行：');
      console.log(`   npx wrangler d1 execute i8k-db --remote --file=${sqlFile}`);
    }

  } catch (error) {
    console.error('❌ 抓取过程发生异常:', error.message);
  }
}

main();
