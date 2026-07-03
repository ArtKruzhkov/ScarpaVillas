import React from 'react';

const sharedFeatures = [
  {
    text: 'Private spaces within\nthe Monvigliero\nvineyards',
    position: 'top',
  },
  {
    text: 'Access to the\npanoramic pool',
    position: 'bottom',
  },
  {
    text: 'Fully equipped\nkitchens and outdoor\nareas',
    position: 'top',
  },
  {
    text: 'Scarpa hospitality\nand curated\nexperiences',
    position: 'bottom',
  },
];

export function VillasShare() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-8xl 2xl:max-w-[1920px]">
        {/* TOP TEXT */}
        <div className="px-20 py-14 text-center">
          <h2 className="font-serif text-[30px] leading-[1.25] tracking-[-0.02rem] text-[#2C3654] md:text-[42px]">
            Each villa offers a different atmosphere — from spaciousand social to intimate and
            secluded — while sharing the same setting{' '}
            <span className="italic">in the vineyards of Monvigliero.</span>
          </h2>
        </div>

        {/* IMAGE BLOCK */}
        <div className="relative min-h-[375px] overflow-hidden">
          <img
            src={`${process.env.PUBLIC_URL}/images/villas_villasShare/villas.png`}
            alt="Scarpa Villas in Monvigliero vineyards"
            className="w-full h-auto"
          />

          {/* CONTENT */}
          <div className="absolute inset-0 z-10 flex flex-col justify-center max-w-[800px] pl-12 text-white">
            <div className="mb-20 bg-white py-2 text-center">
              <h3 className="font-sans text-[18px] font-bold uppercase leading-none tracking-[0.35em] text-[#2C3654]">
                What all villas share
              </h3>
            </div>

            <div className="relative h-[150px]">
              {/* LINE */}
              <div className="absolute left-0 right-0 top-1/2 h-[2px] -translate-y-1/2 bg-white" />

              {/* DOTS + TEXT */}
              <div className="relative flex h-full justify-between">
                {sharedFeatures.map((item, index) => (
                  <div key={index} className="relative flex w-[120px] justify-center">
                    <div
                      className={`absolute top-1/2 h-3 w-3 -translate-y-1/2 rounded-full bg-white ${index === 0 ? 'left-0' : index === sharedFeatures.length - 1 ? 'right-0' : 'left-1/2 -translate-x-1/2'}`}
                    />

                    <p
                      className={`absolute w-[152px] font-sans text-[14px] leading-[20px] ${index === 0 ? 'text-left left-0' : index === sharedFeatures.length - 1 ? 'text-right right-0' : 'text-center'} ${item.position === 'top' ? 'bottom-[100px]' : 'top-[100px]'} `}>
                      {item.text.split('\n').map((line) => (
                        <React.Fragment key={line}>
                          {line}
                          <br />
                        </React.Fragment>
                      ))}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
