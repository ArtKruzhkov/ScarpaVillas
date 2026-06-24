import { VillaGallery } from './VillaGallery';
import { useTranslation } from 'react-i18next';
import { AnimatePresence, motion } from 'framer-motion';
import { useState, useEffect } from 'react';
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

const villaMasks = {
  desktop: {
    TETTIMORA: { cx: 600, cy: 610, r: 180 },
    BRICCHI: { cx: 855, cy: 473, r: 150 },
    BOGLIONA: { cx: 1104, cy: 545, r: 160 },
    TETTINEIVE: { cx: 1392, cy: 674, r: 182 },
  },

  laptop: {
    TETTIMORA: { cx: 575, cy: 610, r: 200 },
    BRICCHI: { cx: 850, cy: 480, r: 150 },
    BOGLIONA: { cx: 1110, cy: 570, r: 160 },
    TETTINEIVE: { cx: 1415, cy: 674, r: 170 },
  },
};

export function Gallery() {
  const { t, i18n } = useTranslation();
  const [activeVilla, setActiveVilla] = useState<string | null>(null);
  // const activeVilla = 'TETTINEIVE';
  const [isLaptop, setIsLaptop] = useState(false);

  useEffect(() => {
    const update = () => {
      setIsLaptop(window.innerWidth <= 1442);
    };

    update();

    window.addEventListener('resize', update);

    return () => window.removeEventListener('resize', update);
  }, []);

  const currentMasks = isLaptop ? villaMasks.laptop : villaMasks.desktop;

  const activeMask =
    activeVilla === 'TETTIMORA'
      ? currentMasks.TETTIMORA
      : activeVilla === 'I BRICCHI'
        ? currentMasks.BRICCHI
        : activeVilla === 'LA BOGLIONA'
          ? currentMasks.BOGLIONA
          : activeVilla === 'TETTINEIVE'
            ? currentMasks.TETTINEIVE
            : null;

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
            <AnimatePresence>
              {activeVilla && (
                <motion.svg
                  className="absolute inset-0 w-full h-full pointer-events-none z-10"
                  viewBox="0 0 1920 860"
                  preserveAspectRatio="none"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.35 }}>
                  <defs>
                    <filter id="blurCircle">
                      <feGaussianBlur stdDeviation="18" />
                    </filter>
                    <mask id="villaMask">
                      <rect width="100%" height="100%" fill="white" />

                      {/* {activeVilla === 'TETTIMORA' && (
                        <circle cx="600" cy="610" r="180" fill="black" filter="url(#blurCircle)" />
                      )}

                      {activeVilla === 'I BRICCHI' && (
                        <circle cx="855" cy="473" r="140" fill="black" filter="url(#blurCircle)" />
                      )}

                      {activeVilla === 'LA BOGLIONA' && (
                        <circle cx="1104" cy="545" r="160" fill="black" filter="url(#blurCircle)" />
                      )}

                      {activeVilla === 'TETTINEIVE' && (
                        <circle cx="1392" cy="674" r="182" fill="black" filter="url(#blurCircle)" />
                      )} */}
                      {activeMask && (
                        <circle
                          cx={activeMask.cx}
                          cy={activeMask.cy}
                          r={activeMask.r}
                          fill="black"
                          filter="url(#blurCircle)"
                        />
                      )}
                    </mask>
                  </defs>

                  <rect width="100%" height="100%" fill="rgba(0,0,0,0.7)" mask="url(#villaMask)" />
                </motion.svg>
              )}
            </AnimatePresence>
          </motion.div>

          {/* TITLE */}
          {/* <div className="absolute left-1/2 top-8 sm:top-14 z-20 -translate-x-1/2 text-center w-full px-8 md:w-max md:px-0">
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
              <AnimatePresence mode="wait">
                <motion.div
                  key={`gallery-title-${i18n.language}`}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.3 }}>
                  <p className="font-serif font-medium text-[24px] sm:text-[30px] lg:text-[36px] xl:text-[39px] 2xl:text-[42px] leading-[28px] sm:leading-[1.1] tracking-[0.08em] text-[#2f3b63] uppercase">
                    {t('gallery.title1')}
                  </p>

                  <h2 className="sm:mt-2 font-serif font-medium text-[24px] sm:text-[30px] lg:text-[36px] xl:text-[39px] 2xl:text-[42px] leading-[28px] sm:leading-[1.1] tracking-[0.08em] text-[#2f3b63] uppercase">
                    {t('gallery.title2')}
                  </h2>
                </motion.div>
              </AnimatePresence>
            </motion.div>
          </div> */}
          {/* TITLE */}
          <motion.div
            className="absolute left-1/2 top-8 sm:top-14 z-20 -translate-x-1/2 text-center w-full px-8 md:w-max md:px-0"
            initial={{
              opacity: 0,
              filter: 'blur(5px)',
            }}
            whileInView={{
              opacity: 1,
              filter: 'blur(0px)',
            }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{
              duration: 1,
              delay: 0.3,
              ease: [0.22, 1, 0.36, 1],
            }}>
            <AnimatePresence mode="wait">
              {!activeVilla && (
                <motion.div
                  key={`gallery-title-wrapper-${i18n.language}`}
                  initial={{
                    opacity: 1,
                    y: 0,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  exit={{
                    opacity: 0,
                    y: -15,
                  }}
                  transition={{
                    duration: 0.55,
                    ease: [0.22, 1, 0.36, 1],
                  }}>
                  <p className="font-serif font-medium text-[24px] sm:text-[30px] lg:text-[36px] xl:text-[39px] 2xl:text-[42px] leading-[28px] sm:leading-[1.1] tracking-[0.08em] text-[#2f3b63] uppercase">
                    {t('gallery.title1')}
                  </p>

                  <h2 className="sm:mt-2 font-serif font-medium text-[24px] sm:text-[30px] lg:text-[36px] xl:text-[39px] 2xl:text-[42px] leading-[28px] sm:leading-[1.1] tracking-[0.08em] text-[#2f3b63] uppercase">
                    {t('gallery.title2')}
                  </h2>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>

          {villas.map((villa, index) => (
            // <motion.div
            //   key={villa.name}
            //   className={`hidden lg:block absolute z-20 ${villa.className}`}
            //   initial={{
            //     opacity: 0,
            //     y: 35,
            //   }}
            //   whileInView={{
            //     opacity: 1,
            //     y: 0,
            //   }}
            //   viewport={{ once: true, amount: 0.3 }}
            //   transition={{
            //     duration: 0.9,
            //     delay: 0.6 + index * 0.12,
            //     ease: [0.22, 1, 0.36, 1],
            //   }}>
            //   <div className="flex flex-col items-center">
            //     <a href={villa.href} className="villa-label">
            //       {villa.name}
            //     </a>

            //     <div className={`w-px bg-[#e7e2d7] ${villa.lineHeight}`} />

            //     <div className="h-3 w-3 rounded-full bg-[#f4f1ea]" />
            //   </div>
            // </motion.div>

            // <motion.div
            //   key={villa.name}
            //   className={`hidden lg:block absolute z-20 ${villa.className}`}
            //   animate={{
            //     opacity: activeVilla === null ? 1 : activeVilla === villa.name ? 1 : 0,
            //     scale: activeVilla === null ? 1 : activeVilla === villa.name ? 1 : 0.9,
            //     pointerEvents: activeVilla && activeVilla !== villa.name ? 'none' : 'auto',
            //   }}
            //   transition={{
            //     duration: 0.65,
            //     ease: [0.22, 1, 0.36, 1],
            //   }}>
            //   <div className="flex flex-col items-center">
            //     <motion.div
            //       style={{
            //         transformOrigin: 'center center',
            //         willChange: 'transform',
            //         backfaceVisibility: 'hidden',
            //       }}
            //       animate={{
            //         scale: activeVilla === villa.name ? 1.08 : 1,
            //       }}
            //       transition={{
            //         duration: 0.6,
            //         ease: [0.22, 1, 0.36, 1],
            //       }}>
            //       <a
            //         href={villa.href}
            //         className="villa-label"
            //         onMouseEnter={() => setActiveVilla(villa.name)}
            //         onMouseLeave={() => setActiveVilla(null)}>
            //         {villa.name}
            //       </a>
            //     </motion.div>

            //     <div className={`w-px bg-[#e7e2d7] ${villa.lineHeight}`} />

            //     <div className="h-3 w-3 rounded-full bg-[#f4f1ea]" />
            //   </div>
            // </motion.div>

            <motion.div
              key={villa.name}
              className={`hidden lg:block absolute z-20 ${villa.className}`}
              initial={{
                opacity: 0,
                filter: 'blur(4px)',
              }}
              whileInView={{
                opacity: 1,
                filter: 'blur(0px)',
              }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{
                duration: 0.9,
                delay: 0.6 + index * 0.12,
                ease: [0.22, 1, 0.36, 1],
              }}>
              <motion.div
                animate={{
                  opacity: activeVilla === null ? 1 : activeVilla === villa.name ? 1 : 0,
                  scale: activeVilla === null ? 1 : activeVilla === villa.name ? 1 : 0.9,
                }}
                transition={{
                  duration: 0.65,
                  ease: [0.22, 1, 0.36, 1],
                }}>
                <div className="flex flex-col items-center">
                  <motion.div
                    style={{
                      transformOrigin: 'center center',
                      willChange: 'transform',
                      backfaceVisibility: 'hidden',
                    }}
                    animate={{
                      scale: activeVilla === villa.name ? 1.08 : 1,
                    }}
                    transition={{
                      duration: 0.6,
                      ease: [0.22, 1, 0.36, 1],
                    }}>
                    <a
                      href={villa.href}
                      className="villa-label"
                      onMouseEnter={() => setActiveVilla(villa.name)}
                      onMouseLeave={() => setActiveVilla(null)}>
                      {villa.name}
                    </a>
                  </motion.div>

                  <div className={`w-px bg-[#e7e2d7] ${villa.lineHeight}`} />

                  <div className="h-3 w-3 rounded-full bg-[#f4f1ea]" />
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
      <VillaGallery />
    </section>
  );
}
