import React from 'react';
import { useTranslation } from 'react-i18next';
import { AnimatePresence, motion } from 'framer-motion';
import './borgo.css';

export function Borgo() {
  const { t, i18n } = useTranslation();

  return (
    <section
      id="borgo"
      className="scroll-mt-[86px] relative w-full bg-[#2C3654] py-6 px-6 sm:px-10 sm:py-10">
      {/* FULL IMAGE SECTION */}
      <div className="relative w-full h-[85vh] lg:h-[95vh] 2xl:h-full">
        {/* IMAGE */}
        {/* <img
          src={`${process.env.PUBLIC_URL}/images/borgo/borgo-hero.png`}
          alt="The Borgo"
          className=" h-full w-full object-cover 2xl:max-h-[1150px]"
        /> */}

        <div className="overflow-hidden h-full">
          <motion.img
            src={`${process.env.PUBLIC_URL}/images/borgo/borgo-hero.png`}
            alt="The Borgo"
            className="h-full w-full object-cover 2xl:max-h-[1150px]"
            initial={{
              scale: 1.12,
            }}
            whileInView={{
              scale: 1,
            }}
            viewport={{
              once: true,
              amount: 0.1,
            }}
            transition={{
              duration: 2,
              ease: 'easeOut',
            }}
          />
        </div>

        {/* LIGHT OVERLAY */}
        {/* <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/11 to-black/14" /> */}

        {/* CONTENT */}
        {/* <div className="absolute inset-0 z-10 flex flex-col items-center px-6 pt-12 lg:pt-18 2xl:pt-24 text-center">
          
          <h2 className="font-serif text-[24px] leading-[1.1] tracking-[0.02em] text-[#2C3654] uppercase sm:text-[29px] lg:text-[48px] 2xl:text-[57px]">
            <span className="block">The Borgo</span>
            <span className="block mt-1 lg:mt-2">A Hilltop Village, All Yours</span>
          </h2>

          
          <p className="hidden font-sans sm:block mt-5 max-w-[1140px] text-[15px] leading-[1.6] sm:text-[14px] lg:text-[16px] 2xl:text-[19.8px] 2xl:leading-[1.8] text-[#2C3654]">
            The Borgo can be reserved in its entirety — four villas, a panoramic pool, and the
            surrounding estate, all exclusively yours. A setting designed for meaningful gatherings,
            from private celebrations and intimate weddings to corporate retreats, where privacy,
            space, and the rhythm of Barolo come together.
          </p>

          <p className="mt-4 text-[15px] leading-[1.6] text-[#2C3654] sm:hidden">
            The Borgo can be reserved in its entirety — four villas, a panoramic pool, and the
            surrounding estate, all exclusively yours.
          </p>

          
          <a href={process.env.PUBLIC_URL || '/'} className="borgo-btn">
            Discover The Entire Borgo
          </a>
        </div> */}

        <motion.div
          className="absolute inset-0 z-10 flex flex-col items-center px-6 pt-12 lg:pt-18 2xl:pt-24 text-center"
          initial={{
            opacity: 0,
            y: 40,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.15,
          }}
          transition={{
            duration: 1,
            delay: 0.5,
          }}>
          {/* TITLE */}
          {/* <h2 className="font-serif text-[24px] leading-[1.1] tracking-[0.02em] text-[#2C3654] uppercase sm:text-[29px] lg:text-[48px] 2xl:text-[57px]">
            <span className="block">The Borgo</span>
            <span className="block mt-1 lg:mt-2">A Hilltop Village, All Yours</span>
          </h2> */}
          <AnimatePresence mode="wait">
            <motion.h2
              key={`borgo-title-${i18n.language}`}
              className="font-serif text-[24px] leading-[1.1] tracking-[0.02em] text-[#2C3654] uppercase sm:text-[29px] lg:text-[40px] 2xl:text-[57px]"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.3 }}>
              <span className="block">{t('borgo.title1')}</span>
              <span className="block mt-1 lg:mt-2">{t('borgo.title2')}</span>
            </motion.h2>
          </AnimatePresence>

          {/* DESCRIPTION DESKTOP*/}
          {/* <p className="hidden font-sans sm:block mt-5 max-w-[900px] xl:max-w-[1000px] 2xl:max-w-[1200px] text-[15px] leading-[1.6] sm:text-[14px] lg:text-[14.9px] xl:text-[16px] 2xl:text-[19.8px] 2xl:leading-[1.8] text-[#2C3654]">
            The Borgo can be reserved in its entirety — four villas, a panoramic pool, and the
            surrounding estate, all exclusively yours. A&nbsp;setting designed for meaningful
            gatherings, from private celebrations and intimate weddings to corporate retreats, where
            privacy, space, and the rhythm of Barolo come together.
          </p> */}
          <AnimatePresence mode="wait">
            <motion.p
              key={`borgo-desktop-${i18n.language}`}
              className="hidden font-sans sm:block mt-5 max-w-[900px] xl:max-w-[1000px] 2xl:max-w-[1200px] text-[15px] leading-[1.6] sm:text-[14px] lg:text-[14.9px] xl:text-[16px] 2xl:text-[19.8px] 2xl:leading-[1.8] text-[#2C3654]"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.3 }}>
              {t('borgo.descriptionDesktop')}
            </motion.p>
          </AnimatePresence>

          {/* DESCRIPTION MOBILE */}
          {/* <p className="mt-4 text-[15px] leading-[1.6] text-[#2C3654] sm:hidden">
            The Borgo can be reserved in its entirety — four villas, a panoramic pool, and the
            surrounding estate, all exclusively yours.
          </p> */}
          <AnimatePresence mode="wait">
            <motion.p
              key={`borgo-mobile-${i18n.language}`}
              className="mt-4 text-[15px] leading-[1.6] text-[#2C3654] sm:hidden"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.3 }}>
              {t('borgo.descriptionMobile')}
            </motion.p>
          </AnimatePresence>

          {/* BUTTON */}
          {/* <a href={process.env.PUBLIC_URL || '/'} className="borgo-btn">
            Discover The Entire Borgo
          </a> */}
          <a href={process.env.PUBLIC_URL || '/'} className="borgo-btn">
            <AnimatePresence mode="wait">
              <motion.span
                key={t('borgo.button')}
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                transition={{ duration: 0.25 }}>
                {t('borgo.button')}
              </motion.span>
            </AnimatePresence>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
