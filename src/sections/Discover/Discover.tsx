import { Swiper, SwiperSlide } from 'swiper/react';
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
    <section id="discover" className="scroll-mt-[86px] overflow-hidden bg-white py-28">
      <div className="mx-auto px-0">
        {/* HEADER */}

        <div className="mx-auto text-center px-8">
          <h2 className="font-serif text-[64px] uppercase leading-[75px] tracking-[0.1em] text-[#2C3654]">
            Discover The Langhe
          </h2>

          <p className="mt-8 font-serif text-[42px] leading-[60px] text-[#2C3654]">
            Just minutes from the vineyards of Monvigliero, the Langhe unfolds through historic
            villages, panoramic viewpoints, and some of Italy’s most celebrated gastronomic
            destinations.
            <br />
            Each place offers a different way to experience the region — from wine and truffles
            <br />
            to landscapes and centuries-old towns.
          </p>
        </div>

        {/* SLIDER */}

        <div className="mt-[100px]">
          <Swiper
            slidesPerView={1.95}
            centeredSlides
            spaceBetween={189}
            grabCursor
            initialSlide={1}
            className="discover-swiper overflow-visible">
            {langheSlides.map((slide) => (
              <SwiperSlide key={slide.title}>
                <div className="text-center">
                  <img
                    src={slide.image}
                    alt={slide.title}
                    className="mx-auto h-[602px] w-full object-cover"
                  />

                  <h3 className="mt-4 font-serif text-[46px] leading-[80px] tracking-[0.05em] text-[#2C3654]">
                    {slide.title}
                  </h3>

                  <p className="mt-2 text-[20px] font-sans font-semibold leading-[32px] uppercase tracking-[0.1em] text-[#C09A60]">
                    {slide.subtitle}
                  </p>

                  <p className="mx-auto mt-2 text-[20px] font-sans leading-[32px] text-[#2C3654] px-12">
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
