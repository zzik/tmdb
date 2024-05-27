import { useContext } from "react";
import { QueryContext } from "../context";
import { queryHandler } from "../utils";

const SearchBar = () => {
  const queryContext = useContext(QueryContext);
  return (
    <div className="search-bar">
      <input
        className="search-bar__input"
        type="text"
        placeholder="Search..."
        name="searchQuery"
        onChange={(event) => {
          queryHandler({ event, queryContext });
        }}
        defaultValue={`${queryContext.query}`}
      />
    </div>
  );
};

export default SearchBar;
