import Moviecard from "../components/Moviecard";

function Home() {
    const movies = [
        {id: 1, title: "Inception", release_date: 2010},
        {id: 2, title: "The Matrix", release_date: 1999},
        {id: 3, title: "Interstellar", release_date: 2014},
        {id: 4, title: "The Shawshank Redemption", release_date: 1994},
        {id: 5, title: "Pulp Fiction", release_date: 1994},
        {id: 6, title: "The Godfather", release_date: 1972}
    ]
    
    return <div className="home"> 
        <div className="movies-grid">
            {movies.map(movie => (
                <Moviecard movie={movie} key={movie.id} />
            ))}

        </div>
    </div>
    
}