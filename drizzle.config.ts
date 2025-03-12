import { defineConfig } from 'drizzle-kit'
import dotenv from 'dotenv'
import path from 'path'

const envFile = process.env.NODE_ENV === 'development' ? '.env.development' : '.env.production'

dotenv.config({ path: path.resolve(__dirname, envFile) })

export default defineConfig({
  out: './drizzle/migrations',
  schema: './server/db/schemas/*.schema.ts',
  dialect: 'sqlite',
  dbCredentials: {
    url: process.env.DB_FILE_NAME!,
  },
})
