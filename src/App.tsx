import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from '@dr.pogodin/react-helmet';
import Header from './components/Header';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import ToysCollection from './pages/ToysCollection';
import ProductDetails from './pages/ProductDetails';
import About from './pages/About';
import Contact from './pages/Contact';
import './App.css';

function App() {
  const maintenanceEnabled = process.env.REACT_APP_MAINTENANCE === 'true';
  const maintenanceMessage = process.env.REACT_APP_MAINTENANCE_MESSAGE || 'The site is temporarily unavailable for maintenance. Please check back soon.';

  if (maintenanceEnabled) {
    return (
      <div className="App" style={{ display: 'flex', minHeight: '100vh', alignItems: 'center', justifyContent: 'center', padding: '2rem', textAlign: 'center' }}>
        <div>
          <h1>We\'ll be back soon</h1>
          <p>{maintenanceMessage}</p>
        </div>
      </div>
    );
  }

  return (
    <HelmetProvider>
      <Router>
        <ScrollToTop />
        <div className="App">
          <Header />
          <main className="main-content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/toys" element={<ToysCollection />} />
              <Route path="/toy/:id" element={<ProductDetails />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </HelmetProvider>
  );
}

export default App;
