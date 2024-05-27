import { Link } from "react-router-dom";
import { MediaT } from "../../types";
import { useContext } from "react";
import { TypeContext } from "../../context";
import useImagePath from "../../hooks/useImagePath";

const MediaCard = ({
  id,
  name,
  title,
  overview,
  backdrop_path,
  poster_path,
}: MediaT) => {
  const { type } = useContext(TypeContext);
  const imagePath = useImagePath({ backdrop_path, poster_path });
  const media_title = title === undefined ? name : title;
  return (
    <Link className="media-item" to={`/${type}/${id}`}>
      <img
        className="media-item__image"
        loading="lazy"
        alt={`${overview}`}
        src={`${imagePath}`}
      />
      <div className="media-item__title-container">
        <h3>{media_title}</h3>
      </div>
    </Link>
  );
};

export default MediaCard;
