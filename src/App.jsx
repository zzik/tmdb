import { BrowserRouter } from "react-router-dom";
import MoviesContainer from './components/MoviesContainer'

function App() {

  return (
    <BrowserRouter>
      <MoviesContainer />
    </BrowserRouter>
  )
}

export default App
