import { sqliteTable, text, integer } from 'drizzle-orm/sqlite-core';
import { sql } from 'drizzle-orm';

export const siteSettings = sqliteTable('site_settings', {
  key: text('key').primaryKey(),
  value: text('value').notNull(),
});

export const categories = sqliteTable('categories', {
  id: integer('id').primaryKey({ autoIncrement: true }),
  title: text('title').notNull(),
  titleEn: text('title_en'),
  emoji: text('emoji').notNull().default('🎬'),
  sortOrder: integer('sort_order').notNull().default(0),
  createdAt: text('created_at').notNull().default(sql`(CURRENT_TIMESTAMP)`),
});

export const sites = sqliteTable('sites', {
  id: integer('id').primaryKey({ autoIncrement: true }),
  categoryId: integer('category_id')
    .notNull()
    .references(() => categories.id, { onDelete: 'cascade' }),
  name: text('name').notNull(),
  nameEn: text('name_en'),
  description: text('description').notNull(),
  descriptionEn: text('description_en'),
  url: text('url').notNull(),
  logoUrl: text('logo_url').notNull().default(''),
  tags: text('tags').notNull().default('[]'),
  tagsEn: text('tags_en').notNull().default('[]'),
  rating: integer('rating').notNull().default(0),
  isHot: integer('is_hot', { mode: 'boolean' }).notNull().default(false),
  isRecommended: integer('is_recommended', { mode: 'boolean' }).notNull().default(false),
  bgGradient: text('bg_gradient').notNull().default('from-blue-50/40 to-cyan-50/40 dark:from-blue-950/20 dark:to-cyan-950/20'),
  sortOrder: integer('sort_order').notNull().default(0),
  createdAt: text('created_at').notNull().default(sql`(CURRENT_TIMESTAMP)`),
});

export type SiteSetting = typeof siteSettings.$inferSelect;
export type NewSiteSetting = typeof siteSettings.$inferInsert;

export type Category = typeof categories.$inferSelect;
export type NewCategory = typeof categories.$inferInsert;

export type Site = typeof sites.$inferSelect;
export type NewSite = typeof sites.$inferInsert;
