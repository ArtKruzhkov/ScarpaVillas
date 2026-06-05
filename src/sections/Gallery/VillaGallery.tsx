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
        // className="scroll-mt-[90px] h-[88vh] max-h-[1000px] mx-auto grid w-full max-w-8xl grid-cols-[1fr_180px] gap-6 px-8"
        className="scroll-mt-[90px] mx-auto grid w-full max-w-8xl grid-cols-1 md:grid-cols-[1fr_180px] gap-6 px-4 md:px-8">
        {/* MAIN IMAGE */}
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
            className="relative overflow-hidden h-[65vh] min-h-[500px] md:h-[88vh]">
            <img
              src={activeVilla.image}
              alt={activeVilla.name}
              className="h-full w-full object-cover"
            />

            {/* CONTENT */}
            <div className="absolute left-4 top-4 md:left-12 md:top-12 z-10 max-w-[90%] md:max-w-[430px] xl:max-w-[865px] text-[#2C3654]">
              <motion.h3
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.15 }}
                className="font-serif text-[28px] leading-[34px] sm:text-[36px] sm:leading-[42px] lg:text-[48px] lg:leading-[60px] xl:text-[64px] xl:leading-[80px] tracking-[0.05em]">
                {activeVilla.name}
              </motion.h3>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.25 }}
                className="mt-2 md:mt-4 font-sans text-[15px] leading-[24px] sm:text-[18px] sm:leading-[30px] lg:text-[22px] lg:leading-[36px] xl:text-[30px] xl:leading-[48px]">
                {activeVilla.description}
              </motion.p>
            </div>

            {/* BUTTON */}
            <motion.a
              href={process.env.PUBLIC_URL || '/'}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.35 }}
              className="discover-villa-btn">
              Discover The Villa
            </motion.a>
          </motion.div>
        </AnimatePresence>

        {/* THUMBNAILS */}
        <div className="flex justify-center gap-4 md:grid md:grid-rows-4 md:gap-6 md:h-[88vh]">
          {villaSlides.map((villa) => {
            const isActive = villa.id === activeVilla.id;

            return (
              <button
                key={villa.id}
                type="button"
                onClick={() => {
                  if (villa.id === activeVilla.id) return;

                  setActiveVilla(villa);

                  galleryRef.current?.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start',
                  });
                }}
                className={`relative overflow-hidden w-[120px] h-[90px] md:w-auto md:h-auto transition-all duration-300 ${
                  isActive ? 'ring-[3px] ring-[#2C3654]' : 'opacity-80 hover:opacity-100'
                }`}
                // className={`relative overflow-hidden shrink-0 w-[120px] h-[90px] md:w-auto md:h-auto transition-all duration-300
                //           ${isActive ? 'ring-[3px] ring-[#2C3654]' : 'opacity-80 hover:opacity-100'}
                // `}
                aria-label={`Show ${villa.name}`}>
                <img src={villa.image} alt={villa.name} className="h-full w-full object-cover" />
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
