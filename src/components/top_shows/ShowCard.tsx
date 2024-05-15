import { Link } from "react-router-dom";
import { ShowData } from "../../types";

const ShowCard = ({ id, name, overview, image_path } : ShowData) => {
  return (
    <Link to={`/tv/${id}`}>
        <img loading="lazy" alt={`${overview}`} src={`https://image.tmdb.org/t/p/w780/${image_path}`} />
        <p>{name}</p>
    </Link>
  );
};

export default ShowCard;
