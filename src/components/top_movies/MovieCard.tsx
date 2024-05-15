import { Link } from "react-router-dom";
import { MovieData } from "../../types";

const MovieCard = ({ id, title, overview, image_path } : MovieData) => {
  return (
    <Link to={`/movie/${id}`}>
        <img loading="lazy" alt={`${overview}`} src={`https://image.tmdb.org/t/p/w780/${image_path}`} />
        <p>{title}</p>
    </Link>
  );
};

export default MovieCard;
