import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import News from './components/News';

import Home from './pages/Home';

const App = () => {
  return (
    <>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/news/:id" element={<News />} />
    </Routes>
    <Footer/>
    </>
  );
}

export default App