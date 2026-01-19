
import React, { useState, useEffect } from 'react';
import { Language, Project } from './types';
import { CONTENT, PROJECTS, TESTIMONIALS } from './constants';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProjectGrid from './components/ProjectGrid';
import ProjectModal from './components/ProjectModal';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';

const App: React.FC = () => {
  const [lang, setLang] = useState<Language>('EN');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  // Smooth scroll logic
  useEffect(() => {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href')?.substring(1);
        const target = document.getElementById(targetId || '');
        if (target) {
          target.scrollIntoView({ behavior: 'smooth' });
        }
      });
    });
  }, []);

  const content = CONTENT[lang];
  const projects = PROJECTS[lang];
  const testimonials = TESTIMONIALS[lang];

  const getRecentWorksLabel = () => {
    if (lang === 'BN') return 'সাম্প্রতিক কাজ';
    if (lang === 'HI') return 'Recent Kaam';
    return 'Recent Works';
  };

  const getProjectsDisplayedLabel = () => {
    if (lang === 'BN') return `[ ${projects.length} টি প্রজেক্ট প্রদর্শিত ]`;
    if (lang === 'HI') return `[ ${projects.length} PROJECTS DIKHAYE GAYE ]`;
    return `[ ${projects.length} PROJECTS DISPLAYED ]`;
  };

  return (
    <div className="min-h-screen selection:bg-cyan-500 selection:text-white">
      <Navbar lang={lang} setLang={setLang} />
      
      <main>
        <Hero content={content} />
        
        <div id="projects" className="py-20 px-4 md:px-8 max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 border-b border-white/10 pb-6">
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tighter text-white uppercase italic">
              {getRecentWorksLabel()}
            </h2>
            <p className="text-gray-400 mt-4 md:mt-0 uppercase tracking-widest text-sm">
              {getProjectsDisplayedLabel()}
            </p>
          </div>
          
          <ProjectGrid 
            projects={projects} 
            onSelect={setSelectedProject} 
          />
        </div>

        <Testimonials testimonials={testimonials} />
      </main>

      <Footer lang={lang} content={content} />

      {selectedProject && (
        <ProjectModal 
          project={selectedProject} 
          onClose={() => setSelectedProject(null)} 
          lang={lang}
          content={content}
        />
      )}
      
      {/* Background Ambience */}
      <div className="fixed top-0 left-0 w-full h-full -z-10 pointer-events-none opacity-20">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-orange-500/10 rounded-full blur-[120px]"></div>
      </div>
    </div>
  );
};

export default App;
