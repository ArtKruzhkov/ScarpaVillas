import React from 'react';
import { Container } from '../../components/layout/Container';
import { AnimatePresence, motion } from 'framer-motion';
import { useTranslation, Trans } from 'react-i18next';

export function Experience() {
  const { t, i18n } = useTranslation();

  return (
    <section className="bg-white py-12 lg:py-20 xl:py-[6.5rem]">
      <Container>
        <div className="grid grid-cols-1 lg:gap-10 lg:grid-cols-[450px_minmax(0,1fr)] xl:grid-cols-[574px_minmax(0,1fr)] px-6">
          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{
              duration: 1,
              ease: [0.22, 1, 0.36, 1],
              delay: 0.4,
            }}>
            <div className="lg:max-w-[450px] xl:max-w-[574px] flex flex-col justify-between h-full">
              {/* HEADER */}
              <div>
                <AnimatePresence mode="wait">
                  <motion.h2
                    key={`experience-title-${i18n.language}`}
                    className="font-serif text-[28px] leading-[28px] xl:text-[42px] xl:leading-[36px] text-[#2C3654]"
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.3 }}>
                    <span className="block">{t('experience.title1')}</span>
                    <span className="block mt-8">{t('experience.title2')}</span>
                  </motion.h2>
                </AnimatePresence>

                <div className="mt-8 h-[2px] w-[210px] bg-[#6e7a9b]" />
              </div>

              {/* TEXT */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={`experience-text-${i18n.language}`}
                  className="font-sans mt-7 space-y-7 xl:mt-10 xl:space-y-10 text-[18px] xl:text-[20px] leading-[1.8] text-[#2C3654]"
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.3 }}>
                  <p>
                    <Trans i18nKey="experience.paragraph1" components={{ strong: <strong /> }} />
                  </p>

                  <p>
                    <Trans i18nKey="experience.paragraph2" components={{ strong: <strong /> }} />
                  </p>

                  <p>
                    <Trans i18nKey="experience.paragraph3" components={{ strong: <strong /> }} />
                  </p>

                  <p>
                    <Trans i18nKey="experience.paragraph4" components={{ strong: <strong /> }} />
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>
          </motion.div>

          {/* IMAGE */}
          <div className="overflow-hidden mt-6 lg:mt-0">
            <motion.div
              className="h-full"
              viewport={{ once: true, amount: 0.5 }}
              initial={{
                opacity: 0,
                scale: 1.12,
              }}
              whileInView={{
                opacity: 1,
                scale: 1,
              }}
              transition={{
                duration: 1.8,
                ease: [0.22, 1, 0.36, 1],
              }}>
              <img
                src={`${process.env.PUBLIC_URL}/images/experience/experience-img.png`}
                alt="Luxury wine villa interior"
                className="h-full min-h-[380px] lg:min-h-[620px] lg:max-h-[663.8px] w-full object-cover"
              />
            </motion.div>
          </div>
        </div>
      </Container>
    </section>
  );
}
