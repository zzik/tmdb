import { Link } from "react-router-dom";

const MovieCard = ({ id, title, overview, image_path }:{id:number, title: string, overview: string, image_path:string}) => {
  return (
    <Link to={`/movie/${id}`}>
      <p>{title}</p>
        <img loading="lazy" alt={`${overview}`} src={`https://image.tmdb.org/t/p/w780/${image_path}`} />
      <p>{overview}</p>
    </Link>
  );
};

export default MovieCard;
