import React, {useState, useEffect, createContext} from 'react'
import { Route, Routes, useLocation } from "react-router-dom";
import Home from "../Pages/Home";
import Work from '../Pages/Work';
import About from '../Pages/About';
import Contact from '../Pages/Contact';
import {AnimatePresence} from "framer-motion"


export const ThemeContext = createContext();

function AnimatedRoutes() {
    const location = useLocation()
    const [isClicked, setIsClicked] = useState(false);

    const handleClick = () => {
      setIsClicked(!isClicked);
    };

    useEffect(() => {
      document.body.style.background = isClicked ? "linear-gradient(to right, #000000, #2C3E50)" : "linear-gradient(to right, #5D4157, #A8CABA)";
    }, [isClicked]);

  return (
    <ThemeContext.Provider value={{ isClicked, handleClick }}>
      <AnimatePresence >
        <div>
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Home />} />
            <Route path="/work" element={<Work />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </AnimatePresence>
    </ThemeContext.Provider>
  )
}

export default AnimatedRoutes