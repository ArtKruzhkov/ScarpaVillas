import React, { useState, useRef } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import './villaGallery.css';

type VillaGalleryItem = {
  id: string;
  name: string;
  description: string;
  image: string;
};

const baseUrl = process.env.PUBLIC_URL;

const villaSlides: VillaGalleryItem[] = [
  {
    id: 'tettineive',
    name: 'Villa Tettineive',
    description: 'A refined home base for exploration — and a gentle return at the end of the day.',
    image: `${baseUrl}/images/gallery/tettineive.png`,
  },
  {
    id: 'la-bogliona',
    name: 'Villa La Bogliona',
    description: 'A welcoming villa designed for comfort, conversation, and easy gatherings.',
    image: `${baseUrl}/images/gallery/bogliona.png`,
  },
  {
    id: 'i-bricchi',
    name: 'Villa I Bricchi',
    description: 'A hillside vantage for long mornings, vineyard light, and unhurried evenings.',
    image: `${baseUrl}/images/gallery/bricchi.png`,
  },
  {
    id: 'tettimora',
    name: 'Villa Tettimora',
    description:
      'An intimate retreat for quiet evenings, close company, and the beauty of the Langhe all around.',
    image: `${baseUrl}/images/gallery/tettimora.png`,
  },
];

export function VillaGallery() {
  const [activeVilla, setActiveVilla] = useState<VillaGalleryItem>(villaSlides[3]);
  const galleryRef = useRef<HTMLDivElement>(null);

  return (
    <div className="bg-white pt-10 pb-16 md:pb-24">
      <div
        ref={galleryRef}
        className="lg:scroll-mt-[100px] mx-auto grid w-full max-w-8xl grid-cols-1 md:grid-cols-[1fr_180px] gap-6 xl:gap-12 px-4 md:px-8 xl:px-16">
        <motion.div
          initial={{
            opacity: 0,
            scale: 1.08,
          }}
          whileInView={{
            opacity: 1,
            scale: 1,
          }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{
            duration: 1.2,
            ease: [0.22, 1, 0.36, 1],
          }}>
          <AnimatePresence mode="wait">
            <motion.div
              key={activeVilla.id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{
                duration: 0.45,
                ease: 'easeInOut',
              }}
              className="relative overflow-hidden h-[65vh] min-h-[500px] max-h-[1000px] md:h-[80vh]">
              <img
                src={activeVilla.image}
                alt={activeVilla.name}
                className="h-full w-full object-cover"
              />

              <div className="absolute left-4 top-4 md:left-16 md:top-16 z-10 max-w-[90%] md:max-w-[430px] xl:max-w-[770px] text-[#2C3654]">
                <motion.h3
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.15 }}
                  className="font-serif text-[28px] leading-[34px] sm:text-[36px] sm:leading-[42px] lg:text-[48px] lg:leading-[60px] xl:text-[62px] xl:leading-[76px] tracking-[0.01em]">
                  {activeVilla.name}
                </motion.h3>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.25 }}
                  className="mt-2 md:mt-4 font-sans text-[15px] leading-[24px] sm:text-[18px] sm:leading-[30px] lg:text-[22px] lg:leading-[36px] xl:text-[28px] xl:leading-[46px]">
                  {activeVilla.description}
                </motion.p>
              </div>

              <a href={process.env.PUBLIC_URL || '/'} className="discover-villa-btn">
                Discover The Villa
              </a>
            </motion.div>
          </AnimatePresence>
        </motion.div>

        {/* THUMBNAILS */}
        {/* <div className="flex justify-center gap-4 md:grid md:grid-rows-4 md:gap-6 md:h-[80vh] max-h-[1000px]">
          {villaSlides.map((villa) => {
            const isActive = villa.id === activeVilla.id;

            return (
              <button
                key={villa.id}
                type="button"
                onClick={() => {
                  if (villa.id === activeVilla.id) return;

                  setActiveVilla(villa);

                  if (window.innerWidth >= 1024) {
                    galleryRef.current?.scrollIntoView({
                      behavior: 'smooth',
                      block: 'start',
                    });
                  }
                }}
                className={`relative overflow-hidden w-[120px] h-[90px] md:w-auto md:h-auto transition-all duration-300 ${
                  isActive ? 'ring-[3px] ring-[#2C3654]' : 'opacity-80 hover:opacity-100'
                }`}
                aria-label={`Show ${villa.name}`}>
                <img src={villa.image} alt={villa.name} className="h-full w-full object-cover" />
              </button>
            );
          })}
        </div> */}

        <motion.div
          className="flex justify-center gap-4 md:grid md:grid-rows-4 md:gap-6 md:h-[80vh] max-h-[1000px]"
          initial={{
            opacity: 0,
            x: 40,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
          }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{
            duration: 1,
            delay: 0.3,
            ease: [0.22, 1, 0.36, 1],
          }}>
          {villaSlides.map((villa) => {
            const isActive = villa.id === activeVilla.id;

            return (
              <button
                key={villa.id}
                type="button"
                onClick={() => {
                  if (villa.id === activeVilla.id) return;

                  setActiveVilla(villa);

                  if (window.innerWidth >= 1024) {
                    galleryRef.current?.scrollIntoView({
                      behavior: 'smooth',
                      block: 'start',
                    });
                  }
                }}
                className={`relative overflow-hidden w-[120px] h-[90px] md:w-auto md:h-auto transition-all duration-300 ${
                  isActive ? 'ring-[3px] ring-[#2C3654]' : 'opacity-80 hover:opacity-100'
                }`}
                aria-label={`Show ${villa.name}`}>
                <img src={villa.image} alt={villa.name} className="h-full w-full object-cover" />
              </button>
            );
          })}
        </motion.div>
      </div>
    </div>
  );
}
