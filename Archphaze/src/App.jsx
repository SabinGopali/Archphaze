import React from 'react'
import Navbar from './components/Navbar';
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from './components/Index';
import Services from './components/Services';



export default function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Index/>
        <Services/>
        <Routes>
          {/* <Route path="/" element={<Navbar/>}/> */}
        </Routes>
      </Router>
    </div>
  )
}
