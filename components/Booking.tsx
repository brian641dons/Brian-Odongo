
import React from 'react';

const Booking: React.FC = () => {
  return (
    <section id="contact" className="py-24 bg-white relative">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center space-y-10">
          <div className="inline-block p-4 bg-sage-50 rounded-full mb-4">
            <svg className="w-10 h-10 text-sage-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
          </div>
          <h2 className="text-5xl md:text-6xl font-serif text-stone-800">Ready for Renewal?</h2>
          <p className="text-xl text-stone-500 font-light max-w-2xl mx-auto italic">
            "Your path to tranquility is just a call away. Experience the professional care that makes Soulsprings Nairobi's most trusted sanctuary."
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-12">
            <a href="tel:0724858593" className="w-full sm:w-auto px-12 py-5 bg-sage-900 text-white rounded-full text-lg tracking-widest uppercase hover:bg-stone-800 transition-all shadow-xl flex items-center justify-center space-x-4 group">
              <span>0724 858 593</span>
            </a>
            <button className="w-full sm:w-auto px-12 py-5 border border-stone-200 text-stone-800 rounded-full text-lg tracking-widest uppercase hover:bg-sage-50 transition-all">
              Book Online
            </button>
          </div>
          
          <div className="pt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <p className="text-[10px] tracking-widest uppercase text-stone-400 mb-2">WhatsApp</p>
              <p className="text-stone-800 font-serif">Quick Chat</p>
            </div>
            <div>
              <p className="text-[10px] tracking-widest uppercase text-stone-400 mb-2">Instagram</p>
              <p className="text-stone-800 font-serif">@soulsprings</p>
            </div>
            <div>
              <p className="text-[10px] tracking-widest uppercase text-stone-400 mb-2">Email</p>
              <p className="text-stone-800 font-serif">hello@soulsprings.co.ke</p>
            </div>
            <div>
              <p className="text-[10px] tracking-widest uppercase text-stone-400 mb-2">Vibe</p>
              <p className="text-stone-800 font-serif">Healing & Renewal</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Booking;
