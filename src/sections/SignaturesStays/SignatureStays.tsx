import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import { motion, Variants } from 'framer-motion';
import 'swiper/css';

type Stay = {
  title: string;
  subtitle?: string;
  description: string;
  nights?: number;
  startMonth?: string;
  endMonth?: string;
  image: string;
};

const baseUrl = process.env.PUBLIC_URL;

const stays: Stay[] = [
  {
    title: 'Signature Stays',
    description:
      'Curated stays designed to help you experience Barolo at its fullest — without having to plan every detail. Each programme brings together wine, gastronomy, and the rhythm of the region into a seamless, thoughtfully crafted stay.',
    image: `${baseUrl}/images/stays/signature-stays.png`,
  },
  {
    title: 'Taste of Langhe',
    subtitle: 'A journey through the flavors of Piedmont.',
    description:
      'From wine tastings and local restaurants to cooking classes and vineyard tours, this stay immerses you in the culinary culture of the Langhe.',
    nights: 5,
    startMonth: 'January',
    endMonth: 'May',
    image: `${baseUrl}/images/stays/taste-of-langhe.png`,
  },
  {
    title: 'The Lux Retreat',
    subtitle: 'A short escape into the rhythm of Barolo.',
    description:
      'A three-night stay designed to slow down and reconnect, combining fine dining, vineyard exploration, and private dining in your villa.',
    nights: 3,
    startMonth: 'January',
    endMonth: 'April',
    image: `${baseUrl}/images/stays/lux-retreat.png`,
  },
  {
    title: 'Autumn Gems',
    subtitle: 'The most enchanting season in Barolo.',
    description:
      'Experience truffle season, autumn colors, and the depth of Barolo and Barbaresco through curated tastings and seasonal experiences.',
    nights: 5,
    startMonth: 'October',
    endMonth: 'November',
    image: `${baseUrl}/images/stays/autumn-gems.png`,
  },
  {
    title: 'Piemonte Escape',
    subtitle: 'A complete immersion in the region.',
    description:
      'An extended stay exploring wine, culture, and landscapes across Langhe, Monferrato, and Turin, with exclusive access to Scarpa winery.',
    nights: 7,
    startMonth: 'January',
    endMonth: 'May',
    image: `${baseUrl}/images/stays/piemonte-escape.png`,
  },
];

const momentSlides = [
  `${baseUrl}/images/stays/moment-left.png`,
  `${baseUrl}/images/stays/moment-right.png`,
  `${baseUrl}/images/stays/moment-left.png`,
  `${baseUrl}/images/stays/moment-right.png`,
];

const cardsContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.18,
      delayChildren: 0.15,
    },
  },
};

const cardItem: Variants = {
  hidden: {
    opacity: 0,
    y: 50,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.9,
      ease: 'easeOut',
    },
  },
};

type StayCardProps = {
  stay: Stay;
  imageFirst?: boolean;
};

function StayCard({ stay, imageFirst = true }: StayCardProps) {
  return (
    <article
      className={`bg-white h-full ${
        imageFirst
          ? 'border-b-[13px] border-[#C09A60]'
          : 'border-t-[13px] border-[#C09A60] flex flex-col justify-between'
      }`}>
      {imageFirst && (
        <img
          src={stay.image}
          alt={stay.title}
          className="w-full object-cover h-[410px] md:h-[480px] min-[1025px]:h-auto min-[1025px]:object-contain xl:h-[432px] xl:object-cover"
        />
      )}

      <div className="p-4 sm:p-8 text-center">
        <h3 className="font-serif tracking-[0.05em] text-[#2C3654] text-[24px] leading-[32px] lg:text-[30px] lg:leading-[40px] xl:text-[34px] xl:leading-[42px]">
          {stay.title}
        </h3>

        {stay.subtitle && (
          <p className="mt-3 xl:mt-5 font-sans font-bold italic text-[15px] leading-[24px] lg:text-[18px] lg:leading-[28px] xl:text-[18px] xl:leading-[28px] text-[#2C3654]">
            {stay.subtitle}
          </p>
        )}

        <p className="mt-4 xl:mt-8 font-sans text-[15px] leading-[24px] lg:text-[18px] lg:leading-[28px] xl:text-[20.5px] xl:leading-[32px] text-[#2C3654]">
          {stay.description}
        </p>

        {stay.nights && (
          <p className="mt-4 xl:mt-8 font-sans font-bold text-[15px] leading-[24px] lg:text-[18px] lg:leading-[28px] xl:text-[18px] xl:leading-[28px] text-[#2C3654]">
            {stay.nights} nights · {stay.startMonth} – {stay.endMonth}
          </p>
        )}
      </div>

      {!imageFirst && (
        <img
          src={stay.image}
          alt={stay.title}
          className="w-full object-cover h-[410px] md:h-[480px] min-[1025px]:h-auto min-[1025px]:object-contain xl:h-[432px] xl:object-cover"
        />
      )}
    </article>
  );
}

export function SignatureStays() {
  return (
    <section className="bg-[#2C3654] pb-10 sm:pb-12 lg:pb-16 xl:pb-20">
      <div className="mx-auto w-full max-w-8xl px-0">
        {/* TOP HERO */}
        <div className="relative section-height overflow-hidden">
          <Swiper
            modules={[Autoplay]}
            slidesPerView={1}
            breakpoints={{
              1024: {
                slidesPerView: 2,
              },
            }}
            spaceBetween={0}
            loop
            speed={1200}
            allowTouchMove
            grabCursor
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            className="h-full w-full">
            {momentSlides.map((image, index) => (
              <SwiperSlide key={`${image}-${index}`} className="bg-transparent">
                <img
                  src={image}
                  alt="moment at scarpa villas"
                  className="h-full w-full object-cover block"
                />
              </SwiperSlide>
            ))}
          </Swiper>

          <div className="pointer-events-none absolute inset-0 z-10 flex items-center justify-center">
            <h2 className="font-serif text-center text-[20px] sm:leading-[22px] sm:text-[28px] sm:leading-[32px] md:text-[36px] md:leading-[42px] lg:text-[46px] lg:leading-[48px]  xl:text-[54px] xl:leading-[60px] 2xl:text-[70px] 2xl:leading-[72px] uppercase tracking-[0.2em] text-white">
              Moments At Scarpa Villas
            </h2>
          </div>
        </div>

        {/* STAYS GRID */}
        <div
          id="stays"
          className="scroll-mt-[6px] bg-[#2C3654] w-full max-w-8xl pt-10 sm:pt-12 lg:pt-16 xl:pt-20 px-8">
          {/* TOP ROW */}
          {/* <div className="grid grid-cols-1 min-[1025px]:grid-cols-3 gap-5 xl:gap-7">
            <article className="bg-white border-b-[13px] border-[#C09A60]">
              <img
                src={stays[0].image}
                alt={stays[0].title}
                className="w-full object-cover h-[410px] md:h-[480px] min-[1025px]:h-auto min-[1025px]:object-contain xl:h-[462px] xl:object-cover xl:object-[center_25%]"
              />

              <div className="p-4 sm:p-8 text-center">
                <h3 className="font-serif tracking-[0.05em] text-[#2C3654] text-[24px] leading-[32px] lg:text-[30px] lg:leading-[40px] xl:text-[34px] xl:leading-[42px]">
                  {stays[0].title}
                </h3>

                <p className="mt-2 xl:mt-5 font-sans text-[15px] leading-[24px] lg:text-[18px] lg:leading-[28px] xl:text-[20.5px] xl:leading-[32px] text-[#2C3654]">
                  Curated stays designed to help you experience Barolo at its fullest — without
                  having to plan every detail.
                </p>

                <p className="mt-4 xl:mt-8 font-sans font-medium text-[15px] min-[1440px]:text-[20.5px] leading-[32px] text-[#2C3654]">
                  Each programme brings together wine, gastronomy, and the rhythm of the region into
                  a seamless, thoughtfully crafted stay.
                </p>
              </div>
            </article>
            <StayCard stay={stays[1]} imageFirst={false} />
            <StayCard stay={stays[2]} imageFirst />
          </div> */}

          <motion.div
            className="grid grid-cols-1 min-[1025px]:grid-cols-3 gap-5 xl:gap-7"
            variants={cardsContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.15,
            }}>
            {/* <article className="bg-white border-b-[13px] border-[#C09A60]">
              <img
                src={stays[0].image}
                alt={stays[0].title}
                className="w-full object-cover h-[410px] md:h-[480px] min-[1025px]:h-auto min-[1025px]:object-contain xl:h-[462px] xl:object-cover xl:object-[center_25%]"
              />

              <div className="p-4 sm:p-8 text-center">
                <h3 className="font-serif tracking-[0.05em] text-[#2C3654] text-[24px] leading-[32px] lg:text-[30px] lg:leading-[40px] xl:text-[34px] xl:leading-[42px]">
                  {stays[0].title}
                </h3>

                <p className="mt-2 xl:mt-5 font-sans text-[15px] leading-[24px] lg:text-[18px] lg:leading-[28px] xl:text-[20.5px] xl:leading-[32px] text-[#2C3654]">
                  Curated stays designed to help you experience Barolo at its fullest — without
                  having to plan every detail.
                </p>

                <p className="mt-4 xl:mt-8 font-sans font-medium text-[15px] min-[1440px]:text-[20.5px] leading-[32px] text-[#2C3654]">
                  Each programme brings together wine, gastronomy, and the rhythm of the region into
                  a seamless, thoughtfully crafted stay.
                </p>
              </div>
            </article>
             */}

            <motion.article
              variants={cardItem}
              className="bg-white border-b-[13px] border-[#C09A60]">
              <img
                src={stays[0].image}
                alt={stays[0].title}
                className="w-full object-cover h-[410px] md:h-[480px] min-[1025px]:h-auto min-[1025px]:object-contain xl:h-[432px] xl:object-cover xl:object-[center_25%]"
              />

              <div className="p-4 sm:p-8 text-center">
                <h3 className="font-serif tracking-[0.05em] text-[#2C3654] text-[24px] leading-[32px] lg:text-[30px] lg:leading-[40px] xl:text-[34px] xl:leading-[42px]">
                  {stays[0].title}
                </h3>

                <p className="mt-2 xl:mt-4 font-sans text-[15px] leading-[24px] lg:text-[18px] lg:leading-[28px] xl:text-[20.5px] xl:leading-[32px] text-[#2C3654] xl:px-4">
                  Curated stays designed to help you experience Barolo at its fullest - without
                  having to plan every detail.
                </p>

                <p className="mt-4 xl:mt-7 font-sans font-medium text-[15px] min-[1440px]:text-[20.5px] leading-[32px] text-[#2C3654] xl:px-4">
                  Each programme brings together wine, gastronomy, and the rhythm of the region into
                  a seamless, thoughtfully crafted stay.
                </p>
              </div>
            </motion.article>
            {/* <StayCard stay={stays[1]} imageFirst={false} /> */}
            <motion.div variants={cardItem}>
              <StayCard stay={stays[1]} imageFirst={false} />
            </motion.div>

            {/* <StayCard stay={stays[2]} imageFirst /> */}

            <motion.div variants={cardItem}>
              <StayCard stay={stays[2]} imageFirst />
            </motion.div>
          </motion.div>

          {/* BOTTOM ROW */}
          {/* <div className="mt-5 xl:mt-8 grid grid-cols-1 min-[1025px]:grid-cols-2 gap-5 xl:gap-7">
            {stays.slice(3, 5).map((stay) => (
              <article key={stay.title} className="border-b-[13px] border-[#C09A60] bg-white">
                <img
                  src={stay.image}
                  alt={stay.title}
                  className="w-full h-auto object-contain xl:h-[468px] xl:object-cover"
                />

                <div className="p-4 sm:p-8 text-center">
                  <h3 className="font-serif tracking-[0.05em] text-[#2C3654] text-[24px] leading-[32px] lg:text-[30px] lg:leading-[40px] xl:text-[34px] xl:leading-[42px]">
                    {stay.title}
                  </h3>

                  {stay.subtitle && (
                    <p className="mt-3 font-sans font-bold italic text-[15px] leading-[24px] lg:text-[18px] lg:leading-[28px] xl:text-[18px] xl:leading-[28px] text-[#2C3654]">
                      {stay.subtitle}
                    </p>
                  )}

                  <p className="mt-4 xl:mt-8 font-sans text-[15px] leading-[24px] lg:text-[18px] lg:leading-[28px] xl:text-[20.5px] xl:leading-[32px] text-[#2C3654]">
                    {stay.description}
                  </p>

                  {stay.nights && (
                    <p className="mt-4 xl:mt-8 font-sans font-bold text-[15px] leading-[24px] lg:text-[18px] lg:leading-[28px] xl:text-[18px] xl:leading-[28px] text-[#2C3654]">
                      {stay.nights} nights · {stay.startMonth} – {stay.endMonth}
                    </p>
                  )}
                </div>
              </article>
            ))}
          </div> */}

          <motion.div
            className="mt-5 xl:mt-8 grid grid-cols-1 min-[1025px]:grid-cols-2 gap-5 xl:gap-7"
            variants={cardsContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.15,
            }}>
            {stays.slice(3, 5).map((stay) => (
              <motion.article
                key={stay.title}
                variants={cardItem}
                className="border-b-[13px] border-[#C09A60] bg-white">
                <img
                  src={stay.image}
                  alt={stay.title}
                  className="w-full h-auto object-contain xl:h-[468px] xl:object-cover"
                />
                <div className="p-4 sm:p-8 text-center">
                  <h3 className="font-serif tracking-[0.05em] text-[#2C3654] text-[24px] leading-[32px] lg:text-[30px] lg:leading-[40px] xl:text-[34px] xl:leading-[42px]">
                    {stay.title}
                  </h3>

                  {stay.subtitle && (
                    <p className="mt-3 font-sans font-bold italic text-[15px] leading-[24px] lg:text-[18px] lg:leading-[28px] xl:text-[18px] xl:leading-[28px] text-[#2C3654]">
                      {stay.subtitle}
                    </p>
                  )}

                  <p className="mt-4 xl:mt-8 font-sans text-[15px] leading-[24px] lg:text-[18px] lg:leading-[28px] xl:text-[20.5px] xl:leading-[32px] text-[#2C3654]">
                    {stay.description}
                  </p>

                  {stay.nights && (
                    <p className="mt-4 xl:mt-8 font-sans font-bold text-[15px] leading-[24px] lg:text-[18px] lg:leading-[28px] xl:text-[18px] xl:leading-[28px] text-[#2C3654]">
                      {stay.nights} nights · {stay.startMonth} – {stay.endMonth}
                    </p>
                  )}
                </div>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
