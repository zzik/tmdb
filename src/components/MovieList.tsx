import MovieCard from "./MovieCard";

type MovieT = {
  id: number;
  title: string;
  overview: string;
  backdrop_path: string;
};

const MovieList = ({
  loading,
  error,
  movies,
}: {
  loading: boolean;
  error: boolean;
  movies: MovieT[];
}) => {
  if (loading && !error) return <div>Loading...</div>;
  if (!loading && error) return <div>error occurred.unable to load movies</div>;
  if (!movies) return null;
  return (
    <div>
      {movies.slice(0, 10).map((movie) => (
        <MovieCard
          key={movie.id}
          id={movie.id}
          title={movie.title}
          overview={movie.overview}
          image_path={movie.backdrop_path}
        />
      ))}
    </div>
  );
};

export default MovieList;
