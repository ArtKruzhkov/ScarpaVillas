import { motion } from 'framer-motion';

export function VillaHero() {
  return (
    <section className="relative section-height overflow-hidden">
      {/* Background */}
      <img
        src={`${process.env.PUBLIC_URL}/images/VillaPage/villa_hero/hero-tettineive.png`}
        alt="Villa Tettineive"
        className="absolute inset-0 h-full w-full object-cover"
      />

      {/* Overlay */}
      {/* <div className="absolute inset-0 hero-overlay" /> */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-black/10 to-transparent" />

      {/* Content */}
      <div className="relative z-10 flex h-full flex-col justify-between items-center">
        {/* Центр */}
        <div className="flex flex-1 items-center justify-center">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{
              duration: 0.35,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="flex flex-col items-center text-center text-white mt-32 sm:mt-24">
            <div className="mb-3 bg-white px-4 sm:px-6">
              <span className="font-sans text-[16px] sm:text-[18px] font-semibold uppercase tracking-[0.15em] text-[#2C3654]">
                Villa
              </span>
            </div>

            <h1 className="font-serif uppercase tracking-[0.08em] text-[38px] leading-[44px] sm:text-[46px] sm:leading-[50px] lg:text-[52px] lg:leading-[54px]">
              Tettineive
            </h1>
          </motion.div>
        </div>

        {/* Низ */}
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -12 }}
          transition={{
            duration: 0.35,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="pb-28 sm:pb-12 text-center font-serif text-[22px] leading-[28px] sm:text-[28px] sm:leading-[34px] lg:text-[32px] lg:leading-[38px] text-white max-w-[350px] sm:max-w-[510px] lg:max-w-[600px]">
          A place for gathering, <em>space, and quiet moments</em> in the Langhe
        </motion.p>
      </div>
    </section>
  );
}
