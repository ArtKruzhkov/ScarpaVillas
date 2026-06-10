// import { Container } from '../../components/layout/Container';

// export function About() {
//   return (
//     <section
//       id="story"
//       className="scroll-mt-[86px] relative overflow-hidden section-height flex items-end">
//       <div className="absolute inset-0">
//         <img
//           src={`${process.env.PUBLIC_URL}/images/about/about-hero.png`}
//           alt="Scarpa Villas Landscape"
//           className="h-full w-full object-cover"
//         />
//       </div>

//       <Container className="relative z-10 pb-10">
//         <div className="xl:max-w-[1164px] ml-auto xl:mr-[5rem] px-6 xl:px-0">
//           <h2 className="font-serif text-[22px] sm:text-[28px] md:text-[36px] lg:text-[48px] xl:text-[57.5px] font-normal uppercase leading-[1] tracking-[0.08em] text-white">
//             A Different Rhythm of Living
//           </h2>

//           <div className="mt-3 lg:mt-6">
//             <p className="font-serif text-white/90 text-[16px] sm:text-[18px] leading-[1.3] lg:text-[22px] lg:leading-[32px] xl:text-[26px] xl:leading-[42px]">
//               In the hills of Verduno, within the vineyards of Monvigliero, Scarpa Villas offers a
//               rare way to experience Barolo. Inspired by the philosophy of Scarpa, it goes beyond a
//               place to stay – it is shaped by wine, time, and the land itself. Here, days unfold
//               slowly, between the silence of the vines, the warmth of the sun, and the rituals of
//               Piedmontese life.
//             </p>
//           </div>
//         </div>
//       </Container>
//     </section>
//   );
// }

import React from 'react';
import { motion } from 'framer-motion';
import { Container } from '../../components/layout/Container';

export function About() {
  return (
    <section
      id="story"
      className="scroll-mt-[86px] relative overflow-hidden section-height flex items-end">
      {/* BACKGROUND IMAGE */}
      <motion.div
        className="absolute inset-0"
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
        }}>
        <img
          src={`${process.env.PUBLIC_URL}/images/about/about-hero1.png`}
          alt="Scarpa Villas Landscape"
          className="h-full w-full object-cover"
        />
      </motion.div>

      {/* CONTENT */}
      <Container className="relative z-10 pb-10">
        <motion.div
          initial={{
            opacity: 0,
            y: 50,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{
            duration: 0.8,
            delay: 0.2,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="lg:max-w-[912px] xl:max-w-[992px] 2xl:max-w-[1052px] ml-auto xl:mr-6 2xl:mr-16 min-[1780px]:mr-[10rem] px-6 xl:px-0">
          <h2 className="font-serif text-center lg:text-left text-[22px] leading-[1.3] sm:leading-[1] sm:text-[28px] md:text-[36px] lg:text-[42px] xl:text-[48px] 2xl:text-[52px] font-normal uppercase tracking-[0.08em] text-white">
            A Different Rhythm of&nbsp;Living
          </h2>

          <div className="mt-3 lg:mt-6">
            {/* <p className="font-serif text-white/90 text-[16px] text-center lg:text-left md:text-[17.5px] md:leading-[28px] lg:text-[19.5px] lg:leading-[32px] xl:text-[22px] 2xl:text-[24px] xl:leading-[38px]">
              In the hills of Verduno, within the vineyards of Monvigliero, Scarpa Villas offers a
              rare way to experience Barolo. Inspired by the philosophy of Scarpa, it goes beyond a
              place to stay – it is shaped by wine, time, and the land itself. Here, days unfold
              slowly, between the silence of the vines, the warmth of the sun, and the rituals of
              Piedmontese life.
            </p> */}

            {/* MOBILE */}
            <p className="font-serif text-white text-[16px] text-center leading-[24px] sm:hidden">
              <span className="block">
                In the hills of Verduno, within the vineyards of Monvigliero, Scarpa Villas offers a
                rare way to experience Barolo.
              </span>

              <span className="block mt-2">
                Inspired by the philosophy of Scarpa, it goes beyond a place to stay – it is shaped
                by wine, time, and the land itself.
              </span>

              <span className="block mt-2">
                Here, days unfold slowly, between the silence of the vines, the warmth of the sun,
                and the rituals of Piedmontese life.
              </span>
            </p>

            {/* TABLET & DESKTOP */}
            <p className="hidden sm:block font-serif text-white text-[16px] text-center lg:text-left md:text-[17.5px] md:leading-[28px] lg:text-[19.5px] lg:leading-[32px] xl:text-[22px] 2xl:text-[24px] xl:leading-[38px]">
              In the hills of Verduno, within the vineyards of Monvigliero, Scarpa Villas offers a
              rare way to experience Barolo. Inspired by the philosophy of Scarpa, it goes beyond a
              place to stay – it is shaped by wine, time, and the land itself. Here, days unfold
              slowly, between the silence of the vines, the warmth of the sun, and the rituals of
              Piedmontese life.
            </p>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
