import React from 'react';

export interface Project {
  id: string;
  title: string;
  description: string;
  role: string;
  techStack: string[];
  repoLink: string | null;
  liveLink: string | null;
  category: string;
}

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="border-2 border-black dark:border-white bg-white dark:bg-black p-8 flex flex-col">
      <div className="flex flex-col gap-2 mb-6">
        <span className="text-xs font-bold uppercase tracking-widest text-black dark:text-white border border-black dark:border-white px-3 py-1 w-fit">
          {project.category}
        </span>
        <span className="text-sm font-bold text-gray-600 dark:text-gray-400 uppercase tracking-wider">{project.role}</span>
      </div>
      
      <h3 className="text-3xl font-bold mb-4 text-black dark:text-white uppercase tracking-tight">{project.title}</h3>
      
      <p className="text-lg text-black dark:text-white mb-8 leading-relaxed border-l-4 border-black dark:border-white pl-4">
        {project.description}
      </p>
      
      <div className="mt-auto">
        <div className="flex flex-col gap-3 mb-8">
          <span className="text-xs font-bold uppercase tracking-widest text-gray-500 dark:text-gray-400">Tech Stack</span>
          <div className="flex flex-wrap gap-2">
            {project.techStack.map((tech, idx) => (
              <span key={idx} className="text-xs font-bold uppercase tracking-wider border border-black dark:border-white text-black dark:text-white px-3 py-1">
                {tech}
              </span>
            ))}
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row gap-4 border-t border-black dark:border-white pt-6">
          {project.repoLink && (
            <a href={project.repoLink} target="_blank" rel="noreferrer" className="text-sm font-bold uppercase tracking-widest flex items-center gap-2 hover:opacity-70 transition-opacity">
              <span>[</span> Repository <span>]</span>
            </a>
          )}
          {project.liveLink && (
            <a href={project.liveLink} target="_blank" rel="noreferrer" className="text-sm font-bold uppercase tracking-widest flex items-center gap-2 hover:opacity-70 transition-opacity">
              <span>[</span> Live Demo <span>]</span>
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
