import { NavLink } from "react-router-dom";
import './Header.css'

export default function Header() {
    return (
        <header className="header">
            <div className="header__inner">
                <NavLink to="/" className="header__logo">YaMovies</NavLink>
            </div>
            <nav className="header__nav">
                <NavLink to="/" end className="header__link">Главная</NavLink>
                <NavLink to="/catalog" className="header__link">Каталог</NavLink>
                <NavLink to="/login" className="header__link">Вход</NavLink>
                <NavLink to="/register" className="header__link header__link--accent">Регистрация</NavLink>
            </nav>
        </header>
    )
}