
import React, { useState, useEffect } from 'react';
import { Testimonial } from '../types';

interface TestimonialsProps {
  testimonials: Testimonial[];
}

const Testimonials: React.FC<TestimonialsProps> = ({ testimonials }) => {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActive(prev => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  return (
    <section id="testimonials" className="py-24 bg-black/40 border-y border-white/5">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <div className="mb-12">
          <span className="text-cyan-400 text-xs font-bold uppercase tracking-[0.5em] block mb-4">RECOGNITION</span>
          <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tight italic">Client Feedback</h2>
        </div>

        <div className="relative h-64 md:h-48 flex items-center justify-center">
          {testimonials.map((t, idx) => (
            <div 
              key={t.id}
              className={`absolute inset-0 transition-all duration-700 flex flex-col items-center justify-center ${active === idx ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'}`}
            >
              <p className="text-xl md:text-2xl text-gray-300 font-light italic leading-relaxed max-w-3xl mb-8">
                "{t.text}"
              </p>
              <div className="flex items-center gap-4">
                <img src={t.logo} alt={t.name} className="w-10 h-10 rounded-full grayscale opacity-50" />
                <div className="text-left">
                  <div className="font-bold uppercase tracking-wider text-xs">{t.name}</div>
                  <div className="text-cyan-400 text-[10px] font-bold uppercase tracking-widest">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center gap-2 mt-8">
          {testimonials.map((_, idx) => (
            <button 
              key={idx}
              onClick={() => setActive(idx)}
              className={`w-2 h-2 rounded-full transition-all ${active === idx ? 'bg-orange-500 w-8' : 'bg-white/20'}`}
            ></button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
