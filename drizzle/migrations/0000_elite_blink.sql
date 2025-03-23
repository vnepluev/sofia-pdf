CREATE TABLE `boats_category` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`language_code` text,
	`name` text,
	`created_at` integer NOT NULL
);
--> statement-breakpoint
CREATE TABLE `boat_translations` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`boat_id` integer,
	`language_code` text,
	`name` text,
	`short_description` text,
	`long_description` text,
	FOREIGN KEY (`boat_id`) REFERENCES `boats`(`id`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
CREATE TABLE `boats` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`boats_category_id` integer,
	`max_passengers` integer,
	`status` integer,
	`created_at` integer NOT NULL,
	FOREIGN KEY (`boats_category_id`) REFERENCES `boats_category`(`id`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
CREATE TABLE `orders` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`users_id` integer,
	`is_temp` integer,
	`temp_user_id` integer,
	`boats_id` integer,
	`passengers` integer,
	`time_duration` integer,
	`final_cost` integer,
	`paid` integer,
	`paid_date` integer,
	`is_email_send` integer,
	`congratulation_text` text,
	`cert_number` integer,
	`cert_code` integer,
	`cert_status` integer,
	`date_end` integer,
	`who_activated` text,
	`date_activation` integer,
	`manager_id` integer,
	`comment` text,
	`created_at` integer NOT NULL,
	FOREIGN KEY (`users_id`) REFERENCES `users`(`id`) ON UPDATE no action ON DELETE no action,
	FOREIGN KEY (`temp_user_id`) REFERENCES `temp_users`(`id`) ON UPDATE no action ON DELETE no action,
	FOREIGN KEY (`boats_id`) REFERENCES `boats`(`id`) ON UPDATE no action ON DELETE no action,
	FOREIGN KEY (`manager_id`) REFERENCES `users`(`id`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
CREATE TABLE `page_images` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`page_id` integer,
	`image_url` text,
	`created_at` integer NOT NULL,
	FOREIGN KEY (`page_id`) REFERENCES `pages`(`id`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
CREATE TABLE `pages` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`page_text` text,
	`created_at` integer NOT NULL
);
--> statement-breakpoint
CREATE TABLE `slider_images` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`step` integer NOT NULL,
	`image_url` text NOT NULL
);
--> statement-breakpoint
CREATE UNIQUE INDEX `slider_images_step_unique` ON `slider_images` (`step`);--> statement-breakpoint
CREATE TABLE `temp_users` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`fio` text,
	`phone` text,
	`email` text,
	`communication` text,
	`temp_token` text,
	`created_at` integer NOT NULL
);
--> statement-breakpoint
CREATE UNIQUE INDEX `temp_users_email_unique` ON `temp_users` (`email`);--> statement-breakpoint
CREATE TABLE `user_group` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`group` text,
	`created_at` integer NOT NULL
);
--> statement-breakpoint
CREATE TABLE `user_role` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`role` text,
	`created_at` integer NOT NULL
);
--> statement-breakpoint
CREATE TABLE `users` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`fio` text,
	`phone` text,
	`email` text,
	`sex` text,
	`communication` text,
	`role_id` integer,
	`group_id` integer,
	`manager` text,
	`first_manager_id` integer,
	`last_manager_id` integer,
	`oauth_provider_name` text,
	`oauth_user_id` integer,
	`oauth_token_access` text,
	`oauth_token_refresh` text,
	`oauth_token_expires_at` integer,
	`oauth_avatar_url` text,
	`created_at` integer NOT NULL,
	`updated_at` integer NOT NULL
);
--> statement-breakpoint
CREATE UNIQUE INDEX `users_email_unique` ON `users` (`email`);