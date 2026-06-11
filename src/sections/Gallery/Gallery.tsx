import { VillaGallery } from './VillaGallery';
import { motion } from 'framer-motion';
import './gallery.css';

// type Villa = {
//   name: string;
//   href: string;
//   position: {
//     top: string;
//     left: string;
//     height: string;
//   };
// };

// const villas: Villa[] = [
//   {
//     name: 'TETTIMORA',
//     href: '#',
//     position: {
//       top: '41%',
//       left: '23%',
//       height: '150px',
//     },
//   },
//   {
//     name: 'I BRICCHI',
//     href: '#',
//     position: {
//       top: '27%',
//       left: '38.5%',
//       height: '140px',
//     },
//   },
//   {
//     name: 'LA BOGLIONA',
//     href: '#',
//     position: {
//       top: '34.5%',
//       left: '51.5%',
//       height: '150px',
//     },
//   },
//   {
//     name: 'TETTINEIVE',
//     href: '#',
//     position: {
//       top: '48.5%',
//       left: '67%',
//       height: '140px',
//     },
//   },
// ];

type Villa = {
  name: string;
  href: string;
  className: string;
  lineHeight: string;
};

const villas: Villa[] = [
  {
    name: 'TETTIMORA',
    href: '#',
    className: 'villa-tettimora',
    lineHeight: 'h-[150px]',
  },
  {
    name: 'I BRICCHI',
    href: '#',
    className: 'villa-bricchi',
    lineHeight: 'h-[140px]',
  },
  {
    name: 'LA BOGLIONA',
    href: '#',
    className: 'villa-bogliona',
    lineHeight: 'h-[150px]',
  },
  {
    name: 'TETTINEIVE',
    href: '#',
    className: 'villa-tettineive',
    lineHeight: 'h-[140px]',
  },
];

export function Gallery() {
  return (
    <section id="villas" className="scroll-mt-[86px] relative overflow-hidden bg-[#f5f3ee]">
      {/* <div className="mx-auto w-full max-w-8xl px-0">
        <div className="relative section-height-gallery">
          
          <img
            src={`${process.env.PUBLIC_URL}/images/gallery/gallery-hero.png`}
            alt="Scarpa Villas"
            className="h-full w-full object-cover"
          />

          
          <div className="absolute inset-0 bg-black/10" />

          
          <div className="absolute left-1/2 top-4 sm:top-12 z-20 -translate-x-1/2 text-center w-full px-8 md:w-max md:px-0">
            <p className="font-serif font-medium text-[22px] sm:text-[34px] md:text-[42px] xl:text-[50px] leading-[1.1] tracking-[0.08em] text-[#2f3b63] uppercase">
              Four Villas
            </p>

            <h2 className="mt-1 sm:mt-2 font-serif font-medium text-[18px] sm:text-[34px] md:text-[42px] xl:text-[50px] leading-[1.1] tracking-[0.08em] text-[#2f3b63] uppercase">
              Four Ways To Live Barolo
            </h2>
          </div>

          {villas.map((villa) => (
            <div
              key={villa.name}
              className={`hidden min-[1025px]:block absolute z-20 ${villa.className}`}>
              <div className="flex flex-col items-center">
                <a href={villa.href} className="villa-label">
                  {villa.name}
                </a>

                <div className={`w-px bg-[#e7e2d7] ${villa.lineHeight}`} />

                <div className="h-3 w-3 rounded-full bg-[#f4f1ea]" />
              </div>
            </div>
          ))}
        </div>
      </div> */}

      <div className="mx-auto w-full max-w-8xl px-0">
        <div className="relative section-height-gallery overflow-hidden">
          {/* IMAGE */}
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
              src={`${process.env.PUBLIC_URL}/images/gallery/gallery-hero.png`}
              alt="Scarpa Villas"
              className="h-full w-full object-cover"
            />
          </motion.div>

          {/* TITLE */}
          <div className="absolute left-1/2 top-3 sm:top-10 z-20 -translate-x-1/2 text-center w-full px-8 md:w-max md:px-0">
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
                duration: 1,
                delay: 0.4,
                ease: [0.22, 1, 0.36, 1],
              }}>
              <p className="font-serif font-medium text-[18px] sm:text-[24px] md:text-[26px] xl:text-[26.5px] min-[1780px]:text-[32.5px] leading-[1.1] tracking-[0.08em] text-[#2f3b63] uppercase">
                Four Villas
              </p>

              <h2 className="mt-1 sm:mt-2 font-serif font-medium text-[18px] sm:text-[24px] md:text-[26px] xl:text-[26.5px] min-[1780px]:text-[32.5px] leading-[1.1] tracking-[0.08em] text-[#2f3b63] uppercase">
                Four Ways To Live Barolo
              </h2>
            </motion.div>
          </div>

          {villas.map((villa, index) => (
            <motion.div
              key={villa.name}
              className={`hidden min-[1025px]:block absolute z-20 ${villa.className}`}
              initial={{
                opacity: 0,
                y: 35,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{
                duration: 0.9,
                delay: 0.6 + index * 0.12,
                ease: [0.22, 1, 0.36, 1],
              }}>
              <div className="flex flex-col items-center">
                <a href={villa.href} className="villa-label">
                  {villa.name}
                </a>

                <div className={`w-px bg-[#e7e2d7] ${villa.lineHeight}`} />

                <div className="h-3 w-3 rounded-full bg-[#f4f1ea]" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      <VillaGallery />
    </section>
  );
}
