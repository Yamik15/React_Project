import { Link } from "react-router-dom"
import './HomePage.css'

export default function HomePage() {
    return (
        <div className="home">
            <section className="home__hero">
                <div className="home__hero-content">
                    <p className="home__eyebrow">Онлайн-кинотеатр</p>
                    <h1 className="home__title">Смотрите кино <span className="home__title-accent">где угодно</span></h1>
                    <p className="home__subtitle">Тысячи фильмов, сериалов и документальных лент в одном месте. Без рекламы, в HD-качестве, на любом устройстве.</p>
                    <div className="home__actions">
                        <Link to="/catalog" className="home__btn home__btn--primary">Открыть каталог</Link>
                        <Link to="/register" className="home__btn home__btn--ghost">Создать аккаунт</Link>
                    </div>
                </div>
            </section>

            <section className="home__features">
                <h2 className="home__section-title">Почему YaMovies</h2>
                <div className="home__features-grid">
                    <article className="home__feature">
                        <h3 className="home__feature-title">HD и 4К</h3>
                        <p className="home__feature-text">Картинка в высоком разрешении на любом экране.</p>
                    </article>
                    <article className="home__feature">
                        <h3 className="home__feature-title">Без рекламы</h3>
                        <p className="home__feature-text">Никаких вставок и баннеров - только кино.</p>
                    </article>
                    <article className="home__feature">
                        <h3 className="home__feature-title">Свои подборки</h3>
                        <p className="home__feature-text">Сохраняйте фильмы в избранное и смотрите позже.</p>
                    </article>
                    <article className="home__feature">
                        <h3 className="home__feature-title">Любое устройство</h3>
                        <p className="home__feature-text">Телефон, планшет, ноутбук - интерфейс подстроится.</p>
                    </article>
                </div>
            </section>

            <section className="home__cta">
                <h2 className="home__cta-title">Готовы начать?</h2>
                <p className="home__cta-text">Зарегистрируйтесь за минуту - и получите доступ к каталогу.</p>
                <Link to="/register" className="home__btn home__btn--primary">Зарегистрироваться</Link>
            </section>
        </div>
    )
}