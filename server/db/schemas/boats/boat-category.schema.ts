import { sqliteTable, text, integer } from 'drizzle-orm/sqlite-core'

// Определение таблицы категорий лодок
export const boatsCategoryTable = sqliteTable('boats_category', {
  id: integer('id').primaryKey({ autoIncrement: true }),
  languageCode: text('language_code'), // код языка, например: ru, en
  name: text('name'), // название категории
  createdAt: integer('created_at', { mode: 'timestamp' }).notNull().$defaultFn(() => new Date()),
})

// Экспорт типов для таблицы
export type BoatsCategoryTableSelectType = typeof boatsCategoryTable.$inferSelect
export type BoatsCategoryTableInsertType = typeof boatsCategoryTable.$inferInsert
