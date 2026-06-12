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
    <section className="py-16 md:py-24 bg-white dark:bg-black text-black dark:text-white border-t border-black dark:border-white">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="mb-12">
          <div dir="rtl" className="text-right text-sm text-gray-500 dark:text-gray-400 pb-1 font-arabic">الخبرات</div>
          <h2 className="text-3xl font-bold tracking-tight uppercase">Career & Experience</h2>
        </div>
        <div className="space-y-16">
          {experiences.map((exp) => (
            <div key={exp.id} className="border-t-2 border-black dark:border-white pt-6">
              <div className="mb-2">
                <span className="text-sm font-bold">{exp.timeline}</span>
              </div>
              <h3 className="text-2xl font-bold mb-1 uppercase">{exp.role}</h3>
              <h4 className="text-lg text-gray-600 dark:text-gray-400 font-medium mb-6">{exp.organization}</h4>
              
              <div className="mb-6">
                {exp.achievements.map((ach, idx) => (
                  <p key={idx} className="leading-relaxed mb-3 pl-4 border-l-[3px] border-black dark:border-white">
                    {ach}
                  </p>
                ))}
              </div>
              
              <div className="flex flex-col gap-3">
                <span className="text-xs font-bold uppercase tracking-widest text-gray-500 dark:text-gray-400">Technologies & Skills</span>
                <div className="flex flex-wrap gap-2">
                  {exp.tags.map((tag, idx) => (
                    <span key={idx} className="text-xs font-bold border border-black dark:border-white px-3 py-1 uppercase tracking-wider">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
