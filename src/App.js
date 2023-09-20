import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Nav from './components/nav/Navbar.js'; // Import your Nav component
import Home from './components/home/Home.js'; // Import your Home component
import Gallery from './components/gallery/gallery.js'; // Import your Gallery component
import Dapps from './components/dapps/web3dapps.js'; // Import your Mint component

function App() {
  return (
    <Router>
          

      <Nav /> 
      <Routes>
        <Route path="/" element={<Home />} /> {/* Define routes */}
         <Route path="/gallery" element={<Gallery />} />
        <Route path="/dapps" element={<Dapps />} /> 
      </Routes>
    </Router>

  );
}

export default App;
