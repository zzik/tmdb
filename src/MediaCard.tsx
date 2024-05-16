import { Link } from "react-router-dom";
import { MediaData } from "./types";
import { useContext } from "react";
import { TypeContext } from "./context";

const MediaCard = ({ id, title, overview, image_path }: MediaData) => {
  const imagePath = `https://image.tmdb.org/t/p/w780/${image_path}`
  const typeContext = useContext(TypeContext)
  return (
    <Link to={`/${typeContext.type}/${id}`}>
      <img loading="lazy" alt={`${overview}`} src={imagePath} />
      <p>{title}</p>
    </Link>
  );
};

export default MediaCard;