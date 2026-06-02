type Stay = {
  title: string;
  subtitle?: string;
  description: string;
  nights?: number;
  startMonth?: string;
  endMonth?: string;
  image: string;
};

const stays: Stay[] = [
  {
    title: 'Signature Stays',
    description:
      'Curated stays designed to help you experience Barolo at its fullest — without having to plan every detail. Each programme brings together wine, gastronomy, and the rhythm of the region into a seamless, thoughtfully crafted stay.',
    image: '/images/stays/signature-stays.png',
  },
  {
    title: 'Taste of Langhe',
    subtitle: 'A journey through the flavors of Piedmont.',
    description:
      'From wine tastings and local restaurants to cooking classes and vineyard tours, this stay immerses you in the culinary culture of the Langhe.',
    nights: 5,
    startMonth: 'January',
    endMonth: 'May',
    image: '/images/stays/taste-of-langhe.png',
  },
  {
    title: 'The Lux Retreat',
    subtitle: 'A short escape into the rhythm of Barolo.',
    description:
      'A three-night stay designed to slow down and reconnect, combining fine dining, vineyard exploration, and private dining in your villa.',
    nights: 3,
    startMonth: 'January',
    endMonth: 'April',
    image: '/images/stays/lux-retreat.png',
  },
  {
    title: 'Autumn Gems',
    subtitle: 'The most enchanting season in Barolo.',
    description:
      'Experience truffle season, autumn colors, and the depth of Barolo and Barbaresco through curated tastings and seasonal experiences.',
    nights: 5,
    startMonth: 'October',
    endMonth: 'November',
    image: '/images/stays/autumn-gems.png',
  },
  {
    title: 'Piemonte Escape',
    subtitle: 'A complete immersion in the region.',
    description:
      'An extended stay exploring wine, culture, and landscapes across Langhe, Monferrato, and Turin, with exclusive access to Scarpa winery.',
    nights: 7,
    startMonth: 'January',
    endMonth: 'May',
    image: '/images/stays/piemonte-escape.png',
  },
];

type StayCardProps = {
  stay: Stay;
  imageFirst?: boolean;
};

function StayCard({ stay, imageFirst = true }: StayCardProps) {
  return (
    <article
      className={`bg-white ${
        imageFirst ? 'border-b-[12px] border-[#C09A60]' : 'border-t-[12px] border-[#C09A60]'
      }`}>
      {imageFirst && (
        <img src={stay.image} alt={stay.title} className="h-auto w-full object-cover" />
      )}

      <div className="py-8 px-[1.6rem] text-center">
        <h3 className="font-serif text-[42px] text-[#2C3654] tracking-[0.05em]">{stay.title}</h3>

        {stay.subtitle && (
          <p className="mt-4 font-sans font-bold italic text-[21px] leading-[32px] text-[#2C3654]">
            {stay.subtitle}
          </p>
        )}

        <p className="mt-8 font-sans text-[21px] leading-[32px] text-[#2C3654]">
          {stay.description}
        </p>

        {stay.nights && (
          <p className="mt-8 font-sans font-bold text-[21px] leading-[32px] text-[#2C3654]">
            {stay.nights} nights · {stay.startMonth} – {stay.endMonth}
          </p>
        )}
      </div>

      {!imageFirst && (
        <img src={stay.image} alt={stay.title} className="h-auto w-full object-cover" />
      )}
    </article>
  );
}

export function SignatureStays() {
  return (
    <section className="bg-[#2C3654] pb-24">
      <div className="mx-auto w-full max-w-8xl px-0">
        {/* TOP HERO */}
        <div className="relative h-[100vh]">
          <img
            src="/images/stays/moment-left.png"
            alt="moment at scarpa villas"
            className="absolute left-0 top-0 h-full w-1/2 object-cover"
          />

          <img
            src="/images/stays/moment-right.png"
            alt="moment at scarpa villas"
            className="absolute right-0 top-0 h-full w-1/2 object-cover"
          />

          <div className="absolute inset-0 flex items-center justify-center">
            <h2 className="font-serif text-[70px] leading-[72px] uppercase tracking-[0.2em] text-white">
              Moments At Scarpa Villas
            </h2>
          </div>
        </div>

        {/* STAYS GRID */}
        <div id="stays" className="scroll-mt-[86px] bg-[#2C3654] w-full max-w-8xl pt-24 px-8">
          {/* TOP ROW */}
          <div className="grid grid-cols-3 gap-7">
            <article className="bg-white border-b-[12px] border-[#C09A60]">
              <img
                src={stays[0].image}
                alt={stays[0].title}
                className="h-auto w-full object-cover"
              />

              <div className="p-8 text-center">
                <h3 className="font-serif text-[42px] text-[#2C3654] tracking-[0.05em]">
                  {stays[0].title}
                </h3>

                <p className="mt-4 font-sans text-[21px] leading-[32px] text-[#2C3654]">
                  Curated stays designed to help you experience Barolo at its fullest — without
                  having <br /> to plan every detail.
                </p>

                <p className="mt-8 font-sans font-medium text-[21px] leading-[32px] text-[#2C3654]">
                  Each programme brings together wine, gastronomy, and the rhythm of the region into{' '}
                  <br />a seamless, thoughtfully crafted stay.
                </p>
              </div>
            </article>
            <StayCard stay={stays[1]} imageFirst={false} />
            <StayCard stay={stays[2]} imageFirst />
          </div>

          {/* BOTTOM ROW */}
          <div className="mt-8 grid grid-cols-2 gap-7">
            <StayCard stay={stays[3]} imageFirst />
            <StayCard stay={stays[4]} imageFirst />
          </div>
        </div>
      </div>
    </section>
  );
}
