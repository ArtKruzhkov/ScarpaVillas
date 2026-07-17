import { motion } from 'framer-motion';

export function VillaOverview() {
  return (
    <section className="bg-white py-16 lg:pt-20 lg:pb-8">
      <div className="mx-auto max-w-8xl px-4 lg:px-5">
        {/* TEXT */}
        <motion.div
          viewport={{ once: true, amount: 0.35 }}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="mx-auto max-w-[930px] text-center">
          <h2 className="font-serif mx-auto lg:max-w-[890px] text-[28px] leading-[32px] tracking-[0.02em] text-[#2C3654] lg:text-[32px] lg:leading-[38px]">
            Tettineive is the most spacious of the Scarpa Villas — designed for families,
            gatherings, and time spent together without losing a sense of privacy.
          </h2>

          <p className="mx-auto mt-6 max-w-[930px] font-sans text-[18px] leading-[1.7] text-[#2C3654]/80">
            <strong className="font-semibold text-[#2C3654]">Five bedrooms,</strong> generous living
            areas, and a{' '}
            <strong className="font-semibold text-[#2C3654]">large private garden</strong> create
            <br />a setting where each moment unfolds naturally, between shared experiences and
            quiet personal time.
          </p>
        </motion.div>

        {/* IMAGES */}
        <motion.div
          viewport={{ once: true, amount: 0.2 }}
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="mt-14 grid grid-cols-1 gap-5 lg:grid-cols-[1fr_2fr_1fr]">
          {/* Left */}
          <div className="overflow-hidden">
            <img
              src={`${process.env.PUBLIC_URL}/images/VillaPage/villa_overview/villa-tettineive-left.png`}
              alt="Villa"
              className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
            />
          </div>

          {/* Center */}
          <div className="overflow-hidden">
            <img
              src={`${process.env.PUBLIC_URL}/images/VillaPage/villa_overview/villa-tettineive-center.png`}
              alt="Villa"
              className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
            />
          </div>

          {/* Right */}
          <div className="overflow-hidden">
            <img
              src={`${process.env.PUBLIC_URL}/images/VillaPage/villa_overview/villa-tettineive-right.png`}
              alt="Villa"
              className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
