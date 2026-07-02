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
    <section className="bg-[#FFFFFF] pt-10 lg:pt-20 lg:pb-5">
      <div className="mx-auto max-w-8xl px-8">
        {/* Heading */}
        <motion.div
          className="mx-auto mb-10 lg:mb-20 md:max-w-[704px] lg:max-w-[868px] xl:max-w-[992px] 2xl:max-w-[1072px] text-center"
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
            amount: 0.45,
          }}
          transition={{
            duration: 1,
            ease: [0.22, 1, 0.36, 1],
          }}>
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
              <h2 className="font-serif text-[22px] leading-[26px] sm:text-[27px] sm:leading-[32px] md:text-[34px] md:leading-[40px] lg:text-[42px] lg:leading-[54px] xl:text-[48px] xl:leading-[56px] 2xl:text-[52px] 2xl:leading-[58px] text-[#2C3654]">
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
        </motion.div>

        {/* Cards */}
        <div className="flex flex-col">
          {storyCards.map((card) => (
            <motion.article
              key={card.id}
              // className="flex border-t-[2px] border-[#2C3654] pt-6 pb-20 font-sans justify-between"
              className="flex flex-col border-t-[2px] border-[#2C3654] pt-6 pb-12 lg:flex-row lg:justify-between lg:pb-20 font-sans "
              initial={{
                opacity: 0,
                y: 45,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
                amount: 0.3,
              }}
              transition={{
                duration: 0.9,
                ease: [0.22, 1, 0.36, 1],
              }}>
              <AnimatePresence mode="wait">
                <motion.div
                  key={`${card.title}-${i18n.language}`}
                  // className="flex gap-8"
                  className="order-2 lg:order-1 mt-8 lg:mt-0 flex flex-col items-center text-center lg:flex-row lg:items-start lg:text-left gap-3 xl:gap-8"
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{
                    duration: 0.35,
                    ease: [0.22, 1, 0.36, 1],
                  }}>
                  <h3 className="text-[18px] lg:w-[110px] lg:text-[18px] xl:min-w-[185px] xl:text-[18px] xl:min-w-[200px] xl:text-[20px] min-[1680px]:min-w-[280px] min-[1680px]:text-[26px] uppercase font-semibold tracking-[10%] text-[#2C3654]">
                    {card.title}
                  </h3>

                  <div
                    // className="lg:max-w-[360px] 2xl:max-w-[430px] min-[1680px]:max-w-[442px]"
                    className="flex flex-col items-center lg:items-start max-w-full lg:max-w-[360px] 2xl:max-w-[430px] min-[1680px]:max-w-[442px]">
                    <p className="mb-8 lg:mb-11 text-[16.5px] lg:text-[17px] lg:leading-[28px] 2xl:text-[20px] 2xl:leading-[30px] min-[1680px]:text-[21px] min-[1680px]:leading-[32px] text-[#2C3654]">
                      {card.description}
                    </p>

                    <button className="w-full border text-[#2C3654] border-[#2C3654] px-8 py-3 sm:py-4 text-[14px] sm:text-[15px] 2xl:text-[16px] min-[1680px]:text-[18px] uppercase font-bold tracking-[18%] transition hover:bg-[#2C3654] hover:text-white">
                      {card.button}
                    </button>
                  </div>
                </motion.div>
              </AnimatePresence>

              <div
                // className="lg:w-[45%] xl:w-[50%]"
                className="order-1 lg:order-2 w-full lg:w-[45%] xl:w-[50%]">
                <img
                  src={card.image}
                  alt={card.title}
                  // className="h-[425px] w-full object-cover"
                  className="h-[260px] sm:h-[380px] lg:h-[425px] w-full object-cover"
                />
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
