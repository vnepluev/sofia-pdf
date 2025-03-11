/**
 * Типы для переменных окружения
 */

declare namespace NodeJS {
  interface ProcessEnv {
    /**
     * Путь к файлу базы данных SQLite
     * @example './sofia-pdf-app/shared/api/db/sofia-pdf.sqlite'
     */
    DB_FILE_NAME: string;
    
    /**
     * Версия API
     * @example 'v0'
     */
    API_VERSION: string;
    
    /**
     * Режим работы приложения
     * @example 'development' | 'production'
     */
    NODE_ENV: 'development' | 'production';
  }
}
