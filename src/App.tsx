import React, { useState, useEffect } from 'react';
import Loader from "./Loader/Loader";
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Index from './Components/Landing Page/Index';
import Layout from './Components/Sections/Layout';

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
          {/* Define your routes here */}
          <Route path="/techyahad-portfolio" element={<Layout />}>
            <Route index element={<Index />} />
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
