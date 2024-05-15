import ShowList from "./ShowList";
import { ShowT } from "../../types";
import { useFetchData } from "../../hooks/useFetchData";

const ShowsContainer = () => {
  const [shows, loading, error] = useFetchData("https://api.themoviedb.org/3/tv/top_rated");

  return (
    <ShowList
      loading={loading as boolean}
      error={error as boolean}
      shows={shows as ShowT[]}
    />
  );
};

export default ShowsContainer;
