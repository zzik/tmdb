import { Link } from "react-router-dom";
import { MediaT } from "../../types";
import useImagePath from "../../hooks/useImagePath";


const RouteDetails = ({ name, title, overview, backdrop_path, poster_path }: MediaT) => {
    const media_title = title === undefined ? name : title
    const imagePath = useImagePath({backdrop_path, poster_path})
    console.log(imagePath)
  return (
    <div>
      <Link to={`/`}>BACK</Link>
      <img src={`${imagePath}`} alt={overview} />
      <p>{media_title}</p>
      <p>{overview}</p>
    </div>
  );
};

export default RouteDetails;
