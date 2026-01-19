
import React from 'react';
import { Project, ContentStrings, Language } from '../types';
import BeforeAfterSlider from './BeforeAfterSlider';
import ProcessAccordion from './ProcessAccordion';

interface ProjectModalProps {
  project: Project;
  onClose: () => void;
  lang: Language;
  content: ContentStrings;
}

const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose, lang, content }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center px-4 py-6 md:p-12 overflow-y-auto bg-black/95">
      <button 
        onClick={onClose}
        className="fixed top-8 right-8 z-[60] text-gray-400 hover:text-white transition-colors"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>

      <div className="w-full max-w-6xl bg-[#1a1a1a] border border-white/10 relative">
        {/* Project Video Embed */}
        <div className="aspect-video w-full bg-black">
          <iframe 
            src={project.videoUrl}
            title={project.title}
            className="w-full h-full"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>

        <div className="p-8 md:p-16 grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 space-y-12">
            <div>
              <div className="flex items-center gap-4 mb-4">
                <span className="text-orange-500 font-bold uppercase tracking-widest text-xs px-2 py-1 bg-orange-500/10">
                  {project.type}
                </span>
                <span className="text-gray-500 text-xs font-mono">/ {project.duration}</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter mb-6 italic">
                {project.title}
              </h2>
              <div className="bg-white/5 p-4 border-l-2 border-cyan-400 text-xs text-gray-400 italic">
                {content.disclaimer} {content.allRights}
              </div>
            </div>

            {/* Before / After Slider */}
            <div>
              <h3 className="text-lg font-bold uppercase tracking-widest mb-6 border-b border-white/10 pb-2">
                Color Grading & VFX
              </h3>
              <BeforeAfterSlider before={project.beforeImg} after={project.afterImg} />
            </div>

            {/* Metrics */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {project.metrics.map((m, i) => (
                <div key={i} className="bg-[#222] p-6 border border-white/5 text-center">
                  <div className="text-3xl font-black text-cyan-400 mb-1">{m.value}</div>
                  <div className="text-[10px] uppercase font-bold text-gray-500 tracking-widest">{m.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-12">
            <div>
              <h3 className="text-lg font-bold uppercase tracking-widest mb-6 border-b border-white/10 pb-2">
                {content.processTools}
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.tools.map(tool => (
                  <span key={tool} className="px-3 py-1 bg-[#222] text-xs font-bold text-gray-300 border border-white/10">
                    {tool}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-lg font-bold uppercase tracking-widest mb-6 border-b border-white/10 pb-2">
                {content.howIWork}
              </h3>
              <ProcessAccordion 
                process={project.process} 
                labels={{
                  goal: content.processGoal,
                  challenges: content.processChallenges,
                  results: content.processResults
                }}
              />
            </div>

            <button 
              onClick={onClose}
              className="w-full py-4 bg-white text-black font-black uppercase tracking-widest text-sm hover:bg-cyan-400 hover:text-black transition-colors"
            >
              CLOSE CASE STUDY
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;
