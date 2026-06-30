import React, { useState, useRef } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import './villaGallery.css';

type VillaGalleryItem = {
  id: string;
  name: string;
  description: string;
  image: string;
};

const baseUrl = process.env.PUBLIC_URL;

export function VillaGallery() {
  const { t, i18n } = useTranslation();

  const villaSlides: VillaGalleryItem[] = [
    {
      id: 'tettineive',
      name: 'Villa Tettineive',
      description: t('villaGallery.tettineiveDescription'),
      image: `${baseUrl}/images/gallery/tettineive.png`,
    },
    {
      id: 'la-bogliona',
      name: 'Villa La Bogliona',
      description: t('villaGallery.boglionaDescription'),
      image: `${baseUrl}/images/gallery/bogliona.png`,
    },
    {
      id: 'i-bricchi',
      name: 'Villa I Bricchi',
      description: t('villaGallery.bricchiDescription'),
      image: `${baseUrl}/images/gallery/bricchi.png`,
    },
    {
      id: 'tettimora',
      name: 'Villa Tettimora',
      description: t('villaGallery.tettimoraDescription'),
      image: `${baseUrl}/images/gallery/tettimora.png`,
    },
  ];

  // const [activeVilla, setActiveVilla] = useState<VillaGalleryItem>(villaSlides[3]);
  const [activeVillaId, setActiveVillaId] = useState('tettimora');
  const activeVilla = villaSlides.find((villa) => villa.id === activeVillaId) ?? villaSlides[3];
  const galleryRef = useRef<HTMLDivElement>(null);

  return (
    <div className="bg-white pt-10 pb-16 md:pb-24">
      <div
        ref={galleryRef}
        className="lg:scroll-mt-[100px] mx-auto grid w-full max-w-8xl grid-cols-1 lg:grid-cols-[1fr_180px] gap-6 xl:gap-12 px-8 md:px-12 xl:px-16">
        <motion.div
          initial={{
            opacity: 0,
            scale: 1.08,
          }}
          whileInView={{
            opacity: 1,
            scale: 1,
          }}
          viewport={{ once: true, amount: 0.3 }}
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
              className="relative overflow-hidden h-[65vh] min-h-[500px] max-h-[1000px] lg:h-[80vh]">
              <img
                src={activeVilla.image}
                alt={activeVilla.name}
                className="h-full w-full object-cover"
              />

              <div className="absolute left-4 top-4 md:left-6 md:top-10 2xl:left-16 z-10 max-w-[90%] md:max-w-[430px] lg:max-w-[540px] xl:max-w-[610px] 2xl:max-w-[770px] text-[#2C3654]">
                <motion.h3
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.15 }}
                  className="font-serif text-[28px] leading-[34px] sm:text-[36px] sm:leading-[42px] lg:text-[48px] lg:leading-[58px] 2xl:text-[54px] 2xl:leading-[62px] tracking-[0.01em]">
                  {activeVilla.name}
                </motion.h3>

                <AnimatePresence mode="wait">
                  <motion.p
                    key={`${activeVilla.id}-${i18n.language}`}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.3 }}
                    className="mt-2 md:mt-4 font-sans text-[15px] leading-[21px] sm:text-[18px] sm:leading-[26px] lg:text-[22px] lg:leading-[32px] 2xl:text-[24px] 2xl:leading-[34px]">
                    {activeVilla.description}
                  </motion.p>
                </AnimatePresence>
              </div>

              {/* <a href={process.env.PUBLIC_URL || '/'} className="discover-villa-btn">
                Discover The Villa
              </a> */}

              <a href={process.env.PUBLIC_URL || '/'} className="discover-villa-btn">
                <AnimatePresence mode="wait">
                  <motion.span
                    key={i18n.language}
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -6 }}
                    transition={{ duration: 0.25 }}>
                    {t('villaGallery.discoverVilla')}
                  </motion.span>
                </AnimatePresence>
              </a>
            </motion.div>
          </AnimatePresence>
        </motion.div>

        {/* THUMBNAILS */}
        <motion.div
          className="flex justify-center gap-4 lg:grid lg:grid-rows-4 lg:gap-6 lg:h-[80vh] max-h-[1000px]"
          initial={{
            opacity: 0,
            x: 40,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
          }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{
            duration: 1,
            delay: 0.3,
            ease: [0.22, 1, 0.36, 1],
          }}>
          {villaSlides.map((villa) => {
            const isActive = villa.id === activeVillaId;
            const getThumbnailTitle = (name: string) => {
              switch (name) {
                case 'Villa La Bogliona':
                  return 'Bogliona';

                case 'Villa I Bricchi':
                  return 'Bricchi';

                default:
                  return name.replace('Villa ', '');
              }
            };

            return (
              // <button
              //   key={villa.id}
              //   type="button"
              //   onClick={() => {
              //     if (villa.id === activeVillaId) return;

              //     // setActiveVilla(villa);
              //     setActiveVillaId(villa.id);

              //     if (window.innerWidth >= 1024) {
              //       galleryRef.current?.scrollIntoView({
              //         behavior: 'smooth',
              //         block: 'start',
              //       });
              //     }
              //   }}
              //   className={`relative overflow-hidden w-[120px] h-[90px] md:w-auto md:h-auto transition-all duration-300 ${
              //     isActive ? 'ring-[3px] ring-[#2C3654]' : 'opacity-80 hover:opacity-100'
              //   }`}
              //   aria-label={`Show ${villa.name}`}>
              //   <img src={villa.image} alt={villa.name} className="h-full w-full object-cover" />
              // </button>
              <button
                key={villa.id}
                type="button"
                onClick={() => {
                  if (villa.id === activeVillaId) return;

                  setActiveVillaId(villa.id);

                  if (window.innerWidth >= 1024) {
                    galleryRef.current?.scrollIntoView({
                      behavior: 'smooth',
                      block: 'start',
                    });
                  }
                }}
                className={`relative overflow-hidden w-[120px] h-[90px] lg:w-auto lg:h-auto transition-all duration-300 ${
                  isActive ? 'ring-[3px] ring-[#2C3654]' : 'opacity-85 hover:opacity-100'
                }`}
                aria-label={`Show ${villa.name}`}>
                <img src={villa.image} alt={villa.name} className="h-full w-full object-cover" />

                {/* Overlay */}
                {/* <div
                  className={`absolute inset-0 transition-all duration-300 ${
                    isActive
                      ? 'bg-gradient-to-t from-[#2C3654] to-[#2C36548C]'
                      : 'bg-gradient-to-t from-black/85 via-black/25 to-transparent'
                  }`}
                /> */}
                {/* Overlay for not active*/}
                {/* <div
                  className={`absolute inset-0 transition-all duration-300 ${
                    isActive
                      ? 'bg-gradient-to-t from-black/50 via-black/5 to-transparent'
                      : 'bg-gradient-to-t from-[#2C3654] to-[#2C36548C]'
                  }`}
                /> */}

                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/5 to-transparent transition-all duration-300" />

                {/* Text */}
                <div className="absolute inset-x-0 bottom-2 z-10 text-center text-white">
                  <p className="lg:mt-1 font-serif text-[13px] leading-[16px] sm:text-[18px] sm:leading-[20px] lg:text-[24px] lg:leading-[24px]">
                    {getThumbnailTitle(villa.name)}
                  </p>
                </div>
              </button>
            );
          })}
        </motion.div>
      </div>
    </div>
  );
}
