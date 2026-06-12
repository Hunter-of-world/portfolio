import React from 'react';

export default function Hero() {
  return (
    <section className="py-24 md:py-32 bg-white dark:bg-black text-black dark:text-white">
      <div className="container mx-auto px-6 max-w-4xl">
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tighter mb-8 uppercase leading-none border-b-8 border-black dark:border-white pb-8 inline-block">
          System<br />Engineer<br />& Developer
        </h1>
        <p className="text-xl md:text-2xl text-black dark:text-white max-w-2xl leading-relaxed mb-12 font-medium">
          Bridging the gap between robust system architecture and scalable full-stack applications. Specializing in AI orchestration, IoT networks, and modern web experiences.
        </p>
        <div className="flex flex-col sm:flex-row gap-6">
          <a href="#projects" className="bg-black dark:bg-white text-white dark:text-black px-8 py-4 font-bold uppercase tracking-widest border-2 border-black dark:border-white hover:bg-transparent hover:text-black dark:hover:text-white hover:bg-white dark:hover:bg-black transition-colors text-center">
            View Work
          </a>
          <a href="#contact" className="bg-transparent text-black dark:text-white px-8 py-4 font-bold uppercase tracking-widest border-2 border-black dark:border-white hover:bg-black dark:hover:bg-white hover:text-white dark:hover:text-black transition-colors text-center">
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
}
