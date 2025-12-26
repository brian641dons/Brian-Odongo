
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://picsum.photos/seed/spa-hero/1920/1080?grayscale" 
          alt="Spa Serenity" 
          className="w-full h-full object-cover scale-105 animate-[subtle-zoom_20s_infinite_alternate]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-stone-100/40 via-transparent to-stone-50"></div>
      </div>

      <div className="relative z-10 text-center px-6 max-w-4xl opacity-0 animate-[fade-in-up_1s_ease-out_forwards]">
        <span className="text-gold tracking-[0.5em] uppercase text-sm mb-6 block">Soulsprings Experience</span>
        <h1 className="text-5xl md:text-8xl font-serif text-stone-800 mb-8 leading-tight">
          Where Wellness <br /> <span className="italic">Begins Within</span>
        </h1>
        <p className="text-stone-600 text-lg md:text-xl font-light mb-12 max-w-2xl mx-auto leading-relaxed">
          A sanctuary for relaxation, healing, and renewal in the heart of Nairobi. Let our expert hands guide you back to center.
        </p>
        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          <a href="#contact" className="px-10 py-4 bg-sage-900 text-white tracking-widest uppercase rounded-full hover:bg-stone-800 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1">
            Book a Session
          </a>
          <a href="#services" className="px-10 py-4 border border-stone-300 text-stone-800 tracking-widest uppercase rounded-full hover:bg-white transition-all backdrop-blur-sm">
            Explore Treatments
          </a>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-stone-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>

      <style>{`
        @keyframes subtle-zoom {
          from { transform: scale(1); }
          to { transform: scale(1.1); }
        }
        @keyframes fade-in-up {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  );
};

export default Hero;
