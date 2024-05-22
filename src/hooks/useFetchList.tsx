import { useEffect, useState } from "react";
import axios from "axios";

// const YOUR_API_KEY = import.meta.env.VITE_API_KEY
const YOUR_API_KEY = "516bd90eaa5d6fc72dd79e7ba1bfaa28"


const useFetchList = (endpoint: string) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await axios.get(endpoint, {
          params: {
            api_key: YOUR_API_KEY,
          },
        });
        setLoading(false);
        setData(response.data.results);
      } catch (err) {
        setError(true);
        setLoading(false);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [endpoint]);

  return [data, loading, error];
};
export default useFetchList;
