import { RouteState } from "../../types";
import RouteCard from "./RouteCard";

const RouteDetails = ({ loading, error, data }: RouteState) => {
  if (loading && !error) return <div>Loading...</div>;
  if (!loading && error) return <div>Error occurred. Unable to load data</div>;
  if (!data) return null;
  return (
    <RouteCard
      title={data.title}
      name={data.name}
      backdrop_path={data.backdrop_path}
      overview={data.overview}
      id={data.id}
    />
  );
};

export default RouteDetails;
