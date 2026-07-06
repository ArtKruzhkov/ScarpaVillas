import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';

export function VillasHero() {
  const { t } = useTranslation();

  return (
    <section
      id="villas-top"
      className="relative flex section-height justify-center overflow-hidden">
      {/* BACKGROUND */}
      <div className="absolute inset-0">
        <img
          src={`${process.env.PUBLIC_URL}/images/villas_hero/villas-hero.png`}
          alt="The Villas"
          className="h-full w-full object-cover"
        />

        <div className="absolute inset-0 hero-overlay" />
      </div>

      {/* CONTENT */}
      <div className="relative z-10 flex w-full justify-center px-6 pb-[6.5rem] sm:pb-[4.1rem]">
        <div className="flex flex-col items-center justify-end text-center">
          {/* ICON */}
          <img
            src={`${process.env.PUBLIC_URL}/images/hero/logo_hero.svg`}
            alt="Scarpa Villas"
            className="hero-logo"
          />

          {/* HERO TEXT */}
          <div className="mt-5 sm:mt-6">
            <AnimatePresence mode="wait">
              <motion.h2
                key={t('villasHero.title')}
                className="text-[20px] lg:text-[42px] text-white font-serif tracking-[-0.03rem] leading-[1.1]"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{
                  duration: 0.35,
                  ease: [0.22, 1, 0.36, 1],
                }}>
                {t('villasHero.title')}
              </motion.h2>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
