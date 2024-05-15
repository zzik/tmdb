import MovieList from "./MovieList";
import {useFetchMovies} from '../hooks/useFetchMovies'

const MoviesContainer = () => {
  const [movies, loading, error] = useFetchMovies()

  return (
    <MovieList loading={loading} error={error} movies={movies} />
  );
};

export default MoviesContainer;
