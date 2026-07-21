import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';

export function VillasGrid() {
  const { t } = useTranslation();

  const villas = [
    {
      id: 'tettineive',
      title: t('villasGrid.tettineive.title'),
      text1: t('villasGrid.tettineive.text1'),
      text2: t('villasGrid.tettineive.text2'),
      image: `${process.env.PUBLIC_URL}/images/villas_villasGrid/tettineive.png`,
      framed: true,
    },
    {
      id: 'bogliona',
      title: t('villasGrid.bogliona.title'),
      text1: t('villasGrid.bogliona.text1'),
      text2: t('villasGrid.bogliona.text2'),
      image: `${process.env.PUBLIC_URL}/images/villas_villasGrid/bogliona.png`,
      framed: false,
    },
    {
      id: 'bricchi',
      title: t('villasGrid.bricchi.title'),
      text1: t('villasGrid.bricchi.text1'),
      text2: t('villasGrid.bricchi.text2'),
      image: `${process.env.PUBLIC_URL}/images/villas_villasGrid/bricchi.png`,
      framed: false,
    },
    {
      id: 'tettimorra',
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
              className="relative h-[430px] md:h-[520px] lg:h-[670px]"
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

                  <div className="absolute inset-x-0 bottom-0 z-10 px-4 pb-6 lg:p-7 text-white">
                    <AnimatePresence mode="wait">
                      <motion.h3
                        key={villa.title}
                        className="font-serif text-[28px] sm:text-[36px] lg:text-[42px] leading-none"
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
                        className="mt-2 sm:mt-3 max-w-[720px] xl:max-w-none font-sans text-[15px] leading-[21px] sm:text-[18px] sm:leading-[24px] lg:text-[20px] lg:leading-[30px]"
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
                      {/* <motion.a
                        key={t('villasGrid.discover')}
                        href="/villas"
                        className="mt-4 sm:mt-6 lg:mt-8 inline-block border-y border-white py-2 font-sans text-[13px] md:text-[18px] lg:text-[20px] font-semibold uppercase tracking-[0.18em] transition-opacity duration-300 hover:opacity-10"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        whileHover={{ opacity: 0.6 }}
                        transition={{ duration: 0.25 }}>
                        {t('villasGrid.discover')}
                      </motion.a> */}
                      <motion.div
                        key={`${villa.id}-${t('villasGrid.discover')}`}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.25 }}
                        className="mt-4 sm:mt-6 lg:mt-8 inline-block">
                        <Link
                          to={`/villas/${villa.id}`}
                          className="inline-block border-y border-white py-2 font-sans text-[13px] font-semibold uppercase tracking-[0.18em] transition-opacity duration-300 hover:opacity-60 md:text-[18px] lg:text-[20px]">
                          {t('villasGrid.discover')}
                        </Link>
                      </motion.div>
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
