import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import './scarpaLeadership.css';

const baseUrl = process.env.PUBLIC_URL;

export function ScarpaLeadership() {
  const { t, i18n } = useTranslation();

  return (
    <section className="bg-white">
      <div className="mx-auto max-w-8xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 overflow-hidden">
          {/* OWNER */}
          <div className="bg-white p-4 sm:p-7 lg:p-[40px] h-full scarpaLeadership_image-height">
            <motion.article
              key={`owner-${i18n.language}`}
              initial={{
                opacity: 0,
                x: -30,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={{
                once: true,
                amount: 0.3,
              }}
              transition={{
                duration: 1,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="relative overflow-hidden h-full">
              {/* <motion.img
                src={`${baseUrl}/images/scarpaLeadership/owner_photo.png`}
                alt={t('storyLeadership.owner.name')}
                className="absolute inset-0 h-full w-full object-cover object-center"
                initial={{
                  scale: 1.08,
                }}
                whileInView={{
                  scale: 1,
                }}
                viewport={{
                  once: true,
                  amount: 0.3,
                }}
                transition={{
                  duration: 1.8,
                  ease: [0.22, 1, 0.36, 1],
                }}
              /> */}
              <motion.picture
                initial={{
                  scale: 1.08,
                }}
                whileInView={{
                  scale: 1,
                }}
                viewport={{
                  once: true,
                  amount: 0.3,
                }}
                transition={{
                  duration: 1.8,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="absolute inset-0">
                <source
                  media="(max-width: 639px)"
                  srcSet={`${baseUrl}/images/scarpaLeadership/owner_photo_mobile.png`}
                />

                <img
                  src={`${baseUrl}/images/scarpaLeadership/owner_photo.png`}
                  alt={t('storyLeadership.owner.name')}
                  className="h-full w-full object-cover object-center"
                />
              </motion.picture>

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/5 to-transparent lg:hidden" />

              {/* Content */}
              <div className="absolute inset-x-0 bottom-0 z-10 px-6 pb-8 sm:px-9 sm:pb-10 lg:bottom-auto lg:left-auto lg:right-[3%] 2xl:right-[5%] lg:top-[24%] lg:w-[190px] 2xl:w-[214px] lg:px-0 lg:pb-0">
                <div className="font-serif text-[60px] lg:text-[120px] leading-[0.2] text-white">
                  “
                </div>

                <p className="mt-1 lg:mt-4 font-sans text-[14px] sm:text-[16px] lg:text-[18px] 2xl:text-[20px] leading-[1.4] lg:leading-[25px] 2xl:leading-[28px] text-white">
                  {t('storyLeadership.owner.quote')}
                </p>

                <div className="mt-4 lg:mt-8 w-full lg:max-w-[154px]">
                  <h3 className="font-sans text-[14px] sm:text-[18px] lg:text-[20px] 2xl:text-[21px] leading-[1.25] lg:leading-[27px] 2xl:leading-[28px] font-bold uppercase tracking-[0.22em] text-white">
                    {t('storyLeadership.owner.name')}
                  </h3>

                  <p className="mt-2 font-sans text-[12px] sm:text-[13px] lg:text-[16px] lg:leading-[24px] tracking-[0.08em] text-white">
                    {t('storyLeadership.owner.role')}
                  </p>
                </div>
              </div>
            </motion.article>
          </div>

          {/* CEO */}
          <motion.article
            key={`ceo-${i18n.language}`}
            initial={{
              opacity: 0,
              x: 30,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
              amount: 0.3,
            }}
            transition={{
              duration: 1,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="relative overflow-hidden scarpaLeadership_image-height">
            <motion.img
              src={`${baseUrl}/images/scarpaLeadership/CEO_photo.png`}
              alt={t('storyLeadership.ceo.name')}
              className="absolute inset-0 h-full w-full object-cover object-[62%_center] sm:object-center"
              initial={{
                scale: 1.08,
              }}
              whileInView={{
                scale: 1,
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
            <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/5 to-transparent lg:hidden" />

            {/* Content */}
            <div className="absolute inset-x-0 bottom-0 z-10 px-6 pb-8 sm:px-9 sm:pb-10 lg:bottom-auto lg:left-[3%] 2xl:left-[5%] lg:top-[13%] lg:w-[177px] 2xl:w-[197px] lg:px-0 lg:pb-0">
              <div className="font-serif text-[60px] lg:text-[120px] leading-[0.2] text-white">
                “
              </div>

              <p className="mt-1 lg:mt-4 font-sans text-white text-[14px] sm:text-[16px] lg:text-[18px] 2xl:text-[20px] leading-[1.4] lg:leading-[25px] 2xl:leading-[28px]">
                {t('storyLeadership.ceo.quote')}
              </p>

              <div className="mt-4 lg:mt-8 w-full lg:max-w-[158px]">
                <h3 className="font-sans font-bold text-[14px] sm:text-[18px] lg:text-[20px] 2xl:text-[21px] leading-[1.25] lg:leading-[27px] 2xl:leading-[28px] uppercase tracking-[0.22em] text-white">
                  {t('storyLeadership.ceo.name')}
                </h3>

                <p className="mt-2 font-sans text-[12px] sm:text-[13px] lg:text-[16px] lg:leading-[24px] tracking-[0.08em] text-white">
                  {t('storyLeadership.ceo.role')}
                </p>
              </div>
            </div>
          </motion.article>
        </div>
      </div>
    </section>
  );
}
