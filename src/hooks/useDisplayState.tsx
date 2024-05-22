import { useState } from "react";

const useDisplayState = () => {
  const [type, setType] = useState("movie");
  const [query, setQuery] = useState("");
  const [queryMode, setQueryMode] = useState(false);
  const [baseLink, setBaseLink] = useState("https://api.themoviedb.org/3");

  return {
    type,
    setType,
    query,
    setQuery,
    queryMode,
    setQueryMode,
    baseLink,
    setBaseLink,
  };
};

export default useDisplayState;
