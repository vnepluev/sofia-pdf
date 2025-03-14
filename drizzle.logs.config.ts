import { defineConfig } from 'drizzle-kit'
import dotenv from 'dotenv'
import path from 'path'

const envFile =
  process.env.NODE_ENV === 'development'
    ? '.env.development'
    : '.env.production'

dotenv.config({ path: path.resolve(__dirname, envFile) })

// Конфигурация для базы данных логов
export default defineConfig({
  out: './drizzle/migrations-logs',
  schema: './server/db/schemas/logs1/**/*.schema.ts',
  dialect: 'sqlite',
  dbCredentials: {
    url: process.env.LOGS_DB_FILE_NAME!,
  },
})
