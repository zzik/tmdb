import MovieList from "./MovieList";
import { MovieT } from "../../types";
import { useFetchData } from "../../hooks/useFetchData";

const MoviesContainer = () => {
  const [movies, loading, error] = useFetchData('https://api.themoviedb.org/3/movie/top_rated')

  return (
    <MovieList loading={loading as boolean} error={error as boolean} movies={movies as MovieT[]} />
  );
};

export default MoviesContainer;
