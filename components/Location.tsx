
import React from 'react';

const Location: React.FC = () => {
  return (
    <section id="location" className="py-24 bg-sage-50">
      <div className="container mx-auto px-6">
        <div className="bg-white rounded-[3rem] shadow-xl overflow-hidden grid lg:grid-cols-2">
          <div className="p-12 lg:p-20 space-y-10">
            <div>
              <span className="text-gold tracking-[0.3em] uppercase text-xs font-semibold mb-6 block">Our Location</span>
              <h2 className="text-4xl font-serif text-stone-800 mb-6">In the Heart of <br /><span className="italic">Nairobi CBD</span></h2>
              <p className="text-stone-500 font-light leading-relaxed max-w-sm">
                Ideally situated for a peaceful escape during your busy schedule or a dedicated weekend of pampering.
              </p>
            </div>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-6">
                <div className="w-12 h-12 bg-sage-50 rounded-full flex items-center justify-center flex-shrink-0 text-sage-900">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm tracking-widest uppercase text-stone-400 mb-1">Address</p>
                  <p className="text-stone-800 font-serif text-lg">Junction of Moi Avenue & <br />Kenyatta Avenue, Nairobi</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-6">
                <div className="w-12 h-12 bg-sage-50 rounded-full flex items-center justify-center flex-shrink-0 text-sage-900">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm tracking-widest uppercase text-stone-400 mb-1">Opening Hours</p>
                  <p className="text-stone-800 font-serif text-lg">Opens Daily 8:00 AM</p>
                  <p className="text-stone-400 text-xs mt-1">Hours may vary on holidays</p>
                </div>
              </div>
            </div>
            
            <button className="flex items-center space-x-4 text-gold group">
              <span className="text-sm tracking-widest uppercase border-b border-gold/30 group-hover:border-gold pb-1 transition-all">Get Directions</span>
              <svg className="w-4 h-4 transform group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </button>
          </div>
          
          <div className="h-[400px] lg:h-auto relative">
            <img 
              src="https://picsum.photos/seed/map/1000/1000?grayscale" 
              alt="Map Placeholder" 
              className="w-full h-full object-cover grayscale opacity-80"
            />
            <div className="absolute inset-0 bg-sage-900/10"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
              <div className="relative">
                <div className="w-8 h-8 bg-gold rounded-full animate-ping absolute inset-0"></div>
                <div className="w-8 h-8 bg-sage-900 border-4 border-white rounded-full relative z-10 shadow-lg"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;
