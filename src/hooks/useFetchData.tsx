import { useEffect, useState } from "react";
import axios from "axios";

const useFetchData = (endpoint: string) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await axios.get(endpoint, {
          params: {
            api_key: import.meta.env.VITE_API_KEY,
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
export default useFetchData;
