import { useContext } from "react";
import { QueryContext } from "../context/QueryContext";

const SearchBar = () => {
  const ctx = useContext(QueryContext);
  const handler = (event: React.ChangeEvent<HTMLInputElement>) => {
    ctx.setQuery(event.target.value);
  };
  return (
    <div>
      <input
        type="text"
        placeholder="Search..."
        name="searchQuery"
        onChange={handler}
      />
    </div>
  );
};

export default SearchBar;
