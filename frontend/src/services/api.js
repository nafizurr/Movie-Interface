const API_KEY = "60c30b995f9b41ce0748e01fa81efd32";
const BASE_URL = "https://api.themoviedb.org/3";

export const getPopularMovies = async () => {
    try {
        const response = await fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}`);
        if (!response.ok) {
            throw new Error("Failed to fetch popular movies");
        }
        const data = await response.json();
        return data.results;
    } catch (error) {
        console.error("Error fetching popular movies:", error);
        return [];
    }
}
export const searchMovies = async (query) => {
    try {
        const response = await fetch(`${BASE_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(query)}`);
        if (!response.ok) {
            throw new Error("Failed to search movies");
        }
        const data = await response.json();
        return data.results;
    } catch (error) {
        console.error("Error searching movies:", error);
        return [];
    }
}