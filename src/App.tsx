import Display from "./components/Display";
import { Route, Routes } from "react-router-dom";
import RouteContainer from "./components/Route/RouteContainer";
import { TypeContext, EndpointContext, QueryContext } from "./context";
import { useDisplayState } from "./hooks";

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
            <Route path="/:contentType/:id" element={<RouteContainer />} />
          </Routes>
        </EndpointContext.Provider>
      </TypeContext.Provider>
    </QueryContext.Provider>
  );
}

export default App;
