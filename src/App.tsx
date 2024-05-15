import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
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
