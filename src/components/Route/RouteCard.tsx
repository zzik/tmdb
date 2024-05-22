import { Link } from "react-router-dom";
import { RouteDataT } from "../../types";
import { useContext } from "react";
import { QueryContext } from "../../context";

const RouteDetails = ({ title, overview, backdrop_path, name }: RouteDataT) => {
  const imageLink = backdrop_path
    ? `https://image.tmdb.org/t/p/w780/${backdrop_path}`
    : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7nlpbOs-w7q6dGxP5zYBgSeiX7pUAh-0QdDWS-KW1k_wxnv9Obw5B7NaEMwCOwfTwDWs&usqp=CAU";
  const mediaName = title ? title : name;
  const queryContext = useContext(QueryContext);

  console.log(queryContext.query);
  return (
    <div>
      <Link to={`/`}>BACK</Link>
      <img src={imageLink} alt={overview} />
      <p>{mediaName}</p>
      <p>{overview}</p>
    </div>
  );
};

export default RouteDetails;
