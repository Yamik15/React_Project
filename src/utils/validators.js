// Проверяем корректность email
export function validateEmail(value) {
    const trimmed = value.trim()
    if (!trimmed) return "Email обязателен"
    // Проверка корректности синтаксиса
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(trimmed)) return "Некорректный формат email"
    return null
}

// ФИО - минимум 2 слова, каждое - минимум 2 символа
export function validateFullName(value) {
    const trimmed = value.trim()
    if (!trimmed) return "ФИО обязательно"
    const words = trimmed.split(/\s+/)
    if (words.length < 2) return "Укажите имя и фамилию"
    if (words.some((word) => word.length < 2)) {
        return "Каждое слово должно быть не короче 2 символов"
    }
    return null
}

// Логин - не пустой, >= 4 символов, только латиница/цифры/_
export function validateLogin(value) {
    const trimmed = value.trim()
    if (!trimmed) return "Логин обязателен"
    if (trimmed.length < 4) return "Логин должен содержать минимум 4 символа"
    const loginRegex = /^[a-zA-Z0-9_]+$/
    if (!loginRegex.test(trimmed)) {
        return "Логин может содержать только латиницу, цифры и _"
    }
    return null
}

// Пароль - минимум 8 символов
export function validatePassword(value) {
    if (!value) return "Пароль обязателен"
    if (value.length < 8) return "Пароль должен содержать минимум 8 символов"
    return null
}

// Повтор пароля - должен совпадать
export function validatePasswordRepeat(value, password) {
    if (!value) return "Повторите пароль"
    if (value !== password) return "Пароли не совпадают"
    return null
}