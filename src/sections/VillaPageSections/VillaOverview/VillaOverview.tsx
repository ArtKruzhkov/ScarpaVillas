import { motion } from 'framer-motion';

export function VillaOverview() {
  return (
    <section className="bg-white py-8 lg:pt-16 lg:pb-8">
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
          <h2 className="font-serif mx-auto max-w-[370px] sm:max-w-[610px] md:max-w-[740px] xl:max-w-[890px] text-[#2C3654] text-[19px] sm:text-[23px] md:text-[28px] xl:text-[32px] leading-[1.25] xl:leading-[38px] tracking-[-0.02rem]">
            Tettineive is the most spacious of the Scarpa Villas — designed for families,
            gatherings, and time spent together without losing a sense of privacy.
          </h2>

          <p className="mx-auto mt-4 sm:mt-6 max-w-[930px] font-sans text-[15px] leading-[1.4] sm:text-[16px] lg:text-[18px] lg:leading-[1.7] text-[#2C3654]/80">
            <strong className="font-semibold text-[#2C3654]">Five bedrooms,</strong> generous living
            areas, and a{' '}
            <strong className="font-semibold text-[#2C3654]">large private garden</strong> create
            <br className="hidden lg:block" />a setting where each moment unfolds naturally, between
            shared experiences and quiet personal time.
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
          className="mt-7 lg:mt-14 grid grid-cols-1 gap-5 lg:grid-cols-[1fr_2fr_1fr]">
          {/* Left */}
          <div className="h-[380px] max-h-[620px] overflow-hidden sm:h-[500px] lg:h-auto">
            <img
              src={`${process.env.PUBLIC_URL}/images/VillaPage/villa_overview/villa-tettineive-left.png`}
              alt="Villa"
              className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
            />
          </div>

          {/* Center */}
          <div className="h-[380px] max-h-[620px] overflow-hidden sm:h-[500px] lg:h-auto">
            <img
              src={`${process.env.PUBLIC_URL}/images/VillaPage/villa_overview/villa-tettineive-center.png`}
              alt="Villa"
              className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
            />
          </div>

          {/* Right */}
          <div className="h-[380px] max-h-[620px] overflow-hidden sm:h-[500px] lg:h-auto">
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
