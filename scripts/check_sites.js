const fs = require('fs');
const env = fs.readFileSync('.env', 'utf8');
const acc = env.match(/CLOUDFLARE_ACCOUNT_ID=(.*)/)?.[1]?.trim();
const dbId = env.match(/CLOUDFLARE_D1_DATABASE_ID=(.*)/)?.[1]?.trim();
const token = env.match(/CLOUDFLARE_API_TOKEN=(.*)/)?.[1]?.trim();

async function run() {
  const url = `https://api.cloudflare.com/client/v4/accounts/${acc}/d1/database/${dbId}/query`;
  
  // 1. Check categories
  const catRes = await fetch(url, {
    method: 'POST',
    headers: { Authorization: `Bearer ${token}`, 'Content-Type': 'application/json' },
    body: JSON.stringify({ sql: 'SELECT * FROM categories ORDER BY sort_order ASC', params: [] })
  });
  const catData = await catRes.json();
  console.log('Categories:', catData.result?.[0]?.results);

  // 2. Check sites stats
  const sitesRes = await fetch(url, {
    method: 'POST',
    headers: { Authorization: `Bearer ${token}`, 'Content-Type': 'application/json' },
    body: JSON.stringify({ sql: 'SELECT id, name, name_en, url, logo_url, description, description_en, tags, tags_en, category_id FROM sites', params: [] })
  });
  const sitesData = await sitesRes.json();
  const allSites = sitesData.result?.[0]?.results || [];
  console.log(`Total sites: ${allSites.length}`);
  
  const emptyLogo = allSites.filter(s => !s.logo_url || s.logo_url.trim() === '');
  const nullNameEn = allSites.filter(s => !s.name_en || s.name_en.trim() === '');
  const nullDescEn = allSites.filter(s => !s.description_en || s.description_en.trim() === '');
  
  console.log(`Sites with empty logo_url: ${emptyLogo.length}`);
  console.log(`Sites with missing name_en: ${nullNameEn.length}`);
  console.log(`Sites with missing description_en: ${nullDescEn.length}`);
}

run().catch(console.error);
