import { useTranslation, Trans } from 'react-i18next';
import { AnimatePresence, motion } from 'framer-motion';

const baseUrl = process.env.PUBLIC_URL;

export function StoryChapters() {
  const { t, i18n } = useTranslation();

  const storyCards = [
    {
      id: 'origins',
      title: t('storyChapters.origins.title'),
      description: t('storyChapters.origins.description'),
      button: t('storyChapters.origins.button'),
      image: `${baseUrl}/images/story_chapters/origins.png`,
    },
    {
      id: 'winery',
      title: t('storyChapters.winery.title'),
      description: t('storyChapters.winery.description'),
      button: t('storyChapters.winery.button'),
      image: `${baseUrl}/images/story_chapters/winery.png`,
    },
    {
      id: 'people',
      title: t('storyChapters.people.title'),
      description: t('storyChapters.people.description'),
      button: t('storyChapters.people.button'),
      image: `${baseUrl}/images/story_chapters/people.png`,
    },
    {
      id: 'press',
      title: t('storyChapters.press.title'),
      description: t('storyChapters.press.description'),
      button: t('storyChapters.press.button'),
      image: `${baseUrl}/images/story_chapters/press.png`,
    },
  ];

  return (
    <section className="bg-[#FFFFFF] pt-20 pb-5">
      <div className="mx-auto max-w-8xl px-8">
        {/* Heading */}
        <div className="mx-auto mb-20 max-w-[1072px] text-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={t('storyChapters.heading')}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{
                duration: 0.35,
                ease: [0.22, 1, 0.36, 1],
              }}>
              <h2 className="font-serif text-[52px] leading-[58px] text-[#2C3654]">
                <Trans
                  i18nKey="storyChapters.heading"
                  components={{
                    italic1: <span className="italic" />,
                    italic2: <span className="italic" />,
                  }}
                />
              </h2>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Cards */}
        <div className="flex flex-col">
          {storyCards.map((card) => (
            <article
              key={card.id}
              className="flex border-t-[2px] border-[#2C3654] pt-6 pb-20 font-sans justify-between">
              <AnimatePresence mode="wait">
                <motion.div
                  key={`${card.title}-${i18n.language}`}
                  className="flex gap-8"
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{
                    duration: 0.35,
                    ease: [0.22, 1, 0.36, 1],
                  }}>
                  <h3 className="min-w-[280px] text-[26px] uppercase font-semibold tracking-[10%] text-[#2C3654]">
                    {card.title}
                  </h3>

                  <div className="max-w-[442px]">
                    <p className="mb-11 text-[21px] leading-[32px] text-[#2C3654]">
                      {card.description}
                    </p>

                    <button className="w-full border text-[#2C3654] border-[#2C3654] px-8 py-4 text-[18px] uppercase font-bold tracking-[18%] transition hover:bg-[#2C3654] hover:text-white">
                      {card.button}
                    </button>
                  </div>
                </motion.div>
              </AnimatePresence>

              <div className="w-[50%]">
                <img src={card.image} alt={card.title} className="h-[425px] w-full object-cover" />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
