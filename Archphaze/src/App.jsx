import React from 'react'
import Navbar from './components/Navbar';
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from './components/Index';
import Services from './components/Services';
import Whyus from './components/Whyus';
import Testimonial from './components/Testimonial';
import Aboutus from './components/Aboutus';
import Contactus from './components/Contactus';
import Footer from './components/Footer';
import SecondaryFooter from './components/SecondaryFooter';



export default function App() {
  return (
    <div>
      <Router>
        <Navbar />
         <Routes>
          <Route path="/" element={<Index/>}/>
          <Route path="/Aboutus" element={<Aboutus/>}/>
          <Route path="/Contactus" element={<Contactus/>}/>
          <Route path="/Testimonial" element={<Testimonial/>}/>
          <Route path="/Services" element={<Services/>}/>
          <Route path="/Whyus" element={<Whyus/>}/>
       
          
        </Routes>
        <SecondaryFooter/>
        <Footer/>
      </Router>
    </div>
  )
}
