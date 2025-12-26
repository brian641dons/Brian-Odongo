
import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="aspect-[4/5] overflow-hidden rounded-2xl shadow-2xl relative z-10">
              <img 
                src="https://picsum.photos/seed/spa-about/800/1000" 
                alt="Spa Interior" 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-1000"
              />
            </div>
            <div className="absolute -bottom-8 -right-8 w-64 h-64 bg-sage-50 -z-0 rounded-full blur-3xl"></div>
            <div className="absolute top-1/2 -left-12 transform -translate-y-1/2 hidden lg:block z-20">
              <div className="bg-white p-8 rounded-xl shadow-xl border-l-4 border-gold">
                <p className="text-4xl font-serif text-stone-800 mb-2 italic">5.0 ★</p>
                <p className="text-xs tracking-widest uppercase text-stone-500">Google Trusted</p>
              </div>
            </div>
          </div>
          
          <div className="space-y-8">
            <span className="text-gold tracking-[0.3em] uppercase text-xs font-semibold">Our Story</span>
            <h2 className="text-4xl md:text-5xl font-serif text-stone-800 leading-tight">
              A Women-Owned Haven <br /> <span className="italic">for Modern Healing</span>
            </h2>
            <div className="space-y-6 text-stone-600 font-light leading-relaxed text-lg">
              <p>
                Founded on the principles of feminine strength and holistic wellness, Soulsprings Wellness Spa provides a tranquil escape from the vibrant energy of Nairobi's CBD.
              </p>
              <p>
                Located at the iconic junction of Moi Avenue and Kenyatta Avenue, our spa is more than just a destination—it's a journey back to yourself. We believe that true beauty and wellness radiate from a state of inner calm.
              </p>
              <p>
                Our therapists are dedicated professionals who tailor every experience to your unique needs, ensuring every touch promotes healing, renewal, and deep relaxation.
              </p>
            </div>
            <div className="pt-6">
              <img src="https://picsum.photos/seed/signature/200/60" alt="Signature" className="opacity-40 grayscale" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
