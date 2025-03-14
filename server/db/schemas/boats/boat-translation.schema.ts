import { sqliteTable, text, integer } from 'drizzle-orm/sqlite-core'
import { boatsTable } from './boat.schema'

// Определение таблицы переводов для лодок
export const boatTranslationsTable = sqliteTable('boat_translations', {
  id: integer('id').primaryKey({ autoIncrement: true }),
  boatId: integer('boat_id').references(() => boatsTable.id), // ID судна
  languageCode: text('language_code'), // код языка, например: ru, en
  name: text('name'), // название судна
  shortDescription: text('short_description'), // короткое описание
  longDescription: text('long_description'), // расширенное описание
})

// Экспорт типов для таблицы
export type BoatTranslationsTableSelectType = typeof boatTranslationsTable.$inferSelect
export type BoatTranslationsTableInsertType = typeof boatTranslationsTable.$inferInsert
