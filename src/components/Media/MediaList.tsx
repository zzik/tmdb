import MediaCard from "./MediaCard";
import { MediaState } from "../../types";
import { useContext } from "react";
import { QueryContext } from "../../context";

const MediaList = ({ loading, error, data }: MediaState) => {
  const queryContext = useContext(QueryContext)
  
  if (loading && !error) return <div>Loading...</div>;
  if (!loading && error) return <div>Error occurred. Unable to load media</div>;
  if (!data) return null;
  
  const activeSearch = queryContext.queryMode ? data.length : 10

  return (
    <>
      {data.slice(0, activeSearch).map((item) => (
        <MediaCard
          key={item.id}
          id={item.id}
          title={item.title || item.name}
          overview={item.overview}
          backdrop_path={item.backdrop_path}
          poster_path={item.poster_path}
        />
      ))}
    </>
  );
};

export default MediaList;
