import Display from "./components/Display";
import { Route, Routes } from "react-router-dom";
import RouteContainer from "./components/Route/RouteContainer";

function App() {

  return (
    <BrowserRouter>
      <Display />
    </BrowserRouter>
  )
}

export default App
