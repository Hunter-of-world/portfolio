"use client";
import React from 'react';
import { useI18n } from '../app/i18n';

export default function Hero() {
  const { t } = useI18n();
  return (
    <section className="py-24 md:py-32 bg-white dark:bg-black text-black dark:text-white">
      <div className="container mx-auto px-6 max-w-4xl">
        <span className="block text-2xl md:text-3xl font-black mb-4 uppercase tracking-widest text-black dark:text-white border-b-4 border-black dark:border-white pb-2 w-fit">
          {t.hero.name}
        </span>
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tighter mb-8 uppercase leading-none border-b-8 border-black dark:border-white pb-8 inline-block">
          {t.hero.title}
        </h1>
        <p className="text-xl md:text-2xl text-black dark:text-white max-w-2xl leading-relaxed mb-12 font-medium">
          {t.hero.subtitle}
        </p>
        <div className="flex flex-col sm:flex-row gap-6">
          <a href="#projects" className="bg-black dark:bg-white text-white dark:text-black px-8 py-4 font-bold uppercase tracking-widest border-2 border-black dark:border-white hover:bg-transparent hover:text-black dark:hover:text-white hover:bg-white dark:hover:bg-black transition-colors text-center">
            {t.hero.viewWork}
          </a>
          <a href="#contact" className="bg-transparent text-black dark:text-white px-8 py-4 font-bold uppercase tracking-widest border-2 border-black dark:border-white hover:bg-black dark:hover:bg-white hover:text-white dark:hover:text-black transition-colors text-center">
            {t.hero.contactMe}
          </a>
        </div>
      </div>
    </section>
  );
}
