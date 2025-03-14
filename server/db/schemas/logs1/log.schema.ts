import { sqliteTable, text, integer } from 'drizzle-orm/sqlite-core'

// Определение таблицы логов
export const logsTable = sqliteTable('logs', {
  id: integer('id').primaryKey({ autoIncrement: true }),
  action: text('action'), // н-р: создание нового заказа | регистрация в системе | ошибка
  usersId: integer('users_id'), // если есть
  details: text('details'), // JSON-строка или текстовое описание события
  createdAt: integer('created_at', { mode: 'timestamp' }).notNull().$defaultFn(() => new Date()),
})

// Экспорт типов для таблицы
export type LogsTableSelectType = typeof logsTable.$inferSelect
export type LogsTableInsertType = typeof logsTable.$inferInsert
