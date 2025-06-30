import '../css/Favorites.css';
import { useMovieContext } from '../contexts/MovieContext';
import MovieCard from '../components/MovieCard';

function Favorites() {
    const { favorites } = useMovieContext(); // Get the favorites from the context

    if (favorites.length > 0) {
        return (
          <div>
            <h2 className='Favorites'>Your Favorites</h2>
        <div className="movies-grid">
                {favorites.map(movie => (
                  <MovieCard movie={movie} key={movie.id}  />
                ))}
            </div>
            </div>
        );
    }

    // If no favorites, show an empty state
    return <div className="favorites-empty">
        <h2>No Favorite Movies Listed.</h2>
        <p>Start Adding Some!</p>
    </div>
}

export default Favorites;