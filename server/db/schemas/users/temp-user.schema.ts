import { sqliteTable, text, integer } from 'drizzle-orm/sqlite-core'

// Определение таблицы временных пользователей
export const tempUsersTable = sqliteTable('temp_users', {
  id: integer('id').primaryKey({ autoIncrement: true }),
  fio: text('fio'),
  phone: text('phone'),
  email: text('email').unique(),
  communication: text('communication'), // Способы связи json
  tempToken: text('temp_token'), // Временный токен для связки с заказами
  createdAt: integer('created_at', { mode: 'timestamp' }).notNull().$defaultFn(() => new Date()),
})

// Экспорт типов для таблицы
export type TempUsersTableSelectType = typeof tempUsersTable.$inferSelect
export type TempUsersTableInsertType = typeof tempUsersTable.$inferInsert
