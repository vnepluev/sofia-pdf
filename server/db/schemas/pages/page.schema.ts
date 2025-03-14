import { sqliteTable, text, integer } from 'drizzle-orm/sqlite-core'

// Определение таблицы страниц
export const pagesTable = sqliteTable('pages', {
  id: integer('id').primaryKey({ autoIncrement: true }),
  pageText: text('page_text'), // Текст страницы (HTML/Markdown)
  createdAt: integer('created_at', { mode: 'timestamp' }).notNull().$defaultFn(() => new Date()),
})

// Экспорт типов для таблицы
export type PagesTableSelectType = typeof pagesTable.$inferSelect
export type PagesTableInsertType = typeof pagesTable.$inferInsert
