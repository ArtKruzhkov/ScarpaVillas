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
          className="mx-auto mb-10 lg:mb-20 md:max-w-[704px] lg:max-w-[580px] xl:max-w-[662px] text-center"
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
              <h2 className="font-serif text-[21px] leading-[25px] sm:text-[27px] sm:leading-[32px] md:text-[28px] md:leading-[32px] xl:text-[32px] xl:leading-[38px] text-[#2C3654]">
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
          {storyCards.map((card, index) => {
            const textOrder = index % 2 === 0 ? 'lg:order-1' : 'lg:order-2';
            const imageOrder = index % 2 === 0 ? 'lg:order-2' : 'lg:order-1';

            return (
              <motion.article
                key={card.id}
                className="border-t-[2px] border-[#2C3654] py-6 lg:py-10 xl:py-12 font-sans"
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
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                  {/* TEXT */}
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={`${card.title}-${i18n.language}`}
                      className={`order-2 ${textOrder} mt-8 flex flex-col items-center text-center lg:mt-0 lg:w-[33%] lg:items-start lg:text-left lg:mr-auto lg:ml-auto`}
                      initial={{ opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -12 }}
                      transition={{
                        duration: 0.35,
                        ease: [0.22, 1, 0.36, 1],
                      }}>
                      <h3
                        className="uppercase font-semibold tracking-[0.18em] text-[#2C3654]
                             text-[18px]
                             xl:text-[22px]
                             2xl:text-[26px]">
                        {card.title}
                      </h3>

                      <p
                        className="mt-6 max-w-full lg:max-w-[380px] 2xl:max-w-[430px]
                            text-[#2C3654]
                            text-[16.5px] leading-[24px]
                            lg:text-[17px] lg:leading-[28px]
                            2xl:text-[20px] 2xl:leading-[30px]">
                        {card.description}
                      </p>

                      <button
                        className="mt-10 w-full max-w-[360px]
                           border border-[#2C3654]
                           px-8 py-3 sm:py-4 lg:py-[14px]
                           text-[#2C3654]
                           text-[14px] sm:text-[15px]
                           2xl:text-[16px] min-[1680px]:text-[18px]
                           uppercase font-bold tracking-[0.18em]
                           transition-colors duration-300
                           hover:bg-[#2C3654]
                           hover:text-white">
                        {card.button}
                      </button>
                    </motion.div>
                  </AnimatePresence>

                  {/* IMAGE */}
                  <div className={`order-1 ${imageOrder} w-full lg:w-[55%]`}>
                    <img
                      src={card.image}
                      alt={card.title}
                      className="h-[260px] w-full object-cover sm:h-[380px] lg:h-[425px] xl:h-[540px]"
                    />
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
