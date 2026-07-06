// import React from 'react';

// export function VillasPlanStayCTA() {
//   return (
//     <section className="relative overflow-hidden section-height">
//       {/* Background */}
//       <img
//         src={`${process.env.PUBLIC_URL}/images/villas_planStay/villas-plan-stay.png`}
//         alt="Scarpa Villas"
//         className="w-full h-full object-cover"
//       />

//       {/* Content */}
//       <div className="absolute inset-0 flex items-center">
//         <div className="pl-10 text-white">
//           <h2 className="max-w-[685px] font-serif text-[56px] uppercase leading-[1] tracking-[0.03rem]">
//             Planning a Larger
//             <br />
//             Gathering or Event?
//           </h2>

//           <p className="max-w-[685px] mt-10 font-serif text-[24px] leading-[1.2]">
//             The Borgo allows you to reserve <em>all four villas together</em> — creating a private
//             estate for groups, celebrations, or retreats.
//           </p>

//           <p className="mt-10 max-w-[544px] font-serif text-[24px] leading-[1.2]">
//             Find the villa that fits your stay and experience Barolo in your own way.
//           </p>

//           <button className="mt-10 h-[57px] w-full bg-white font-sans text-[18px] font-bold uppercase tracking-[0.18em] text-[#2C3654] transition-colors duration-300 hover:bg-[#2C3654] hover:text-white">
//             Plan Your Stay
//           </button>
//         </div>
//       </div>
//     </section>
//   );
// }

import React from 'react';
import { useTranslation } from 'react-i18next';
import { AnimatePresence, motion } from 'framer-motion';

export function VillasPlanStayCTA() {
  const { t } = useTranslation();

  return (
    <section className="relative section-height overflow-hidden">
      {/* Background */}
      <motion.img
        src={`${process.env.PUBLIC_URL}/images/villas_planStay/villas-plan-stay.png`}
        alt="Scarpa Villas"
        className="h-full w-full object-cover"
        initial={{
          scale: 1.08,
          opacity: 0,
        }}
        whileInView={{
          scale: 1,
          opacity: 1,
        }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{
          duration: 1.2,
          ease: [0.22, 1, 0.36, 1],
        }}
      />

      {/* Content */}
      <motion.div
        className="absolute inset-0 flex items-center"
        initial={{
          opacity: 0,
          y: 30,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{ once: true, amount: 0.35 }}
        transition={{
          duration: 0.8,
          delay: 0.35,
          ease: [0.22, 1, 0.36, 1],
        }}>
        <div className="pl-10 text-white">
          <AnimatePresence mode="wait">
            <motion.h2
              key={t('villasPlanStayCTA.title')}
              className="max-w-[688px] font-serif text-[56px] uppercase leading-[1] tracking-[0.03rem]"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{
                duration: 0.35,
                ease: [0.22, 1, 0.36, 1],
              }}>
              {t('villasPlanStayCTA.title')}
            </motion.h2>
          </AnimatePresence>

          <AnimatePresence mode="wait">
            <motion.p
              key={t('villasPlanStayCTA.text1')}
              className="mt-10 max-w-[688px] font-serif text-[24px] leading-[1.2]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}>
              {t('villasPlanStayCTA.text1')} <em>{t('villasPlanStayCTA.textItalic')}</em> —{' '}
              {t('villasPlanStayCTA.text1End')}
            </motion.p>
          </AnimatePresence>

          <AnimatePresence mode="wait">
            <motion.p
              key={t('villasPlanStayCTA.text2')}
              className="mt-10 max-w-[544px] font-serif text-[24px] leading-[1.2]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}>
              {t('villasPlanStayCTA.text2')}
            </motion.p>
          </AnimatePresence>

          <button className="mt-10 h-[57px] w-full bg-white font-sans text-[18px] font-bold uppercase tracking-[0.18em] text-[#2C3654] transition-colors duration-300 hover:bg-[#2C3654] hover:text-white">
            <AnimatePresence mode="wait">
              <motion.span
                key={t('villasPlanStayCTA.button')}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.25 }}>
                {t('villasPlanStayCTA.button')}
              </motion.span>
            </AnimatePresence>
          </button>
        </div>
      </motion.div>
    </section>
  );
}
