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
    <div className="border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950 p-6 flex flex-col h-full hover:border-gray-400 dark:hover:border-gray-600 transition-colors">
      <div className="flex-grow">
        <div className="flex justify-between items-start mb-4">
          <span className="text-xs font-semibold uppercase tracking-wider text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/30 px-2 py-1">
            {project.category}
          </span>
          <span className="text-sm font-medium text-gray-500">{project.role}</span>
        </div>
        <h3 className="text-2xl font-bold mb-3 text-gray-900 dark:text-gray-100">{project.title}</h3>
        <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
          {project.description}
        </p>
      </div>
      
      <div>
        <div className="flex flex-wrap gap-2 mb-6">
          {project.techStack.map((tech, idx) => (
            <span key={idx} className="text-xs font-medium bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 px-2 py-1">
              {tech}
            </span>
          ))}
        </div>
        <div className="flex gap-4">
          {project.repoLink && (
            <a href={project.repoLink} target="_blank" rel="noreferrer" className="text-sm font-semibold underline underline-offset-4 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
              Repository
            </a>
          )}
          {project.liveLink && (
            <a href={project.liveLink} target="_blank" rel="noreferrer" className="text-sm font-semibold underline underline-offset-4 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
              Live Demo
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
