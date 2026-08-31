const fs = require('fs');

const env = fs.readFileSync('.env', 'utf8');
const acc = env.match(/CLOUDFLARE_ACCOUNT_ID=(.*)/)?.[1]?.trim();
const dbId = env.match(/CLOUDFLARE_D1_DATABASE_ID=(.*)/)?.[1]?.trim();
const token = env.match(/CLOUDFLARE_API_TOKEN=(.*)/)?.[1]?.trim();

const sites = JSON.parse(fs.readFileSync('scripts/d1_sites_dump.json', 'utf8'));

const TAG_MAP = {
  '最新': 'Latest',
  '推荐': 'Recommended',
  '4K': '4K',
  '资源丰富': 'Rich Resources',
  '高清': 'HD',
  '免费': 'Free',
  '动漫': 'Anime',
  '综合': 'General',
  '支持下载': 'Download',
  '无广告': 'Ad-Free',
  '更新快': 'Fast Updates',
  '新番': 'Simulcast',
  '聚合搜索': 'Search Aggregator',
  '全网': 'All-in-One',
  '字幕': 'Subtitles',
  '中英文': 'Bilingual',
  '9分好剧': 'Top Rated',
  '下载': 'Download',
  '只支持手机端': 'Mobile Only',
  '百度盘': 'Baidu Drive',
  'Disney': 'Disney+',
  '海外资源': 'Overseas',
  'Netflix': 'Netflix',
  '弹幕': 'Danmaku',
  '票房排行': 'Box Office',
  '在线秒播': 'Instant Play',
  '在线播放': 'Streaming',
  '日剧': 'Japanese Drama',
  '海外剧': 'Overseas Drama',
  '磁力': 'Magnet',
  '公众号关注': 'WeChat Official',
  '夸克盘': 'Quark Drive',
  '阿里盘': 'Aliyun Drive',
  '体育': 'Sports',
  '直播': 'Live Stream',
  '央视': 'CCTV',
  '台词搜索': 'Script Search',
  '美国': 'USA',
  '影评': 'Film Review',
  '速度快': 'High Speed',
  'NEW': 'NEW',
  '日本': 'Japan',
  '资讯': 'News',
  '会员制': 'Membership',
  '纪录片': 'Documentary',
  '付费注册': 'Paid Registration',
  '少儿': 'Kids',
  '动画': 'Animation',
  '论坛': 'Forum',
  '会员': 'Member',
  '网盘资源': 'Cloud Resources',
  '阿里云盘': 'Aliyun Drive',
  '天翼盘': 'Cloud 189',
  '韩国': 'Korea',
  '英文': 'English',
  '韩剧': 'K-Drama',
  '评分': 'Rating',
  '片单': 'Watchlist',
  '不可注册': 'Invite Only',
  '关注公众号': 'WeChat Follow',
  '短剧': 'Short Drama',
  '实名制': 'Verified Identity',
  '微博': 'Weibo',
  '泰国': 'Thailand',
  '封禁中': 'Blocked',
  '韩综': 'Korean Variety',
  'K-POP': 'K-POP',
  '只支持手机观看': 'Mobile Only',
  '电影推荐': 'Movie Picks'
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

// Complete manual translations for all sites
const FULL_SITE_CATALOG = {
  1: { nameEn: "Fandazi Cinema", descEn: "Latest popular movies, TV series, anime, variety shows, and sports for free." },
  2: { nameEn: "DDYS Streaming", descEn: "Minimalist HD streaming site. Ad-free, dedicated to high-bitrate viewing experience." },
  3: { nameEn: "SeedHub", descEn: "Movie & Anime sharing platform with rich resources and rapid updates." },
  4: { nameEn: "Boju Cinema", descEn: "Latest online movies and HD TV series streaming for free." },
  5: { nameEn: "iYF TV", descEn: "Massive HD videos for free streaming, top choice for overseas viewers." },
  6: { nameEn: "Feikuai TV", descEn: "Free HD movie and TV playback with cloud drive downloads." },
  7: { nameEn: "Mr. Movie (DYXS)", descEn: "HD movies and hit TV dramas streaming with high speed." },
  8: { nameEn: "Sakura Anime", descEn: "Specialized anime portal offering the latest and most comprehensive anime series." },
  9: { nameEn: "AGE Anime", descEn: "AGE Anime specializes in curating massive high quality anime resources." },
  10: { nameEn: "DiliDili", descEn: "ACG anime streaming site providing the newest broadcast anime series." },
  11: { nameEn: "Cupfox", descEn: "All-in-one streaming aggregator search engine across the web." },
  12: { nameEn: "Zimuku Subtitles", descEn: "Subtitle download platform with massive bilingual movie & TV subtitles." },
  13: { nameEn: "Top Rated TV Series", descEn: "Curated top-rated American, British, Korean, and Chinese dramas with guides & HD streams." },
  14: { nameEn: "Horror Cinema", descEn: "Dedicated horror and thriller movie streaming and download repository." },
  15: { nameEn: "NetCat (Wangfei Mao)", descEn: "Free HD streaming and cloud drive resource downloads." },
  16: { nameEn: "Magnet Bear (CiLiXiong)", descEn: "1080P/4K magnet link downloads for top-rated Douban films." },
  17: { nameEn: "Koko Cinema", descEn: "Free online streaming for latest Netflix dramas and Korean movies." },
  18: { nameEn: "iKanBot", descEn: "Intelligent video navigation and multimedia search robot." },
  19: { nameEn: "Shura Cinema (XLYS)", descEn: "Free HD movies, dramas, Xunlei and magnet download links." },
  20: { nameEn: "Gaze Cinema", descEn: "Clean and smooth free online movie and TV drama playback." },
  21: { nameEn: "JuYeYe", descEn: "Mobile-optimized video portal for quick streaming." },
  22: { nameEn: "Brothers Pan", descEn: "Baidu Netdisk search engine for video resources without social lock." },
  23: { nameEn: "Disney+", descEn: "Official Disney streaming service featuring Marvel, Star Wars, Pixar and Disney classics." },
  24: { nameEn: "Netflix", descEn: "Leading global streaming entertainment service with award-winning original shows and movies." },
  25: { nameEn: "Bilibili", descEn: "China's leading video platform featuring anime, original creators, and live danmaku." },
  26: { nameEn: "Box Office Mojo", descEn: "Comprehensive global box office tracking, rankings, and film revenue analysis." },
  27: { nameEn: "TrackCat (ZhuiYingMao)", descEn: "Streaming aggregator with rapid playback and extensive catalog." },
  28: { nameEn: "FreeOK", descEn: "Free Blu-ray streaming for 2025 TV dramas, movies, anime, and tutorials." },
  29: { nameEn: "XiFan Anime", descEn: "Free high-definition anime streaming and sharing community." },
  30: { nameEn: "FanXinZhui", descEn: "Premier portal dedicated to Japanese drama subtitling and updates." },
  31: { nameEn: "YinFans", descEn: "Audiophile-grade 4K, UHD, and Blu-ray lossless movie downloads." },
  32: { nameEn: "AliPanSou", descEn: "Fast Aliyun and Quark cloud drive resource search without social paywalls." },
  33: { nameEn: "AiPanSo", descEn: "Quark cloud drive video and file search engine." },
  34: { nameEn: "RePanSou", descEn: "Popular multi-cloud resource search covering Baidu, Quark, and Aliyun." },
  35: { nameEn: "Zhibo8 (Live8)", descEn: "Leading Chinese sports streaming portal for football, basketball, and esports." },
  36: { nameEn: "CCTV Live", descEn: "China Central Television official live streaming and on-demand programs." },
  37: { nameEn: "ZhaoTaiCi (Find Quotes)", descEn: "Search movie and TV titles instantly by dialogue quotes." },
  38: { nameEn: "33 Lines Search", descEn: "Find movie scenes and clips by entering famous lines and quotes." },
  39: { nameEn: "Rotten Tomatoes", descEn: "World's most trusted measurement of quality for movies and TV shows." },
  40: { nameEn: "SubHD Subtitles", descEn: "Major high-quality Chinese and English subtitle sharing platform." },
  41: { nameEn: "SubCat Subtitles", descEn: "Bilingual movie and drama subtitle search and download directory." },
  42: { nameEn: "A4k Subtitles", descEn: "Professional 4K movie subtitle download forum and resource base." },
  43: { nameEn: "Bilingual Movie Subtitles", descEn: "Curated dual-language subtitle repository for English learning." },
  44: { nameEn: "Douban Movie", descEn: "China's leading film database, user ratings, and community reviews." },
  45: { nameEn: "IMDb", descEn: "The world's most popular and authoritative source for movie, TV, and celebrity content." },
  46: { nameEn: "Letterboxd", descEn: "Social network for film lovers to track, review, and discover films." },
  47: { nameEn: "Trakt.tv", descEn: "Track what you watch across devices with recommendations and community lists." },
  48: { nameEn: "Bangumi (AnimeDB)", descEn: "Comprehensive ACG database for anime, games, and light novels." },
  49: { nameEn: "MyAnimeList", descEn: "The world's active online anime and manga community and database." },
  50: { nameEn: "AniList", descEn: "Track, discover, and share anime and manga with customized lists." },
  51: { nameEn: "JustWatch", descEn: "The streaming guide to find where to watch movies and TV shows legally." },
  52: { nameEn: "Subscene", descEn: "International subtitle community providing subtitles in dozens of languages." },
  53: { nameEn: "DownSub", descEn: "Online subtitle downloader supporting YouTube, Viki, Viu, and Dailymotion." },
  54: { nameEn: "OpenSubtitles", descEn: "Massive multi-language subtitle download archive for media players." },
  55: { nameEn: "YIFY Subtitles", descEn: "Fast subtitle downloads for popular releases in multiple languages." },
  56: { nameEn: "Assrt Subtitle Archive", descEn: "Long-standing Chinese movie and television subtitle shooter archive." },
  57: { nameEn: "Shooter.cn (FakeShooter)", descEn: "Open-source subtitle search tool inspired by original Shooter." },
  58: { nameEn: "Baidu Netdisk", descEn: "Popular cloud storage platform widely used for sharing video collections." },
  59: { nameEn: "Aliyun Drive", descEn: "High-speed personal cloud storage with lossless video preview support." },
  60: { nameEn: "Quark Netdisk", descEn: "High-speed cloud drive with built-in AI video player and subtitle tool." },
  61: { nameEn: "PikPak Cloud", descEn: "Private cloud drive with instant offline download and cloud playback." },
  62: { nameEn: "115 Cloud", descEn: "Veteran cloud drive platform with large storage space and offline downloads." },
  63: { nameEn: "Kuaichepan", descEn: "Multi-disk aggregation search engine for movie and drama files." },
  64: { nameEn: "PanSearch", descEn: "Clean cloud drive search engine for Aliyun, Baidu, and Quark disks." },
  65: { nameEn: "UP Yunpan Search", descEn: "Dedicated Aliyun Drive search portal for HD movies and anime." },
  66: { nameEn: "YunPan Community", descEn: "Community forum sharing verified 4K movies and TV series netdisk links." },
  67: { nameEn: "YouJu Search (JujuSo)", descEn: "聚合云盘搜索引擎，支持多盘种聚合检索。" },
  68: { nameEn: "TianYi Search (TianYiSo)", descEn: "Cloud 189 and Baidu Netdisk resource aggregator." },
  69: { nameEn: "FastPan Search", descEn: "Fast and reliable search tool for cloud video resources." },
  70: { nameEn: "XiaoXiong Pan Search", descEn: "Quark and Aliyun drive movie and drama finder." },
  71: { nameEn: "Xunlei Cloud", descEn: "Cloud download and acceleration platform for multimedia." },
  72: { nameEn: "Tencent Video", descEn: "Leading Chinese streaming video platform featuring blockbuster dramas." },
  73: { nameEn: "iQIYI", descEn: "Leading online video platform in China offering movies, dramas, and anime." },
  74: { nameEn: "Youku", descEn: "Major video streaming platform in China with diverse drama series." },
  75: { nameEn: "Mango TV", descEn: "Premier video platform for Chinese variety shows and idol dramas." },
  76: { nameEn: "WeTV", descEn: "Tencent Video's international platform offering Asian dramas with English subtitles." },
  77: { nameEn: "iQIYI International", descEn: "Global streaming platform for popular Asian TV series and movies." },
  78: { nameEn: "YouTube", descEn: "The world's largest video sharing platform for movies, creators, and trailers." },
  79: { nameEn: "Vimeo", descEn: "High-quality video platform for independent filmmakers and creative artists." },
  80: { nameEn: "DailyMotion", descEn: "Global video sharing website with international news, sports, and media." },
  81: { nameEn: "Twitch", descEn: "The world's leading live streaming platform for gamers, creators, and IRL shows." },
  82: { nameEn: "NHK World Japan", descEn: "Official international broadcasting service of Japan with documentaries." },
  83: { nameEn: "BBC iPlayer", descEn: "British public broadcast streaming service with top-tier documentaries and dramas." },
  84: { nameEn: "National Geographic", descEn: "World leader in geography, cartography and exploration documentaries." },
  85: { nameEn: "Discovery+", descEn: "Real life entertainment streaming real-world documentaries and series." },
  86: { nameEn: "History Channel", descEn: "Documentary channel dedicated to historical events and explorations." },
  87: { nameEn: "Curiosity Stream", descEn: "Premier documentary and non-fiction streaming service." },
  88: { nameEn: "Tubi TV", descEn: "Free ad-supported streaming television service with thousands of movies." },
  89: { nameEn: "Pluto TV", descEn: "Free streaming television service offering live channels and on-demand movies." },
  90: { nameEn: "Plex Free Movies", descEn: "Free streaming movies and TV shows from major entertainment studios." },
  91: { nameEn: "Roku Channel", descEn: "Free streaming destination for live news, TV shows, and hit movies." },
  92: { nameEn: "Vudu Free", descEn: "Digital video store offering thousands of free movies with limited ads." },
  93: { nameEn: "Crackle", descEn: "Free ad-supported video entertainment network." },
  94: { nameEn: "Popcornflix", descEn: "Free streaming platform featuring classic movies, comedies, and cult films." },
  95: { nameEn: "Kanopy", descEn: "On-demand streaming video platform for public libraries and universities." },
  96: { nameEn: "Hoopla", descEn: "Digital media service offering free streaming movies with library cards." },
  97: { nameEn: "Internet Archive Movies", descEn: "Digital library offering free access to public domain films and archives." },
  98: { nameEn: "Crunchyroll", descEn: "The world's largest anime streaming library with simultaneous broadcasts." },
  99: { nameEn: "Funimation", descEn: "Anime streaming service known for English dubs and simulcasts." },
  100: { nameEn: "HIDIVE", descEn: "Anime streaming platform offering exclusive simulcasts, dubs, and uncensored cuts." },
  101: { nameEn: "AnimeLab", descEn: "Anime streaming portal for anime fans across the globe." },
  102: { nameEn: "9Anime (AniWave)", descEn: "Popular anime streaming directory with high definition playback." },
  103: { nameEn: "Gogoanime", descEn: "Fast anime streaming index with subbed and dubbed anime series." },
  104: { nameEn: "Zoro.to (AniWatch)", descEn: "Free anime streaming platform with ultra HD resolutions." },
  105: { nameEn: "Kissanime", descEn: "Veteran anime portal with extensive retro and classic anime series." },
  106: { nameEn: "DuanJuJu Shorts", descEn: "Trending mini-drama series and short videos streaming directory." },
  107: { nameEn: "Kuaishou Shorts", descEn: "Short video and mini-drama portal with instant clips." },
  108: { nameEn: "Douyin Short Dramas", descEn: "High quality short episodic drama series and entertainment clips." },
  109: { nameEn: "ReelShort", descEn: "Next-generation HD streaming platform for mini-dramas and viral romance series." },
  110: { nameEn: "ShortMax", descEn: "Global short drama streaming platform with localized subtitles." },
  111: { nameEn: "DramaBox", descEn: "Fast-paced mini drama series and romantic short stories." },
  112: { nameEn: "GoodShort", descEn: "Original short drama series app with worldwide storytelling." },
  113: { nameEn: "Heat Cinema (dao-fire.com)", descEn: "Curated classic cinema and director retrospective collection." },
  114: { nameEn: "ShenYing Subtitles (sysub.com)", descEn: "Quality foreign drama translation and subtitle community." },
  115: { nameEn: "Free Anime Net (qkan8.com)", descEn: "Free online streaming for anime series and animated features." },
  116: { nameEn: "BestPipe Movies (bestpipe.cn)", descEn: "HD film streaming directory and movie recommendations." },
  117: { nameEn: "TrainBlocked (tdgo.shop)", descEn: "Fast video aggregator and cloud streaming index." },
  118: { nameEn: "Kumi Anime (kumi.cn)", descEn: "Kids and teen animation series streaming portal." },
  119: { nameEn: "SweetPotato Anime (fanshudm.com)", descEn: "Anime streaming website with rapid updates and high bitrate." },
  120: { nameEn: "555 Cinema", descEn: "Comprehensive video portal for free movie and drama streaming." }
};

async function updateD1() {
  const url = `https://api.cloudflare.com/client/v4/accounts/${acc}/d1/database/${dbId}/query`;
  console.log(`Starting update of all ${sites.length} sites with complete English catalog...`);

  let successCount = 0;
  for (let i = 0; i < sites.length; i += 10) {
    const chunk = sites.slice(i, i + 10);
    const statements = chunk.map(site => {
      const info = FULL_SITE_CATALOG[site.id] || {
        nameEn: site.name,
        descEn: site.description || "Free movie and video resource portal."
      };

      const tagsEn = translateTags(site.tags);
      const escape = (str) => (str || '').replace(/'/g, "''");
      
      let logo = site.logo_url;
      if (!logo || logo.includes('placeholder') || logo.trim() === '') {
        try {
          const u = new URL(site.url.startsWith('http') ? site.url : `https://${site.url}`);
          logo = `https://${u.hostname}/favicon.ico`;
        } catch {
          logo = '';
        }
      }

      return `UPDATE sites SET name_en = '${escape(info.nameEn)}', description_en = '${escape(info.descEn)}', tags_en = '${escape(tagsEn)}', logo_url = '${escape(logo)}' WHERE id = ${site.id};`;
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

  console.log(`Finished! Successfully updated ${successCount} sites with full English translations.`);
}

updateD1().catch(console.error);
