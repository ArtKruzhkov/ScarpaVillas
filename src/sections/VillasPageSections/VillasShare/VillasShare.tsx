import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';

export function VillasShare() {
  const { t } = useTranslation();

  const sharedFeatures = [
    {
      text: t('villasShare.features.privateSpaces'),
      position: 'top',
    },
    {
      text: t('villasShare.features.pool'),
      position: 'bottom',
    },
    {
      text: t('villasShare.features.kitchen'),
      position: 'top',
    },
    {
      text: t('villasShare.features.hospitality'),
      position: 'bottom',
    },
  ];

  return (
    <section className="bg-white">
      <div className="mx-auto max-w-8xl 2xl:max-w-[1920px]">
        {/* TOP TEXT */}
        <motion.div
          className="px-6 lg:px-4 xl:px-10 2xl:px-[8rem] py-6 lg:py-10 2xl:py-14 text-center flex flex-row justify-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{
            duration: 0.9,
            ease: [0.22, 1, 0.36, 1],
          }}>
          <AnimatePresence mode="wait">
            <motion.h2
              key={t('villasShare.title')}
              className="font-serif text-[19px] sm:text-[23px] md:text-[28px] xl:text-[32px] 2xl:text-[36px] leading-[1.25] tracking-[-0.02rem] text-[#2C3654] lg:w-[992px] xl:w-[1136px] 2xl:w-[1294px]"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{
                duration: 0.35,
                ease: [0.22, 1, 0.36, 1],
              }}>
              {t('villasShare.title')}{' '}
              <span className="italic">{t('villasShare.titleItalic')}</span>
            </motion.h2>
          </AnimatePresence>
        </motion.div>

        {/* IMAGE BLOCK */}
        <div className="relative min-h-[375px] overflow-hidden">
          {/* IMAGE */}
          <motion.img
            src={`${process.env.PUBLIC_URL}/images/villas_villasShare/villas.png`}
            alt="Scarpa Villas in Monvigliero vineyards"
            className="h-auto w-full min-h-[375px] object-cover object-[70%_center] lg:object-center"
            initial={{
              scale: 1.08,
              opacity: 0,
            }}
            whileInView={{
              scale: 1,
              opacity: 1,
            }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{
              duration: 1.2,
              ease: [0.22, 1, 0.36, 1],
            }}
          />

          {/* CONTENT */}
          <motion.div
            className="absolute inset-0 z-10 hidden lg:flex flex-col justify-center text-white lg:max-w-[440px] xl:max-w-[580px] lg:pl-12 2xl:max-w-[640px] min-[1820px]:max-w-[800px]"
            initial={{
              opacity: 0,
              y: 30,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{
              duration: 0.9,
              delay: 0.35,
              ease: [0.22, 1, 0.36, 1],
            }}>
            <div className="mb-14 bg-white py-2 text-center">
              <AnimatePresence mode="wait">
                <motion.h3
                  key={t('villasShare.heading')}
                  className="font-sans text-[16px] xl:text-[18px] font-bold uppercase leading-none tracking-[0.35em] text-[#2C3654]"
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{
                    duration: 0.35,
                    ease: [0.22, 1, 0.36, 1],
                  }}>
                  {t('villasShare.heading')}
                </motion.h3>
              </AnimatePresence>
            </div>

            <div className="relative h-[150px]">
              <div className="absolute left-0 right-0 top-1/2 h-[2px] -translate-y-1/2 bg-white" />

              <div className="relative flex h-full justify-between">
                {sharedFeatures.map((item, index) => (
                  <div key={index} className="relative flex w-[120px] justify-center">
                    <div
                      className={`absolute top-1/2 h-3 w-3 -translate-y-1/2 rounded-full bg-white ${
                        index === 0
                          ? 'left-0'
                          : index === sharedFeatures.length - 1
                            ? 'right-0'
                            : 'left-1/2 -translate-x-1/2'
                      }`}
                    />

                    <AnimatePresence mode="wait">
                      <motion.p
                        key={item.text}
                        className={`absolute w-[152px] font-sans text-[13px] leading-[17px] xl:text-[14px] xl:leading-[19px] ${
                          index === 0
                            ? 'left-0 text-left'
                            : index === sharedFeatures.length - 1
                              ? 'right-0 text-right'
                              : 'text-center'
                        } ${item.position === 'top' ? 'bottom-[100px]' : 'top-[100px]'}`}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.25 }}>
                        {item.text.split('\n').map((line) => (
                          <React.Fragment key={line}>
                            {line}
                            <br />
                          </React.Fragment>
                        ))}
                      </motion.p>
                    </AnimatePresence>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
