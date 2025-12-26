
import React from 'react';

const SERVICES = [
  {
    title: "Massage Therapy",
    description: "From deep tissue to Swedish relaxation, our massages are designed to melt tension and restore balance.",
    image: "https://picsum.photos/seed/massage/600/800",
    category: "Relaxation"
  },
  {
    title: "Body Treatments",
    description: "Invigorating scrubs and nourishing wraps that leave your skin glowing and your spirit renewed.",
    image: "https://picsum.photos/seed/body/600/800",
    category: "Glow"
  },
  {
    title: "Stress Relief",
    description: "Curated sessions focusing on mental clarity and emotional release, perfect for busy professionals.",
    image: "https://picsum.photos/seed/stress/600/800",
    category: "Mental Health"
  },
  {
    title: "Self-Care Sessions",
    description: "Bespoke wellness packages that combine multiple therapies for the ultimate restorative experience.",
    image: "https://picsum.photos/seed/selfcare/600/800",
    category: "Holistic"
  }
];

const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-sage-50">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-20">
          <span className="text-gold tracking-[0.3em] uppercase text-xs font-semibold block mb-4">Treatments</span>
          <h2 className="text-4xl md:text-5xl font-serif text-stone-800 mb-6 italic">Signature Services</h2>
          <div className="h-px w-24 bg-stone-300 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {SERVICES.map((service, idx) => (
            <div key={idx} className="group relative bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500">
              <div className="aspect-[3/4] overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-stone-900/20 group-hover:bg-stone-900/40 transition-colors"></div>
              </div>
              <div className="p-8 absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent translate-y-2 group-hover:translate-y-0 transition-transform">
                <span className="text-white/60 text-[10px] tracking-widest uppercase mb-2 block">{service.category}</span>
                <h3 className="text-2xl font-serif text-white mb-2">{service.title}</h3>
                <p className="text-white/80 text-sm font-light leading-relaxed line-clamp-2 group-hover:line-clamp-none transition-all duration-500">
                  {service.description}
                </p>
                <button className="mt-6 text-white text-xs tracking-widest uppercase border-b border-white/30 pb-1 hover:border-white transition-all">
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
