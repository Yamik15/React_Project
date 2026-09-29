import { useState } from "react";
import { Link } from "react-router-dom"
import {
    validateEmail,
    validateFullName,
    validateLogin,
    validatePassword,
    validatePasswordRepeat,
} from '../../utils/validators.js'
import './RegisterPage.css'

const INITIAL_VALUES = {
    fullName: "",
    email: "",
    login: "",
    password: "",
    passwordRepeat: "",
}

export default function RegisterPage() {
    const [values, setValues] = useState(INITIAL_VALUES)
    const [errors, setErrors] = useState({})
    const [submitted, setSubmitted] = useState(false)
    const [success, setSuccess] = useState(false)

    // Единая функция валидации всех полей - возвращает объект ошибок
    function validateAll(vals) {
        const next = {}
        next.fullName = validateFullName(vals.fullName)
        next.email = validateEmail(vals.email)
        next.login = validateLogin(vals.login)
        next.password = validatePassword(vals.password)
        next.passwordRepeat = validatePasswordRepeat(
            vals.passwordRepeat,
            vals.password,
        )
        // Удаляем все ключи, где ошибки нет (null) - так в errors остаются только реальные ошибки
        Object.keys(next).forEach((key) => {
            if (next[key] === null) delete next[key]
        })
        return next
    }

    function handleChange(e) {
        const { name, value } = e.target
        const nextValues = { ...values, [name]: value }
        setValues(nextValues)

        // Если пользователь уже пытался отправить - перевалидируем на каждое изменение, чтобы ошибки исчезали сразу после исправления
        if (submitted) {
            setErrors(validateAll(nextValues))
        }
    }

    function handleSubmit(e) {
        e.preventDefault()
        setSubmitted(true)

        const validationErrors = validateAll(values)
        setErrors(validationErrors)

        if (Object.keys(validationErrors).length > 0) {
            // Есть ошибки - форма не отправляется
            return
        }

        // Заготовка к отправке на сервер
        setSuccess(true)
    }

    function handleReset() {
        setValues(INITIAL_VALUES)
        setErrors({})
        setSubmitted(false)
        setSuccess(false)
    }

    if (success) {
        return (
            <section className="register register--success">
                <h1 className="register__title">Регистрация прошла успешно</h1>
                <p className="register__subtitle">Добро пожаловать в YaMovies, {values.fullName.trim()}!</p>
                <div className="register__success-actions">
                    <Link to="/catalog" className="register__btn register__btn--primary">Открыть каталог</Link>
                    <button type="button" className="register__btn register__btn--ghost" onClick={handleReset}>Зарегистрировать еще одного</button>
                </div>
            </section>
        )
    }

    return (
        <section className="register">
            <header className="register__header">
                <h1 className="register__title">Регистрация</h1>
                <p className="register__subtitle">Создайте аккаунт YaMovies за минуту</p>
            </header>

            <form className="register__form" onSubmit={handleSubmit} noValidate>
                <Field
                    label="ФИО"
                    name="fullName"
                    value={values.fullName}
                    onChange={handleChange}
                    error={errors.fullName}
                    placeholder="Иван Петров"
                    autoComplete="name"
                ></Field>

                <Field
                    label="Email"
                    name="email"
                    type="email"
                    value={values.email}
                    onChange={handleChange}
                    error={errors.email}
                    placeholder="you@example.com"
                    autoComplete="email"
                ></Field>

                <Field
                    label="Логин"
                    name="login"
                    value={values.login}
                    onChange={handleChange}
                    error={errors.login}
                    placeholder="Латиница, цифры, _"
                    autoComplete="username"
                ></Field>

                <Field
                    label="Пароль"
                    name="password"
                    type="password"
                    value={values.password}
                    onChange={handleChange}
                    error={errors.password}
                    placeholder="Минимум 8 символов"
                    autoComplete="new-password"
                ></Field>

                <Field
                    label="Повтор пароля"
                    name="passwordRepeat"
                    type="password"
                    value={values.passwordRepeat}
                    onChange={handleChange}
                    error={errors.passwordRepeat}
                    placeholder="Введите пароль еще раз"
                    autoComplete="new-password"
                ></Field>

                <button type="submit" className="register__submit">Зарегистрироваться</button>

                <p className="register__footer-text">
                    Уже есть аккаунт?{" "}
                    <Link to="/login" className="register__link">Войти</Link>
                </p>
            </form>
        </section>
    )
}

// Внутренний компонент - одно поле формы с подписью и ошибкой
function Field({ label, name, type = "text", value, onChange, error, placeholder, autoComplete }) {
    const inputId = `field-${name}`
    const errorId = `${inputId}-error`
    const hasError = Boolean(error)

    return (
        <div className={`form-field${hasError ? 'form-field--error' : ''}`}>
            <label htmlFor={inputId} className="form-field__label">{label}</label>
            <input 
                id={inputId} 
                name={name} 
                type={type} 
                value={value} 
                onChange={onChange} 
                placeholder={placeholder} 
                autoComplete={autoComplete} 
                className="form-field__input" 
                aria-invalid={hasError} 
                aria-describedby={hasError ? errorId : undefined}
            />
            {hasError && (
                <span id={errorId} className="form-field__error" role="alert">{error}</span>
            )}
        </div>
    )
}