const fs = require('fs');
const path = require('path');

const contentPath = 'C:\\Users\\along4090PC\\.gemini\\antigravity-ide\\brain\\6a3a5bef-f7b0-454a-989c-fa10c19a6c39\\.system_generated\\steps\\756\\content.md';
const content = fs.readFileSync(contentPath, 'utf8');

// The HTML structure on i8k.tv has site cards rendered inside the grid.
// Each site card: <a href="https://.../?ref=i8k.tv" target="_blank" ...> ... </a>

const cardRegex = /<a\s+href="([^"]+)"[^>]*>([\s\S]*?)<\/a>/g;

const sites = [];
const seenUrls = new Set();
let match;

while ((match = cardRegex.exec(content)) !== null) {
  const rawUrl = match[1];
  const body = match[2];

  if (!body.includes('</h3>')) continue;
  if (!rawUrl.startsWith('http')) continue;

  const url = rawUrl.replace(/\?ref=i8k\.tv.*$/, '').replace(/\/$/, '') + '/';
  if (seenUrls.has(url)) continue;
  seenUrls.add(url);

  // Name
  const nameMatch = body.match(/<h3[^>]*>([^<]+)<\/h3>/);
  const name = nameMatch ? nameMatch[1].trim() : '';
  if (!name) continue;

  // Description
  const descMatch = body.match(/<p[^>]*>([\s\S]*?)<\/p>/);
  let description = descMatch ? descMatch[1].replace(/&amp;/g, '&').replace(/<[^>]+>/g, '').trim() : '';
  // decode html entities
  description = description.replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&quot;/g, '"');

  // Logo
  const logoMatch = body.match(/<img[^>]*src="([^"]+)"[^>]*>/i);
  let logoUrl = '';
  if (logoMatch) {
    const src = logoMatch[1];
    if (src.includes('url=')) {
      const uMatch = src.match(/url=([^&]+)/);
      if (uMatch) logoUrl = decodeURIComponent(uMatch[1]);
    } else if (!src.includes('/girls/')) {
      logoUrl = src;
    }
  }

  // Find actual logo if first img was girl/decoration
  const allImgs = [...body.matchAll(/<img[^>]*src="([^"]+)"[^>]*alt="([^"]*)"/gi)];
  for (const img of allImgs) {
    if (img[2].toLowerCase().includes('logo') || !img[1].includes('/girls/')) {
      let src = img[1];
      if (src.includes('url=')) {
        const uMatch = src.match(/url=([^&]+)/);
        if (uMatch) src = decodeURIComponent(uMatch[1]);
      }
      logoUrl = src;
      break;
    }
  }

  // Tags
  const tagMatches = [...body.matchAll(/<span[^>]*class="[^"]*(?:bg-blue|rounded-full)[^"]*"[^>]*>([^<]+)<\/span>/g)];
  const tags = tagMatches
    .map(m => m[1].trim())
    .filter(t => t && !['HOT', '⭐ 推荐', '⭐推荐', '经典'].includes(t) && !t.startsWith('⭐'));

  // Hot & Recommended
  const isHot = body.includes('HOT');
  const isRecommended = body.includes('⭐ 推荐') || body.includes('⭐推荐');

  // Rating
  const starCount = (body.match(/⭐/g) || []).length;
  const rating = isRecommended ? Math.max(3, starCount - 1) : Math.max(3, starCount || 4);

  // Gradient
  const gradMatch = match[0].match(/(from-[^\s"]+ to-[^\s"]+(?: dark:from-[^\s"]+ dark:to-[^\s"]+)?)/);
  const bgGradient = gradMatch ? gradMatch[1] : 'from-white to-gray-50 dark:from-gray-900 dark:to-gray-800';

  // Category Guess based on tags & name & desc
  let categoryName = '综合影视';
  const text = (name + ' ' + description + ' ' + tags.join(' ')).toLowerCase();
  
  if (text.includes('动漫') || text.includes('二次元') || text.includes('番剧') || text.includes('新番') || text.includes('acg') || text.includes('anime')) {
    categoryName = '动漫动画';
  } else if (text.includes('字幕') || text.includes('sub') || text.includes('翻译') || text.includes('srt') || text.includes('ass')) {
    categoryName = '字幕资源';
  } else if (text.includes('网盘') || text.includes('夸克') || text.includes('阿里') || text.includes('百度网盘') || text.includes('云盘') || text.includes('迅雷')) {
    categoryName = '网盘资源';
  } else if (text.includes('搜索') || text.includes('聚合') || text.includes('引擎') || text.includes('全网')) {
    categoryName = '聚合搜索';
  } else if (text.includes('电视剧') || text.includes('剧集') || text.includes('美剧') || text.includes('韩剧') || text.includes('日剧') || text.includes('泰剧') || text.includes('国产剧') || text.includes('9分好剧')) {
    categoryName = '电视剧';
  } else if (text.includes('纪录片') || text.includes('documentary')) {
    categoryName = '纪录片';
  } else if (text.includes('综艺') || text.includes('娱乐') || text.includes('真人秀')) {
    categoryName = '综艺娱乐';
  } else if (text.includes('短剧') || text.includes('短视频') || text.includes('tiktok') || text.includes('快手')) {
    categoryName = '短剧短视频';
  } else if (text.includes('电影') || text.includes('影院') || text.includes('院线') || text.includes('4k电影')) {
    categoryName = '电影专区';
  }

  sites.push({
    name,
    url,
    description: description || name,
    logoUrl: logoUrl.startsWith('http') ? logoUrl : (logoUrl.startsWith('/') ? `https://i8k.tv${logoUrl}` : ''),
    tags,
    rating: Math.min(5, Math.max(3, rating)),
    isHot,
    isRecommended,
    bgGradient,
    categoryName
  });
}

console.log('Successfully extracted', sites.length, 'sites from i8k.tv!');

// Categorization summary
const catSummary = {};
for (const s of sites) {
  catSummary[s.categoryName] = (catSummary[s.categoryName] || 0) + 1;
}
console.log('Category breakdown:', catSummary);

fs.writeFileSync('drizzle/extracted_i8k_sites.json', JSON.stringify(sites, null, 2));
