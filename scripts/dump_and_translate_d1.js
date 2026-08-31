const fs = require('fs');
const env = fs.readFileSync('.env', 'utf8');
const acc = env.match(/CLOUDFLARE_ACCOUNT_ID=(.*)/)?.[1]?.trim();
const dbId = env.match(/CLOUDFLARE_D1_DATABASE_ID=(.*)/)?.[1]?.trim();
const token = env.match(/CLOUDFLARE_API_TOKEN=(.*)/)?.[1]?.trim();

async function run() {
  const url = `https://api.cloudflare.com/client/v4/accounts/${acc}/d1/database/${dbId}/query`;
  const sitesRes = await fetch(url, {
    method: 'POST',
    headers: { Authorization: `Bearer ${token}`, 'Content-Type': 'application/json' },
    body: JSON.stringify({ sql: 'SELECT id, name, category_id, url, logo_url, description, tags FROM sites ORDER BY id ASC', params: [] })
  });
  const sitesData = await sitesRes.json();
  const allSites = sitesData.result?.[0]?.results || [];
  console.log(`Fetched ${allSites.length} sites from D1.`);
  fs.writeFileSync('scripts/d1_sites_dump.json', JSON.stringify(allSites, null, 2));
  console.log('Saved to scripts/d1_sites_dump.json');
}

run();
