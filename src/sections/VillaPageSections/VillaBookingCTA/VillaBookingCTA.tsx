// import { motion } from 'framer-motion';

// export function VillaBookingCTA() {
//   return (
//     <section className="bg-[#2C3654] text-white px-4 py-10 md:py-12 lg:py-16">
//       <motion.div
//         viewport={{ once: true, amount: 0.35 }}
//         initial={{ opacity: 0, y: 24 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         transition={{
//           duration: 0.8,
//           ease: [0.22, 1, 0.36, 1],
//         }}
//         className="mx-auto flex max-w-[344px] sm:max-w-[410px] md:max-w-[480px] lg:max-w-[620px] flex-col items-center text-center">
//         <p className="font-serif leading-[1.15] text-[20px] sm:text-[24px] md:text-[28px] lg:text-[32px] 2xl:text-[34px]">
//           <strong className="font-semibold">Villa Tettineive:</strong>{' '}
//           <em className="font-normal">ideal for families, </em>
//           <br className="hidden lg:block" />
//           group stays, and private gatherings.
//         </p>

//         <a
//           href="#availability"
//           className="mt-6 md:mt-8 inline-flex h-[44px] md:h-[57px] min-w-[280px] lg:min-w-[400px] items-center justify-center bg-white px-8 font-sans text-[13px] lg:text-[16px] font-semibold uppercase tracking-[0.18em] text-[#2C3654] transition-colors duration-300 hover:bg-white/80">
//           Check availability
//         </a>
//       </motion.div>
//     </section>
//   );
// }

import { motion } from 'framer-motion';
import type { Villa } from '../../../data/villas';

type VillaBookingCTAProps = {
  bookingCTA: Villa['bookingCTA'];
};

export function VillaBookingCTA({ bookingCTA }: VillaBookingCTAProps) {
  return (
    <section className="bg-[#2C3654] px-4 py-10 text-white md:py-12 lg:py-16">
      <motion.div
        viewport={{ once: true, amount: 0.35 }}
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.8,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="mx-auto flex max-w-[344px] flex-col items-center text-center sm:max-w-[410px] md:max-w-[480px] lg:max-w-[760px]">
        <p className="font-serif text-[20px] leading-[1.15] sm:text-[24px] md:text-[28px] lg:text-[32px] 2xl:text-[34px]">
          <strong className="font-semibold">{bookingCTA.title.bold}</strong>{' '}
          <em className="font-normal">{bookingCTA.title.italic}</em>
          <br className="hidden lg:block" />
          {bookingCTA.title.text}
        </p>

        <a
          href="#availability"
          className="mt-6 inline-flex h-[44px] min-w-[280px] items-center justify-center bg-white px-8 font-sans text-[13px] font-semibold uppercase tracking-[0.18em] text-[#2C3654] transition-colors duration-300 hover:bg-white/80 md:mt-8 md:h-[57px] lg:min-w-[400px] lg:text-[16px]">
          Check availability
        </a>
      </motion.div>
    </section>
  );
}
