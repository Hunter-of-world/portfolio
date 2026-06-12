"use client";
import React from 'react';
import { useI18n } from '../app/i18n';

export default function PillarGrid() {
  const { t, getPillar } = useI18n();
  const pillars = [
    {
      title: 'Software & AI',
      description: 'Building robust full-stack applications and local AI orchestrations utilizing tools like Next.js, Node.js, and Ollama.',
      icon: 'SYS'
    },
    {
      title: 'Hardware & IoT',
      description: 'Designing low-level hardware solutions and monitoring networks with Arduino, ESP8266, and Zabbix.',
      icon: 'HW'
    },
    {
      title: 'Leadership',
      description: 'Guiding teams, mentoring peers as a UniTech Ambassador, and streamlining operational processes.',
      icon: 'LDR'
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-white dark:bg-black text-black dark:text-white border-t border-black dark:border-white">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="mb-12">
          <h2 className="text-3xl font-bold tracking-tight uppercase">{t.nav.corePillars}</h2>
        </div>
        <div className="flex flex-col gap-8">
          {pillars.map((pillar, idx) => {
            const translatedPillar = getPillar(pillar, idx);
            return (
              <div key={idx} className="p-8 border-2 border-black dark:border-white bg-white dark:bg-black flex flex-col md:flex-row gap-6 items-start">
                <div className="text-xl font-bold border-2 border-black dark:border-white px-3 py-1 shrink-0 uppercase tracking-widest">
                  {translatedPillar.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-3 uppercase tracking-wide">{translatedPillar.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-lg">
                    {translatedPillar.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
