/**
 ** Server db
 */
import 'dotenv/config'
import { drizzle } from 'drizzle-orm/bun-sqlite'
import { Database } from 'bun:sqlite'
import * as schema from './schemas'
import * as logsSchema from './schemas/logs1'

// Основная база данных
// если файла БД нет, создаем его
// https://bun.sh/docs/api/sqlite
const sqlite = new Database(process.env.DB_FILE_NAME!, {
  create: true,
})

// В SQLite нет встроенной поддержки внешних ключей (FOREIGN KEY) с опциями ON DELETE SET NULL или ON UPDATE CASCADE по умолчанию. Однако, начиная с версии 3.6.19, SQLite поддерживает внешние ключи, но их нужно явно включить с помощью команды PRAGMA foreign_keys = ON;
sqlite.exec('PRAGMA foreign_keys = ON;')
export const db = drizzle(sqlite, { schema })

// Отдельная база данных для логов
const logsSqlite = new Database('./server/db/sofia-pdf-logs.sqlite', {
  create: true,
})

logsSqlite.exec('PRAGMA foreign_keys = ON;')

// Автоматическое создание таблицы логов, если она не существует
logsSqlite.exec(`
  CREATE TABLE IF NOT EXISTS logs (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    action TEXT,
    users_id INTEGER,
    details TEXT,
    created_at INTEGER
  )
`)

export const logsDb = drizzle(logsSqlite, { schema: logsSchema })

// Экспорт всех схем
export * from './schemas'
