import { VillaGallery } from './VillaGallery';
import { useTranslation } from 'react-i18next';
import { AnimatePresence, motion } from 'framer-motion';
import './gallery.css';

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
  const { t, i18n } = useTranslation();

  return (
    <section id="villas" className="scroll-mt-[86px] relative overflow-hidden bg-[#f5f3ee]">
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
          <div className="absolute left-1/2 top-8 sm:top-14 z-20 -translate-x-1/2 text-center w-full px-8 md:w-max md:px-0">
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
              {/* <p className="font-serif font-medium text-[18px] sm:text-[24px] md:text-[26px] xl:text-[26.5px] min-[1780px]:text-[32.5px] leading-[1.1] tracking-[0.08em] text-[#2f3b63] uppercase">
                Four Villas
              </p>

              <h2 className="mt-1 sm:mt-2 font-serif font-medium text-[18px] sm:text-[24px] md:text-[26px] xl:text-[26.5px] min-[1780px]:text-[32.5px] leading-[1.1] tracking-[0.08em] text-[#2f3b63] uppercase">
                Four Ways To Live Barolo
              </h2> */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={`gallery-title-${i18n.language}`}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.3 }}>
                  <p className="font-serif font-medium text-[18px] sm:text-[30px] lg:text-[36px] xl:text-[39px] 2xl:text-[42px] leading-[1.1] tracking-[0.08em] text-[#2f3b63] uppercase">
                    {t('gallery.title1')}
                  </p>

                  <h2 className="mt-1 sm:mt-2 font-serif font-medium text-[18px] sm:text-[30px] lg:text-[36px] xl:text-[39px] 2xl:text-[42px] leading-[1.1] tracking-[0.08em] text-[#2f3b63] uppercase">
                    {t('gallery.title2')}
                  </h2>
                </motion.div>
              </AnimatePresence>
            </motion.div>
          </div>

          {villas.map((villa, index) => (
            <motion.div
              key={villa.name}
              className={`hidden lg:block absolute z-20 ${villa.className}`}
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
