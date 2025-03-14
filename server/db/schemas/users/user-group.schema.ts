import { sqliteTable, text, integer } from 'drizzle-orm/sqlite-core'

// Определение таблицы групп пользователей
export const userGroupTable = sqliteTable('user_group', {
  id: integer('id').primaryKey({ autoIncrement: true }),
  group: text('group'), // имя группы
  createdAt: integer('created_at', { mode: 'timestamp' }).notNull().$defaultFn(() => new Date()),
})

// Экспорт типов для таблицы
export type UserGroupTableSelectType = typeof userGroupTable.$inferSelect
export type UserGroupTableInsertType = typeof userGroupTable.$inferInsert
