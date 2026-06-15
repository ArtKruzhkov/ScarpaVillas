import React from 'react';
import { Container } from '../../components/layout/Container';
import { useTranslation } from 'react-i18next';
import { AnimatePresence, motion, Variants } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import './experiences.css';

type Experience = {
  category: string;
  title: string;
  description: string;
  image: string;
};

const baseUrl = process.env.PUBLIC_URL;

// const experiences: Experience[] = [
//   {
//     category: 'Wine & Taste',
//     title: 'Winery Visits',
//     description:
//       'Step inside the historic Scarpa cellars and experience the craft behind every bottle.',
//     image: `${baseUrl}/images/experiences/winery-visits.png`,
//   },
//   {
//     category: 'Wine & Taste',
//     title: 'Private Wine Tastings',
//     description: 'Discover Scarpa wines with a sommelier, from rare vintages to iconic labels.',
//     image: `${baseUrl}/images/experiences/wine-tastings.png`,
//   },
//   {
//     category: 'Wine & Taste',
//     title: 'Chef & Private Dining',
//     description:
//       'Enjoy slow dinners and breakfasts prepared just for you, in the comfort of your villa.',
//     image: `${baseUrl}/images/experiences/private-dining.png`,
//   },
//   {
//     category: 'Wine & Taste',
//     title: 'Cooking Classes',
//     description: 'Learn the traditions of Piedmontese cuisine, hands-on and unhurried.',
//     image: `${baseUrl}/images/experiences/cooking-classes.png`,
//   },
//   {
//     category: 'Culture & Discovery',
//     title: 'Langhe & Barolo Tours',
//     description: 'Discover historic villages, local markets, and hidden corners of the region.',
//     image: `${baseUrl}/images/experiences/langhe-tours.png`,
//   },
//   {
//     category: 'Culture & Discovery',
//     title: 'Turin Experiences',
//     description: 'From historic cafés to vermouth bars, explore the culture of Piedmont’s capital.',
//     image: `${baseUrl}/images/experiences/turin-experiences.png`,
//   },
//   {
//     category: 'Nature & Movement',
//     title: 'Truffle Hunting',
//     description: 'Walk through the woods with a trifolau in search of Alba’s most prized treasure.',
//     image: `${baseUrl}/images/experiences/truffle-hunting.png`,
//   },
//   {
//     category: 'Nature & Movement',
//     title: 'Vineyard Picnics',
//     description: 'A simple table, a bottle of wine, and the vineyards all around you.',
//     image: `${baseUrl}/images/experiences/vineyard-picnics.png`,
//   },
//   {
//     category: 'Nature & Movement',
//     title: 'Hot-Air Balloon Flights',
//     description: 'See the Langhe from above at sunrise, drifting quietly over vineyards and hills.',
//     image: `${baseUrl}/images/experiences/hot-air-balloon.png`,
//   },
//   {
//     category: 'Nature & Movement',
//     title: 'Vespa & E-bike Tours',
//     description:
//       'Explore the Barolo hills on a Vespa, moving freely between vineyards and villages.',
//     image: `${baseUrl}/images/experiences/vespa-ebike.png`,
//   },
// ];

export function Experiences() {
  const experiences: Experience[] = [
    {
      category: 'Wine & Taste',
      title: 'wineryVisits',
      description: 'wineryVisitsDescription',
      image: `${baseUrl}/images/experiences/winery-visits.png`,
    },
    {
      category: 'Wine & Taste',
      title: 'privateWineTastings',
      description: 'privateWineTastingsDescription',
      image: `${baseUrl}/images/experiences/wine-tastings.png`,
    },
    {
      category: 'Wine & Taste',
      title: 'chefPrivateDining',
      description: 'chefPrivateDiningDescription',
      image: `${baseUrl}/images/experiences/private-dining.png`,
    },
    {
      category: 'Wine & Taste',
      title: 'cookingClasses',
      description: 'cookingClassesDescription',
      image: `${baseUrl}/images/experiences/cooking-classes.png`,
    },
    {
      category: 'Culture & Discovery',
      title: 'langheBaroloTours',
      description: 'langheBaroloToursDescription',
      image: `${baseUrl}/images/experiences/langhe-tours.png`,
    },
    {
      category: 'Culture & Discovery',
      title: 'turinExperiences',
      description: 'turinExperiencesDescription',
      image: `${baseUrl}/images/experiences/turin-experiences.png`,
    },
    {
      category: 'Nature & Movement',
      title: 'truffleHunting',
      description: 'truffleHuntingDescription',
      image: `${baseUrl}/images/experiences/truffle-hunting.png`,
    },
    {
      category: 'Nature & Movement',
      title: 'vineyardPicnics',
      description: 'vineyardPicnicsDescription',
      image: `${baseUrl}/images/experiences/vineyard-picnics.png`,
    },
    {
      category: 'Nature & Movement',
      title: 'hotAirBalloonFlights',
      description: 'hotAirBalloonFlightsDescription',
      image: `${baseUrl}/images/experiences/hot-air-balloon.png`,
    },
    {
      category: 'Nature & Movement',
      title: 'vespaEBikeTours',
      description: 'vespaEBikeToursDescription',
      image: `${baseUrl}/images/experiences/vespa-ebike.png`,
    },
  ];

  const wineAndTaste = experiences.filter((item) => item.category === 'Wine & Taste');
  const cultureAndDiscovery = experiences.filter((item) => item.category === 'Culture & Discovery');
  const natureAndMovement = experiences.filter((item) => item.category === 'Nature & Movement');

  const { t, i18n } = useTranslation();

  const fadeUp: Variants = {
    hidden: {
      opacity: 0,
      y: 45,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.9,
        ease: 'easeOut',
      },
    },
  };

  const cardsContainer: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.18,
        delayChildren: 0.25,
      },
    },
  };

  const cardItem: Variants = {
    hidden: {
      opacity: 0,
      y: 55,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.9,
        ease: 'easeOut',
      },
    },
  };

  return (
    <section id="experiences" className="scroll-mt-[86px] bg-white py-12 lg:py-16 xl:py-24">
      <Container className="px-8">
        {/* HEADER */}
        <motion.div
          className="mx-auto text-center"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}>
          <AnimatePresence mode="wait">
            <motion.h2
              key={`experiences-title-${i18n.language}`}
              className="font-serif uppercase tracking-[0.1em] text-[#2C3654] text-[32px] leading-[40px] sm:text-[38px] sm:leading-[46px] lg:text-[52px] lg:leading-[62px]"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.3 }}>
              {t('experiences.title')}
            </motion.h2>
          </AnimatePresence>

          <AnimatePresence mode="wait">
            <motion.p
              key={`experiences-description-${i18n.language}`}
              className="tracking-[-0.03em] sm:mx-auto mt-4 lg:mt-6 max-w-[1120px] font-serif text-[#2C3654] text-[22px] leading-[30px] md:text-[28px] sm:leading-[36px] lg:text-[35px] lg:leading-[46px] xl:leading-[48px] sm:w-[570px] md:w-[705px] lg:w-[870px]"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.3 }}>
              {t('experiences.descriptionLine1')}
              <br />
              {t('experiences.descriptionLine2')}
            </motion.p>
          </AnimatePresence>
        </motion.div>

        {/* WINE & TASTE */}
        {/* HEADER */}
        <motion.div
          className="mt-8 lg:mt-12"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}>
          <AnimatePresence mode="wait">
            <motion.h3
              key={`wine-taste-${i18n.language}`}
              className="font-serif tracking-[0.05em] text-[#2C3654] text-[28px] leading-[40px] sm:text-[36px] sm:leading-[50px] lg:text-[38px] lg:leading-[60px] xl:text-[42px] xl:leading-[72px]"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.3 }}>
              {t('experiences.wineTaste')}
            </motion.h3>
          </AnimatePresence>

          <div className="h-[2px] w-full bg-[#2C3654]" />
        </motion.div>

        {/* CARDS */}
        {/* MOBILE SWIPER */}
        <motion.div
          className="mt-6 sm:hidden"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}>
          <Swiper
            modules={[Autoplay]}
            slidesPerView={1}
            spaceBetween={18}
            grabCursor
            speed={1200}
            loop
            autoplay={{
              delay: 3500,
              disableOnInteraction: false,
            }}
            className="w-full">
            {wineAndTaste.map((experience) => (
              <SwiperSlide key={experience.title}>
                <article>
                  <img
                    src={experience.image}
                    alt={t(`experienceCards.${experience.title}`)}
                    className="w-full h-[520px] object-cover"
                  />

                  <AnimatePresence mode="wait">
                    <motion.h4
                      key={`${experience.title}-${i18n.language}`}
                      className="card-title"
                      initial={{ opacity: 0, y: 6 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -6 }}
                      transition={{ duration: 0.25 }}>
                      {t(`experienceCards.${experience.title}`)}
                    </motion.h4>
                  </AnimatePresence>

                  <AnimatePresence mode="wait">
                    <motion.p
                      key={`${experience.description}-${i18n.language}`}
                      className="card-description"
                      initial={{ opacity: 0, y: 6 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -6 }}
                      transition={{ duration: 0.25 }}>
                      {t(`experienceCards.${experience.description}`)}
                    </motion.p>
                  </AnimatePresence>
                </article>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>

        {/* TABLET & DESKTOP GRID */}
        <motion.div
          className="mt-6 hidden sm:grid sm:grid-cols-2 lg:grid-cols-4 gap-10"
          variants={cardsContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}>
          {wineAndTaste.map((experience) => (
            <motion.article key={experience.title} variants={cardItem}>
              <img
                src={experience.image}
                alt={t(`experienceCards.${experience.title}`)}
                className="w-full h-[480px] lg:h-[380px] xl:h-[480px] 2xl:h-[580px] object-cover"
              />

              <AnimatePresence mode="wait">
                <motion.h4
                  key={`${experience.title}-${i18n.language}`}
                  className="card-title"
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -6 }}
                  transition={{ duration: 0.25 }}>
                  {t(`experienceCards.${experience.title}`)}
                </motion.h4>
              </AnimatePresence>

              <AnimatePresence mode="wait">
                <motion.p
                  key={`${experience.description}-${i18n.language}`}
                  className="card-description"
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -6 }}
                  transition={{ duration: 0.25 }}>
                  {t(`experienceCards.${experience.description}`)}
                </motion.p>
              </AnimatePresence>
            </motion.article>
          ))}
        </motion.div>

        {/* CULTURE & DISCOVERY */}
        {/* HEADER */}
        <motion.div
          className="mt-8 lg:mt-12"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}>
          <AnimatePresence mode="wait">
            <motion.h3
              key={`wine-taste-${i18n.language}`}
              className="font-serif text-center tracking-[0.05em] text-[#2C3654] text-[28px] leading-[40px] sm:text-[36px] sm:leading-[50px] lg:text-[38px] lg:leading-[60px] xl:text-[42px] xl:leading-[72px]"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.3 }}>
              {t('experiences.cultureDiscovery')}
            </motion.h3>
          </AnimatePresence>
          <div className="h-[2px] w-full bg-[#2C3654]" />
        </motion.div>

        {/* CARDS */}
        {/* MOBILE SWIPER */}
        <motion.div
          className="mt-6 sm:hidden"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}>
          <Swiper
            modules={[Autoplay]}
            slidesPerView={1}
            spaceBetween={18}
            loop
            speed={1200}
            grabCursor
            autoplay={{
              delay: 3500,
              disableOnInteraction: false,
            }}
            className="w-full">
            {cultureAndDiscovery.map((experience) => (
              <SwiperSlide key={experience.title}>
                <article>
                  <img
                    src={experience.image}
                    alt={t(`experienceCards.${experience.title}`)}
                    className="w-full h-[520px] object-cover"
                  />

                  <AnimatePresence mode="wait">
                    <motion.h4
                      key={`${experience.title}-${i18n.language}`}
                      className="card-title"
                      initial={{ opacity: 0, y: 6 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -6 }}
                      transition={{ duration: 0.25 }}>
                      {t(`experienceCards.${experience.title}`)}
                    </motion.h4>
                  </AnimatePresence>

                  <AnimatePresence mode="wait">
                    <motion.p
                      key={`${experience.description}-${i18n.language}`}
                      className="card-description"
                      initial={{ opacity: 0, y: 6 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -6 }}
                      transition={{ duration: 0.25 }}>
                      {t(`experienceCards.${experience.description}`)}
                    </motion.p>
                  </AnimatePresence>
                </article>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>

        {/* TABLET & DESKTOP GRID */}
        <motion.div
          className="mt-6 hidden sm:grid sm:grid-cols-2 gap-10"
          variants={cardsContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}>
          {cultureAndDiscovery.map((experience) => (
            <motion.article key={experience.title} variants={cardItem}>
              <img
                src={experience.image}
                alt={t(`experienceCards.${experience.title}`)}
                className="w-full h-[480px] lg:h-auto object-cover"
              />

              <AnimatePresence mode="wait">
                <motion.h4
                  key={`${experience.title}-${i18n.language}`}
                  className="card-title"
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -6 }}
                  transition={{ duration: 0.25 }}>
                  {t(`experienceCards.${experience.title}`)}
                </motion.h4>
              </AnimatePresence>

              <AnimatePresence mode="wait">
                <motion.p
                  key={`${experience.description}-${i18n.language}`}
                  className="card-description"
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -6 }}
                  transition={{ duration: 0.25 }}>
                  {t(`experienceCards.${experience.description}`)}
                </motion.p>
              </AnimatePresence>
            </motion.article>
          ))}
        </motion.div>

        {/* NATURE & MOVEMENT */}
        {/* HEADER */}
        <motion.div
          className="mt-8 lg:mt-12"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}>
          <div className="flex justify-end">
            <AnimatePresence mode="wait">
              <motion.h3
                key={`wine-taste-${i18n.language}`}
                className="font-serif tracking-[0.05em] text-[#2C3654] text-[28px] leading-[40px] sm:text-[36px] sm:leading-[50px] lg:text-[38px] lg:leading-[60px] xl:text-[42px] xl:leading-[72px]"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.3 }}>
                {t('experiences.natureMovement')}
              </motion.h3>
            </AnimatePresence>
          </div>

          <div className="h-[2px] w-full bg-[#2C3654]" />
        </motion.div>

        {/* CARDS */}
        {/* MOBILE SWIPER */}
        <motion.div
          className="mt-6 sm:hidden"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}>
          <Swiper
            modules={[Autoplay]}
            slidesPerView={1}
            spaceBetween={18}
            loop
            speed={1200}
            autoplay={{
              delay: 3500,
              disableOnInteraction: false,
            }}
            className="w-full">
            {natureAndMovement.map((experience) => (
              <SwiperSlide key={experience.title}>
                <article>
                  <img
                    src={experience.image}
                    alt={t(`experienceCards.${experience.title}`)}
                    className="w-full h-[520px] object-cover"
                  />

                  <AnimatePresence mode="wait">
                    <motion.h4
                      key={`${experience.title}-${i18n.language}`}
                      className="card-title"
                      initial={{ opacity: 0, y: 6 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -6 }}
                      transition={{ duration: 0.25 }}>
                      {t(`experienceCards.${experience.title}`)}
                    </motion.h4>
                  </AnimatePresence>

                  <AnimatePresence mode="wait">
                    <motion.p
                      key={`${experience.description}-${i18n.language}`}
                      className="card-description"
                      initial={{ opacity: 0, y: 6 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -6 }}
                      transition={{ duration: 0.25 }}>
                      {t(`experienceCards.${experience.description}`)}
                    </motion.p>
                  </AnimatePresence>
                </article>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>

        {/* TABLET & DESKTOP GRID */}
        <motion.div
          className="mt-6 hidden sm:grid sm:grid-cols-2 lg:grid-cols-4 gap-10"
          variants={cardsContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}>
          {natureAndMovement.map((experience) => (
            <motion.article key={experience.title} variants={cardItem}>
              <img
                src={experience.image}
                alt={t(`experienceCards.${experience.title}`)}
                className="w-full object-cover"
              />

              <AnimatePresence mode="wait">
                <motion.h4
                  key={`${experience.title}-${i18n.language}`}
                  className="card-title"
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -6 }}
                  transition={{ duration: 0.25 }}>
                  {t(`experienceCards.${experience.title}`)}
                </motion.h4>
              </AnimatePresence>

              <AnimatePresence mode="wait">
                <motion.p
                  key={`${experience.description}-${i18n.language}`}
                  className="card-description"
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -6 }}
                  transition={{ duration: 0.25 }}>
                  {t(`experienceCards.${experience.description}`)}
                </motion.p>
              </AnimatePresence>
            </motion.article>
          ))}
        </motion.div>

        {/* DISCOVER BTN */}
        <motion.div
          className="mt-10 lg:mt-14 xl:mt-24 flex justify-center"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}>
          {/* <button className="experiences-btn">Discover All Experiences</button> */}
          <button className="experiences-btn">
            <AnimatePresence mode="wait">
              <motion.span
                key={`discover-all-${i18n.language}`}
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                transition={{ duration: 0.25 }}>
                {t('experiences.discoverAll')}
              </motion.span>
            </AnimatePresence>
          </button>
        </motion.div>
      </Container>
    </section>
  );
}
