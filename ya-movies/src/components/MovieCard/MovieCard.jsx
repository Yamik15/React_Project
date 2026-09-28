import './MovieCard.css'

export default function MovieCard({ movie }) {
    return (
        <article className="movie-card">
            <div className="movie-card__poster-wrapper">
                <img src={movie.poster} alt={`Постер фильма '${movie.title}'`} className='movie-card__poster' loading='lazy' />
                <span className="movie-card__rating">★ {movie.rating}</span>
            </div>
            <div className="movie-card__body">
                <h3 className="movie-card__title">{movie.title}</h3>
                <p className="movie-card__meta">{movie.year} · {movie.genre}</p>
                <p className="movie-card__description">{movie.description}</p>
            </div>
        </article>
    )
}