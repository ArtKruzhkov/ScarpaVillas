import { motion } from 'framer-motion';

export function VillaBookingCTA() {
  return (
    <section className="bg-[#2C3654] px-4 py-16 text-white lg:py-20">
      <motion.div
        viewport={{ once: true, amount: 0.35 }}
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.8,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="mx-auto flex lg:max-w-[620px] flex-col items-center text-center">
        <p className="font-serif text-[28px] leading-[1.15] text-[34px] 2xl:text-[36px]">
          <strong className="font-semibold">Villa Tettineive:</strong>{' '}
          <em className="font-normal">ideal for families, </em>
          <br className="hidden lg:block" />
          group stays, and private gatherings.
        </p>

        <a
          href="#availability"
          className="mt-8 inline-flex h-[57px] min-w-[280px] lg:min-w-[400px] items-center justify-center bg-white px-8 font-sans text-[13px] lg:text-[16px] font-semibold uppercase tracking-[0.18em] text-[#2C3654] transition-colors duration-300 hover:bg-white/80">
          Check availability
        </a>
      </motion.div>
    </section>
  );
}
