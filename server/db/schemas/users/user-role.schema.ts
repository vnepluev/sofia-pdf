import { sqliteTable, text, integer } from 'drizzle-orm/sqlite-core'

// Определение таблицы ролей пользователей
export const userRoleTable = sqliteTable('user_role', {
  id: integer('id').primaryKey({ autoIncrement: true }),
  role: text('role'), // имя роли
  createdAt: integer('created_at', { mode: 'timestamp' }).notNull().$defaultFn(() => new Date()),
})

// Экспорт типов для таблицы
export type UserRoleTableSelectType = typeof userRoleTable.$inferSelect
export type UserRoleTableInsertType = typeof userRoleTable.$inferInsert
