import React from 'react';
import { Container } from '../../components/layout/Container';
import { motion, Variants } from 'framer-motion';
import './experiences.css';

type Experience = {
  category: string;
  title: string;
  description: string;
  image: string;
};

const baseUrl = process.env.PUBLIC_URL;

const experiences: Experience[] = [
  {
    category: 'Wine & Taste',
    title: 'Winery Visits',
    description:
      'Step inside the historic Scarpa cellars and experience the craft behind every bottle.',
    image: `${baseUrl}/images/experiences/winery-visits.png`,
  },
  {
    category: 'Wine & Taste',
    title: 'Private Wine Tastings',
    description: 'Discover Scarpa wines with a sommelier, from rare vintages to iconic labels.',
    image: `${baseUrl}/images/experiences/wine-tastings.png`,
  },
  {
    category: 'Wine & Taste',
    title: 'Chef & Private Dining',
    description:
      'Enjoy slow dinners and breakfasts prepared just for you, in the comfort of your villa.',
    image: `${baseUrl}/images/experiences/private-dining.png`,
  },
  {
    category: 'Wine & Taste',
    title: 'Cooking Classes',
    description: 'Learn the traditions of Piedmontese cuisine, hands-on and unhurried.',
    image: `${baseUrl}/images/experiences/cooking-classes.png`,
  },
  {
    category: 'Culture & Discovery',
    title: 'Langhe & Barolo Tours',
    description: 'Discover historic villages, local markets, and hidden corners of the region.',
    image: `${baseUrl}/images/experiences/langhe-tours.png`,
  },
  {
    category: 'Culture & Discovery',
    title: 'Turin Experiences',
    description: 'From historic cafés to vermouth bars, explore the culture of Piedmont’s capital.',
    image: `${baseUrl}/images/experiences/turin-experiences.png`,
  },
  {
    category: 'Nature & Movement',
    title: 'Truffle Hunting',
    description: 'Walk through the woods with a trifolau in search of Alba’s most prized treasure.',
    image: `${baseUrl}/images/experiences/truffle-hunting.png`,
  },
  {
    category: 'Nature & Movement',
    title: 'Vineyard Picnics',
    description: 'A simple table, a bottle of wine, and the vineyards all around you.',
    image: `${baseUrl}/images/experiences/vineyard-picnics.png`,
  },
  {
    category: 'Nature & Movement',
    title: 'Hot-Air Balloon Flights',
    description: 'See the Langhe from above at sunrise, drifting quietly over vineyards and hills.',
    image: `${baseUrl}/images/experiences/hot-air-balloon.png`,
  },
  {
    category: 'Nature & Movement',
    title: 'Vespa & E-bike Tours',
    description:
      'Explore the Barolo hills on a Vespa, moving freely between vineyards and villages.',
    image: `${baseUrl}/images/experiences/vespa-ebike.png`,
  },
];

export function Experiences() {
  const wineAndTaste = experiences.filter((item) => item.category === 'Wine & Taste');

  const cultureAndDiscovery = experiences.filter((item) => item.category === 'Culture & Discovery');

  const natureAndMovement = experiences.filter((item) => item.category === 'Nature & Movement');

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
        {/* <div className="mx-auto text-center">
          <h2 className="font-serif uppercase tracking-[0.1em] text-[#2C3654] text-[32px] leading-[40px] sm:text-[42px] sm:leading-[52px] lg:text-[52px] lg:leading-[62px] xl:text-[52px] xl:leading-[65px]">
            Ways To Experience Barolo
          </h2>

          <p className="tracking-[-0.03em] xl:mx-auto mt-4 lg:mt-6 max-w-[1120px] font-serif text-[#2C3654] text-[22px] leading-[30px] sm:text-[28px] sm:leading-[36px] lg:text-[36px] lg:leading-[46px] xl:text-[35px] xl:leading-[48px] xl:w-[792px]">
            From private tastings to slow afternoons in the vineyards, each experience is designed
            to immerse <br /> you in the rhythm of Barolo.
          </p>
        </div> */}

        <motion.div
          className="mx-auto text-center"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}>
          <h2 className="font-serif uppercase tracking-[0.1em] text-[#2C3654] text-[32px] leading-[40px] sm:text-[42px] sm:leading-[52px] lg:text-[52px] lg:leading-[62px] xl:text-[52px] xl:leading-[65px]">
            Ways To Experience Barolo
          </h2>

          <p className="tracking-[-0.03em] xl:mx-auto mt-4 lg:mt-6 max-w-[1120px] font-serif text-[#2C3654] text-[22px] leading-[30px] sm:text-[28px] sm:leading-[36px] lg:text-[36px] lg:leading-[46px] xl:text-[35px] xl:leading-[48px] xl:w-[792px]">
            From private tastings to slow afternoons in the vineyards, each experience is designed
            to immerse <br /> you in the rhythm of Barolo.
          </p>
        </motion.div>

        {/* WINE & TASTE */}
        {/* <div className="mt-8 lg:mt-12">
          <h3 className="font-serif tracking-[0.05em] text-[#2C3654] text-[28px] leading-[40px] sm:text-[36px] sm:leading-[50px] lg:text-[42px] lg:leading-[60px] xl:text-[42px] xl:leading-[72px]">
            Wine & Taste
          </h3>

          <div className="h-[2px] w-full bg-[#2C3654]" />
        </div> */}

        <motion.div
          className="mt-8 lg:mt-12"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}>
          <h3 className="font-serif tracking-[0.05em] text-[#2C3654] text-[28px] leading-[40px] sm:text-[36px] sm:leading-[50px] lg:text-[42px] lg:leading-[60px] xl:text-[42px] xl:leading-[72px]">
            Wine & Taste
          </h3>

          <div className="h-[2px] w-full bg-[#2C3654]" />
        </motion.div>

        {/* CARDS */}
        {/* <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {wineAndTaste.map((experience) => (
            <article key={experience.title}>
              <img
                src={experience.image}
                alt={experience.title}
                className="w-full h-[560px] sm:h-[480px] lg:h-[620px] object-cover"
              />

              <h4 className="card-title">{experience.title}</h4>

              <p className="card-description">{experience.description}</p>
            </article>
          ))}
        </div> */}

        <motion.div
          className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10"
          variants={cardsContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}>
          {wineAndTaste.map((experience) => (
            <motion.article key={experience.title} variants={cardItem}>
              <img
                src={experience.image}
                alt={experience.title}
                className="w-full h-[560px] sm:h-[480px] lg:h-[620px] object-cover"
              />

              <h4 className="card-title">{experience.title}</h4>

              <p className="card-description">{experience.description}</p>
            </motion.article>
          ))}
        </motion.div>

        {/* CULTURE & DISCOVERY */}
        {/* <div className="mt-8 lg:mt-12 xl:mt-14">
          <h3 className="text-center font-serif tracking-[0.05em] text-[#2C3654] text-[28px] leading-[40px] sm:text-[36px] sm:leading-[50px] lg:text-[42px] lg:leading-[60px] xl:text-[42px] xl:leading-[72px]">
            Culture & Discovery
          </h3>

          <div className="h-[2px] w-full bg-[#2C3654]" />
        </div> */}

        <motion.div
          className="mt-8 lg:mt-12"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}>
          <h3 className="font-serif tracking-[0.05em] text-[#2C3654] text-[28px] leading-[40px] sm:text-[36px] sm:leading-[50px] lg:text-[42px] lg:leading-[60px] xl:text-[42px] xl:leading-[72px]">
            Culture & Discovery
          </h3>

          <div className="h-[2px] w-full bg-[#2C3654]" />
        </motion.div>

        {/* CARDS */}
        {/* <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-7">
          {cultureAndDiscovery.map((experience) => (
            <article key={experience.title}>
              <img
                src={experience.image}
                alt={experience.title}
                className="w-full h-[560px] sm:h-[480px] lg:h-auto object-cover"
              />

              <h4 className="card-title">{experience.title}</h4>

              <p className="card-description">{experience.description}</p>
            </article>
          ))}
        </div> */}

        <motion.div
          className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-10"
          variants={cardsContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}>
          {cultureAndDiscovery.map((experience) => (
            <motion.article key={experience.title} variants={cardItem}>
              <img
                src={experience.image}
                alt={experience.title}
                className="w-full h-[560px] sm:h-[480px] lg:h-auto object-cover"
              />

              <h4 className="card-title">{experience.title}</h4>

              <p className="card-description">{experience.description}</p>
            </motion.article>
          ))}
        </motion.div>

        {/* NATURE & MOVEMENT */}
        {/* <div className="mt-8 lg:mt-12 xl:mt-14">
          <div className="flex justify-end">
            <h3 className="font-serif tracking-[0.05em] text-[#2C3654] text-[28px] leading-[40px] sm:text-[36px] sm:leading-[50px] lg:text-[42px] lg:leading-[60px] xl:text-[42px] xl:leading-[72px]">
              Nature & Movement
            </h3>
          </div>

          <div className="h-[2px] w-full bg-[#2C3654]" />
        </div> */}

        <motion.div
          className="mt-8 lg:mt-12"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}>
          <div className="flex justify-end">
            <h3 className="font-serif tracking-[0.05em] text-[#2C3654] text-[28px] leading-[40px] sm:text-[36px] sm:leading-[50px] lg:text-[42px] lg:leading-[60px] xl:text-[42px] xl:leading-[72px]">
              Nature & Movement
            </h3>
          </div>

          <div className="h-[2px] w-full bg-[#2C3654]" />
        </motion.div>

        {/* CARDS */}
        {/* <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-7">
          {natureAndMovement.map((experience) => (
            <article key={experience.title}>
              <img src={experience.image} alt={experience.title} className="w-full object-cover" />

              <h4 className="card-title">{experience.title}</h4>

              <p className="card-description">{experience.description}</p>
            </article>
          ))}
        </div> */}

        <motion.div
          className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10"
          variants={cardsContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}>
          {natureAndMovement.map((experience) => (
            <motion.article key={experience.title} variants={cardItem}>
              <img src={experience.image} alt={experience.title} className="w-full object-cover" />

              <h4 className="card-title">{experience.title}</h4>

              <p className="card-description">{experience.description}</p>
            </motion.article>
          ))}
        </motion.div>

        {/* <div className="mt-10 lg:mt-14 xl:mt-24 flex justify-center">
          <button className="experiences-btn">Discover All Experiences</button>
        </div> */}

        <motion.div
          className="mt-10 lg:mt-14 xl:mt-24 flex justify-center"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}>
          <button className="experiences-btn">Discover All Experiences</button>
        </motion.div>
      </Container>
    </section>
  );
}
