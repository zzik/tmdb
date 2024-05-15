import ShowCard from "./ShowCard";
import { ShowState } from "../../types";

const ShowList = ({ loading, error, shows }: ShowState) => {
  if (loading && !error) return <div>Loading...</div>;
  if (!loading && error) return <div>error occurred.unable to load movies</div>;
  if (!shows) return null;
  return (
    <div>
      {shows.slice(0, 10).map((show) => (
        <ShowCard
          key={show.id}
          id={show.id}
          name={show.name}
          overview={show.overview}
          image_path={show.backdrop_path}
        />
      ))}
    </div>
  );
};

export default ShowList;
