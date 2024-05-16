import { useContext } from "react";
import { QueryContext } from "../context";
import { queryHandler } from "../utils";

const SearchBar = () => {
  const queryContext = useContext(QueryContext);

  return (
    <div>
      <input
        type="text"
        placeholder="Search..."
        name="searchQuery"
        onChange={(event) => {
          queryHandler(event, queryContext);
        }}
      />
    </div>
  );
};

export default SearchBar;
