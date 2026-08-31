const fs = require('fs');
const env = fs.readFileSync('.env', 'utf8');
const acc = env.match(/CLOUDFLARE_ACCOUNT_ID=(.*)/)?.[1]?.trim();
const dbId = env.match(/CLOUDFLARE_D1_DATABASE_ID=(.*)/)?.[1]?.trim();
const token = env.match(/CLOUDFLARE_API_TOKEN=(.*)/)?.[1]?.trim();

const USER_AGENT = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36';

async function queryD1(sql, params = []) {
  const endpoint = `https://api.cloudflare.com/client/v4/accounts/${acc}/d1/database/${dbId}/query`;
  const res = await fetch(endpoint, {
    method: 'POST',
    headers: { Authorization: `Bearer ${token}`, 'Content-Type': 'application/json' },
    body: JSON.stringify({ sql, params })
  });
  return res.json();
}

async function checkSite(site) {
  const targetUrl = site.url;
  
  for (let attempt = 1; attempt <= 2; attempt++) {
    try {
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 10000); // 10s timeout

      const res = await fetch(targetUrl, {
        method: 'GET',
        headers: {
          'User-Agent': USER_AGENT,
          'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,*/*;q=0.8',
          'Accept-Language': 'zh-CN,zh;q=0.9,en;q=0.8',
        },
        redirect: 'follow',
        signal: controller.signal
      });

      clearTimeout(timeoutId);

      // Status 200~399 is definitely valid
      if (res.status >= 200 && res.status < 400) {
        return { ok: true, status: res.status, reason: 'OK' };
      }

      // Status 403, 401, 503 often means Cloudflare/DDoS-Guard/Anti-bot protection, site is alive
      if (res.status === 403 || res.status === 401 || res.status === 503) {
        const text = await res.text().catch(() => '');
        if (text.includes('cloudflare') || text.includes('cf-browser-verification') || text.includes('DDoS') || text.includes('安全验证') || text.includes('Just a moment')) {
          return { ok: true, status: res.status, reason: 'Protected by WAF (Alive)' };
        }
        return { ok: true, status: res.status, reason: 'HTTP Auth/Forbidden (Alive)' };
      }

      // 404, 410, 500, 502 etc
      if (attempt === 2) {
        return { ok: false, status: res.status, reason: `HTTP ${res.status}` };
      }
    } catch (err) {
      if (attempt === 2) {
        const msg = err.name === 'AbortError' ? 'Connection Timeout (10s)' : (err.cause?.code || err.code || err.message);
        return { ok: false, status: null, reason: msg };
      }
      // Wait 1s before retry
      await new Promise(r => setTimeout(r, 1000));
    }
  }

  return { ok: false, status: null, reason: 'Failed all attempts' };
}

async function run() {
  console.log('=== Step 1: Fetching all sites from Cloudflare D1 Database ===');
  const res = await queryD1('SELECT id, name, url, category_id FROM sites ORDER BY id ASC');
  const sites = res.result?.[0]?.results || [];
  console.log(`Total sites in database: ${sites.length}\n`);

  console.log('=== Step 2: Testing accessibility for each site concurrently ===');
  const CONCURRENCY = 8;
  const deadSites = [];
  const aliveSites = [];

  for (let i = 0; i < sites.length; i += CONCURRENCY) {
    const chunk = sites.slice(i, i + CONCURRENCY);
    const results = await Promise.all(chunk.map(async (site) => {
      const check = await checkSite(site);
      return { site, check };
    }));

    for (const { site, check } of results) {
      if (check.ok) {
        aliveSites.push(site);
        console.log(`[ALIVE] ID ${String(site.id).padStart(3)} | ${site.name.padEnd(16)} | ${site.url} -> ${check.reason} (${check.status || 'OK'})`);
      } else {
        deadSites.push({ ...site, reason: check.reason });
        console.log(`[DEAD]  ID ${String(site.id).padStart(3)} | ${site.name.padEnd(16)} | ${site.url} -> ❌ ${check.reason}`);
      }
    }
  }

  console.log(`\n=== Verification Summary ===`);
  console.log(`Total Sites Scanned: ${sites.length}`);
  console.log(`✅ Accessible Sites: ${aliveSites.length}`);
  console.log(`❌ Dead / Inaccessible Sites: ${deadSites.length}\n`);

  if (deadSites.length === 0) {
    console.log('🎉 All sites in the database are fully accessible! No deletions needed.');
    return;
  }

  console.log('=== Dead Sites to be Removed: ===');
  deadSites.forEach(s => console.log(`- [ID ${s.id}] ${s.name} (${s.url}) - Error: ${s.reason}`));

  const deadIds = deadSites.map(s => s.id);
  console.log(`\n=== Step 3: Deleting ${deadIds.length} dead site(s) from D1 Database ===`);
  
  const placeholders = deadIds.map(() => '?').join(',');
  const deleteRes = await queryD1(`DELETE FROM sites WHERE id IN (${placeholders})`, deadIds);

  if (deleteRes.success) {
    console.log(`🎉 Successfully deleted ${deadIds.length} dead site(s) from Cloudflare D1!`);
  } else {
    console.error('❌ Error during deletion:', deleteRes.errors);
  }

  // Final count
  const countRes = await queryD1('SELECT COUNT(*) as total FROM sites');
  console.log(`\nFinal remaining sites in database: ${countRes.result?.[0]?.results?.[0]?.total}`);
}

run().catch(console.error);
