import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
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
];

export function DiscoverLanghe() {
  return (
    <section id="discover" className="scroll-mt-[86px] overflow-hidden bg-white py-16 xl:py-24">
      <div className="mx-auto px-0">
        {/* HEADER */}

        <div className="mx-auto text-center px-8">
          <h2 className="font-serif uppercase tracking-[0.1em] text-[#2C3654] text-[28px] leading-[36px] sm:text-[38px] sm:leading-[46px] lg:text-[50px] lg:leading-[60px] xl:text-[64px] xl:leading-[75px]">
            Discover The Langhe
          </h2>

          <p className="mt-4 lg:mt-6 xl:mt-8 font-serif text-[#2C3654] text-[18px] leading-[28px] sm:text-[24px] sm:leading-[36px] lg:text-[32px] lg:leading-[46px] xl:text-[42px] xl:leading-[60px]">
            Just minutes from the vineyards of Monvigliero, the Langhe unfolds through historic
            villages, panoramic viewpoints, and some of Italy’s most celebrated gastronomic
            destinations.
            <br />
            Each place offers a different way to experience the region — from wine and truffles to
            landscapes and centuries-old towns.
          </p>
        </div>

        {/* SLIDER */}
        <div className="mt-[30px] sm:mt-[50px] lg:mt-[80px] xl:mt-[100px]">
          {/* <Swiper
            slidesPerView={1.95}
            centeredSlides
            spaceBetween={189}
            grabCursor
            initialSlide={1}
            className="discover-swiper overflow-visible"> */}
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
                loop: false,
              },
            }}
            grabCursor
            className="discover-swiper overflow-visible">
            {langheSlides.map((slide) => (
              <SwiperSlide key={slide.title}>
                <div className="text-center">
                  <img
                    src={slide.image}
                    alt={slide.title}
                    className="mx-auto w-full h-[520px] object-cover lg:h-[602px]"
                  />

                  <h3 className="mt-2 font-serif tracking-[0.05em] text-[#2C3654] text-[24px] leading-[32px] sm:text-[30px] sm:leading-[40px] lg:text-[36px] lg:leading-[50px] xl:text-[42px] xl:leading-[80px]">
                    {slide.title}
                  </h3>

                  <p className="font-sans font-semibold uppercase tracking-[0.1em] text-[#C09A60] text-[14px] leading-[22px] sm:text-[16px] sm:leading-[26px] xl:text-[20px] xl:leading-[32px]">
                    {slide.subtitle}
                  </p>

                  <p className="mx-auto lg:mt-2 font-sans text-[#2C3654] text-[15px] leading-[24px] sm:text-[17px] sm:leading-[28px] xl:px-12 xl:text-[21px] xl:leading-[32px]">
                    {slide.description}
                  </p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
