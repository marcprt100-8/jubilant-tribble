// index.js
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Utilisez Routes et Route
import Accueil from './Accueil';
import Services from './Services';
import Contact from './Contact';
import Navbar from './Navbar';

ReactDOM.render(
  <Router>
    <Routes> {/* Utilisez Routes ici */}
      <Route path="/" element={<Accueil />} />
      <Route path="/services" element={<Services />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
    <Navbar />
  </Router>,
  document.getElementById('root')
);
