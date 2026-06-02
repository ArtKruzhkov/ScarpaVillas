import React from 'react';
import { Container } from '../../components/layout/Container';

type Experience = {
  category: string;
  title: string;
  description: string;
  image: string;
};

const experiences: Experience[] = [
  {
    category: 'Wine & Taste',
    title: 'Winery Visits',
    description:
      'Step inside the historic Scarpa cellars and experience the craft behind every bottle.',
    image: '/images/experiences/winery-visits.png',
  },
  {
    category: 'Wine & Taste',
    title: 'Private Wine Tastings',
    description: 'Discover Scarpa wines with a sommelier, from rare vintages to iconic labels.',
    image: '/images/experiences/wine-tastings.png',
  },
  {
    category: 'Wine & Taste',
    title: 'Chef & Private Dining',
    description:
      'Enjoy slow dinners and breakfasts prepared just for you, in the comfort of your villa.',
    image: '/images/experiences/private-dining.png',
  },
  {
    category: 'Wine & Taste',
    title: 'Cooking Classes',
    description: 'Learn the traditions of Piedmontese cuisine, hands-on and unhurried.',
    image: '/images/experiences/cooking-classes.png',
  },
  {
    category: 'Culture & Discovery',
    title: 'Langhe & Barolo Tours',
    description: 'Discover historic villages, local markets, and hidden corners of the region.',
    image: '/images/experiences/langhe-tours.png',
  },
  {
    category: 'Culture & Discovery',
    title: 'Turin Experiences',
    description: 'From historic cafés to vermouth bars, explore the culture of Piedmont’s capital.',
    image: '/images/experiences/turin-experiences.png',
  },
  {
    category: 'Nature & Movement',
    title: 'Truffle Hunting',
    description: 'Walk through the woods with a trifolau in search of Alba’s most prized treasure.',
    image: '/images/experiences/truffle-hunting.png',
  },
  {
    category: 'Nature & Movement',
    title: 'Vineyard Picnics',
    description: 'A simple table, a bottle of wine, and the vineyards all around you.',
    image: '/images/experiences/vineyard-picnics.png',
  },
  {
    category: 'Nature & Movement',
    title: 'Hot-Air Balloon Flights',
    description: 'See the Langhe from above at sunrise, drifting quietly over vineyards and hills.',
    image: '/images/experiences/hot-air-balloon.png',
  },
  {
    category: 'Nature & Movement',
    title: 'Vespa & E-bike Tours',
    description:
      'Explore the Barolo hills on a Vespa, moving freely between vineyards and villages.',
    image: '/images/experiences/vespa-ebike.png',
  },
];

export function Experiences() {
  const wineAndTaste = experiences.filter((item) => item.category === 'Wine & Taste');

  const cultureAndDiscovery = experiences.filter((item) => item.category === 'Culture & Discovery');

  const natureAndMovement = experiences.filter((item) => item.category === 'Nature & Movement');

  return (
    <section id="experiences" className="scroll-mt-[86px] bg-white py-32">
      <Container className="px-8">
        {/* HEADER */}
        <div className="mx-auto text-center">
          <h2 className="font-serif text-[64px] uppercase leading-[75px] tracking-[0.1em] text-[#2C3654]">
            Ways To Experience Barolo
          </h2>

          <p className="mx-auto mt-6 max-w-[1120px] font-serif text-[48px] leading-[56px] text-[#2C3654]">
            From private tastings to slow afternoons in the vineyards, each experience is designed
            to immerse <br /> you in the rhythm of Barolo.
          </p>
        </div>

        {/* WINE & TASTE */}
        <div className="mt-16">
          <h3 className="font-serif leading-[80px] text-[48px] text-[#2C3654] tracking-[0.05em]">
            Wine & Taste
          </h3>

          <div className="h-[2px] w-full bg-[#2C3654]" />
        </div>

        {/* CARDS */}
        <div className="mt-6 grid grid-cols-4 gap-7">
          {wineAndTaste.map((experience) => (
            <article key={experience.title}>
              <img src={experience.image} alt={experience.title} className="w-full object-cover" />

              <h4 className="mt-6 text-[24px] font-sans font-medium uppercase tracking-[0.1em] text-[#C09A60]">
                {experience.title}
              </h4>

              <p className="mt-3 font-sans text-[20px] leading-[32px] text-[#2C3654]">
                {experience.description}
              </p>
            </article>
          ))}
        </div>

        {/* CULTURE & DISCOVERY */}
        <div className="mt-[55px]">
          <h3 className="text-center font-serif leading-[80px] text-[48px] text-[#2C3654] tracking-[0.05em]">
            Culture & Discovery
          </h3>

          <div className="h-[2px] w-full bg-[#2C3654]" />
        </div>

        <div className="mt-6 grid grid-cols-2 gap-7">
          {cultureAndDiscovery.map((experience) => (
            <article key={experience.title}>
              <img src={experience.image} alt={experience.title} className="w-full object-cover" />

              <h4 className="mt-6 text-[24px] font-sans font-medium uppercase tracking-[0.1em] text-[#C09A60]">
                {experience.title}
              </h4>

              <p className="mt-3 font-sans text-[20px] leading-[32px] text-[#2C3654]">
                {experience.description}
              </p>
            </article>
          ))}
        </div>

        {/* NATURE & MOVEMENT */}
        <div className="mt-[55px]">
          <div className="flex justify-end">
            <h3 className="font-serif leading-[80px] text-[48px] text-[#2C3654] tracking-[0.05em]">
              Nature & Movement
            </h3>
          </div>

          <div className="h-[2px] w-full bg-[#2C3654]" />
        </div>

        <div className="mt-6 grid grid-cols-4 gap-7">
          {natureAndMovement.map((experience) => (
            <article key={experience.title}>
              <img src={experience.image} alt={experience.title} className="w-full object-cover" />

              <h4 className="mt-6 text-[24px] font-sans font-medium uppercase tracking-[0.1em] text-[#C09A60]">
                {experience.title}
              </h4>

              <p className="mt-3 font-sans text-[20px] leading-[32px] text-[#2C3654]">
                {experience.description}
              </p>
            </article>
          ))}
        </div>

        <div className="mt-[120px] flex justify-center">
          <button className="border-[3px] border-[#2C3654] px-[44px] py-[18px] font-sans text-[32px] font-bold uppercase tracking-[0.1em] text-[#2C3654] transition-all duration-300 hover:bg-[#2C3654] hover:text-white">
            Discover All Experiences
          </button>
        </div>
      </Container>
    </section>
  );
}
