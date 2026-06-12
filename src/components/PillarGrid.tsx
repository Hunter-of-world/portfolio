import React from 'react';

export default function PillarGrid() {
  const pillars = [
    {
      title: 'Software & AI',
      description: 'Building robust full-stack applications and local AI orchestrations utilizing tools like Next.js, Node.js, and Ollama.',
      icon: '💻'
    },
    {
      title: 'Hardware & IoT',
      description: 'Designing low-level hardware solutions and monitoring networks with Arduino, ESP8266, and Zabbix.',
      icon: '🔌'
    },
    {
      title: 'Leadership',
      description: 'Guiding teams, mentoring peers as a UniTech Ambassador, and streamlining operational processes.',
      icon: '🤝'
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-gray-50 text-gray-900 dark:bg-gray-900 dark:text-gray-100">
      <div className="container mx-auto px-6 max-w-5xl">
        <h2 className="text-3xl font-bold mb-12 tracking-tight">Core Pillars</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pillars.map((pillar, idx) => (
            <div key={idx} className="p-8 border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950 shadow-sm hover:shadow-md transition-shadow">
              <div className="text-4xl mb-4">{pillar.icon}</div>
              <h3 className="text-xl font-bold mb-3">{pillar.title}</h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
