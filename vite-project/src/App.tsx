// import { useState, useEffect } from 'react'

import Navbar from './components/Navbar'
import { Outlet } from 'react-router-dom'
import ScrollToTop from './components/ScrollToTop'
import Footer from './components/Footer'
import { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

function App() {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const redirectPath = params.get('redirect');
    if (redirectPath && location.pathname === '/') {
      // Remove query param and navigate to correct path
      navigate(redirectPath, { replace: true });
    }
  }, [navigate, location]);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <ScrollToTop />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}


export default App
