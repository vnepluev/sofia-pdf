import { sqliteTable, text, integer } from 'drizzle-orm/sqlite-core'
import { boatsCategoryTable } from './boat-category.schema'

// Определение таблицы лодок
export const boatsTable = sqliteTable('boats', {
  id: integer('id').primaryKey({ autoIncrement: true }),
  boatsCategoryId: integer('boats_category_id').references(() => boatsCategoryTable.id),
  maxPassengers: integer('max_passengers'),
  status: integer('status', { mode: 'boolean' }), // доступно ли для заказа
  createdAt: integer('created_at', { mode: 'timestamp' }).notNull().$defaultFn(() => new Date()),
})

// Экспорт типов для таблицы
export type BoatsTableSelectType = typeof boatsTable.$inferSelect
export type BoatsTableInsertType = typeof boatsTable.$inferInsert
