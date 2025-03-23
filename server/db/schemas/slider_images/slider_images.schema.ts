import { sqliteTable, text, integer } from 'drizzle-orm/sqlite-core'

// Определение таблицы изображений для слайдера
export const sliderImagesTable = sqliteTable('slider_images', {
  id: integer('id').primaryKey({ autoIncrement: true }),
  step: integer('step').notNull().unique(), // Шаг изображения (уникальный)
  imageUrl: text('image_url').notNull(), // URL изображения
})

// Экспорт типов для таблицы
export type SliderImagesTableSelectType =
  typeof sliderImagesTable.$inferSelect
export type SliderImagesTableInsertType =
  typeof sliderImagesTable.$inferInsert
