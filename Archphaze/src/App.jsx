import React from 'react'
import Navbar from './components/Navbar';
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from './components/Index';
import Services from './components/Services';
import Whyus from './components/Whyus';



export default function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Index/>
        <Services/>
        <Whyus/>
        <Routes>
          {/* <Route path="/" element={<Navbar/>}/> */}
        </Routes>
      </Router>
    </div>
  )
}
