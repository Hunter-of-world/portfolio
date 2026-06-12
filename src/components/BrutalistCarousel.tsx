"use client";

import React, { useEffect, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';

interface BrutalistCarouselProps {
  images: string[];
  altPrefix?: string;
}

export default function BrutalistCarousel({ images, altPrefix = "Project Image" }: BrutalistCarouselProps) {
  const [dir, setDir] = useState<'ltr' | 'rtl'>('ltr');

  useEffect(() => {
    const htmlDir = document.documentElement.dir as 'ltr' | 'rtl';
    setDir(htmlDir || 'ltr');

    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.attributeName === 'dir') {
          const newDir = document.documentElement.dir as 'ltr' | 'rtl';
          setDir(newDir || 'ltr');
        }
      });
    });

    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['dir'] });
    return () => observer.disconnect();
  }, []);

  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, direction: dir });

  useEffect(() => {
    if (emblaApi) {
      emblaApi.reInit({ loop: true, direction: dir });
    }
  }, [dir, emblaApi]);

  const scrollPrev = () => emblaApi && emblaApi.scrollPrev();
  const scrollNext = () => emblaApi && emblaApi.scrollNext();

  if (!images || images.length === 0) return null;

  return (
    <div className="flex flex-col mb-6">
      <div className="overflow-hidden" ref={emblaRef} dir={dir}>
        <div className="flex items-center">
          {images.map((src, index) => (
            <div className="flex-[0_0_100%] min-w-0 flex justify-center items-center" key={index}>
              <img 
                src={src} 
                alt={`${altPrefix} ${index + 1}`} 
                className="max-w-full w-auto h-auto max-h-[70vh] border-2 border-black dark:border-white"
              />
            </div>
          ))}
        </div>
      </div>
      
      <div className="flex mt-4" style={{ marginBlockStart: '1rem' }}>
        <button 
          onClick={scrollPrev}
          className="font-mono uppercase border-2 border-black dark:border-white bg-white dark:bg-black text-black dark:text-white px-4 py-2 font-bold hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-colors"
          style={{ marginInlineEnd: '1rem' }}
        >
          [ &lt; ]
        </button>
        <button 
          onClick={scrollNext}
          className="font-mono uppercase border-2 border-black dark:border-white bg-white dark:bg-black text-black dark:text-white px-4 py-2 font-bold hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-colors"
        >
          [ &gt; ]
        </button>
      </div>
    </div>
  );
}
