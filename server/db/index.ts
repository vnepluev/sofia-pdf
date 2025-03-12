/**
 ** Server db
 */
import 'dotenv/config'
import { drizzle } from 'drizzle-orm/bun-sqlite'
import { Database } from 'bun:sqlite'

// если файла БД нет, создаем его
//https://bun.sh/docs/api/sqlite
const sqlite = new Database(process.env.DB_FILE_NAME!, { create: true })

export const db = drizzle(sqlite)

export * from './schemas/users.schema'
