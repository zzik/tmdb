import { RouteState } from "../../types";
import RouteCard from "./RouteCard";

const RouteDetails = ({ loading, error, data }: RouteState) => {
  if (loading && !error) return <div>Loading...</div>;
  if (!loading && error) return <div>Error occurred. Unable to load data</div>;
  if (!data) return null;
  return (
    <RouteCard
      name={data.name}
      title={data.title}
      overview={data.overview}
      backdrop_path={data.backdrop_path}
      poster_path={data.poster_path}
      id={data.id}
    />
  );
};

export default RouteDetails;
