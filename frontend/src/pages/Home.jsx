import Moviecard from "../components/MovieCard";
import { useState, useEffect, use } from "react";
import { searchMovies, getPopularMovies } from "../services/api";
import '../css/Home.css'; 
{/*When a state change occurs, the entire component is reran, so me typing "T" into the search bar would be running the component to find me my movies*/}

function Home() {
    const [searchQuery, setSearchQuery] = useState("");
    const [movies, setMovies] = useState([]); // State to hold the list of movies
    const [error, setError] = useState(null); // State to hold any error messages
    const [loading, setLoading] = useState(true); // State to manage loading state

    useEffect(() => {
        const fetchMovies = async () => {
            try {
                const popularMovies = await getPopularMovies(); // Fetch popular movies
                setMovies(popularMovies); // Set the fetched movies to state
            } catch (err) {
                console.log("Error fetching movies:", err); // Log error to console
                setError("Failed to fetch movies. Please try again later."); // Set error message if fetching fails
            }
            finally {
                setLoading(false); // Set loading to false after fetching movies
            }
        };

        fetchMovies(); // Call the function to fetch movies
    }, []); // Empty dependency array means this effect runs once when the component mounts
    

    const handleSearch = async (e) => {
        e.preventDefault(); // Prevent the default form submission behavior
        
        if (!searchQuery.trim()) return
        if(loading) return; // Prevent multiple submissions while loading

        setLoading(true); // Set loading to true while fetching search results
        try {
            const searchResults = await searchMovies(searchQuery); // Call the searchMovies function with the search query
            setMovies(searchResults); // Set the search results to the movies state
            setError(null); // Clear any previous error messages
        } catch (err) {
            console.log("Error searching movies:", err); // Log error to console
            setError("Failed to fetch search results. Please try again later."); // Set error message if fetching fails
            
        } finally {
            setLoading(false); // Set loading to false after fetching search results
        }


        setSearchQuery(""); // Clear the search input after submission
    }
    
    
    return (
     <div className="home"> {/*mapping the const movie array and displaying based on id*/}
     
        {/* Search form - automatically adjusting based on whats typed as it called the onChange  */}
        <form onSubmit = {handleSearch} className="search-form">
            <input type="text" placeholder="Search for a movie..." 
            className="search-input" value = {searchQuery} 
            onChange={(e) => setSearchQuery(e.target.value)}/>
            <button type="submit" className="search-button">Search</button>
        </form>

        {error && (<div className="error-message">{error}</div> )}

        {loading ? (
            <div className="loading">Loading...</div>
        ) : (
            <div className="movies-grid">
            {movies.map((movie) => ( 
                <Moviecard movie={movie} key={movie.id} />
            ))}
        </div>  
        )}
    </div>
    );
}

export default Home;