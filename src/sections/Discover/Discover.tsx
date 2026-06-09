import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import { motion } from 'framer-motion';
import 'swiper/css';
import './discover.css';

export type LangheSlide = {
  title: string;
  subtitle: string;
  description: string;
  image: string;
};

const baseUrl = process.env.PUBLIC_URL;

const langheSlides: LangheSlide[] = [
  {
    title: 'Village & Museum',
    subtitle: 'A JOURNEY THROUGH BAROLO HISTORY',
    description:
      'Discover the heritage of the region through historic villages and cultural landmarks.',
    image: `${baseUrl}/images/discover/village-museum.png`,
  },
  {
    title: 'La Morra Belvedere',
    subtitle: 'THE MOST ICONIC PANORAMIC VIEW IN THE LANGHE',
    description:
      'Endless vineyards unfolding beneath you, where the landscape of Barolo reveals itself at a glance.',
    image: `${baseUrl}/images/discover/la-morra.png`,
  },
  {
    title: 'Alba & White Truffle Culture',
    subtitle: 'THE HOME OF WHITE TRUFFLES',
    description: 'Experience the culinary traditions that made Alba famous around the world.',
    image: `${baseUrl}/images/discover/truffle.png`,
  },
  // временные дубликаты
  {
    title: 'Village & Museum',
    subtitle: 'A JOURNEY THROUGH BAROLO HISTORY',
    description:
      'Discover the heritage of the region through historic villages and cultural landmarks.',
    image: `${baseUrl}/images/discover/village-museum.png`,
  },
  {
    title: 'La Morra Belvedere',
    subtitle: 'THE MOST ICONIC PANORAMIC VIEW IN THE LANGHE',
    description:
      'Endless vineyards unfolding beneath you, where the landscape of Barolo reveals itself at a glance.',
    image: `${baseUrl}/images/discover/la-morra.png`,
  },
  {
    title: 'Alba & White Truffle Culture',
    subtitle: 'THE HOME OF WHITE TRUFFLES',
    description: 'Experience the culinary traditions that made Alba famous around the world.',
    image: `${baseUrl}/images/discover/truffle.png`,
  },
];

export function DiscoverLanghe() {
  return (
    <section id="discover" className="scroll-mt-[86px] overflow-hidden bg-white py-16 xl:py-24">
      <div className="mx-auto px-0">
        {/* HEADER */}
        {/* <div className="mx-auto text-center px-8 flex flex-col items-center">
          <h2 className="font-serif uppercase tracking-[0.1em] text-[#2C3654] text-[28px] leading-[36px] sm:text-[38px] sm:leading-[46px] lg:text-[50px] lg:leading-[60px] xl:text-[52px] xl:leading-[65px]">
            Discover The Langhe
          </h2>

          <p className="discover-text">
            Just minutes from the vineyards of Monvigliero, the Langhe unfolds through historic
            villages, panoramic viewpoints, and some of Italy’s most celebrated gastronomic
            destinations.
            <br />
            Each place offers a different way to experience the region — from wine and truffles to
            landscapes and centuries-old towns.
          </p>
        </div> */}

        <motion.div
          className="mx-auto text-center px-8 flex flex-col items-center"
          initial={{
            opacity: 0,
            y: 50,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.3,
          }}
          transition={{
            duration: 1,
            ease: 'easeOut',
          }}>
          <h2 className="font-serif uppercase tracking-[0.1em] text-[#2C3654] text-[28px] leading-[36px] sm:text-[38px] sm:leading-[46px] lg:text-[50px] lg:leading-[60px] xl:text-[52px] xl:leading-[65px]">
            Discover The Langhe
          </h2>

          <p className="discover-text">
            Just minutes from the vineyards of Monvigliero, the Langhe unfolds through historic
            villages, panoramic viewpoints, and some of Italy’s most celebrated gastronomic
            destinations.
            <br />
            Each place offers a different way to experience the region — from wine and truffles to
            landscapes and centuries-old towns.
          </p>
        </motion.div>

        {/* SLIDER */}
        {/* <div className="mt-[30px] sm:mt-[50px] lg:mt-[80px]">
          <Swiper
            modules={[Autoplay]}
            slidesPerView={1}
            centeredSlides={false}
            spaceBetween={20}
            loop
            speed={1200}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            breakpoints={{
              1024: {
                slidesPerView: 1.95,
                centeredSlides: true,
                spaceBetween: 189,
              },
            }}
            grabCursor
            className="discover-swiper overflow-visible">
            {langheSlides.map((slide, index) => (
              <SwiperSlide key={`${slide.title}-${index}`}>
                <div className="text-center">
                  <img
                    src={slide.image}
                    alt={slide.title}
                    className="mx-auto w-full h-[520px] object-cover lg:h-[560px]"
                  />

                  <h3 className="mt-2 font-serif tracking-[0.05em] text-[#2C3654] text-[24px] leading-[32px] sm:text-[30px] sm:leading-[40px] lg:text-[36px] lg:leading-[50px] xl:text-[38px] xl:leading-[72px]">
                    {slide.title}
                  </h3>

                  <p className="font-sans font-semibold uppercase tracking-[0.1em] text-[#C09A60] text-[14px] leading-[22px] sm:text-[16px] sm:leading-[26px] xl:text-[20px] xl:leading-[32px]">
                    {slide.subtitle}
                  </p>

                  <p className="mx-auto lg:mt-4 font-sans text-[#2C3654] text-[15px] leading-[24px] sm:text-[17px] sm:leading-[28px] xl:px-24 xl:text-[21px] xl:leading-[32px]">
                    {slide.description}
                  </p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div> */}

        <motion.div
          className="mt-[30px] sm:mt-[50px] lg:mt-[80px]"
          initial={{
            opacity: 0,
            scale: 1.04,
          }}
          whileInView={{
            opacity: 1,
            scale: 1,
          }}
          viewport={{
            once: true,
            amount: 0.2,
          }}
          transition={{
            duration: 1.2,
            delay: 0.45,
            ease: 'easeOut',
          }}>
          <Swiper
            modules={[Autoplay]}
            slidesPerView={1}
            centeredSlides={false}
            spaceBetween={20}
            loop
            speed={1200}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            breakpoints={{
              1024: {
                slidesPerView: 1.95,
                centeredSlides: true,
                spaceBetween: 189,
              },
            }}
            grabCursor
            className="discover-swiper overflow-visible">
            {langheSlides.map((slide, index) => (
              <SwiperSlide key={`${slide.title}-${index}`}>
                <div className="text-center">
                  <img
                    src={slide.image}
                    alt={slide.title}
                    className="mx-auto w-full h-[520px] object-cover lg:h-[560px]"
                  />

                  <h3 className="mt-2 font-serif tracking-[0.05em] text-[#2C3654] text-[24px] leading-[32px] sm:text-[30px] sm:leading-[40px] lg:text-[36px] lg:leading-[50px] xl:text-[38px] xl:leading-[72px]">
                    {slide.title}
                  </h3>

                  <p className="font-sans font-semibold uppercase tracking-[0.1em] text-[#C09A60] text-[14px] leading-[22px] sm:text-[16px] sm:leading-[26px] xl:text-[20px] xl:leading-[32px]">
                    {slide.subtitle}
                  </p>

                  <p className="mx-auto lg:mt-4 font-sans text-[#2C3654] text-[15px] leading-[24px] sm:text-[17px] sm:leading-[28px] xl:px-24 xl:text-[21px] xl:leading-[32px]">
                    {slide.description}
                  </p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
      </div>
    </section>
  );
}
