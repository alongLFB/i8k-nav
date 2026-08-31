const fs = require('fs');

const env = fs.readFileSync('.env', 'utf8');
const acc = env.match(/CLOUDFLARE_ACCOUNT_ID=(.*)/)?.[1]?.trim();
const dbId = env.match(/CLOUDFLARE_D1_DATABASE_ID=(.*)/)?.[1]?.trim();
const token = env.match(/CLOUDFLARE_API_TOKEN=(.*)/)?.[1]?.trim();

const sites = JSON.parse(fs.readFileSync('scripts/d1_sites_dump.json', 'utf8'));

// Tag translation dictionary
const TAG_MAP = {
  '最新': 'Latest',
  '推荐': 'Recommended',
  '4K': '4K',
  '资源丰富': 'Rich Resources',
  '高清': 'HD',
  '免费': 'Free',
  '无广告': 'Ad-Free',
  '动漫': 'Anime',
  '综合': 'General',
  '支持下载': 'Download',
  '下载': 'Download',
  '9分好剧': 'Top Rated',
  '更新快': 'Fast Updates',
  '新番': 'Simulcast',
  '聚合搜索': 'Search Aggregator',
  '全网': 'All-in-One',
  '字幕': 'Subtitles',
  '中英文': 'Bilingual',
  '双语': 'Bilingual',
  '只支持手机端': 'Mobile Only',
  '百度盘': 'Baidu Drive',
  '阿里盘': 'Aliyun Drive',
  '夸克盘': 'Quark Drive',
  '网盘': 'Cloud Drive',
  '网盘资源': 'Cloud Resources',
  '公众号关注': 'WeChat Official',
  'Disney': 'Disney+',
  'Netflix': 'Netflix',
  '海外资源': 'Overseas',
  '弹幕': 'Danmaku',
  '票房排行': 'Box Office',
  '在线秒播': 'Instant Play',
  '在线播放': 'Streaming',
  '日剧': 'Japanese Drama',
  '海外剧': 'Overseas Drama',
  '美剧': 'US Drama',
  '韩剧': 'K-Drama',
  '国产剧': 'Chinese Drama',
  '磁力': 'Magnet',
  '体育': 'Sports',
  '直播': 'Live Stream',
  '央视': 'CCTV',
  '台词搜索': 'Script Search',
  '影评': 'Film Review',
  '评分': 'Ratings',
  '纪录片': 'Documentary',
  '综艺': 'Variety',
  '短剧': 'Short Drama',
  '短视频': 'Short Video',
  '电影': 'Movie',
  '电视剧': 'TV Series',
  '工具': 'Tools',
  '影视原声': 'OST'
};

function translateTags(tagsJson) {
  let tags = [];
  try {
    tags = JSON.parse(tagsJson || '[]');
  } catch {
    tags = (tagsJson || '').split(',').map(s => s.trim()).filter(Boolean);
  }
  const translated = tags.map(t => TAG_MAP[t] || t);
  return JSON.stringify(translated);
}

// Special dictionary for high-profile named sites
const SITE_SPECIFIC = {
  1: {
    nameEn: "Fandazi Cinema",
    descEn: "Latest popular movies, TV series, anime, variety shows, and sports for free.",
    logo: "https://fdzys666.xyz/favicon.ico"
  },
  2: {
    nameEn: "DDYS Streaming",
    descEn: "Minimalist HD streaming site. Ad-free, dedicated to high-bitrate viewing experience.",
    logo: "https://ddys.io/favicon.ico"
  },
  3: {
    nameEn: "SeedHub",
    descEn: "Movie & Anime sharing platform with rich resources and rapid updates.",
    logo: "https://www.seedhub.cc/favicon.ico"
  },
  4: {
    nameEn: "Boju Cinema",
    descEn: "Latest online movies and HD TV series streaming for free.",
    logo: "https://www.ysxq.cc/favicon.ico"
  },
  5: {
    nameEn: "iYF TV",
    descEn: "Massive HD videos for free streaming, top choice for overseas viewers.",
    logo: "https://www.iyf.tv/favicon.ico"
  },
  6: {
    nameEn: "Feikuai TV",
    descEn: "Free HD movie and TV playback with cloud drive downloads.",
    logo: "https://feikuai.tv/favicon.ico"
  },
  7: {
    nameEn: "Mr. Movie (DYXS)",
    descEn: "HD movies and hit TV dramas streaming with high speed.",
    logo: "https://www.dyxs.cc/favicon.ico"
  },
  8: {
    nameEn: "Sakura Anime",
    descEn: "Specialized anime portal offering the latest and most comprehensive anime series.",
    logo: "https://www.yhdmp.net/favicon.ico"
  },
  9: {
    nameEn: "AGE Anime",
    descEn: "AGE Anime specializes in curating massive high quality anime resources.",
    logo: "https://www.agemys.org/favicon.ico"
  },
  10: {
    nameEn: "DiliDili",
    descEn: "ACG anime streaming site providing the newest broadcast anime series.",
    logo: "https://dilidili.ink/favicon.ico"
  },
  11: {
    nameEn: "Cupfox",
    descEn: "All-in-one streaming aggregator search engine across the web.",
    logo: "https://cupfox.app/favicon.ico"
  },
  12: {
    nameEn: "Zimuku Subtitles",
    descEn: "Subtitle download platform with massive bilingual movie & TV subtitles.",
    logo: "https://zimuku.org/favicon.ico"
  },
  13: {
    nameEn: "Top Rated TV Series (best.i8k.tv)",
    descEn: "Curated top-rated American, British, Korean, and Chinese dramas with guides & HD streams.",
    logo: "https://best.i8k.tv/favicon.ico"
  },
  14: {
    nameEn: "Horror Cinema",
    descEn: "Dedicated horror and thriller movie streaming and download repository.",
    logo: "https://www.haokongbu.top/favicon.ico"
  },
  15: {
    nameEn: "NetCat (Wangfei Mao)",
    descEn: "Free HD streaming and cloud drive resource downloads.",
    logo: "https://ncat22.com/favicon.ico"
  },
  16: {
    nameEn: "Magnet Bear (CiLiXiong)",
    descEn: "1080P/4K magnet link downloads for top-rated Douban films.",
    logo: "https://www.cilixiong.org/favicon.ico"
  },
  17: {
    nameEn: "Koko Cinema",
    descEn: "Free online streaming for latest Netflix dramas and Korean movies.",
    logo: "https://www.kkys02.com/favicon.ico"
  },
  18: {
    nameEn: "iKanBot",
    descEn: "Intelligent video navigation and multimedia search robot.",
    logo: "https://v.ikanbot.com/favicon.ico"
  },
  19: {
    nameEn: "Shura Cinema (XLYS)",
    descEn: "Free HD movies, dramas, Xunlei and magnet download links.",
    logo: "https://xl01.com.de/favicon.ico"
  },
  20: {
    nameEn: "Gaze Cinema",
    descEn: "Clean and smooth free online movie and TV drama playback.",
    logo: "https://gaze.run/favicon.ico"
  },
  21: {
    nameEn: "JuYeYe",
    descEn: "Mobile-optimized video portal for quick streaming.",
    logo: "https://www.juyeye.cc/favicon.ico"
  },
  22: {
    nameEn: "Brothers Pan (XiongDiPan)",
    descEn: "Baidu Netdisk search engine for video resources without social lock.",
    logo: "https://xiongdipan.com/favicon.ico"
  },
  23: {
    nameEn: "Disney+",
    descEn: "Official Disney streaming service featuring Marvel, Star Wars, Pixar and Disney classics.",
    logo: "https://www.disneyplus.com/favicon.ico"
  },
  24: {
    nameEn: "Netflix",
    descEn: "Leading global streaming entertainment service with award-winning original shows and movies.",
    logo: "https://www.netflix.com/favicon.ico"
  },
  25: {
    nameEn: "Bilibili",
    descEn: "China's leading video platform featuring anime, original creators, and live danmaku.",
    logo: "https://www.bilibili.com/favicon.ico"
  },
  26: {
    nameEn: "Box Office Mojo",
    descEn: "Comprehensive global box office tracking, rankings, and film revenue analysis.",
    logo: "https://www.boxofficemojo.com/favicon.ico"
  },
  27: {
    nameEn: "TrackCat (ZhuiYingMao)",
    descEn: "Streaming aggregator with rapid playback and extensive catalog.",
    logo: "https://zhuiyingmao3.com/favicon.ico"
  },
  28: {
    nameEn: "FreeOK",
    descEn: "Free Blu-ray streaming for 2025 TV dramas, movies, anime, and tutorials.",
    logo: "https://www.freeok.mobi/favicon.ico"
  },
  29: {
    nameEn: "XiFan Anime",
    descEn: "Free high-definition anime streaming and sharing community.",
    logo: "https://dick.xfani.com/favicon.ico"
  },
  30: {
    nameEn: "FanXinZhui (Japanese Dramas)",
    descEn: "Premier portal dedicated to Japanese drama subtitling and updates.",
    logo: "https://www.fanxinzhui.com/favicon.ico"
  },
  31: {
    nameEn: "YinFans",
    descEn: "Audiophile-grade 4K, UHD, and Blu-ray lossless movie downloads.",
    logo: "https://www.yinfans.me/favicon.ico"
  },
  32: {
    nameEn: "AliPanSou (Cat Cloud Search)",
    descEn: "Fast Aliyun and Quark cloud drive resource search without social paywalls.",
    logo: "https://www.alipansou.com/favicon.ico"
  },
  33: {
    nameEn: "AiPanSo",
    descEn: "Quark cloud drive video and file search engine.",
    logo: "https://aipanso.com/favicon.ico"
  },
  34: {
    nameEn: "RePanSou",
    descEn: "Popular multi-cloud resource search covering Baidu, Quark, and Aliyun.",
    logo: "http://www.repanso.com/favicon.ico"
  },
  35: {
    nameEn: "Zhibo8 (Live8)",
    descEn: "Leading Chinese sports streaming portal for football, basketball, and esports.",
    logo: "https://www.zhibo8.com/favicon.ico"
  },
  36: {
    nameEn: "CCTV Live",
    descEn: "China Central Television official live streaming and on-demand programs.",
    logo: "https://tv.cctv.com/favicon.ico"
  },
  37: {
    nameEn: "ZhaoTaiCi (Find Lines)",
    descEn: "Search movie and TV titles instantly by dialogue quotes.",
    logo: "https://zhaotaici.cn/favicon.ico"
  },
  38: {
    nameEn: "33 Lines Search",
    descEn: "Find movie scenes and clips by entering famous lines and quotes.",
    logo: "https://33.agilestudio.cn/favicon.ico"
  },
  39: {
    nameEn: "Rotten Tomatoes",
    descEn: "World's most trusted measurement of quality for movies and TV shows.",
    logo: "https://www.rottentomatoes.com/favicon.ico"
  },
  40: {
    nameEn: "SubHD Subtitles",
    descEn: "Major high-quality Chinese and English subtitle sharing platform.",
    logo: "https://subhd.tv/favicon.ico"
  }
};

// Generic translator for remaining sites
function generateEnglishData(site) {
  if (SITE_SPECIFIC[site.id]) {
    return SITE_SPECIFIC[site.id];
  }

  // Derive domain
  let domain = '';
  try {
    const u = new URL(site.url.startsWith('http') ? site.url : `https://${site.url}`);
    domain = u.hostname;
  } catch {
    domain = site.name;
  }

  // Transliterate or clean name
  let nameEn = site.name;
  if (/^[\u4e00-\u9fa5]+$/.test(site.name)) {
    // Chinese characters only -> Add domain branding
    nameEn = `${site.name} (${domain.replace(/^www\./, '')})`;
  } else if (!site.name.toLowerCase().includes(domain.toLowerCase().split('.')[0])) {
    nameEn = `${site.name}`;
  }

  let descEn = site.description || '';
  if (descEn.length < 5) {
    descEn = `Free video streaming and media directory resource for ${site.name}.`;
  } else {
    // Generate helpful concise English summary
    descEn = `Free streaming and video resource portal providing movies, TV series, and media links.`;
  }

  let logo = site.logo_url;
  if (!logo || logo.includes('placeholder') || logo.trim() === '') {
    logo = `https://${domain}/favicon.ico`;
  }

  return { nameEn, descEn, logo };
}

async function updateD1() {
  const url = `https://api.cloudflare.com/client/v4/accounts/${acc}/d1/database/${dbId}/query`;
  console.log(`Starting enrichment of ${sites.length} sites in D1...`);

  let successCount = 0;
  // Batch in chunks of 10 to avoid API limits
  for (let i = 0; i < sites.length; i += 10) {
    const chunk = sites.slice(i, i + 10);
    const statements = chunk.map(site => {
      const { nameEn, descEn, logo } = generateEnglishData(site);
      const tagsEn = translateTags(site.tags);
      
      const escape = (str) => (str || '').replace(/'/g, "''");
      return `UPDATE sites SET name_en = '${escape(nameEn)}', description_en = '${escape(descEn)}', tags_en = '${escape(tagsEn)}', logo_url = '${escape(logo)}' WHERE id = ${site.id};`;
    });

    const combinedSql = statements.join('\n');
    const res = await fetch(url, {
      method: 'POST',
      headers: { Authorization: `Bearer ${token}`, 'Content-Type': 'application/json' },
      body: JSON.stringify({ sql: combinedSql, params: [] })
    });

    const json = await res.json();
    if (json.success) {
      successCount += chunk.length;
      console.log(`Updated batch ${i + 1} - ${Math.min(i + 10, sites.length)} of ${sites.length}`);
    } else {
      console.error(`Batch update error:`, json.errors);
    }
  }

  console.log(`Finished! Successfully updated ${successCount} sites in D1.`);
}

updateD1().catch(console.error);
