import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Service from './components/Service';
import Giving from "./components/Giving";

const AppRouting = () => {
   return (
     <Router>
       <Navbar />
       <Routes>
         <Route path="/" element={<Home />} />
         <Route path="/about" element={<About />} />
         <Route path="/service" element={<Service />} />
         <Route path="/giving" element={<Giving />} />
       </Routes>
     </Router>
   );
};
   
export default AppRouting;