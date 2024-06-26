import { useParams } from "react-router-dom";
import { useDisplayState, useFetchItem } from "../../hooks";
import constructRoute from "../../utils/constructRoute";
import { DetailsData } from "./";
import { MediaT } from "../../types";

const DetailsContainer = () => {
  const { contentType, id } = useParams();
  const { baseLink } = useDisplayState();
  const route = constructRoute(
    contentType as string,
    id as string,
    baseLink as string
  );
  const [data, loading, error] = useFetchItem(route);

  return (
    <DetailsData
      data={data as MediaT}
      loading={loading as boolean}
      error={error as boolean}
    />
  );
};

export default DetailsContainer;
