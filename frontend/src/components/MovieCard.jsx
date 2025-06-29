import '../css/MovieCard.css'; 
function MovieCard({movie}) { //info about the movie

    function onFavoriteClick() {
        alert("clicked")
    }

    return <div className="movie-card"> {/* in my movie card, i have the image, the overlay and the button that will blur out and show the heart, all inside the parent div, on child being the poster and the other being info */}
        <div className="movie-poster">
            <img src = {movie.url} alt = {movie.title}/>
            <div className = "movie-overlay">
                <button className="favorite-btn" onclick = {onFavoriteClick}>
                    ❤️
                </button>
            </div>
        </div>
        <div className="movie-info">
            <h3>{movie.title}</h3> {/* Using Braces as a variable */}
            <p>{movie.release_date}</p>
        </div>
    </div>
}

export default MovieCard