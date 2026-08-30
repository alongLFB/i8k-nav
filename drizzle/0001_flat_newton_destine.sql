PRAGMA foreign_keys=OFF;--> statement-breakpoint
CREATE TABLE `__new_categories` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`title` text NOT NULL,
	`title_en` text,
	`emoji` text DEFAULT '🎬' NOT NULL,
	`sort_order` integer DEFAULT 0 NOT NULL,
	`created_at` text DEFAULT (CURRENT_TIMESTAMP) NOT NULL
);
--> statement-breakpoint
INSERT INTO `__new_categories`("id", "title", "title_en", "emoji", "sort_order", "created_at") SELECT "id", "title", "title_en", "emoji", "sort_order", "created_at" FROM `categories`;--> statement-breakpoint
DROP TABLE `categories`;--> statement-breakpoint
ALTER TABLE `__new_categories` RENAME TO `categories`;--> statement-breakpoint
PRAGMA foreign_keys=ON;--> statement-breakpoint
CREATE TABLE `__new_sites` (
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
	`created_at` text DEFAULT (CURRENT_TIMESTAMP) NOT NULL,
	FOREIGN KEY (`category_id`) REFERENCES `categories`(`id`) ON UPDATE no action ON DELETE cascade
);
--> statement-breakpoint
INSERT INTO `__new_sites`("id", "category_id", "name", "name_en", "description", "description_en", "url", "logo_url", "tags", "tags_en", "rating", "is_hot", "is_recommended", "bg_gradient", "sort_order", "created_at") SELECT "id", "category_id", "name", "name_en", "description", "description_en", "url", "logo_url", "tags", "tags_en", "rating", "is_hot", "is_recommended", "bg_gradient", "sort_order", "created_at" FROM `sites`;--> statement-breakpoint
DROP TABLE `sites`;--> statement-breakpoint
ALTER TABLE `__new_sites` RENAME TO `sites`;