
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="py-20 bg-stone-50 border-t border-stone-200">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-10 md:space-y-0">
          <div className="text-center md:text-left">
            <span className="text-2xl font-serif tracking-widest text-stone-800 block">SOULSPRINGS</span>
            <span className="text-[10px] tracking-[0.3em] uppercase text-stone-500">Wellness Spa</span>
          </div>
          
          <div className="flex space-x-12">
            <a href="#about" className="text-[10px] tracking-widest uppercase text-stone-400 hover:text-gold transition-colors">About</a>
            <a href="#services" className="text-[10px] tracking-widest uppercase text-stone-400 hover:text-gold transition-colors">Services</a>
            <a href="#location" className="text-[10px] tracking-widest uppercase text-stone-400 hover:text-gold transition-colors">Location</a>
          </div>
          
          <div className="text-center md:text-right">
            <p className="text-[10px] tracking-widest uppercase text-stone-400 mb-2">Privacy & Policy</p>
            <p className="text-stone-400 text-xs font-light">© 2024 Soulsprings Wellness Spa. All rights reserved.</p>
          </div>
        </div>
        
        <div className="mt-20 text-center">
          <div className="inline-block p-1 bg-gradient-to-r from-transparent via-stone-300 to-transparent w-full h-[1px]"></div>
          <p className="mt-8 text-[10px] tracking-[0.5em] uppercase text-stone-300">Sanctuary of Nairobi</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
