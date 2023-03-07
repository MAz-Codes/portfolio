import './App.css'
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Work from './Pages/Work';
import About from './Pages/About';
import Contact from './Pages/Contact';
import AnimatedRoutes from './Elements/AnimatedRoutes';


function App() {

  return (
    <div className="App">
          <AnimatedRoutes />
    </div>
  )
}

export default App
