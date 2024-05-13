import { number, string } from "prop-types";
import { Link } from "react-router-dom";

const MovieCard = ({ id, title, overview }) => {
  return (
    <Link to={`/movie/${id}`}>
      <p>{title}</p>
      <p>{overview}</p>
      <hr/>
    </Link>
  );
};
MovieCard.propTypes = {
  title: string,
  id: number,
  overview: string
};
export default MovieCard;
