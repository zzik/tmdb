import { array, bool } from "prop-types";
import MovieCard from "./MovieCard";

const MovieList = ({ loading, error, movies }) => {
  if (loading && !error) return <div>Loading...</div>;
  if (!loading && error) return <div>error occurred.unable to load movies</div>;
  if (!movies) return null;
  return (
    <ul>
      {movies.slice(0, 10).map((movie) => (
        <MovieCard key={movie.id} id={movie.id} title={movie.title} overview={movie.overview} />
      ))}
    </ul>
  );
};
MovieList.propTypes = {
  loading: bool,
  error: bool,
  movies: array,
};
export default MovieList;
