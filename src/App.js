import React, { useEffect, useState } from 'react';
import './App.css';
import Navbar from './Navbar';
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import Hero from './Hero';
import Specials from './Specials';
import Booking from './Booking';

function App() {
  
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path='/' element={<main><Hero/><Specials/></main>} />
          <Route path='/book' element={<main><Booking/></main>} />

        </Routes>
      </div>
    </Router>
  );
}

export default App;
