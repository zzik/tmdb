import { Link } from "react-router-dom";
import { MediaData } from "../../types";
import { useContext } from "react";
import { TypeContext } from "../../context";

const MediaCard = ({ id, title, overview, image_path }: MediaData) => {
  const imagePath = image_path
    ? `https://image.tmdb.org/t/p/w780/${image_path}`
    : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7nlpbOs-w7q6dGxP5zYBgSeiX7pUAh-0QdDWS-KW1k_wxnv9Obw5B7NaEMwCOwfTwDWs&usqp=CAU";
  const typeContext = useContext(TypeContext);
  return (
    <Link to={`/${typeContext.type}/${id}`}>
      <img loading="lazy" alt={`${overview}`} src={imagePath} />
      <p>{title}</p>
    </Link>
  );
};

export default MediaCard;
