import React from 'react';
import { useTranslation } from 'react-i18next';
import { AnimatePresence, motion } from 'framer-motion';

export function VillasAdviceCTA() {
  const { t } = useTranslation();

  return (
    <section className="bg-white px-6 py-10 xl:py-20">
      {/* Desktop */}
      <div className="hidden xl:block">
        <motion.div
          className="mx-auto max-w-[1200px] text-center text-[#2C3654]"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.35 }}>
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{
              duration: 0.9,
              ease: [0.22, 1, 0.36, 1],
            }}>
            <AnimatePresence mode="wait">
              <motion.h2
                key={t('villasAdviceCTA.title')}
                className="font-serif leading-[1.2] tracking-[0.03em] xl:text-[40px]"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{
                  duration: 0.55,
                  ease: [0.22, 1, 0.36, 1],
                }}>
                {t('villasAdviceCTA.title')}
              </motion.h2>
            </AnimatePresence>

            <AnimatePresence mode="wait">
              <motion.p
                key={t('villasAdviceCTA.subtitle')}
                className="mt-4 font-sans text-[18px] leading-[22px] tracking-[0.04em]"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.25 }}>
                {t('villasAdviceCTA.subtitle')}
              </motion.p>
            </AnimatePresence>
          </motion.div>

          <motion.form
            className="mt-12"
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{
              duration: 0.9,
              delay: 0.2,
              ease: [0.22, 1, 0.36, 1],
            }}>
            <div className="flex h-[57px]">
              <input
                key={t('villasAdviceCTA.placeholder')}
                type="email"
                placeholder={t('villasAdviceCTA.placeholder')}
                className="h-full flex-1 border-2 border-[#2C3654] bg-white px-6 text-center font-sans text-[18px] text-[#2C3654] outline-none placeholder:text-[#A8ABB8] xl:min-w-[850.6px]"
              />

              <button
                type="submit"
                className="h-full xl:min-w-[382px] bg-[#2C3654] px-8 font-sans text-[18px] font-bold uppercase tracking-[0.18em] text-white transition-opacity duration-300 hover:opacity-80">
                <AnimatePresence mode="wait">
                  <motion.span
                    key={t('villasAdviceCTA.button')}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.25 }}>
                    {t('villasAdviceCTA.button')}
                  </motion.span>
                </AnimatePresence>
              </button>
            </div>

            <label className="mt-3 flex items-center gap-2 text-left font-sans text-[15px] text-[#2C3654]">
              <input type="checkbox" />

              <AnimatePresence mode="wait">
                <motion.span
                  key={t('villasAdviceCTA.privacy')}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.25 }}>
                  {t('villasAdviceCTA.privacy')}
                </motion.span>
              </AnimatePresence>
            </label>
          </motion.form>
        </motion.div>
      </div>

      {/* Mobile + Tablet */}
      <div className="xl:hidden">
        <motion.div
          className="mx-auto max-w-[700px] lg:max-w-[860px] text-center text-[#2C3654]"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.35 }}>
          {/* Title */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{
              duration: 0.9,
              ease: [0.22, 1, 0.36, 1],
            }}>
            <AnimatePresence mode="wait">
              <motion.h2
                key={t('villasAdviceCTA.title')}
                className="font-serif text-[26px] leading-[1.2] tracking-[0.03em] text-[#2C3654] md:text-[32px] lg:text-[36px]"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{
                  duration: 0.55,
                  ease: [0.22, 1, 0.36, 1],
                }}>
                {t('villasAdviceCTA.title')}
              </motion.h2>
            </AnimatePresence>

            <AnimatePresence mode="wait">
              <motion.p
                key={t('villasAdviceCTA.subtitle')}
                className="mt-4 font-sans text-[16px] leading-[24px] text-[#2C3654] md:text-[18px]"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.25 }}>
                {t('villasAdviceCTA.subtitle')}
              </motion.p>
            </AnimatePresence>
          </motion.div>

          {/* Form */}
          <motion.form
            className="mt-8"
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{
              duration: 0.9,
              delay: 0.2,
              ease: [0.22, 1, 0.36, 1],
            }}>
            <div className="flex flex-col gap-4">
              <input
                type="email"
                placeholder={t('villasAdviceCTA.placeholder')}
                className="h-[44px] border-2 border-[#2C3654] bg-white px-6 text-center font-sans text-[16px] text-[#2C3654] outline-none placeholder:text-[#A8ABB8] md:h-[57px] md:text-[18px]"
              />

              <button
                type="submit"
                className="h-[44px] bg-[#2C3654] font-sans text-[13px] font-bold uppercase tracking-[0.18em] text-white transition-opacity duration-300 hover:opacity-80 md:h-[57px] md:text-[18px]">
                <AnimatePresence mode="wait">
                  <motion.span
                    key={t('villasAdviceCTA.button')}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.25 }}>
                    {t('villasAdviceCTA.button')}
                  </motion.span>
                </AnimatePresence>
              </button>
            </div>

            <label className="mt-4 flex items-center gap-3 text-left font-sans text-[13px] leading-[20px] text-[#2C3654] md:mt-5 md:text-[14px] lg:text-[16px]">
              <input type="checkbox" />

              <AnimatePresence mode="wait">
                <motion.span
                  key={t('villasAdviceCTA.privacy')}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.25 }}>
                  {t('villasAdviceCTA.privacy')}
                </motion.span>
              </AnimatePresence>
            </label>
          </motion.form>
        </motion.div>
      </div>
    </section>
  );
}
