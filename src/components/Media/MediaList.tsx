import MediaCard from "./MediaCard";
import { MediaState } from "../../types";

const MediaList = ({ loading, error, media }: MediaState) => {
  if (loading && !error) return <div>Loading...</div>;
  if (!loading && error) return <div>Error occurred. Unable to load media</div>;
  if (!media) return null;
  return (
    <div>
      {media.slice(0, 10).map((item) => (
        <MediaCard
          key={item.id}
          id={item.id}
          title={item.title || item.name}
          overview={item.overview}
          image_path={item.backdrop_path}
        />
      ))}
    </div>
  );
};

export default MediaList;
