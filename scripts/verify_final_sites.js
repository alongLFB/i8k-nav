const fs = require('fs');
const env = fs.readFileSync('.env', 'utf8');
const acc = env.match(/CLOUDFLARE_ACCOUNT_ID=(.*)/)?.[1]?.trim();
const dbId = env.match(/CLOUDFLARE_D1_DATABASE_ID=(.*)/)?.[1]?.trim();
const token = env.match(/CLOUDFLARE_API_TOKEN=(.*)/)?.[1]?.trim();

async function run() {
  const endpoint = `https://api.cloudflare.com/client/v4/accounts/${acc}/d1/database/${dbId}/query`;

  async function queryD1(sql, params = []) {
    const res = await fetch(endpoint, {
      method: 'POST',
      headers: { Authorization: `Bearer ${token}`, 'Content-Type': 'application/json' },
      body: JSON.stringify({ sql, params })
    });
    return res.json();
  }

  // Check if Netflix is present
  const netflixCheck = await queryD1("SELECT id FROM sites WHERE name LIKE '%Netflix%' OR name LIKE '%奈飞%'");
  if (netflixCheck.result?.[0]?.results?.length === 0) {
    console.log('Restoring Netflix (official URL)...');
    await queryD1(
      `INSERT INTO sites (name, name_en, url, logo_url, description, description_en, tags, tags_en, category_id, sort_order) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
      [
        '奈飞Netflix',
        'Netflix',
        'https://www.netflix.com/',
        'https://assets.nflxext.com/us/ffe/siteui/common/icons/nficon2016.ico',
        '全球领先的流媒体娱乐平台，海量高清自制电影、剧集、纪录片与动漫。',
        'Global leading streaming entertainment service with award-winning original movies, TV shows, and documentaries.',
        '全球流媒体,Netflix自制,高清无广告',
        'Global Streaming,Netflix Originals,HD No Ads',
        6,
        1
      ]
    );
    console.log('✅ Netflix restored successfully!');
  }

  // Get category breakdown
  const statsRes = await queryD1(`
    SELECT c.title, COUNT(s.id) as site_count 
    FROM categories c 
    LEFT JOIN sites s ON c.id = s.category_id 
    GROUP BY c.id 
    ORDER BY c.sort_order ASC
  `);
  console.log('\n=== Live Category Breakdown ===');
  for (const row of statsRes.result?.[0]?.results || []) {
    console.log(`- ${row.title}: ${row.site_count} sites`);
  }

  const totalRes = await queryD1('SELECT COUNT(*) as total FROM sites');
  console.log(`\nTotal verified live sites in Cloudflare D1: ${totalRes.result?.[0]?.results?.[0]?.total}`);
}

run().catch(console.error);
