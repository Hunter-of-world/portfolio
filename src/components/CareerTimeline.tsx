import React from 'react';

export interface Experience {
  id: string;
  organization: string;
  role: string;
  timeline: string;
  achievements: string[];
  tags: string[];
}

interface CareerTimelineProps {
  experiences: Experience[];
}

export default function CareerTimeline({ experiences }: CareerTimelineProps) {
  return (
    <section className="py-16 md:py-24 bg-white dark:bg-black text-gray-900 dark:text-gray-100 border-t border-gray-100 dark:border-gray-900">
      <div className="container mx-auto px-6 max-w-3xl">
        <h2 className="text-3xl font-bold mb-12 tracking-tight">Career & Experience</h2>
        <div className="space-y-12 border-l-2 border-gray-200 dark:border-gray-800 pl-6 md:pl-10 ml-2 md:ml-4">
          {experiences.map((exp) => (
            <div key={exp.id} className="relative">
              {/* Timeline marker */}
              <div className="absolute -left-[35px] md:-left-[51px] top-1 w-4 h-4 bg-blue-600 rounded-full border-4 border-white dark:border-black" />
              
              <div className="mb-1">
                <span className="text-sm font-bold text-blue-600 dark:text-blue-400">{exp.timeline}</span>
              </div>
              <h3 className="text-xl font-bold mb-1">{exp.role}</h3>
              <h4 className="text-lg text-gray-500 dark:text-gray-400 font-medium mb-4">{exp.organization}</h4>
              
              <ul className="list-disc list-outside ml-4 mb-4 space-y-2 text-gray-600 dark:text-gray-400">
                {exp.achievements.map((ach, idx) => (
                  <li key={idx} className="leading-relaxed">{ach}</li>
                ))}
              </ul>
              
              <div className="flex flex-wrap gap-2">
                {exp.tags.map((tag, idx) => (
                  <span key={idx} className="text-xs font-medium border border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-400 px-2 py-1 rounded-sm">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
