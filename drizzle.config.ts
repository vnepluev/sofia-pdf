import { defineConfig } from 'drizzle-kit'
import dotenv from 'dotenv'
import path from 'path'

const envFile = process.env.NODE_ENV === 'development' ? '.env.development' : '.env.production'

dotenv.config({ path: path.resolve(__dirname, envFile) })

// Основная база данных
export default defineConfig({
  out: './drizzle/migrations',
  schema: './server/db/schemas/!(logs1)/**/*.schema.ts',
  dialect: 'sqlite',
  dbCredentials: {
    url: process.env.DB_FILE_NAME!,
  },
})

// Примечание: Для базы данных логов нужно запускать миграции отдельно
// Пример: bun drizzle-kit generate:sqlite --config=drizzle.logs.config.ts
