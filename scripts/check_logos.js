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
    body: JSON.stringify({ sql: 'SELECT id, name, url, logo_url FROM sites', params: [] })
  });
  const sitesData = await sitesRes.json();
  const allSites = sitesData.result?.[0]?.results || [];
  console.log(allSites.slice(0, 30));
}
run();
