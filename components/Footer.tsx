
import React, { useState, useRef } from 'react';
import { Language, ContentStrings } from '../types';

interface FooterProps {
  lang: Language;
  content: ContentStrings;
}

const Footer: React.FC<FooterProps> = ({ lang, content }) => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const formRef = useRef<HTMLFormElement>(null);

  const tools = ['Premiere Pro', 'After Effects', 'DaVinci Resolve', 'Photoshop', 'Illustrator'];
  
  const getTimeline = () => {
    switch(lang) {
      case 'BN':
        return [
          { step: 'ডিসকভারি', desc: 'আপনার ব্র্যান্ডের ভিশন এবং লক্ষ্য শ্রোতা বোঝা।' },
          { step: 'ইনজেশন', desc: 'র ফুটেজ বা অ্যাসেট সুরক্ষিতভাবে সংগ্রহ করা।' },
          { step: 'কিউরেশন', desc: 'রাফ কাট, রিদম ম্যাচিং এবং সেরা শট নির্বাচন।' },
          { step: 'পলিশিং', desc: 'কালার গ্রেডিং এবং সাউন্ড ইঞ্জিনিয়ারিং।' },
        ];
      case 'HI':
        return [
          { step: 'Discovery', desc: 'Aapke brand vision aur target audience ko samajhna.' },
          { step: 'Ingestion', desc: 'Raw assets ko secure tarike se organize karna.' },
          { step: 'Curation', desc: 'Rough cuts aur story selection ka kaam.' },
          { step: 'Polishing', desc: 'Color grading aur final sound engineering.' },
        ];
      default:
        return [
          { step: 'Discovery', desc: 'Understanding your brand vision and target audience.' },
          { step: 'Ingestion', desc: 'Secure transfer and organization of raw assets.' },
          { step: 'Curation', desc: 'Rough cuts, rhythm matching, and story selection.' },
          { step: 'Polishing', desc: 'Color grading, and final sound engineering.' },
        ];
    }
  };

  const timeline = getTimeline();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleIframeLoad = () => {
    // When the hidden iframe loads, it means FormSubmit has processed the request
    if (status === 'sending') {
      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setStatus('idle'), 6000);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    // We don't preventDefault here because we want the form to submit to the iframe target
    // But we need to update our internal UI state
    setStatus('sending');
    
    // We also set a safety timeout in case the iframe load doesn't fire as expected
    setTimeout(() => {
      if (status === 'sending') {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
        setTimeout(() => setStatus('idle'), 6000);
      }
    }, 4000);
  };

  return (
    <footer id="contact" className="bg-[#111] pt-24 pb-12 border-t border-white/5">
      {/* Hidden elements for background submission */}
      <iframe 
        name="hidden_iframe" 
        id="hidden_iframe" 
        style={{ display: 'none' }} 
        ref={iframeRef}
        onLoad={handleIframeLoad}
      ></iframe>

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20">
        <div className="space-y-16">
          <div>
            <h2 className="text-4xl font-black uppercase tracking-tighter italic mb-10">{content.howIWork}</h2>
            <div className="space-y-8">
              {timeline.map((item, i) => (
                <div key={i} className="flex gap-6 group">
                  <span className="text-2xl font-black text-white/10 group-hover:text-cyan-400 transition-colors">0{i+1}</span>
                  <div>
                    <h4 className="font-bold uppercase tracking-widest text-sm mb-1">{item.step}</h4>
                    <p className="text-gray-500 text-xs leading-relaxed max-w-sm">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-xl font-black uppercase tracking-widest italic mb-6">{content.toolsTitle}</h2>
            <div className="flex flex-wrap gap-4">
              {tools.map(tool => (
                <div key={tool} className="group relative">
                  <div className="px-4 py-2 border border-white/10 hover:border-orange-500 transition-all text-[10px] font-bold uppercase tracking-widest">
                    {tool}
                  </div>
                  <div className="absolute inset-0 bg-orange-500 blur-xl opacity-0 group-hover:opacity-20 transition-opacity"></div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="bg-[#1a1a1a] p-8 md:p-12 border border-white/10 neon-cyan relative">
          <h2 className="text-3xl font-black uppercase tracking-tighter italic mb-8">{content.contactTitle}</h2>
          
          <form 
            ref={formRef}
            action="https://formsubmit.co/saharishav.1940@gmail.com" 
            method="POST" 
            target="hidden_iframe"
            onSubmit={handleSubmit}
            className="space-y-6"
          >
            {/* FormSubmit Configuration */}
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_subject" value={`New Portfolio Inquiry: ${formData.name}`} />
            <input type="hidden" name="_template" value="box" />

            <div className="space-y-2">
              <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-500">{content.formName}</label>
              <input 
                type="text" 
                name="name"
                required
                value={formData.name}
                onChange={handleInputChange}
                className="w-full bg-white/5 border border-white/10 focus:border-cyan-400 p-4 text-sm outline-none transition-all placeholder:text-gray-700" 
                placeholder="Ex: Rohan Sharma"
              />
            </div>
            <div className="space-y-2">
              <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-500">{content.formEmail}</label>
              <input 
                type="email" 
                name="email"
                required
                value={formData.email}
                onChange={handleInputChange}
                className="w-full bg-white/5 border border-white/10 focus:border-cyan-400 p-4 text-sm outline-none transition-all placeholder:text-gray-700" 
                placeholder="rohan@example.com"
              />
            </div>
            <div className="space-y-2">
              <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-500">{content.formMessage}</label>
              <textarea 
                name="message"
                required
                rows={4} 
                value={formData.message}
                onChange={handleInputChange}
                className="w-full bg-white/5 border border-white/10 focus:border-cyan-400 p-4 text-sm outline-none transition-all resize-none placeholder:text-gray-700"
                placeholder={content.formMessage}
              ></textarea>
            </div>
            
            <button 
              type="submit"
              disabled={status === 'sending'}
              className={`w-full py-4 font-black uppercase tracking-widest text-sm transition-all transform active:scale-[0.98] ${
                status === 'sending' ? 'bg-gray-600 cursor-wait' : 
                status === 'success' ? 'bg-cyan-600' : 
                'bg-orange-500 hover:bg-orange-600'
              } text-white shadow-lg flex items-center justify-center gap-3`}
            >
              {status === 'sending' ? (
                <>
                  <svg className="animate-spin h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  <span>{lang === 'EN' ? 'TRANSMITTING...' : lang === 'HI' ? 'BHEJ RAHE HAIN...' : 'পাঠানো হচ্ছে...'}</span>
                </>
              ) : status === 'success' ? (
                <span>{lang === 'EN' ? 'DELIVERED!' : lang === 'HI' ? 'PAHUNCH GAYA!' : 'পৌঁছেছে!'}</span>
              ) : (
                content.formSubmit
              )}
            </button>
            
            {status === 'success' && (
              <div className="absolute inset-0 bg-cyan-900/20 backdrop-blur-md flex items-center justify-center p-8 text-center animate-fade-in pointer-events-none z-10">
                <div className="bg-[#1a1a1a] p-8 border border-cyan-500 shadow-2xl scale-110">
                  <div className="w-12 h-12 bg-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div className="text-cyan-400 font-black mb-2 uppercase tracking-widest text-sm">
                    {lang === 'EN' ? 'INQUIRY LOGGED' : lang === 'HI' ? 'Inquiry Mil Gayi' : 'অনুসন্ধান নথিভুক্ত'}
                  </div>
                  <p className="text-[10px] text-gray-400 max-w-[200px] mx-auto leading-relaxed">
                    {lang === 'EN' ? 'Transmission successful. I will respond to your creative needs shortly.' : lang === 'HI' ? 'Kaam ho gaya. Main jaldi contact karunga.' : 'আপনার অনুসন্ধানের উত্তর শীঘ্রই দেওয়া হবে।'}
                  </p>
                </div>
              </div>
            )}
            
            <p className="text-[9px] text-gray-600 text-center uppercase tracking-widest mt-4">
              {lang === 'EN' ? 'First-time users: Check your email for an activation link from FormSubmit.' : lang === 'HI' ? 'Pehli baar? Email par activation link check karein.' : 'প্রথমবার ব্যবহারকারী? ইমেলে অ্যাক্টিভেশন লিঙ্ক চেক করুন।'}
            </p>
          </form>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 mt-24 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 bg-gradient-to-br from-orange-500 to-cyan-500 rounded-sm"></div>
          <span className="text-sm font-black tracking-tighter">Digital Dream Creation © 2026</span>
        </div>

        <div className="flex gap-8 text-[10px] font-bold uppercase tracking-widest text-gray-500">
          <a href="#" className="hover:text-white transition-colors">YouTube</a>
          <a href="#" className="hover:text-white transition-colors">Instagram</a>
          <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
        </div>

        <p className="text-[10px] text-gray-600 font-mono">DESIGNED FOR CINEMATIC EXCELLENCE</p>
      </div>
    </footer>
  );
};

export default Footer;
