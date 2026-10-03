import { useState } from "react";
import { Link, useNavigate } from "react-router-dom"
import './LoginPage.css'

const INITIAL_VALUES = { login: "", password: "" }

export default function LoginPage() {
    const [values, setValues] = useState(INITIAL_VALUES)
    const [errors, setErrors] = useState({})
    const [submitted, setSubmitted] = useState(false)
    const navigate = useNavigate()

    function validateAll(vals) {
        const next = {}
        if (!vals.login.trim()) next.login = "Введите логин или email"
        if (!vals.password) next.password = "Введите пароль"
        return next
    }

    function handleChange(e) {
        const { name, value } = e.target
        const nextValues = { ...values, [name]: value }
        setValues(nextValues)

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
            return
        }

        // Имитация успешного входа
        navigate('/catalog')
    }

    return (
        <section className="login">
            <header className="login__header">
                <h1 className="login__title">Вход</h1>
                <p className="login__subtitle">Войдите в свой аккаунт YaMovies</p>
            </header>

            <form className="login__form" onSubmit={handleSubmit} noValidate>
                <div className="form-field">
                    <label htmlFor="login-field" className="form-field__label">Логин или Email</label>
                    <input 
                        id="login-field"
                        name="login" 
                        type="text"
                        value={values.login}
                        onChange={handleChange}
                        placeholder="Ваш логин или email"
                        autoComplete="username"
                        className="form-field__input"
                        aria-invalid={Boolean(errors.login)}
                        aria-describedby={errors.login ? 'login-field-error' : undefined}
                    />
                    {errors.login && (
                        <span id="login-field-error" className="form-field__error" role="alert">{errors.login}</span>
                    )}
                </div>

                <div className="form-field">
                    <label htmlFor="password-field" className="form-field__label">Пароль</label>
                    <input 
                        id="password-field"
                        name="password"
                        type="password"
                        value={values.password}
                        onChange={handleChange}
                        placeholder="Ваш пароль"
                        autoComplete="current-password"
                        className="form-field__input"
                        aria-invalid={Boolean(errors.password)}
                        aria-describedby={errors.password ? 'password-field-error' : undefined}
                    />
                    {errors.password && (
                        <span id="password-field-error" className="form-field__error" role="alert">{errors.password}</span>
                    )}
                </div>
                <button type="submit" className="login__submit">Войти</button>
                <p className="login__footer-text">
                    Нет аккаунта?{" "}
                    <Link to="/register" className="login__link">Зарегистрироваться</Link>
                </p>
            </form>
        </section>
    )
}