export function PlanStay() {
  return (
    <section id="plan" className="relative h-[1210px] w-full overflow-hidden">
      {/* IMAGE */}
      <img
        src="images/plan/plan-stay.png"
        alt="Scarpa Villas at night"
        className="absolute inset-0 h-full w-full object-cover"
      />

      {/* DARK OVERLAY */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/10 to-black/80" />

      {/* CONTENT */}
      <div className="relative z-10 flex h-full flex-col items-center justify-end px-6 pb-36 text-center text-white">
        <h2 className="font-serif text-[72px] uppercase leading-[80px] tracking-[0.08em]">
          Your Place In Barolo Awaits
        </h2>

        <p className="mt-12 max-w-[920px] font-serif text-[44px] leading-[56px]">
          Plan your stay <span className="italic">at Scarpa Villas</span>
          <br />
          and experience the Langhe in your own way.
        </p>

        <a
          href={process.env.PUBLIC_URL || '/'}
          className="mt-[11.5rem] inline-flex border-[3px] border-white px-[131px] py-[12px] font-sans text-[32px] font-semibold uppercase leading-[60px] tracking-[0.1em] text-white transition-all duration-300 hover:border-white hover:bg-white hover:text-[#2C3654]">
          Plan Your Stay
        </a>
      </div>
    </section>
  );
}
