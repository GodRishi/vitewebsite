
import React from 'react';
import { Project } from '../types';

interface ProjectCardProps {
  project: Project;
  onClick: () => void;
  index: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, onClick, index }) => {
  return (
    <div 
      onClick={onClick}
      className="group relative cursor-pointer bg-[#222] border border-white/5 overflow-hidden transition-all duration-500 hover:border-cyan-400/50"
    >
      {/* Thumbnail */}
      <div className="aspect-video relative overflow-hidden">
        <img 
          src={project.thumbnail} 
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
        />
        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
          <div className="w-16 h-16 rounded-full bg-cyan-400 text-black flex items-center justify-center transform scale-0 group-hover:scale-100 transition-transform duration-300 delay-100">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 ml-1" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z" />
            </svg>
          </div>
        </div>
        
        {/* Label Tag */}
        <div className="absolute top-4 left-4 bg-orange-500 text-white text-[10px] font-bold uppercase tracking-widest px-2 py-1">
          {project.type}
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-xl font-bold uppercase tracking-tight group-hover:text-cyan-400 transition-colors">
            {project.title}
          </h3>
          <span className="text-gray-500 text-xs font-mono">{project.duration}</span>
        </div>
        <p className="text-gray-400 text-sm leading-relaxed line-clamp-2">
          {project.shortDesc}
        </p>
        
        <div className="mt-4 pt-4 border-t border-white/5 flex items-center justify-between">
          <span className="text-cyan-400 text-xs font-bold uppercase tracking-widest">
            {project.engagement}
          </span>
          <div className="flex -space-x-2">
            {project.tools.slice(0, 3).map((tool, i) => (
              <div key={i} className="w-6 h-6 rounded-full bg-black border border-white/10 flex items-center justify-center text-[8px] font-bold text-gray-500">
                {tool[0]}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
