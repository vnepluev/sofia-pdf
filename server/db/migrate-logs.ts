/**
 * Скрипт для миграции базы данных логов
 */
import { migrate } from 'drizzle-orm/bun-sqlite/migrator'
import { Database } from 'bun:sqlite'
import { drizzle } from 'drizzle-orm/bun-sqlite'
import * as logsSchema from './schemas/logs1'

// Путь к файлу базы данных логов
const LOGS_DB_PATH = './server/db/sofia-pdf-logs.sqlite'

// Создаем базу данных логов
const logsSqlite = new Database(LOGS_DB_PATH, {
  create: true,
})

// Инициализируем Drizzle с схемой логов
const logsDb = drizzle(logsSqlite, { schema: logsSchema })

// Выполняем миграцию
async function main() {
  console.log('Миграция базы данных логов...')
  
  // Создаем таблицу логов, если она не существует
  logsSqlite.exec(`
    CREATE TABLE IF NOT EXISTS logs (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      action TEXT,
      users_id INTEGER,
      details TEXT,
      created_at INTEGER
    )
  `)
  
  console.log('Миграция базы данных логов завершена')
}

main().catch((e) => {
  console.error('Ошибка миграции базы данных логов:', e)
  process.exit(1)
})
