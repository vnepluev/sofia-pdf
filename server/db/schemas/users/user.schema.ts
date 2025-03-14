import { sqliteTable, text, integer } from 'drizzle-orm/sqlite-core'

// Определение таблицы пользователей
export const usersTable = sqliteTable('users', {
  id: integer('id').primaryKey({ autoIncrement: true }),
  fio: text('fio'),
  phone: text('phone'),
  email: text('email').unique(),
  sex: text('sex'), // Пол
  communication: text('communication'), // Способы связи json
  roleId: integer('role_id'), // Ссылка на роль
  groupId: integer('group_id'), // Ссылка на группу
  
  firstManagerId: integer('first_manager_id'), // Первый менеджер
  lastManagerId: integer('last_manager_id'), // Последний менеджер
  
  oauthProviderName: text('oauth_provider_name'), // провайдер, н-р: yandex
  oauthUserId: integer('oauth_user_id'), // id пользователя у провайдера
  oauthTokenAccess: text('oauth_token_access'),
  oauthTokenRefresh: text('oauth_token_refresh'),
  oauthTokenExpiresAt: integer('oauth_token_expires_at', { mode: 'timestamp' }), // Время истечения Access Token
  oauthAvatarUrl: text('oauth_avatar_url'), // url аватара
  
  createdAt: integer('created_at', { mode: 'timestamp' }).notNull().$defaultFn(() => new Date()),
  updatedAt: integer('updated_at', { mode: 'timestamp' }).notNull().$defaultFn(() => new Date()),
})

// Экспорт типов для таблицы
export type UsersTableSelectType = typeof usersTable.$inferSelect
export type UsersTableInsertType = typeof usersTable.$inferInsert
