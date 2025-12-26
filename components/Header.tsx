
import React, { useState, useEffect } from 'react';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <div className="flex flex-col">
          <span className={`text-2xl font-serif tracking-widest transition-colors duration-500 ${isScrolled ? 'text-stone-800' : 'text-stone-800'}`}>SOULSPRINGS</span>
          <span className={`text-[10px] tracking-[0.3em] uppercase transition-colors duration-500 ${isScrolled ? 'text-stone-500' : 'text-stone-600'}`}>Wellness Spa</span>
        </div>
        
        <nav className="hidden md:flex space-x-10 items-center">
          <a href="#about" className="text-sm tracking-widest uppercase hover:text-gold transition-colors">About</a>
          <a href="#services" className="text-sm tracking-widest uppercase hover:text-gold transition-colors">Treatments</a>
          <a href="#reviews" className="text-sm tracking-widest uppercase hover:text-gold transition-colors">Testimonials</a>
          <a href="#location" className="text-sm tracking-widest uppercase hover:text-gold transition-colors">Location</a>
          <a href="#contact" className="px-6 py-2 bg-sage-900 text-white text-xs tracking-widest uppercase rounded-full hover:bg-stone-800 transition-all">Book Now</a>
        </nav>
        
        <button className="md:hidden text-stone-800">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </header>
  );
};

export default Header;
