CREATE TABLE `categories` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`title` text NOT NULL,
	`title_en` text,
	`emoji` text DEFAULT '🎬' NOT NULL,
	`sort_order` integer DEFAULT 0 NOT NULL,
	`created_at` text DEFAULT datetime('now') NOT NULL
);
--> statement-breakpoint
CREATE TABLE `site_settings` (
	`key` text PRIMARY KEY NOT NULL,
	`value` text NOT NULL
);
--> statement-breakpoint
CREATE TABLE `sites` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`category_id` integer NOT NULL,
	`name` text NOT NULL,
	`name_en` text,
	`description` text NOT NULL,
	`description_en` text,
	`url` text NOT NULL,
	`logo_url` text DEFAULT '' NOT NULL,
	`tags` text DEFAULT '[]' NOT NULL,
	`tags_en` text DEFAULT '[]' NOT NULL,
	`rating` integer DEFAULT 0 NOT NULL,
	`is_hot` integer DEFAULT false NOT NULL,
	`is_recommended` integer DEFAULT false NOT NULL,
	`bg_gradient` text DEFAULT 'from-blue-50/40 to-cyan-50/40 dark:from-blue-950/20 dark:to-cyan-950/20' NOT NULL,
	`sort_order` integer DEFAULT 0 NOT NULL,
	`created_at` text DEFAULT datetime('now') NOT NULL,
	FOREIGN KEY (`category_id`) REFERENCES `categories`(`id`) ON UPDATE no action ON DELETE cascade
);
