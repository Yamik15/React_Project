import './SearchBar.css'

export default function SearchBar({ value, onChange, placeholder }) {
    return (
        <div className="search-bar">
            <span className="search-bar__icon" aria-hidden='true'>🔍</span>
            <input type="text" className='search-bar__input' value={value} onChange={(e) => onChange(e.target.value)} placeholder={placeholder || "Поиск..."} aria-label='Поиск фильмов' />
            {value && (
                <button type='button' className='search-bar__clear' onClick={() => onChange('')} aria-label="Очистить поиск">✕</button>
            )}
        </div>
    )
}