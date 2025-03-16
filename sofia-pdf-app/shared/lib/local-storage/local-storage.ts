/**
 ** Работа с localStorage
 */

export enum LocalStorageKeys {
  COOKIE_ACCEPTED = 'cookieAccepted',
  THEME = 'theme',
  LOCALE = 'locale',
}

/**
 ** Получить значение из localStorage
 * @param key Ключ для получения значения
 * @param defaultValue Значение по умолчанию, если ключ не найден
 * @returns Значение из localStorage или значение по умолчанию
 */
export const getFromStorage = <T>(
  key: LocalStorageKeys,
  defaultValue?: T,
): T | null => {
  // Проверяем, доступен ли localStorage (SSR)
  if (typeof window === 'undefined' || !window.localStorage) {
    return defaultValue ?? null
  }

  try {
    const item = window.localStorage.getItem(key)

    if (item === null) {
      return defaultValue ?? null
    }

    // Пробуем распарсить JSON, если не получается, возвращаем как строку
    try {
      return JSON.parse(item)
    } catch {
      return item as unknown as T
    }
  } catch (error) {
    console.error(
      `Ошибка при получении ${key} из localStorage:`,
      error,
    )
    return defaultValue ?? null
  }
}

/**
 ** Сохранить значение в localStorage
 * @param key Ключ для сохранения значения
 * @param value Значение для сохранения
 * @returns true, если сохранение прошло успешно
 */
export const saveToStorage = <T>(
  key: LocalStorageKeys,
  value: T,
): boolean => {
  // Проверяем, доступен ли localStorage (SSR)
  if (typeof window === 'undefined' || !window.localStorage) {
    return false
  }

  try {
    const valueToStore =
      typeof value === 'string' ? value : JSON.stringify(value)
    window.localStorage.setItem(key, valueToStore)
    return true
  } catch (error) {
    console.error(
      `Ошибка при сохранении ${key} в localStorage:`,
      error,
    )
    return false
  }
}

/**
 ** Удалить значение из localStorage
 * @param key Ключ для удаления
 * @returns true, если удаление прошло успешно
 */
export const removeFromStorage = (key: LocalStorageKeys): boolean => {
  // Проверяем, доступен ли localStorage (SSR)
  if (typeof window === 'undefined' || !window.localStorage) {
    return false
  }

  try {
    window.localStorage.removeItem(key)
    return true
  } catch (error) {
    console.error(
      `Ошибка при удалении ${key} из localStorage:`,
      error,
    )
    return false
  }
}
