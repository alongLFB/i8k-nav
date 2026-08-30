const fs = require('fs');

const sites = JSON.parse(fs.readFileSync('drizzle/extracted_i8k_sites.json', 'utf8'));

// Map category names to IDs in categories table (1 to 10)
const catMap = {
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

// Generate SQL statements
const sqlStatements = [];

// Clean duplicate checks
let sortOrders = {};

for (const site of sites) {
  const catId = catMap[site.categoryName] || 1;
  sortOrders[catId] = (sortOrders[catId] || 0) + 1;
  const sortOrder = sortOrders[catId];

  const escapeSql = (str) => (str || '').replace(/'/g, "''");
  
  // Safe logo url
  let logoUrl = site.logoUrl;
  if (!logoUrl || logoUrl.includes('placeholder')) {
    try {
      const u = new URL(site.url);
      logoUrl = `${u.origin}/favicon.ico`;
    } catch {
      logoUrl = '';
    }
  }

  const name = escapeSql(site.name);
  const url = escapeSql(site.url);
  const description = escapeSql(site.description);
  const logo = escapeSql(logoUrl);
  const tagsJson = escapeSql(JSON.stringify(site.tags || []));
  const bgGradient = escapeSql(site.bgGradient);
  const isHot = site.isHot ? 1 : 0;
  const isRecommended = site.isRecommended ? 1 : 0;
  const rating = site.rating || 5;

  sqlStatements.push(`
INSERT INTO sites (category_id, name, description, url, logo_url, tags, rating, is_hot, is_recommended, bg_gradient, sort_order)
SELECT ${catId}, '${name}', '${description}', '${url}', '${logo}', '${tagsJson}', ${rating}, ${isHot}, ${isRecommended}, '${bgGradient}', ${sortOrder}
WHERE NOT EXISTS (SELECT 1 FROM sites WHERE url = '${url}' OR name = '${name}');
  `.trim());
}

const fullSql = sqlStatements.join('\n');
fs.writeFileSync('drizzle/import_all_sites.sql', fullSql);
console.log(`Generated SQL for ${sites.length} sites in drizzle/import_all_sites.sql!`);
