import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';

export function VillasGrid() {
  const { t } = useTranslation();

  const villas = [
    {
      title: t('villasGrid.tettineive.title'),
      text1: t('villasGrid.tettineive.text1'),
      text2: t('villasGrid.tettineive.text2'),
      image: `${process.env.PUBLIC_URL}/images/villas_villasGrid/tettineive.png`,
      framed: true,
    },
    {
      title: t('villasGrid.bogliona.title'),
      text1: t('villasGrid.bogliona.text1'),
      text2: t('villasGrid.bogliona.text2'),
      image: `${process.env.PUBLIC_URL}/images/villas_villasGrid/bogliona.png`,
      framed: false,
    },
    {
      title: t('villasGrid.bricchi.title'),
      text1: t('villasGrid.bricchi.text1'),
      text2: t('villasGrid.bricchi.text2'),
      image: `${process.env.PUBLIC_URL}/images/villas_villasGrid/bricchi.png`,
      framed: false,
    },
    {
      title: t('villasGrid.tettimorra.title'),
      text1: t('villasGrid.tettimorra.text1'),
      text2: t('villasGrid.tettimorra.text2'),
      image: `${process.env.PUBLIC_URL}/images/villas_villasGrid/tettimorra.png`,
      framed: true,
    },
  ];

  return (
    <section className="bg-[#2C3654]">
      <div className="mx-auto max-w-8xl 2xl:max-w-[1920px] px-4 py-4">
        <div className="grid grid-cols-1 gap-y-2 lg:grid-cols-2">
          {villas.map((villa, index) => (
            <motion.article
              key={villa.title}
              className="relative h-[670px]"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{
                duration: 1.2,
                delay: index * 0.12,
                ease: [0.22, 1, 0.36, 1],
              }}>
              <div className="relative h-full p-4">
                <div className="relative h-full overflow-hidden">
                  <img src={villa.image} alt={villa.title} className="h-full w-full object-cover" />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/5 to-transparent" />

                  <div className="absolute inset-x-0 bottom-0 z-10 p-7 text-white">
                    <AnimatePresence mode="wait">
                      <motion.h3
                        key={villa.title}
                        className="font-serif text-[48px] leading-none"
                        initial={{ opacity: 0, y: 12 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -12 }}
                        transition={{
                          duration: 0.35,
                          ease: [0.22, 1, 0.36, 1],
                        }}>
                        {villa.title}
                      </motion.h3>
                    </AnimatePresence>

                    <AnimatePresence mode="wait">
                      <motion.p
                        key={`${villa.text1}-${villa.text2}`}
                        className="mt-3 max-w-[720px] font-sans text-[20px] leading-[30px]"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.25 }}>
                        {villa.text1}
                        <br />
                        {villa.text2}
                      </motion.p>
                    </AnimatePresence>

                    <AnimatePresence mode="wait">
                      <motion.a
                        key={t('villasGrid.discover')}
                        href="/villas"
                        className="mt-8 inline-block border-y border-white py-2 font-sans text-[21px] font-semibold uppercase tracking-[0.18em] transition-opacity duration-300 hover:opacity-10"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        whileHover={{ opacity: 0.6 }}
                        transition={{ duration: 0.25 }}>
                        {t('villasGrid.discover')}
                      </motion.a>
                    </AnimatePresence>
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
