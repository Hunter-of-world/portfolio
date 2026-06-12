import Hero from '../components/Hero';
import PillarGrid from '../components/PillarGrid';
import ProjectCard, { Project } from '../components/ProjectCard';
import CareerTimeline, { Experience } from '../components/CareerTimeline';
import ContactForm from '../components/ContactForm';

import projectsData from '../data/projects.json';
import experienceData from '../data/experience.json';

export default function Home() {
  const projects = projectsData as Project[];
  const experiences = experienceData as Experience[];

  return (
    <main className="min-h-screen bg-white dark:bg-black text-gray-900 dark:text-gray-100">
      <Hero />
      <PillarGrid />
      
      <section id="projects" className="py-16 md:py-24 bg-white dark:bg-black">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-100">Featured Projects</h2>
            <p className="text-gray-600 dark:text-gray-400 mt-2">A selection of recent engineering work and technical architecture.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
