import { sqliteTable, text, integer } from 'drizzle-orm/sqlite-core'
import { usersTable } from '../users/user.schema'
import { tempUsersTable } from '../users/temp-user.schema'
import { boatsTable } from '../boats/boat.schema'

// Определение таблицы заказов
export const ordersTable = sqliteTable('orders', {
  id: integer('id').primaryKey({ autoIncrement: true }),
  usersId: integer('users_id').references(() => usersTable.id), // владелец сертификата
  isTemp: integer('is_temp', { mode: 'boolean' }), // временный заказ
  tempUserId: integer('temp_user_id').references(() => tempUsersTable.id), // ссылка на временного пользователя
  boatsId: integer('boats_id').references(() => boatsTable.id), // id судна
  passengers: integer('passengers'), // количество гостей
  timeDuration: integer('time_duration'), // продолжительность прогулки

  finalCost: integer('final_cost'), // финальная стоимость
  paid: integer('paid'), // оплаченная сумма
  paidDate: integer('paid_date', { mode: 'timestamp' }), // дата и время подтверждения оплаты
  isEmailSend: integer('is_email_send', { mode: 'boolean' }), // сертификат отправлен по почте?

  congratulationText: text('congratulation_text'), // текст поздравления
  certNumber: integer('cert_number'), // номер сертификата
  certCode: integer('cert_code'), // код сертификата
  certStatus: integer('cert_status'), // статус сертификата
  dateEnd: integer('date_end', { mode: 'timestamp' }), // действует до
  whoActivated: text('who_activated'), // контакты гостя, кто активировал сертификат
  dateActivation: integer('date_activation', { mode: 'timestamp' }), // дата, время активации сертификата

  managerId: integer('manager_id').references(() => usersTable.id), // менеджер заказа
  comment: text('comment'), // комментарий для своих
  createdAt: integer('created_at', { mode: 'timestamp' }).notNull().$defaultFn(() => new Date()),
})

// Экспорт типов для таблицы
export type OrdersTableSelectType = typeof ordersTable.$inferSelect
export type OrdersTableInsertType = typeof ordersTable.$inferInsert
