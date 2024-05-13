import { useEffect, useState } from "react";
import axios from "axios";
import MovieList from "./MovieList";

const MoviesContainer = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  const getMovies = async () => {
    setIsLoading(true);
    try {
      const data = await axios.get(
        "https://api.themoviedb.org/3/movie/top_rated",
        {
          params: {
            api_key: "516bd90eaa5d6fc72dd79e7ba1bfaa28",
          },
        }
      );
      // console.log(data.data.results)
      setIsLoading(false);
      if (!data) return;
      setMovies(data.data.results);
    } catch (err) {
      setError(true);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <MovieList loading={isLoading} error={error} movies={movies} />
  );
};

export default MoviesContainer;
