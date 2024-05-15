import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { BrowserRouter } from "react-router-dom";
import Display from './components/Display';

function App() {

  return (
    <BrowserRouter>
      <Display />
    </BrowserRouter>
  )
}

export default App
