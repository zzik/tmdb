import Display from "./components/Display";
import { Route, Routes } from "react-router-dom";
import { DetailsContainer } from "./components/Details";
import { TypeContext, EndpointContext, QueryContext } from "./context";
import { useDisplayState } from "./hooks";
import "./styles/index.css";

function App() {
  const {
    type,
    setType,
    query,
    setQuery,
    queryMode,
    setQueryMode,
    baseLink,
    setBaseLink,
  } = useDisplayState();
  return (
    <QueryContext.Provider value={{ query, setQuery, queryMode, setQueryMode }}>
      <TypeContext.Provider value={{ type, setType }}>
        <EndpointContext.Provider value={{ baseLink, setBaseLink }}>
          <Routes>
            <Route path={`/`} element={<Display />} />
            <Route path="/:contentType/:id" element={<DetailsContainer />} />
          </Routes>
        </EndpointContext.Provider>
      </TypeContext.Provider>
    </QueryContext.Provider>
  );
}

export default App;
