import React from 'react';
import { Routes, Route } from 'react-router-dom';
import App from './App'; // Import the App component
import Gallery from './components/carosoule/carosoule1';

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<App />} /> {/* Set the root path to render the App component */}
      <Route path="/gallery" element={<Gallery />} />
    </Routes>
  );
}

export default AppRoutes;
