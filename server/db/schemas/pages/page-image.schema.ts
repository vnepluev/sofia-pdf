import { sqliteTable, text, integer } from 'drizzle-orm/sqlite-core'
import { pagesTable } from './page.schema'

// Определение таблицы изображений для страниц
export const pageImagesTable = sqliteTable('page_images', {
  id: integer('id').primaryKey({ autoIncrement: true }),
  pageId: integer('page_id').references(() => pagesTable.id), // ID страницы
  imageUrl: text('image_url'), // URL изображения
  createdAt: integer('created_at', { mode: 'timestamp' }).notNull().$defaultFn(() => new Date()),
})

// Экспорт типов для таблицы
export type PageImagesTableSelectType = typeof pageImagesTable.$inferSelect
export type PageImagesTableInsertType = typeof pageImagesTable.$inferInsert
