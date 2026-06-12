import React from 'react';

export default function Hero() {
  return (
    <section className="py-24 md:py-32 bg-black text-white">
      <div className="container mx-auto px-6 max-w-5xl">
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6">
          System Engineer <br className="hidden md:block" /> & Developer
        </h1>
        <p className="text-xl md:text-2xl text-gray-400 max-w-2xl leading-relaxed mb-10">
          Bridging the gap between robust system architecture and scalable full-stack applications. Specializing in AI orchestration, IoT networks, and modern web experiences.
        </p>
        <div className="flex gap-4">
          <a href="#projects" className="bg-white text-black px-8 py-3 font-semibold hover:bg-gray-200 transition-colors">View Work</a>
          <a href="#contact" className="border border-gray-700 text-white px-8 py-3 font-semibold hover:border-gray-400 transition-colors">Contact Me</a>
        </div>
      </div>
    </section>
  );
}
