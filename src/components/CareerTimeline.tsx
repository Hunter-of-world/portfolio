"use client";
import React from 'react';
import { useI18n } from '../app/i18n';

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
  const { t, getExperience } = useI18n();

  return (
    <section className="py-16 md:py-24 bg-white dark:bg-black text-black dark:text-white border-t border-black dark:border-white">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="mb-12">
          <h2 className="text-3xl font-bold tracking-tight uppercase">{t.nav.careerTitle}</h2>
        </div>
        <div className="space-y-16">
          {experiences.map((exp) => {
            const translatedExp = getExperience(exp);
            return (
              <div key={translatedExp.id} className="border-t-2 border-black dark:border-white pt-6">
                <div className="mb-2">
                  <span className="text-sm font-bold">{translatedExp.timeline}</span>
                </div>
                <h3 className="text-2xl font-bold mb-1 uppercase">{translatedExp.role}</h3>
                <h4 className="text-lg text-gray-600 dark:text-gray-400 font-medium mb-6">{translatedExp.organization}</h4>
                
                <div className="mb-6">
                  {translatedExp.achievements.map((ach: any, idx: number) => (
                    <p key={idx} className="leading-relaxed mb-3 ps-4 border-s-[3px] border-black dark:border-white">
                      {ach}
                    </p>
                  ))}
                </div>
                
                <div className="flex flex-col gap-3">
                  <span className="text-xs font-bold uppercase tracking-widest text-gray-500 dark:text-gray-400">{t.experience.technologies}</span>
                  <div className="flex flex-wrap gap-2">
                    {translatedExp.tags.map((tag: string, idx: number) => (
                      <span key={idx} className="text-xs font-bold border border-black dark:border-white px-3 py-1 uppercase tracking-wider">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
