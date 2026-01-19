
import React from 'react';
import { Project } from '../types';
import ProjectCard from './ProjectCard';

interface ProjectGridProps {
  projects: Project[];
  onSelect: (p: Project) => void;
}

const ProjectGrid: React.FC<ProjectGridProps> = ({ projects, onSelect }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {projects.map((project, idx) => (
        <ProjectCard 
          key={project.id} 
          project={project} 
          onClick={() => onSelect(project)} 
          index={idx}
        />
      ))}
    </div>
  );
};

export default ProjectGrid;
