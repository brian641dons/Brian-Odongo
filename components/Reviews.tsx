
import React from 'react';

const REVIEWS = [
  {
    author: "Faith M.",
    text: "An absolute oasis of peace in the middle of Nairobi. The aromatherapy massage was divine and the attention to detail is unmatched.",
    stars: 5
  },
  {
    author: "Linda J.",
    text: "Being a woman-owned business, you can really feel the care and understanding in every treatment. Soulsprings is my go-to for stress relief.",
    stars: 5
  },
  {
    author: "Wambui K.",
    text: "The best spa experience I've had in the CBD. Efficient, professional, and yet so calming. I left feeling like a new person.",
    stars: 5
  }
];

const Reviews: React.FC = () => {
  return (
    <section id="reviews" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-gold tracking-[0.3em] uppercase text-xs font-semibold block mb-4">Voice of the Sanctuary</span>
          <h2 className="text-4xl font-serif text-stone-800 italic">Trusted by Our Community</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {REVIEWS.map((review, idx) => (
            <div key={idx} className="p-10 bg-sage-50 rounded-3xl border border-stone-100 relative group">
              <div className="absolute top-8 left-8 text-gold opacity-10 group-hover:opacity-20 transition-opacity">
                <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017V14H17.017C15.3601 14 14.017 12.6569 14.017 11V8H20.017V14H22.017V21H14.017ZM2.01697 21L2.01697 18C2.01697 16.8954 2.91241 16 4.01697 16H7.01697V14H5.01697C3.36012 14 2.01697 12.6569 2.01697 11V8H8.01697V14H10.017V21H2.01697Z" />
                </svg>
              </div>
              <div className="relative z-10">
                <div className="flex mb-6 space-x-1">
                  {[...Array(review.stars)].map((_, i) => (
                    <svg key={i} className="w-4 h-4 text-gold" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-stone-600 font-light italic leading-relaxed mb-8">
                  "{review.text}"
                </p>
                <p className="text-stone-800 font-serif tracking-wider">{review.author}</p>
                <p className="text-stone-400 text-[10px] tracking-widest uppercase">Verified Client</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <div className="inline-flex items-center space-x-2 bg-stone-50 px-6 py-3 rounded-full border border-stone-100">
            <img src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_\"G\"_logo.svg" alt="Google" className="w-4 h-4" />
            <span className="text-stone-500 text-sm">Rated 5.0 by 29 happy clients</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
