import { useState } from "react";
import { movies } from "../../data/movies.js";
import MovieCard from "../../components/MovieCard/MovieCard.jsx";
import SearchBar from "../../components/SearchBar/SearchBar.jsx";
import './CatalogPage.css'

export default function CatalogPage() {
    const [query, setQuery] = useState("")

    const normalizedQuery = query.trim().toLowerCase()

    const filteredMovies = normalizedQuery
    ? movies.filter((movie) => {
        const title = movie.title.toLowerCase()
        const originalTitle = movie.originalTitle.toLowerCase()
        return (
            title.includes(normalizedQuery) || originalTitle.includes(normalizedQuery)
        )
    })
    : movies

    const isSearching = normalizedQuery.length > 0
    const hasResults = filteredMovies.length > 0

    return (
        <section className="catalog">
            <header className="catalog__header">
                <h1 className="catalog__title">Каталог фильмов</h1>
                <p className="catalog__subtitle">{isSearching ? `Найдено: ${filteredMovies.length} из ${movies.length}` : `${movies.length} фильмов в подборке - от классики до новинок`}</p>
            </header>

            <SearchBar value={query} onChange={setQuery} placeholder="Найти фильм по названию..."></SearchBar>

            {hasResults ? (
                <div className="catalog__grid">
                    {filteredMovies.map((movie) => (
                        <MovieCard key={movie.id} movie={movie}></MovieCard>
                    ))}
                </div>
            ) : (
                <div className="catalog__empty">
                    <p className="catalog__empty-title">Ничего не найдено</p>
                    <p className="catalog__empty-text">По запросу "{query}" совпадений нет.</p>
                    <button type="button" className="catalog__empty-btn" onClick={() => setQuery("")}>Сбросить поиск</button>
                </div>
            )}
        </section>
    )
}