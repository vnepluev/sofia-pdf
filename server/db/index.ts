/**
 ** Server db
 */
import 'dotenv/config'
import { drizzle } from 'drizzle-orm/bun-sqlite'
import { Database } from 'bun:sqlite'

// если файла БД нет, создаем его
// https://bun.sh/docs/api/sqlite
const sqlite = new Database(process.env.DB_FILE_NAME!, {
  create: true,
})

// В SQLite нет встроенной поддержки внешних ключей (FOREIGN KEY) с опциями ON DELETE SET NULL или ON UPDATE CASCADE по умолчанию. Однако, начиная с версии 3.6.19, SQLite поддерживает внешние ключи, но их нужно явно включить с помощью команды PRAGMA foreign_keys = ON;
sqlite.exec('PRAGMA foreign_keys = ON;')
export const db = drizzle(sqlite)

// Экспорт всех схем
export * from './schemas'
