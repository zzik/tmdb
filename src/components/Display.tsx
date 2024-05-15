import ContentTypeSwitch from "./ContentTypeSwitch";
import SearchBar from "./SearchBar";
import DataList from "./DataList";
import { TypeContext } from "../context/TypeContext";
import { useState } from "react";
import { QueryContext } from "../context/QueryContext";

const Display = () => {
  const [type, setType] = useState("movie");
  const [query, setQuery] = useState("");
  return (
    <TypeContext.Provider value={{ type, setType }}>
      <QueryContext.Provider value={{ query, setQuery }}>
        <SearchBar />
        <ContentTypeSwitch />
        <DataList />
      </QueryContext.Provider>
    </TypeContext.Provider>
  );
};

export default Display;
