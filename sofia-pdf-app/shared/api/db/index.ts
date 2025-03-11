/**
 * База данных SQLite с использованием Drizzle ORM и Bun
 */

import 'dotenv/config';
import { drizzle } from 'drizzle-orm/bun-sqlite';
import { Database } from 'bun:sqlite';
import * as schema from './schema';

// Инициализация базы данных
const sqlite = new Database(process.env.DB_FILE_NAME!);
export const db = drizzle(sqlite, { schema });

// Экспорт схемы для использования в других модулях
export { schema };

// Функция для закрытия соединения с базой данных
export const closeDatabase = () => {
  sqlite.close();
};
