import { useParams } from "react-router-dom";
import { useDisplayState } from "../../hooks";
import useFetchRoute from "../../hooks/useFetchRoute";
import constructRoute from "../../utils/constructRoute";
import RouteDetails from "./RouteDetails";
import { RouteDataT } from "../../types";

const RouteContainer = () => {
  const { contentType, id } = useParams();
  const { baseLink } = useDisplayState();
  const route = constructRoute(
    contentType as string,
    id as string,
    baseLink as string
  );
  const [data, loading, error] = useFetchRoute(route);

  return (
    <RouteDetails
      data={data as RouteDataT}
      loading={loading as boolean}
      error={error as boolean}
    />
  );
};

export default RouteContainer;
