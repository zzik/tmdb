import { Link } from "react-router-dom";
import { MediaT } from "../../types";
import useImagePath from "../../hooks/useImagePath";
import Container from "../Video/Container";

const DetailsCard = ({
  name,
  title,
  overview,
  backdrop_path,
  poster_path,
}: MediaT) => {
  const media_title = title === undefined ? name : title;
  const imagePath = useImagePath({ backdrop_path, poster_path });

  return (
    <div className="details">
      <div className="details__media">
        <Container imagePath={imagePath} alt={overview} />
      </div>
      <a className="details__link" href="">
        <h2>{media_title}</h2>
      </a>
      <p className="details__overview">{overview}</p>
      <Link className="details__back-button" to={`/`}>
        BACK
      </Link>
    </div>
  );
};

export default DetailsCard;
