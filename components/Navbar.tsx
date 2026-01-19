
import React from 'react';
import { Language } from '../types';

interface NavbarProps {
  lang: Language;
  setLang: (l: Language) => void;
}

const Navbar: React.FC<NavbarProps> = ({ lang, setLang }) => {
  return (
    <nav className="fixed top-0 left-0 w-full z-40 bg-[#1a1a1a]/80 backdrop-blur-md border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <div className="flex items-center gap-2 group cursor-pointer">
          <div className="w-8 h-8 bg-gradient-to-br from-orange-500 to-cyan-500 rounded-sm transform group-hover:rotate-180 transition-transform duration-700"></div>
          <span className="text-xl font-black tracking-tighter">EDIT.STUDIO</span>
        </div>

        <div className="hidden lg:flex items-center gap-8 uppercase text-xs font-bold tracking-widest">
          <a href="#projects" className="hover:text-cyan-400 transition-colors">Projects</a>
          <a href="#testimonials" className="hover:text-cyan-400 transition-colors">Testimonials</a>
          <a href="#contact" className="hover:text-cyan-400 transition-colors">Contact</a>
        </div>

        <div className="flex items-center gap-2 bg-white/5 p-1 rounded-full border border-white/10">
          <button 
            onClick={() => setLang('BN')}
            className={`px-3 py-1 text-[10px] font-bold rounded-full transition-all ${lang === 'BN' ? 'bg-orange-500 text-white' : 'hover:bg-white/10 text-gray-400'}`}
          >
            বাংলা
          </button>
          <button 
            onClick={() => setLang('HI')}
            className={`px-3 py-1 text-[10px] font-bold rounded-full transition-all ${lang === 'HI' ? 'bg-orange-500 text-white' : 'hover:bg-white/10 text-gray-400'}`}
          >
            HINGLISH
          </button>
          <button 
            onClick={() => setLang('EN')}
            className={`px-3 py-1 text-[10px] font-bold rounded-full transition-all ${lang === 'EN' ? 'bg-orange-500 text-white' : 'hover:bg-white/10 text-gray-400'}`}
          >
            EN
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
