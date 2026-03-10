import { Outlet, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Navbar from '../components/Website/Navbar';
import Footer from '../components/Website/Footer';

export default function MainLayout() {
  const location = useLocation();
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [location.pathname]);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />

      {/* Floating Action Buttons */}
      <div className="fixed bottom-8 left-8 flex flex-col gap-4 z-50">
        {/* WhatsApp */}
        <a
          href="https://wa.me/919999452314"
          target="_blank"
          rel="noopener noreferrer"
          className="w-14 h-14 bg-green-500 hover:bg-green-600 text-white rounded-full flex items-center justify-center shadow-lg transition-all hover:scale-110 animate-shake"
          title="WhatsApp"
        >
          <i className="fab fa-whatsapp text-2xl"></i>
        </a>

        {/* Call */}
        <a
          href="tel:+919999452314"
          className="w-14 h-14 bg-blue-500 hover:bg-blue-600 text-white rounded-full flex items-center justify-center shadow-lg transition-all hover:scale-110 animate-shake"
          title="Call"
        >
          <i className="fas fa-phone text-2xl"></i>
        </a>
      </div>

      {/* Back to Top - Right Side */}
      {showBackToTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 w-14 h-14 bg-black hover:bg-gray-800 text-white rounded-full flex items-center justify-center shadow-lg transition-all hover:scale-110 z-50"
          title="Back to Top"
        >
          <i className="fas fa-arrow-up text-xl"></i>
        </button>
      )}
    </div>
  );
}
