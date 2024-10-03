import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/home';
import BusSearch from './pages/bussearch';


const App = () => {
  return (
    <Router >
      {/* <Navbar /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/bussearch" element={<BusSearch />} />
      </Routes>
    </Router>
  );
}

export default App;
