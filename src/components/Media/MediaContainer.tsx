import { MediaT } from "../../types";
import MediaList from "./MediaList";
import { useFetchList, useEndpoint } from "../../hooks";

const MediaContainer = () => {
  const endpoint = useEndpoint();
  const [data, loading, error] = useFetchList(endpoint);
  return (
    <div className="media-container">
      <MediaList
        loading={loading as boolean}
        error={error as boolean}
        data={data as MediaT[]}
      />
    </div>
  );
};

export default MediaContainer;
