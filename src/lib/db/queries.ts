import { db } from './client';
import { siteSettings, categories, sites } from './schema';
import { eq, asc } from 'drizzle-orm';

export const DEFAULT_SITE_SETTINGS: Record<string, string> = {
  site_title: "i8K影视导航",
  site_title_en: "i8K Video Navigation",
  site_subtitle: "最全免费高清在线影视网站导航",
  site_subtitle_en: "The Most Comprehensive Free HD Video Site Navigation",
  footer_copyright: "© 2026 i8K影视导航 (i8k.tv). All rights reserved.",
  footer_copyright_en: "© 2026 i8K Video Navigation. All rights reserved.",
};

export const DEFAULT_CATEGORIES = [
  { title: "综合影视", titleEn: "Comprehensive", emoji: "🎭", sortOrder: 0 },
  { title: "动漫动画", titleEn: "Anime", emoji: "🎨", sortOrder: 1 },
  { title: "聚合搜索", titleEn: "Search", emoji: "🔍", sortOrder: 2 },
  { title: "网盘资源", titleEn: "Cloud Drive", emoji: "📂", sortOrder: 3 },
  { title: "电视剧", titleEn: "TV Series", emoji: "📺", sortOrder: 4 },
  { title: "电影专区", titleEn: "Movies", emoji: "🎞️", sortOrder: 5 },
  { title: "字幕资源", titleEn: "Subtitles", emoji: "🈯", sortOrder: 6 },
  { title: "纪录片", titleEn: "Documentary", emoji: "🎥", sortOrder: 7 },
  { title: "综艺娱乐", titleEn: "Variety", emoji: "🎪", sortOrder: 8 },
  { title: "短剧短视频", titleEn: "Short Video", emoji: "📱", sortOrder: 9 },
];

export const DEFAULT_SITES = [
  { name: "饭搭子影视", url: "https://fdzys666.xyz/", description: "最新热门电影电视剧动漫综艺体育免费观看", logoUrl: "https://fdzys.net/template/mizhiady/statics/images/logo_blue.png", tags: '["最新","推荐","4K","资源丰富","高清"]', rating: 5, isHot: true, isRecommended: true, bgGradient: "from-rose-50/40 to-pink-50/40 dark:from-rose-950/20 dark:to-pink-950/20", sortOrder: 0, categoryIndex: 0 },
  { name: "低端影视", url: "https://ddys.io/", description: "极简主义的高清影视站。利用 AI 智能筛选并重写片源简介，无广告干扰，专注提供高码率观影体验。", logoUrl: "https://ddys.io/favicon.ico", tags: '["免费","资源丰富"]', rating: 5, isHot: false, isRecommended: false, bgGradient: "from-orange-50/40 to-red-50/40 dark:from-orange-950/20 dark:to-red-950/20", sortOrder: 1, categoryIndex: 0 },
  { name: "SeedHub", url: "https://www.seedhub.cc/", description: "影视&动漫分享平台", logoUrl: "https://www.seedhub.cc/favicon.ico", tags: '["动漫","综合","支持下载"]', rating: 5, isHot: true, isRecommended: false, bgGradient: "from-purple-50/40 to-pink-50/40 dark:from-purple-950/20 dark:to-pink-950/20", sortOrder: 2, categoryIndex: 0 },
  { name: "播剧网", url: "https://www.ysxq.cc/", description: "2025最新电影在线观看，高清电视剧免费播放", logoUrl: "https://www.ysxq.cc/favicon.ico", tags: '["免费","无广告","资源丰富"]', rating: 5, isHot: true, isRecommended: false, bgGradient: "from-purple-50/40 to-pink-50/40 dark:from-purple-950/20 dark:to-pink-950/20", sortOrder: 3, categoryIndex: 0 },
  { name: "爱壹帆", url: "https://www.iyf.tv/", description: "海量高清视频免费在线观看", logoUrl: "https://www.iyf.tv/favicon.ico", tags: '["免费","资源丰富"]', rating: 5, isHot: false, isRecommended: false, bgGradient: "from-green-50/40 to-emerald-50/40 dark:from-green-950/20 dark:to-emerald-950/20", sortOrder: 4, categoryIndex: 0 },
  { name: "飞快TV", url: "https://feikuai.tv/", description: "免费高清影视在线播放网盘下载", logoUrl: "https://www.feikuai.tv/favicon.ico", tags: '["免费","资源丰富"]', rating: 5, isHot: false, isRecommended: false, bgGradient: "from-orange-50/40 to-red-50/40 dark:from-orange-950/20 dark:to-red-950/20", sortOrder: 5, categoryIndex: 0 },
  { name: "电影先生", url: "https://www.dyxs.cc/", description: "高清电影在线观看", logoUrl: "https://www.dyxs.cc/favicon.ico", tags: '["免费","高清"]', rating: 4, isHot: false, isRecommended: false, bgGradient: "from-cyan-50/40 to-blue-50/40 dark:from-cyan-950/20 dark:to-blue-950/20", sortOrder: 6, categoryIndex: 0 },
  { name: "樱花动漫", url: "https://www.yhdmp.net/", description: "专注动漫的门户网站，提供最新最全的动漫资源", logoUrl: "https://www.yhdmp.net/favicon.ico", tags: '["动漫","免费","更新快"]', rating: 5, isHot: true, isRecommended: true, bgGradient: "from-pink-50/40 to-rose-50/40 dark:from-pink-950/20 dark:to-rose-950/20", sortOrder: 0, categoryIndex: 1 },
  { name: "AGE动漫", url: "https://www.agemys.org/", description: "AGE动漫专注于资源收集整理 海量的有效的高质量的动漫资源", logoUrl: "https://www.agemys.org/favicon.ico", tags: '["动漫","高清","资源丰富"]', rating: 4, isHot: false, isRecommended: false, bgGradient: "from-indigo-50/40 to-purple-50/40 dark:from-indigo-950/20 dark:to-purple-950/20", sortOrder: 1, categoryIndex: 1 },
  { name: "嘀哩嘀哩", url: "https://dilidili.ink/", description: "二次元动漫网站,提供最新最快的动漫新番资源", logoUrl: "https://dilidili.ink/favicon.ico", tags: '["动漫","新番","免费"]', rating: 4, isHot: false, isRecommended: false, bgGradient: "from-sky-50/40 to-blue-50/40 dark:from-sky-950/20 dark:to-blue-950/20", sortOrder: 2, categoryIndex: 1 },
  { name: "茶杯狐", url: "https://cupfox.app/", description: "全网影视聚合搜索引擎", logoUrl: "https://cupfox.app/favicon.ico", tags: '["聚合搜索","全网"]', rating: 5, isHot: true, isRecommended: true, bgGradient: "from-amber-50/40 to-orange-50/40 dark:from-amber-950/20 dark:to-orange-950/20", sortOrder: 0, categoryIndex: 2 },
  { name: "字幕库", url: "https://zimuku.org/", description: "字幕下载网站，提供海量中英文字幕", logoUrl: "https://zimuku.org/favicon.ico", tags: '["字幕","中英文"]', rating: 4, isHot: false, isRecommended: false, bgGradient: "from-teal-50/40 to-green-50/40 dark:from-teal-950/20 dark:to-green-950/20", sortOrder: 0, categoryIndex: 6 }
];

function normalizeSite(s: any) {
  let parsedTags: string[] = [];
  if (Array.isArray(s.tags)) {
    parsedTags = s.tags;
  } else if (typeof s.tags === 'string') {
    try {
      parsedTags = JSON.parse(s.tags);
    } catch {
      parsedTags = s.tags ? s.tags.split(',').map((t: string) => t.trim()) : [];
    }
  }

  return {
    id: s.id,
    categoryId: s.categoryId ?? s.category_id,
    category_id: s.categoryId ?? s.category_id,
    name: s.name,
    nameEn: s.nameEn ?? s.name_en ?? null,
    name_en: s.nameEn ?? s.name_en ?? null,
    description: s.description,
    descriptionEn: s.descriptionEn ?? s.description_en ?? null,
    description_en: s.descriptionEn ?? s.description_en ?? null,
    url: s.url,
    logo: s.logoUrl ?? s.logo_url ?? s.logo ?? '',
    logoUrl: s.logoUrl ?? s.logo_url ?? s.logo ?? '',
    logo_url: s.logoUrl ?? s.logo_url ?? s.logo ?? '',
    tags: parsedTags,
    tagsJson: typeof s.tags === 'string' ? s.tags : JSON.stringify(parsedTags),
    tags_en: typeof s.tagsEn === 'string' ? s.tagsEn : (typeof s.tags_en === 'string' ? s.tags_en : '[]'),
    rating: s.rating ?? 0,
    isHot: Boolean(s.isHot ?? s.is_hot),
    is_hot: Boolean(s.isHot ?? s.is_hot),
    isRecommended: Boolean(s.isRecommended ?? s.is_recommended),
    is_recommended: Boolean(s.isRecommended ?? s.is_recommended),
    bgGradient: s.bgGradient ?? s.bg_gradient ?? 'from-blue-50/40 to-cyan-50/40 dark:from-blue-950/20 dark:to-cyan-950/20',
    bg_gradient: s.bgGradient ?? s.bg_gradient ?? 'from-blue-50/40 to-cyan-50/40 dark:from-blue-950/20 dark:to-cyan-950/20',
    sortOrder: s.sortOrder ?? s.sort_order ?? 0,
    sort_order: s.sortOrder ?? s.sort_order ?? 0,
    createdAt: s.createdAt ?? s.created_at ?? new Date().toISOString(),
  };
}

function normalizeCategory(c: any) {
  return {
    id: c.id,
    title: c.title,
    titleEn: c.titleEn ?? c.title_en ?? null,
    title_en: c.titleEn ?? c.title_en ?? null,
    emoji: c.emoji || '🎬',
    sortOrder: c.sortOrder ?? c.sort_order ?? 0,
    sort_order: c.sortOrder ?? c.sort_order ?? 0,
    createdAt: c.createdAt ?? c.created_at ?? new Date().toISOString(),
  };
}

let isSeeded = false;

export async function seedDefaultData() {
  if (isSeeded) return true;
  try {
    const existingCats = await db.select().from(categories).limit(1);
    if (existingCats.length > 0) {
      isSeeded = true;
      return true;
    }

    for (const [key, value] of Object.entries(DEFAULT_SITE_SETTINGS)) {
      await db.insert(siteSettings).values({ key, value }).onConflictDoNothing();
    }

    for (const cat of DEFAULT_CATEGORIES) {
      await db.insert(categories).values(cat);
    }

    const allCats = await db.select().from(categories).orderBy(asc(categories.sortOrder));

    const sitesToInsert = DEFAULT_SITES.map(s => {
      const targetCat = allCats[s.categoryIndex] || allCats[0];
      const { categoryIndex, ...rest } = s;
      return {
        ...rest,
        categoryId: targetCat.id,
        tagsEn: '[]',
        descriptionEn: null,
        nameEn: null,
      };
    });

    if (sitesToInsert.length > 0) {
      await db.insert(sites).values(sitesToInsert);
    }

    isSeeded = true;
    return true;
  } catch (error) {
    console.warn("Failed to seed default data:", error);
    return false;
  }
}

export async function getSiteSettings() {
  try {
    const results = await db.select().from(siteSettings);
    const settings = { ...DEFAULT_SITE_SETTINGS };
    for (const r of results) {
      settings[r.key] = r.value;
    }
    return settings;
  } catch (error) {
    console.warn("Failed to fetch settings, using defaults:", error);
    return { ...DEFAULT_SITE_SETTINGS };
  }
}

export async function updateSiteSetting(key: string, value: string) {
  try {
    await db.insert(siteSettings).values({ key, value })
      .onConflictDoUpdate({ target: siteSettings.key, set: { value } });
    return true;
  } catch (error) {
    console.error("Error updating setting:", error);
    return false;
  }
}

export async function getNavData() {
  try {
    await seedDefaultData();
    const settings = await getSiteSettings();
    const cats = await db.select().from(categories).orderBy(asc(categories.sortOrder));
    const allSites = await db.select().from(sites).orderBy(asc(sites.sortOrder));

    const normalizedCats = cats.map(normalizeCategory);
    const normalizedSites = allSites.map(normalizeSite);

    return {
      settings,
      categories: normalizedCats,
      sites: normalizedSites,
    };
  } catch (error) {
    console.warn("Failed to fetch nav data, using memory fallback:", error);
    
    // Default in-memory fallback
    const fallbackCats = DEFAULT_CATEGORIES.map((cat, i) => normalizeCategory({
      id: i + 1,
      ...cat,
      createdAt: new Date().toISOString(),
    }));

    const fallbackSites = DEFAULT_SITES.map((s, j) => normalizeSite({
      id: j + 1,
      categoryId: s.categoryIndex + 1,
      category_id: s.categoryIndex + 1,
      name: s.name,
      nameEn: null,
      description: s.description,
      descriptionEn: null,
      url: s.url,
      logoUrl: s.logoUrl,
      tags: s.tags,
      tagsEn: '[]',
      rating: s.rating,
      isHot: s.isHot,
      isRecommended: s.isRecommended,
      bgGradient: s.bgGradient,
      sortOrder: s.sortOrder,
      createdAt: new Date().toISOString(),
    }));

    return {
      settings: { ...DEFAULT_SITE_SETTINGS },
      categories: fallbackCats,
      sites: fallbackSites,
    };
  }
}

export async function getAllCategories() {
  try {
    await seedDefaultData();
    const cats = await db.select().from(categories).orderBy(asc(categories.sortOrder));
    return cats.map(normalizeCategory);
  } catch (error) {
    console.warn("Error fetching categories, using fallback:", error);
    return DEFAULT_CATEGORIES.map((c, i) => normalizeCategory({ id: i + 1, ...c }));
  }
}

export async function createCategory(data: any) {
  const insertData = {
    title: data.title,
    titleEn: data.titleEn ?? data.title_en ?? null,
    emoji: data.emoji || '🎬',
    sortOrder: Number(data.sortOrder ?? data.sort_order ?? 0),
  };
  const result = await db.insert(categories).values(insertData).returning();
  return result[0] ? normalizeCategory(result[0]) : null;
}

export async function updateCategory(id: number, data: any) {
  const updateData: any = {};
  if (data.title !== undefined) updateData.title = data.title;
  if (data.titleEn !== undefined || data.title_en !== undefined) updateData.titleEn = data.titleEn ?? data.title_en;
  if (data.emoji !== undefined) updateData.emoji = data.emoji;
  if (data.sortOrder !== undefined || data.sort_order !== undefined) updateData.sortOrder = Number(data.sortOrder ?? data.sort_order);

  const result = await db.update(categories).set(updateData).where(eq(categories.id, id)).returning();
  return result[0] ? normalizeCategory(result[0]) : null;
}

export async function deleteCategory(id: number) {
  return db.delete(categories).where(eq(categories.id, id)).returning();
}

export async function getAllSites() {
  try {
    await seedDefaultData();
    const allSites = await db.select().from(sites).orderBy(asc(sites.sortOrder));
    return allSites.map(normalizeSite);
  } catch (error) {
    console.warn("Error fetching all sites, using fallback:", error);
    return DEFAULT_SITES.map((s, j) => normalizeSite({
      id: j + 1,
      categoryId: s.categoryIndex + 1,
      ...s,
    }));
  }
}

export async function getSitesByCategoryId(categoryId: number) {
  try {
    const list = await db.select().from(sites).where(eq(sites.categoryId, categoryId)).orderBy(asc(sites.sortOrder));
    return list.map(normalizeSite);
  } catch (error) {
    console.warn("Error fetching sites by category, using fallback:", error);
    return DEFAULT_SITES
      .filter(s => s.categoryIndex + 1 === categoryId)
      .map((s, j) => normalizeSite({ id: j + 1, categoryId, ...s }));
  }
}

export async function createSite(data: any) {
  const insertData = {
    categoryId: Number(data.categoryId ?? data.category_id),
    name: data.name,
    nameEn: data.nameEn ?? data.name_en ?? null,
    description: data.description || '',
    descriptionEn: data.descriptionEn ?? data.description_en ?? null,
    url: data.url,
    logoUrl: data.logoUrl ?? data.logo_url ?? data.logo ?? '',
    tags: typeof data.tags === 'string' ? data.tags : JSON.stringify(data.tags || []),
    tagsEn: typeof data.tagsEn === 'string' ? data.tagsEn : (typeof data.tags_en === 'string' ? data.tags_en : '[]'),
    rating: Number(data.rating || 0),
    isHot: Boolean(data.isHot ?? data.is_hot),
    isRecommended: Boolean(data.isRecommended ?? data.is_recommended),
    bgGradient: data.bgGradient ?? data.bg_gradient ?? 'from-blue-50/40 to-cyan-50/40 dark:from-blue-950/20 dark:to-cyan-950/20',
    sortOrder: Number(data.sortOrder ?? data.sort_order ?? 0),
  };
  const result = await db.insert(sites).values(insertData).returning();
  return result[0] ? normalizeSite(result[0]) : null;
}

export async function updateSite(id: number, data: any) {
  const updateData: any = {};
  if (data.categoryId !== undefined || data.category_id !== undefined) updateData.categoryId = Number(data.categoryId ?? data.category_id);
  if (data.name !== undefined) updateData.name = data.name;
  if (data.nameEn !== undefined || data.name_en !== undefined) updateData.nameEn = data.nameEn ?? data.name_en;
  if (data.description !== undefined) updateData.description = data.description;
  if (data.descriptionEn !== undefined || data.description_en !== undefined) updateData.descriptionEn = data.descriptionEn ?? data.description_en;
  if (data.url !== undefined) updateData.url = data.url;
  if (data.logoUrl !== undefined || data.logo_url !== undefined || data.logo !== undefined) updateData.logoUrl = data.logoUrl ?? data.logo_url ?? data.logo;
  if (data.tags !== undefined) updateData.tags = typeof data.tags === 'string' ? data.tags : JSON.stringify(data.tags);
  if (data.tagsEn !== undefined || data.tags_en !== undefined) updateData.tagsEn = typeof data.tagsEn === 'string' ? data.tagsEn : (typeof data.tags_en === 'string' ? data.tags_en : JSON.stringify(data.tags_en));
  if (data.rating !== undefined) updateData.rating = Number(data.rating);
  if (data.isHot !== undefined || data.is_hot !== undefined) updateData.isHot = Boolean(data.isHot ?? data.is_hot);
  if (data.isRecommended !== undefined || data.is_recommended !== undefined) updateData.isRecommended = Boolean(data.isRecommended ?? data.is_recommended);
  if (data.bgGradient !== undefined || data.bg_gradient !== undefined) updateData.bgGradient = data.bgGradient ?? data.bg_gradient;
  if (data.sortOrder !== undefined || data.sort_order !== undefined) updateData.sortOrder = Number(data.sortOrder ?? data.sort_order);

  const result = await db.update(sites).set(updateData).where(eq(sites.id, id)).returning();
  return result[0] ? normalizeSite(result[0]) : null;
}

export async function deleteSite(id: number) {
  return db.delete(sites).where(eq(sites.id, id)).returning();
}
