import { motion } from 'framer-motion';

export function BorgoMoments() {
  return (
    <section className="relative overflow-hidden">
      {/* Background */}
      <motion.img
        src={`${process.env.PUBLIC_URL}/images/BorgoPage/borgo_moments/borgo_moments.png`}
        alt="Life at The Borgo"
        className="h-[420px] lg:h-full max-h-[864px] w-full object-cover"
        initial={{
          scale: 1.08,
          opacity: 0,
        }}
        whileInView={{
          scale: 1,
          opacity: 1,
        }}
        viewport={{
          once: true,
          amount: 0.3,
        }}
        transition={{
          duration: 1.8,
          ease: [0.22, 1, 0.36, 1],
        }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/5 to-transparent" />

      {/* Content */}
      <div className="absolute inset-0 flex flex-col items-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="mx-auto flex max-w-[1060px] h-full flex-col items-center text-center">
          <h2 className="mt-8 lg:mt-10 font-serif text-[28px] leading-[32px] sm:text-[36px] sm:leading-[40px] lg:text-[42px] lg:leading-[46px] uppercase tracking-[0.06em] text-white">
            AT THE BORGO, TIME IS SHARED DIFFERENTLY
          </h2>

          <div className="mt-auto mb-8 lg:mb-14 max-w-[1020px] space-y-5 font-serif text-[18px] leading-[30px] lg:text-[22px] lg:leading-[32px] text-white">
            <p>
              Mornings begin slowly, with the landscape unfolding across the hills.
              <br className="hidden lg:block" />
              Days move between gathering and quiet moments, with space for everyone to find their
              own rhythm.
            </p>

            <p>
              Evenings bring everyone back together —
              <br className="hidden lg:block" />
              around long tables, under open skies, or within the warmth of the villas.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
