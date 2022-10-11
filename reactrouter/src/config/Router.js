import React from "react";
import {
  BrowserRouter as Router,Routes,Route,Link
} from "react-router-dom";
import Home from "../Screens/home";
import About from "../Screens/about";
import Services from "../Screens/services";
import Contact from "../Screens/contact";
import Profile from "../Screens/profile";
import NotFound from "../Screens/notfound";
export default function AppRouter() {
  return (
    <Router>
        <div>
            <Link to ='home'>Home</Link>
            <Link to ='about'>about</Link>
            <Link to ='contact'>contact</Link>
            <Link to ='services'>services</Link>

        </div>
          <Routes>
        <Route path="home" element={<Home/>}/>
        <Route path="contact" element={<Contact/>}/>
        <Route path="services" element={<Services/>}/>
        <Route path="about" element={<About/>}/>
          </Routes>
    </Router>
  );
}