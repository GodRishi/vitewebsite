
import React from 'react';
import { ContentStrings } from '../types';

interface HeroProps {
  content: ContentStrings;
}

const Hero: React.FC<HeroProps> = ({ content }) => {
  return (
    <section className="relative h-[90vh] flex flex-col items-center justify-center text-center px-4 overflow-hidden pt-20">
      {/* Background Video/Image placeholder */}
      <div className="absolute inset-0 -z-10 bg-[url('https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-40 grayscale group">
        <div className="absolute inset-0 bg-gradient-to-b from-[#1a1a1a] via-transparent to-[#1a1a1a]"></div>
      </div>

      <div className="relative space-y-6 max-w-4xl">
        <h1 className="text-6xl md:text-8xl font-black tracking-tighter leading-none italic glitch-hover cursor-default">
          {content.heroTitle}
        </h1>
        <p className="text-lg md:text-xl text-gray-300 font-medium max-w-2xl mx-auto leading-relaxed">
          {content.heroSub}
        </p>
        
        <div className="pt-8 flex flex-col sm:flex-row gap-4 justify-center">
          <a 
            href="#projects"
            className="px-8 py-4 bg-orange-500 hover:bg-orange-600 text-white font-bold uppercase tracking-widest text-sm transition-all transform hover:scale-105 active:scale-95 neon-orange"
          >
            {content.viewProjects}
          </a>
          <button 
            className="px-8 py-4 border border-white/20 hover:border-cyan-400 hover:text-cyan-400 font-bold uppercase tracking-widest text-sm transition-all backdrop-blur-sm"
          >
            REEL 2026
          </button>
        </div>
      </div>

      <div className="absolute bottom-10 animate-bounce text-gray-500">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
