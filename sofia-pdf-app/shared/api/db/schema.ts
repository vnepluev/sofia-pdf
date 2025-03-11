/**
 ** Drizzle and Bun:SQLite
 */

import { sqliteTable, text, integer } from 'drizzle-orm/sqlite-core';

// Определение таблицы пользователей
export const usersTable = sqliteTable('users', {
  id: integer('id').primaryKey({ autoIncrement: true }),
  name: text('name').notNull(),
  email: text('email').notNull().unique(),
  createdAt: integer('created_at', { mode: 'timestamp' }).notNull().$defaultFn(() => new Date()),
});

// Определение таблицы документов
export const documentsTable = sqliteTable('documents', {
  id: integer('id').primaryKey({ autoIncrement: true }),
  userId: integer('user_id').notNull().references(() => usersTable.id),
  title: text('title').notNull(),
  filePath: text('file_path').notNull(),
  fileSize: integer('file_size').notNull(),
  createdAt: integer('created_at', { mode: 'timestamp' }).notNull().$defaultFn(() => new Date()),
  updatedAt: integer('updated_at', { mode: 'timestamp' }).notNull().$defaultFn(() => new Date()),
});
