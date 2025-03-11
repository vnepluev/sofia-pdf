/**
 * Утилита для выполнения миграций базы данных
 */

import 'dotenv/config';
import { migrate } from 'drizzle-orm/bun-sqlite/migrator';
import { drizzle } from 'drizzle-orm/bun-sqlite';
import { Database } from 'bun:sqlite';
import * as schema from './schema';

// Функция для выполнения миграций
async function runMigrations() {
  // Инициализация базы данных
  const sqlite = new Database(process.env.DB_FILE_NAME!);
  const db = drizzle(sqlite, { schema });

  // Выполнение миграций
  console.log('Запуск миграций...');
  await migrate(db, { migrationsFolder: './sofia-pdf-app/shared/api/db/migrations' });
  console.log('Миграции успешно выполнены');

  // Закрытие соединения с базой данных
  sqlite.close();
}

// Запуск миграций
runMigrations().catch((error) => {
  console.error('Ошибка при выполнении миграций:', error);
  process.exit(1);
});
