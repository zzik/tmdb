import { useEffect, useState } from "react";
import axios from "axios";

const useFetchRoute = (route: string) => {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchRoute = async () => {
      setLoading(true);
      try {
        const response = await axios.get(route, {
          params: {
            api_key: "516bd90eaa5d6fc72dd79e7ba1bfaa28",
          },
        });
        setLoading(false);
        setData(response.data);
      } catch (err) {
        setError(true);
        setLoading(false);
      } finally {
        setLoading(false);
      }
    };
    fetchRoute();
  }, [route]);

  return [data, loading, error];
};
export default useFetchRoute;
