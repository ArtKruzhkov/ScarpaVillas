// import { motion, AnimatePresence } from 'framer-motion';
// import { useTranslation } from 'react-i18next';

// export function BorgoEstate() {
//   const { t } = useTranslation();
//   return (
//     <section className="bg-[#F7F5F2] overflow-hidden">
//       <div className="mx-auto max-w-8xl">
//         <div className="grid grid-cols-1 lg:grid-cols-3">
//           {/* LEFT */}
//           <motion.div
//             initial={{ opacity: 0, x: -30 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             viewport={{ once: true, amount: 0.25 }}
//             transition={{
//               duration: 0.9,
//               ease: [0.22, 1, 0.36, 1],
//             }}
//             className="h-[520px] md:h-[650px] lg:h-auto lg:min-h-[620px] relative overflow-hidden flex flex-col justify-between px-4 py-10 md:px-6 lg:px-7 lg:py-12 2xl:px-12 2xl:py-16 max-h-[862px]">
//             {/* IMG */}
//             <img
//               src={`${process.env.PUBLIC_URL}/images/BorgoPage/borgo_estate/estate_left.png`}
//               alt=""
//               aria-hidden="true"
//               className="absolute inset-0 h-full w-full object-cover object-[center_bottom] lg:object-[center_center]"
//             />
//             {/* Overlay */}
//             {/* <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/5 to-transparent" /> */}

//             {/* Content */}
//             <div className="relative z-10 flex h-full flex-col justify-between overflow-hidden">
//               <AnimatePresence mode="wait">
//                 <motion.div
//                   key={t('borgoEstate.titleLine1')}
//                   initial={{ opacity: 0, y: 12 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   exit={{ opacity: 0, y: -12 }}
//                   transition={{
//                     duration: 0.35,
//                     ease: [0.22, 1, 0.36, 1],
//                   }}
//                   className="flex h-full flex-col">
//                   <h2 className="font-serif uppercase text-[#2C3654] text-[24px] md:text-[28px] xl:text-[32px] 2xl:text-[38px] leading-[1] lg:leading-[34px] 2xl:leading-[42px] tracking-[0.06em]">
//                     {t('borgoEstate.titleLine1')}
//                     <br />
//                     {t('borgoEstate.titleLine2')}
//                     <br />
//                     {t('borgoEstate.titleLine3')}
//                   </h2>

//                   <div className="mt-4 lg:mt-10 2xl:mt-12 space-y-4 lg:space-y-8 font-serif text-[15px] md:text-[19px] 2xl:text-[24px] leading-[18px] md:leading-[22px] 2xl:leading-[30px] text-[#2C3654]">
//                     <p className="max-w-[343px] sm:max-w-[610px] md:max-w-[530px]">
//                       {t('borgoEstate.text1')}
//                     </p>

//                     <p className="max-w-[276px] md:max-w-[330px] 2xl:max-w-[410px]">
//                       {t('borgoEstate.text2')}
//                     </p>
//                   </div>
//                 </motion.div>
//               </AnimatePresence>
//             </div>
//           </motion.div>

//           {/* CENTER IMAGE */}
//           <motion.div
//             className="h-[520px] md:h-[650px] lg:h-auto overflow-hidden bg-[#C09A60] p-8 max-h-[862px]"
//             initial={{ opacity: 0, scale: 1.08 }}
//             whileInView={{ opacity: 1, scale: 1 }}
//             viewport={{ once: true, amount: 0.3 }}
//             transition={{
//               duration: 1.4,
//               ease: [0.22, 1, 0.36, 1],
//             }}>
//             <img
//               src={`${process.env.PUBLIC_URL}/images/BorgoPage/borgo_estate/estate_center.png`}
//               alt="The Borgo estate"
//               className="h-full w-full object-cover"
//             />
//           </motion.div>

//           {/* RIGHT IMAGE */}
//           <motion.div
//             className="h-[520px] md:h-[650px] lg:h-auto overflow-hidden max-h-[862px]"
//             initial={{ opacity: 0, scale: 1.08 }}
//             whileInView={{ opacity: 1, scale: 1 }}
//             viewport={{ once: true, amount: 0.3 }}
//             transition={{
//               duration: 1.4,
//               delay: 0.1,
//               ease: [0.22, 1, 0.36, 1],
//             }}>
//             <img
//               src={`${process.env.PUBLIC_URL}/images/BorgoPage/borgo_estate/estate_right.png`}
//               alt="Pool terrace"
//               className="h-full w-full object-cover"
//             />
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   );
// }

import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';

export function BorgoEstate() {
  const { t } = useTranslation();
  return (
    <section className="bg-white lg:py-0">
      <div className="mx-auto grid max-w-8xl overflow-hidden lg:grid-cols-[1.45fr_1fr]">
        {/* LEFT */}
        <motion.div
          initial={{
            opacity: 0,
            scale: 1.08,
          }}
          whileInView={{
            opacity: 1,
            scale: 1,
          }}
          viewport={{
            once: true,
            amount: 0.3,
          }}
          transition={{
            duration: 1.6,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="relative overflow-hidden">
          <img
            src={`${process.env.PUBLIC_URL}/images/BorgoPage/borgo_estate/estate-left.png`}
            alt="Four Villas"
            className="h-[430px] w-full object-cover md:h-[560px] lg:h-full"
          />

          <motion.div
            initial={{
              opacity: 0,
              y: 20,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
              amount: 0.4,
            }}
            transition={{
              duration: 0.9,
              delay: 0.2,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="absolute inset-0 flex justify-center px-6 pt-12 xl:pt-16 2xl:pt-20 text-center">
            <AnimatePresence mode="wait">
              <motion.h2
                key={t('borgoEstate2.titleLine1')}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{
                  duration: 0.35,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="font-serif tracking-[0.03em] uppercase text-[#2C3654] text-[20px] leading-[1.15] md:text-[28px] xl:text-[34px] xl:leading-[38px] 2xl:text-[42px] 2xl:leading-[46px]">
                {t('borgoEstate2.titleLine1')}
                <br />
                {t('borgoEstate2.titleLine2')}
              </motion.h2>
            </AnimatePresence>
          </motion.div>
        </motion.div>

        {/* RIGHT */}
        <motion.div
          initial={{
            opacity: 0,
            scale: 1.08,
          }}
          whileInView={{
            opacity: 1,
            scale: 1,
          }}
          viewport={{
            once: true,
            amount: 0.3,
          }}
          transition={{
            duration: 1.6,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="relative overflow-hidden border-[20px] xl:border-[25px] 2xl:border-[35px] border-white">
          <img
            src={`${process.env.PUBLIC_URL}/images/BorgoPage/borgo_estate/estate-right.png`}
            alt="Private Estate"
            className="h-[400px] md:h-[520px] lg:h-full w-full object-cover sm:object-[center_70%] lg:object-center"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-black/5 to-transparent" />

          <motion.div
            initial={{
              opacity: 0,
              y: 20,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
              amount: 0.4,
            }}
            transition={{
              duration: 0.9,
              delay: 0.35,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="absolute inset-x-0 bottom-6 md:bottom-8 lg:bottom-5 xl:bottom-10 flex flex-col items-center px-4 xl:px-5 2xl:px-8">
            <AnimatePresence mode="wait">
              <motion.p
                key={t('borgoEstate2.text')}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{
                  duration: 0.35,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="text-white sm:max-w-[450px] md:max-w-[690px] lg:max-w-[590px] text-center font-serif text-[14px] sm:text-[16px] md:text-[17px] lg:text-[16px] xl:text-[18px] 2xl:text-[22px] leading-[1.15] xl:leading-[22px] 2xl:leading-[26px]">
                {t('borgoEstate2.text')}
              </motion.p>
            </AnimatePresence>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
