import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const villas = [
  {
    title: 'La Bogliona',
    description: 'The most intimate villa for couples and quiet stays',
    image: `${process.env.PUBLIC_URL}/images/VillaPage/villa_otherVillas/bogliona.png`,
    href: '/villas/la-bogliona',
  },
  {
    title: 'I Bricchi',
    description: 'A light-filled contemporary villa with panoramic views',
    image: `${process.env.PUBLIC_URL}/images/VillaPage/villa_otherVillas/bricchi.png`,
    href: '/villas/i-bricchi',
  },
  {
    title: 'Tettimorra',
    description: 'A traditional villa rooted in the vineyards of Monvigliero',
    image: `${process.env.PUBLIC_URL}/images/VillaPage/villa_otherVillas/tettimorra.png`,
    href: '/villas/tettimora',
  },
];

export function OtherVillas() {
  return (
    <section className="bg-white py-16 lg:pt-20 lg:pb-6">
      <div className="mx-auto max-w-8xl px-4 lg:px-5">
        {/* Heading */}
        <motion.div
          viewport={{ once: true, amount: 0.35 }}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1],
          }}>
          <h2 className="text-center font-serif text-[30px] uppercase tracking-[0.05em] text-[#2C3654] lg:text-[38px] lg:leading-[40px] 2xl:text-[42px] 2xl:leading-[44px]">
            Not sure if this villa is the right fit?
          </h2>

          <div className="mt-10 flex items-center gap-6">
            <div className="h-[2px] flex-1 bg-[#2C3654]" />

            <span className="font-sans text-[18px] font-bold uppercase tracking-[0.2em] text-[#2C3654]">
              Explore other villas:
            </span>

            <div className="h-[2px] flex-1 bg-[#2C3654]" />
          </div>
        </motion.div>

        {/* Cards */}
        <div className="mt-8 grid gap-5 lg:grid-cols-3">
          {villas.map((villa, index) => (
            <motion.div
              key={villa.title}
              viewport={{ once: true, amount: 0.2 }}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                delay: index * 0.12,
                duration: 0.8,
                ease: [0.22, 1, 0.36, 1],
              }}>
              <Link to={villa.href} className="group block overflow-hidden">
                <div className="relative overflow-hidden">
                  <img
                    src={villa.image}
                    alt={villa.title}
                    className="h-[500px] w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/15 to-transparent" />

                  {/* Content */}
                  <div className="absolute inset-x-0 bottom-0 p-6 text-white">
                    <h3 className="font-serif text-[34px] 2xl:text-[36px] leading-none">
                      {villa.title}
                    </h3>

                    <div className="my-4 h-px bg-white" />

                    <p className="max-w-[280px] font-sans text-[16px] leading-[1.55] text-white/90">
                      {villa.description}
                    </p>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
