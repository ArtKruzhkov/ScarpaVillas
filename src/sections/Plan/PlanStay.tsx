import './planstay.css';

export function PlanStay() {
  return (
    <section id="plan" className="relative section-height w-full overflow-hidden">
      {/* IMAGE */}
      <img
        src={`${process.env.PUBLIC_URL}/images/plan/plan-stay.png`}
        alt="Scarpa Villas at night"
        className="absolute inset-0 h-full w-full object-cover object-[center_5%]"
      />

      {/* DARK OVERLAY */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/10 to-black/80" />

      {/* CONTENT */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center lg:justify-end px-4 sm:px-6 pb-10 md:pb-14 xl:pb-24 text-center text-white">
        <h2 className="font-serif uppercase tracking-[0.08em] text-[28px] leading-[36px] sm:text-[40px] sm:leading-[48px] lg:text-[56px] lg:leading-[64px] xl:text-[72px] xl:leading-[80px]">
          Your Place In Barolo Awaits
        </h2>

        <p className="mt-4 lg:mt-6 xl:mt-10 max-w-[920px] font-serif text-[18px] leading-[28px] sm:text-[24px] sm:leading-[34px] lg:text-[32px] lg:leading-[44px] xl:text-[44px] xl:leading-[56px]">
          Plan your stay <span className="italic">at Scarpa Villas </span>
          <br className="hidden lg:block" />
          and experience the Langhe in your own way.
        </p>

        <a href={process.env.PUBLIC_URL || '/'} className="plan-stay-btn">
          Plan Your Stay
        </a>
      </div>
    </section>
  );
}
