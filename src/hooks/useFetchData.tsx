import { useEffect, useState } from "react";
import axios from "axios";

export const useFetchData = (endpoint:string) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  async function fetchData() {
    setLoading(true);
    try {
      const response = await axios.get(endpoint, {
        params: {
          api_key: "516bd90eaa5d6fc72dd79e7ba1bfaa28",
        },
      });
      setLoading(false);
      setData(response.data.results);
    } catch (err) {
      setError(true);
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  return [data, loading, error];
};
