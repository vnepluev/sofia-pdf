import { relations } from 'drizzle-orm'
import { usersTable } from './users/user.schema'
import { userRoleTable } from './users/user-role.schema'
import { userGroupTable } from './users/user-group.schema'
import { tempUsersTable } from './users/temp-user.schema'
import { boatsTable } from './boats/boat.schema'
import { boatsCategoryTable } from './boats/boat-category.schema'
import { boatTranslationsTable } from './boats/boat-translation.schema'
import { ordersTable } from './orders/order.schema'
import { pagesTable } from './pages/page.schema'
import { pageImagesTable } from './pages/page-image.schema'

// Отношения для таблицы пользователей
export const usersRelations = relations(usersTable, ({ one }) => ({
  role: one(userRoleTable, {
    fields: [usersTable.roleId],
    references: [userRoleTable.id],
  }),
  group: one(userGroupTable, {
    fields: [usersTable.groupId],
    references: [userGroupTable.id],
  }),
}))

// Отношения для таблицы лодок
export const boatsRelations = relations(boatsTable, ({ one, many }) => ({
  category: one(boatsCategoryTable, {
    fields: [boatsTable.boatsCategoryId],
    references: [boatsCategoryTable.id],
  }),
  translations: many(boatTranslationsTable),
}))

// Отношения для таблицы переводов лодок
export const boatTranslationsRelations = relations(boatTranslationsTable, ({ one }) => ({
  boat: one(boatsTable, {
    fields: [boatTranslationsTable.boatId],
    references: [boatsTable.id],
  }),
}))

// Отношения для таблицы заказов
export const ordersRelations = relations(ordersTable, ({ one }) => ({
  user: one(usersTable, {
    fields: [ordersTable.usersId],
    references: [usersTable.id],
  }),
  tempUser: one(tempUsersTable, {
    fields: [ordersTable.tempUserId],
    references: [tempUsersTable.id],
  }),
  boat: one(boatsTable, {
    fields: [ordersTable.boatsId],
    references: [boatsTable.id],
  }),
  manager: one(usersTable, {
    fields: [ordersTable.managerId],
    references: [usersTable.id],
    relationName: 'orderManager',
  }),
}))

// Отношения для таблицы изображений страниц
export const pageImagesRelations = relations(pageImagesTable, ({ one }) => ({
  page: one(pagesTable, {
    fields: [pageImagesTable.pageId],
    references: [pagesTable.id],
  }),
}))
