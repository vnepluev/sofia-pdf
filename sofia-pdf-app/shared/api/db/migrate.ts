/**
 * Утилита для выполнения миграций базы данных
 */

import 'dotenv/config'
import { migrate } from 'drizzle-orm/bun-sqlite/migrator'
import { drizzle } from 'drizzle-orm/bun-sql'
import { Database } from 'bun:sqlite'
import { join, dirname } from 'path'
import { fileURLToPath } from 'url'

/**
 * Функция для выполнения миграций базы данных
 */
function runMigrations() {
  try {
    // Инициализация базы данных
    const sqlite = new Database(process.env.DB_FILE_NAME!)
    const db = drizzle(process.env.DB_FILE_NAME!)

    // Получение абсолютного пути к директории миграций
    const __dirname = dirname(fileURLToPath(import.meta.url))
    const migrationsPath = join(__dirname, 'migrations')

    // Выполнение миграций
    console.log('Запуск миграций...')
    migrate(db, { migrationsFolder: migrationsPath })
    console.log('Миграции успешно выполнены')

    // Закрытие соединения с базой данных
    sqlite.close()
  } catch (error) {
    console.error('Ошибка при выполнении миграций:', error)
    process.exit(1)
  }
}

// Запуск миграций
runMigrations()
