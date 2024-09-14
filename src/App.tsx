import React, { useState, useEffect } from 'react';
import Loader from "./Loader/Loader"
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Index from './Components/Landing Page/Index';
import BlogsSection from './Components/Sections/Blogs/BlogsSection';
import Portfolio from './Components/Sections/Portfolio/Portfolio';
import Layout from './Components/Sections/Layout';
import ContactSection from './Components/Sections/Contact/ContactSection';
import About from './Components/Sections/About/AboutSection';
import ServicesSection from './Components/Sections/Services/ServicesSection';
import "./App.css"

const App: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const location = useLocation();

  useEffect(() => {
    const handleStart = () => setLoading(true);
    const handleComplete = () => setLoading(false);

    handleStart(); // Start loading spinner
    const timer = setTimeout(handleComplete, 1000); // Simulate delay
    return () => clearTimeout(timer); // Cleanup
  }, [location]); // Runs on location change

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Index />} />
            <Route path="blogs" element={<BlogsSection />} />
            <Route path="portfolio" element={<Portfolio />} />
            <Route path="about" element={<About />} />
            <Route path="services" element={<ServicesSection />} />
            <Route path="contact" element={<ContactSection />} />
            <Route path="home" element={<Index />} />
          </Route>
        </Routes>
      )}
    </>
  );
};

const MainApp: React.FC = () => (
  <Router>
    <App />
  </Router>
);

export default MainApp;
