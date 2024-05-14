import { useEffect, useState } from "react";
import axios from "axios";

export const useFetchMovies = () => {
    const [movies, setMovies] = useState([]);
    const [loading, setIsLoading] = useState(false);
    const [error, setError] = useState(false);

    const getMovies = async () => {
        setIsLoading(true);
        try {
          const data = await axios.get(
            "https://api.themoviedb.org/3/movie/top_rated",
            {
              params: {
                api_key: "516bd90eaa5d6fc72dd79e7ba1bfaa28",
              },
            }
          );
          setIsLoading(false);
          if (!data) return;
          setMovies(data.data.results);
        } catch (err) {
          setError(true);
        } finally {
          setIsLoading(false);
        }
      };

      useEffect(() => {
        getMovies();

      }, []);

      return [movies, loading, error]

}
