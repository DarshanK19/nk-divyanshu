import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Projects from './pages/Projects';
import Packages from './pages/Packages';
import Contact from './pages/Contact';
import Silver from './pages/Silver';
import Gold from './pages/Gold';
import Platinum from './pages/Platinum';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/packages" element={<Packages />} />
          <Route path="/packages/silver" element={<Silver />} />
          <Route path="/packages/gold" element={<Gold />} />
          <Route path="/packages/platinum" element={<Platinum />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
