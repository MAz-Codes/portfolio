import './App.css'
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Work from './Pages/Work';
import About from './Pages/About';
import Contact from './Pages/Contact';


function App() {

  return (
    <div className="App">
          <Routes>
            <Route path="/portfolio" element={<Home />} />
            <Route path="/work" element={<Work />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
    </div>
  )
}

export default App
