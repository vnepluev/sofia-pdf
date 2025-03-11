/**
 * База данных SQLite с использованием Drizzle ORM и Bun
 */

import 'dotenv/config'
import { drizzle } from 'drizzle-orm/bun-sqlite'
import { Database } from 'bun:sqlite'
import * as schema from './schema'

/**
 * Инициализация базы данных SQLite
 */
const sqlite = new Database(process.env.DB_FILE_NAME!)

/**
 * Инициализация Drizzle ORM
 */
export const db = drizzle(sqlite)

/**
 * Экспорт схемы для использования в других модулях
 */
export { schema }

/**
 * Функция для закрытия соединения с базой данных
 */
export const closeDatabase = () => {
  sqlite.close()
}
