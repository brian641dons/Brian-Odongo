
import React, { useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import WhyChoose from './components/WhyChoose';
import Location from './components/Location';
import Reviews from './components/Reviews';
import Booking from './components/Booking';
import Footer from './components/Footer';
import AIWellnessGuide from './components/AIWellnessGuide';

const App: React.FC = () => {
  useEffect(() => {
    // Intersection Observer for scroll animations
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in');
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.scroll-reveal').forEach(el => observer.observe(el));
    
    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen">
      <Header />
      
      <main>
        <Hero />
        
        <div className="scroll-reveal opacity-0 transition-all duration-1000 translate-y-10 [&.animate-in]:opacity-100 [&.animate-in]:translate-y-0">
          <About />
        </div>
        
        <div className="scroll-reveal opacity-0 transition-all duration-1000 translate-y-10 [&.animate-in]:opacity-100 [&.animate-in]:translate-y-0">
          <Services />
        </div>
        
        <div className="scroll-reveal opacity-0 transition-all duration-1000 translate-y-10 [&.animate-in]:opacity-100 [&.animate-in]:translate-y-0">
          <WhyChoose />
        </div>
        
        <div className="scroll-reveal opacity-0 transition-all duration-1000 translate-y-10 [&.animate-in]:opacity-100 [&.animate-in]:translate-y-0">
          <Reviews />
        </div>
        
        <div className="scroll-reveal opacity-0 transition-all duration-1000 translate-y-10 [&.animate-in]:opacity-100 [&.animate-in]:translate-y-0">
          <Location />
        </div>
        
        <div className="scroll-reveal opacity-0 transition-all duration-1000 translate-y-10 [&.animate-in]:opacity-100 [&.animate-in]:translate-y-0">
          <Booking />
        </div>
      </main>

      <Footer />
      
      {/* Floating AI Wellness Concierge */}
      <AIWellnessGuide />

      <style>{`
        .animate-in {
          opacity: 1 !important;
          transform: translateY(0) !important;
        }
      `}</style>
    </div>
  );
};

export default App;
