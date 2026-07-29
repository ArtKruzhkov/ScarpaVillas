import { motion } from 'framer-motion';

const cards = [
  {
    title: 'Corporate retreats',
    image: `${process.env.PUBLIC_URL}/images/BorgoPage/borgo_about/corporate.png`,
  },
  {
    title: 'Destination weddings',
    image: `${process.env.PUBLIC_URL}/images/BorgoPage/borgo_about/weddings.png`,
  },
  {
    title: 'Private celebrations and gatherings',
    image: `${process.env.PUBLIC_URL}/images/BorgoPage/borgo_about/celebrations.png`,
  },
  {
    title: 'Multi-family stays',
    image: `${process.env.PUBLIC_URL}/images/BorgoPage/borgo_about/family.png`,
  },
];

const includes = [
  {
    icon: 'villa.svg',
    text: 'Four independent villas',
  },
  {
    icon: 'spaces.svg',
    text: 'Private use of all indoor and outdoor spaces',
  },
  {
    icon: 'pool.svg',
    text: 'Panoramic pool reserved exclusively for your group',
  },
  {
    icon: 'garden.svg',
    text: 'Private gardens and shared open areas',
  },
  {
    icon: 'kitchen.svg',
    text: 'Fully equipped kitchens in each villa',
  },
];

export function BorgoAbout() {
  return (
    <section className="bg-white overflow-hidden">
      <div className="mx-auto max-w-8xl">
        <div className="grid lg:grid-cols-[1.45fr_1fr]">
          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 0.9,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="px-5 py-10 md:px-8 md:py-12 xl:px-10 2xl:py-14">
            <h2 className="mb-8 font-sans text-[20px] font-bold uppercase tracking-[0.22em] text-[#2C3654]">
              Ideal For:
            </h2>

            <div className="grid gap-5 sm:grid-cols-2">
              {cards.map((card, index) => (
                <motion.div
                  key={card.title}
                  initial={{
                    opacity: 0,
                    scale: 1.08,
                  }}
                  whileInView={{
                    opacity: 1,
                    scale: 1,
                  }}
                  viewport={{ once: true, amount: 0.25 }}
                  transition={{
                    duration: 1.2,
                    delay: index * 0.08,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="group relative overflow-hidden">
                  <img
                    src={card.image}
                    alt={card.title}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

                  <span className="absolute bottom-5 left-5 right-5 font-serif text-[20px] 2xl:text-[26px] leading-tight text-white">
                    {card.title}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* RIGHT */}
          <motion.div
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{
              duration: 0.9,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="bg-[#2C3654] px-6 py-10 text-white md:px-10 md:py-14 xl:px-14 xl:py-16">
            <div className="flex flex-col h-full">
              <h2 className="mb-20 2xl:mb-28 font-sans text-[20px] font-bold uppercase tracking-[0.22em] text-[#C09A60]">
                The Borgo Includes:
              </h2>

              <div className="flex h-full flex-col justify-between pb-24">
                {includes.map((item) => (
                  <div key={item.text} className="flex items-center gap-6">
                    <img
                      src={`${process.env.PUBLIC_URL}/images/BorgoPage/borgo_about/${item.icon}`}
                      alt="icon"
                      aria-hidden="true"
                      className="mt-1 h-8 w-8 shrink-0"
                    />

                    <p className="font-sans text-[18px] 2xl:text-[20px] leading-[28px] 2xl:leading-[30px] text-white">
                      {item.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
