"use client";

import Hero from '../components/Hero';
import PillarGrid from '../components/PillarGrid';
import ProjectCard, { Project } from '../components/ProjectCard';
import CareerTimeline, { Experience } from '../components/CareerTimeline';
import ContactForm from '../components/ContactForm';

import projectsData from '../data/projects.json';
import experienceData from '../data/experience.json';
import { I18nProvider, useI18n } from './i18n';

function HomeContent() {
  const projects = projectsData as Project[];
  const experiences = experienceData as Experience[];
  const { t } = useI18n();

  return (
    <main className="min-h-screen bg-white dark:bg-black text-black dark:text-white">
      <Hero />
      <PillarGrid />
      
      <section id="projects" className="py-16 md:py-24 bg-white dark:bg-black border-t border-black dark:border-white">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-black dark:text-white uppercase">{t.nav.featuredProjects}</h2>
            <p className="text-gray-600 dark:text-gray-400 mt-2">{t.nav.projectsSubtitle}</p>
          </div>
          <div className="flex flex-col gap-12">
            {projects.map(project => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </section>

      <CareerTimeline experiences={experiences} />
      <ContactForm />
    </main>
  );
}

export default function Home() {
  return (
    <I18nProvider>
      <HomeContent />
    </I18nProvider>
  );
}
