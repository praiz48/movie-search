import { useState, useEffect } from "react";
import SearchBar from "./components/SearchBar";
import MovieList from "./components/MovieList";
import MovieDetail from "./components/MovieDetail";
function App() {
  const [movies, setMovies] = useState([
    {
      Title: "Batman Begins",
      Year: "2005",
      imdbID: "tt0372784",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BODIyMDdhNT…WE2NDItODA5MTdkNzY3ZTdhXkEyXkFqcGc@._V1_SX300.jpg",
    },
  ]);
  const [notFound, setNotFound] = useState(false);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [loading, setLoading] = useState(false);
  const [query, setQuery] = useState("deadpool");
  useEffect(() => {
    const fetchMovies = async () => {
      setLoading(true);
      try {
        const response = await fetch(
          `https://www.omdbapi.com/?s=${query}&apikey=ab2c820e`
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        const list_movies = data.Search;
        if (!list_movies) {
          setNotFound(true);
          setMovies([]);
          return;
        }
        setMovies(list_movies);
        setNotFound(false);
      } catch (error) {
        console.error("Error fetching movies:", error);
        alert("problem encountered");
        setNotFound(true);
        setMovies([]);
      } finally {
        setLoading(false);
      }
    };
    setSelectedMovie("");
    if (query) {
      fetchMovies();
    } else {
      setMovies([]);
      setNotFound(true);
    }
  }, [query]);

  return (
    <>
      <div className="App">
        <h1>Movie Searcher</h1>
        <SearchBar onSearch={setQuery} />
        {notFound && <p>No movies found</p>}
        {loading ? (
          <p>Loading...</p>
        ) : (
          <div>
            <MovieList Movies={movies} onMovieSelect={setSelectedMovie} />
            <MovieDetail movie_id={selectedMovie} />
          </div>
        )}
      </div>
    </>
  );
}

export default App;
