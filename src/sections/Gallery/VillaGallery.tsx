import React, { useState, useRef } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

type VillaGalleryItem = {
  id: string;
  name: string;
  description: string;
  image: string;
};

const villaSlides: VillaGalleryItem[] = [
  {
    id: 'tettineive',
    name: 'Villa Tettineive',
    description: 'A refined home base for exploration — and a gentle return at the end of the day.',
    image: '/images/gallery/tettineive.png',
  },
  {
    id: 'la-bogliona',
    name: 'Villa La Bogliona',
    description: 'A welcoming villa designed for comfort, conversation, and easy gatherings.',
    image: '/images/gallery/bogliona.png',
  },
  {
    id: 'i-bricchi',
    name: 'Villa I Bricchi',
    description: 'A hillside vantage for long mornings, vineyard light, and unhurried evenings.',
    image: '/images/gallery/bricchi.png',
  },
  {
    id: 'tettimora',
    name: 'Villa Tettimora',
    description:
      'An intimate retreat for quiet evenings, close company, and the beauty of the Langhe all around.',
    image: '/images/gallery/tettimora.png',
  },
];

// export function VillaGallery() {
//   const [activeVilla, setActiveVilla] = useState<VillaGalleryItem>(villaSlides[0]);
//   const galleryRef = useRef<HTMLDivElement>(null);

//   return (
//     <div className="bg-white py-10">
//       <div
//         ref={galleryRef}
//         className="scroll-mt-[100px] mx-auto grid w-full max-w-8xl grid-cols-[1fr_280px] gap-6 px-8">
//         {/* MAIN IMAGE */}
//         <div className="relative overflow-hidden">
//           <img
//             src={activeVilla.image}
//             alt={activeVilla.name}
//             className="h-[1220px] w-full object-cover transition-all duration-500"
//           />

//           {/* CONTENT */}
//           <div className="absolute left-12 top-12 z-10 max-w-[865px] text-[#2C3654]">
//             <h3 className="font-serif text-[64px] leading-[80px] tracking-[0.05em]">
//               {activeVilla.name}
//             </h3>

//             <p className="mt-4 font-sans text-[30px] leading-[48px]">{activeVilla.description}</p>
//           </div>

//           {/* BUTTON */}
//           <a
//             href="/"
//             className="absolute bottom-[4.5rem] left-[4.7rem] z-10 inline-flex border-[3px] border-white bg-white px-[171px] py-[18px] font-sans text-[32px] font-bold uppercase tracking-[0.20em] text-[#2C3654] transition-all duration-300 hover:bg-[#2C3654] hover:text-white hover:border-[#2C3654]">
//             Discover The Villa
//           </a>
//         </div>

//         {/* THUMBNAILS */}
//         <div className="grid grid-rows-4 gap-6">
//           {villaSlides.map((villa) => {
//             const isActive = villa.id === activeVilla.id;

//             return (
//               <button
//                 key={villa.id}
//                 type="button"
//                 onClick={() => {
//                   setActiveVilla(villa);

//                   galleryRef.current?.scrollIntoView({
//                     behavior: 'smooth',
//                     block: 'start',
//                   });
//                 }}
//                 className={`relative overflow-hidden transition-all duration-300 ${
//                   isActive ? 'ring-[4px] ring-[#2C3654]' : 'opacity-80 hover:opacity-100'
//                 }`}
//                 aria-label={`Show ${villa.name}`}>
//                 <img src={villa.image} alt={villa.name} className="h-full w-full object-cover" />
//               </button>
//             );
//           })}
//         </div>
//       </div>
//     </div>
//   );
// }

export function VillaGallery() {
  const [activeVilla, setActiveVilla] = useState<VillaGalleryItem>(villaSlides[3]);
  const galleryRef = useRef<HTMLDivElement>(null);

  return (
    <div className="bg-white pt-10 pb-32">
      <div
        ref={galleryRef}
        className="scroll-mt-[100px] mx-auto grid w-full max-w-8xl grid-cols-[1fr_280px] gap-6 px-8">
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
            className="relative overflow-hidden">
            <img
              src={activeVilla.image}
              alt={activeVilla.name}
              className="h-[1220px] w-full object-cover"
            />

            {/* CONTENT */}
            <div className="absolute left-12 top-12 z-10 max-w-[865px] text-[#2C3654]">
              <motion.h3
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.15 }}
                className="font-serif text-[64px] leading-[80px] tracking-[0.05em]">
                {activeVilla.name}
              </motion.h3>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.25 }}
                className="mt-4 font-sans text-[30px] leading-[48px]">
                {activeVilla.description}
              </motion.p>
            </div>

            {/* BUTTON */}
            <motion.a
              href="/"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.35 }}
              className="absolute bottom-[4.5rem] left-[4.7rem] z-10 inline-flex border-[3px] border-white bg-white px-[171px] py-[18px] font-sans text-[32px] font-bold uppercase tracking-[0.20em] text-[#2C3654] transition-all duration-300 hover:border-[#2C3654] hover:bg-[#2C3654] hover:text-white">
              Discover The Villa
            </motion.a>
          </motion.div>
        </AnimatePresence>

        {/* THUMBNAILS */}
        <div className="grid grid-rows-4 gap-4">
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
                className={`relative overflow-hidden transition-all duration-300 ${
                  isActive ? 'ring-[3px] ring-[#2C3654]' : 'opacity-80 hover:opacity-100'
                }`}
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
