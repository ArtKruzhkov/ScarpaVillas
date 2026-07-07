import { useTranslation } from 'react-i18next';
import { AnimatePresence, motion } from 'framer-motion';

const baseUrl = process.env.PUBLIC_URL;

export function StoryVillasCTA() {
  const { t } = useTranslation();

  return (
    <section className="bg-white">
      <div className="mx-auto max-w-8xl">
        <div className="bg-[#2C3654] px-4 pt-4 pb-12 xl:px-5 xl:py-5">
          <div className="flex flex-col xl:items-center gap-5 xl:gap-12 xl:flex-row xl:justify-between">
            {/* Image */}
            <div className="shrink-0 overflow-hidden order-1">
              <motion.div
                className="h-full"
                viewport={{ once: true, amount: 0.4 }}
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
                  src={`${baseUrl}/images/story_cta/storyCTA.png`}
                  alt="Scarpa Villas"
                  // className="h-[720px] w-[720px] object-cover"
                  className="w-full h-[320px] sm:h-[500px] md:h-[520px] xl:h-[620px] xl:w-[620px] 2xl:h-[720px] 2xl:w-[720px] object-cover"
                />
              </motion.div>
            </div>

            {/* Content */}
            <motion.div
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
                amount: 0.35,
              }}
              transition={{
                duration: 1,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="order-2 mx-auto flex 2xl:max-w-[982px] flex-col items-center text-center xl:px-4">
              <AnimatePresence mode="wait">
                <motion.div
                  key={t('storyVillasCTA.text')}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{
                    duration: 0.35,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="flex flex-col items-center mx-auto flex max-w-[982px] text-center">
                  <h2 className="font-serif text-[19px] leading-[23px] sm:text-[22px] sm:leading-[30px] md:text-[26px] md:leading-[34px] lg:text-[38px] lg:leading-[46px] 2xl:text-[44px] 2xl:leading-[58px] text-white">
                    {t('storyVillasCTA.text')}
                  </h2>

                  <button className="mt-7 lg:mt-10 w-full max-w-[704px] border border-white px-8 py-3 lg:py-4 font-sans text-[14px] sm:text-[16px] lg:text-[20px] 2xl:text-[22px] font-bold uppercase tracking-[0.2em] text-white transition-all duration-300 hover:bg-white hover:text-[#2C3654]">
                    {t('storyVillasCTA.button')}
                  </button>
                </motion.div>
              </AnimatePresence>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
