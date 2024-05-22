import Display from "./components/Display";
import { Route, Routes } from "react-router-dom";
import RouteContainer from "./components/Route/RouteContainer";
import { TypeContext, EndpointContext, QueryContext } from "./context";

function App() {

  return (
    <BrowserRouter>
      <Display />
    </BrowserRouter>
  )
}

export default App
