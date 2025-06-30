import '../css/MovieCard.css'; 
import { useMovieContext } from '../contexts/MovieContext';

function MovieCard({movie}) { //info about the movie
const { addToFavorites, removeFromFavorites, isFavorite } = useMovieContext();
        const favorite = isFavorite(movie.id); //check if the movie is already a favorite {

    function onFavoriteClick(e) {
        e.preventDefault(); //prevent the default action of the button
        if (favorite) {
            removeFromFavorites(movie.id); //if the movie is already a favorite, remove it from favorites
        } else {
            addToFavorites(movie); //if the movie is not a favorite, add it to favorites
    }
}
        

    return <div className="movie-card"> {/* in my movie card, i have the image, the overlay and the button that will blur out and show the heart, all inside the parent div, on child being the poster and the other being info */}
        <div className="movie-poster">
            <img src = {`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt = {movie.title}/>
            <div className = "movie-overlay">
                <button className= {`favorite-btn ${favorite ? "active" : ""}`} onClick = {onFavoriteClick}>
                    ❤️
                </button>
            </div>
        </div>
        <div className="movie-info">
            <h3>{movie.title}</h3> {/* Using Braces as a variable */}
            <p>{movie.release_date?.split("-")[0]}</p>
        </div>
    </div>
}

export default MovieCard