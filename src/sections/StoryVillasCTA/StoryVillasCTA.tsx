import { useTranslation } from 'react-i18next';
import { AnimatePresence, motion } from 'framer-motion';

const baseUrl = process.env.PUBLIC_URL;

export function StoryVillasCTA() {
  const { t } = useTranslation();

  return (
    <section className="bg-white pb-20">
      <div className="mx-auto max-w-8xl">
        <div className="bg-[#2C3654] px-4 py-4 lg:px-5 lg:py-5">
          <div className="flex flex-col items-center gap-12 lg:flex-row lg:justify-between">
            {/* Image */}
            <div className="shrink-0">
              <img
                src={`${baseUrl}/images/story_cta/storyCTA.png`}
                alt="Scarpa Villas"
                className="h-[720px] w-[720px] object-cover"
              />
            </div>

            {/* Content */}
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
                <h2 className="font-serif text-[44px] leading-[58px] text-white">
                  {t('storyVillasCTA.text')}
                </h2>

                <button className="mt-14 min-w-[704px] border border-white px-12 py-4 font-sans text-[22px] font-bold uppercase tracking-[0.18em] text-white transition-all duration-300 hover:bg-white hover:text-[#2C3654]">
                  {t('storyVillasCTA.button')}
                </button>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
