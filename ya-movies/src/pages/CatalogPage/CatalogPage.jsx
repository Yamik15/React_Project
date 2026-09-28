import { movies } from "../../data/movies";
import MovieCard from "../../components/MovieCard/MovieCard";
import './CatalogPage.css'

export default function CatalogPage() {
    return (
        <section className="catalog">
            <header className="catalog__header">
                <h1 className="catalog__title">Каталог фильмов</h1>
                <p className="catalog__subtitle">{movies.length} фильмов в подборке - от классики до новинок</p>
            </header>

            <div className="catalog__grid">
                {movies.map((movie) => (<MovieCard key={movie.id} movie={movie}></MovieCard>))}
            </div>
        </section>
    )
}