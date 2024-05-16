import { MediaT } from "./types";
import MediaList from "./MediaList";
import { useFetchData, useEndpoint } from "./hooks";

const MediaContainer = () => {
  const endpoint = useEndpoint();

  const [media, loading, error] = useFetchData(endpoint);

  return (
    <MediaList
      loading={loading as boolean}
      error={error as boolean}
      media={media as MediaT[]}
    />
  );
};

export default MediaContainer;
