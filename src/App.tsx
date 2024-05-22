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
      <TypeContext.Provider value={{ type, setType }}>
        <EndpointContext.Provider value={{ baseLink, setBaseLink }}>
          <Routes>
            <Route path={`/`} element={<Display />} />
            <Route path="/:contentType/:id" element={<RouteContainer />} />
          </Routes>
        </EndpointContext.Provider>
      </TypeContext.Provider>
}

export default App
