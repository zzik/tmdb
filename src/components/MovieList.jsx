import { array, bool } from "prop-types";
import MovieCard from "./MovieCard";
import { ImageList } from "@mui/material";

const MovieList = ({ loading, error, movies }) => {
  if (loading && !error) return <div>Loading...</div>;
  if (!loading && error) return <div>error occurred.unable to load movies</div>;
  if (!movies) return null;
  return (
    <ImageList cols={2}>

      {movies.slice(0, 10).map((movie) => (
        <MovieCard
          key={movie.id}
          id={movie.id}
          title={movie.title}
          overview={movie.overview}
          image_path={movie.backdrop_path}
        />
      ))}
    </ImageList>
  );
};
MovieList.propTypes = {
  loading: bool,
  error: bool,
  movies: array,
};
export default MovieList;
