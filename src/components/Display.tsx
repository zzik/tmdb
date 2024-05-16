import { TypeContext, EndpointContext, QueryContext } from "../context";
import SearchBar from "./SearchBar";
import ContentTypeSwitch from "./ContentTypeSwitch";
import MediaContainer from "../MediaContainer";
import { useDisplayState } from "../hooks";

const Display = () => {
  const { type, setType, query, setQuery, queryMode, setQueryMode, baseLink, setBaseLink } = useDisplayState();
  
  return (
    <QueryContext.Provider value={{ query, setQuery, queryMode, setQueryMode }}>
      <TypeContext.Provider value={{ type, setType }}>
        <EndpointContext.Provider value={{ baseLink, setBaseLink }}>
          <SearchBar />
          <ContentTypeSwitch />
          <MediaContainer />
        </EndpointContext.Provider>
      </TypeContext.Provider>
    </QueryContext.Provider>
  );
};

export default Display;
