import React from 'react'
import { Route, Routes, useLocation } from "react-router-dom";
import Home from "../Pages/Home";
import Work from '../Pages/Work';
import About from '../Pages/About';
import Contact from '../Pages/Contact';
import {AnimatePresence} from "framer-motion"

function AnimatedRoutes() {
    const location = useLocation()

  return (
    <AnimatePresence >
        <div>
            <Routes location={location} key={location.pathname}>
                <Route path="/portfolio" element={<Home />} />
                <Route path="/portfolio/work" element={<Work />} />
                <Route path="/portfolio/about" element={<About />} />
                <Route path="/portfolio/contact" element={<Contact />} />
            </Routes>
        </div>
    </AnimatePresence>
  )
}

export default AnimatedRoutes