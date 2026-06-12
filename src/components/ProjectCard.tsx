"use client";
import React from 'react';
import { useI18n } from '../app/i18n';
import BrutalistCarousel from './BrutalistCarousel';

export interface Project {
  id: string;
  title: string;
  description: string;
  role: string;
  techStack: string[];
  repoLink: string | null;
  liveLink: string | null;
  category: string;
  images?: string[];
}

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const { t, getProject } = useI18n();
  const translatedProject = getProject(project);

  return (
    <div className="border-2 border-black dark:border-white bg-white dark:bg-black p-8 flex flex-col">
      <div className="flex flex-col gap-2 mb-6">
        <span className="text-xs font-bold uppercase tracking-widest text-black dark:text-white border border-black dark:border-white px-3 py-1 w-fit">
          {translatedProject.category}
        </span>
        <span className="text-sm font-bold text-gray-600 dark:text-gray-400 uppercase tracking-wider">{translatedProject.role}</span>
      </div>
      
      <h3 className="text-3xl font-bold mb-4 text-black dark:text-white uppercase tracking-tight">{translatedProject.title}</h3>
      
      {translatedProject.images && translatedProject.images.length > 0 && (
        <BrutalistCarousel images={translatedProject.images} altPrefix={translatedProject.title} />
      )}

      <p className="text-lg text-black dark:text-white mb-8 leading-relaxed border-s-4 border-black dark:border-white ps-4">
        {translatedProject.description}
      </p>
      
      <div className="mt-auto">
        <div className="flex flex-col gap-3 mb-8">
          <span className="text-xs font-bold uppercase tracking-widest text-gray-500 dark:text-gray-400">{t.projects.techStack}</span>
          <div className="flex flex-wrap gap-2">
            {translatedProject.techStack.map((tech: string, idx: number) => (
              <span key={idx} className="text-xs font-bold uppercase tracking-wider border border-black dark:border-white text-black dark:text-white px-3 py-1">
                {tech}
              </span>
            ))}
          </div>
        </div>
        
        <div className="flex flex-col gap-4 border-t border-black dark:border-white pt-6">
          <div className="flex flex-col md:flex-row gap-4 mt-2">
            {translatedProject.liveLink && (
              <a href={translatedProject.liveLink} target="_blank" rel="noreferrer" className="text-sm font-bold uppercase tracking-widest flex items-center gap-2 hover:opacity-70 transition-opacity">
                <span>[</span> {t.projects.liveDemo} <span>]</span>
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
