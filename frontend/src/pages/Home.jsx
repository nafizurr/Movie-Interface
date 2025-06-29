import Moviecard from "../components/Moviecard";
import { useState } from "react";
{/*When a state change occurs, the entire component is reran, so me typing "T" into the search bar would be running the component to find me my movies*/}

function Home() {
    const [searchQuery, setSearchQuery] = useState("");

    const movies = [
        {id: 1, title: "Inception", release_date: 2010},
        {id: 2, title: "The Matrix", release_date: 1999},
        {id: 3, title: "Interstellar", release_date: 2014},
        {id: 4, title: "The Shawshank Redemption", release_date: 1994},
        {id: 5, title: "Pulp Fiction", release_date: 1994},
        {id: 6, title: "The Godfather", release_date: 1972},
        {id: 7, title: "The Dark Knight", release_date: 2008},
    ]

    const handleSearch = () => {
        e.preventDefault(); // Prevent the default form submission behavior
        alert(searchQuery);
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

        <div className="movies-grid">
            {movies.map((movie) => ( 

                <Moviecard movie={movie} key={movie.id} />
            ))}

        </div>
    </div>
    )
}

export default Home;