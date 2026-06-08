import React from 'react';
import { Container } from '../../components/layout/Container';

export function Experience() {
  return (
    <section className="bg-white py-12 lg:py-20 xl:py-[6.5rem]">
      <Container>
        <div className="grid grid-cols-1 lg:gap-10 lg:grid-cols-[450px_minmax(0,1fr)] xl:grid-cols-[574px_minmax(0,1fr)] px-6">
          {/* LEFT CONTENT */}
          <div className="lg:max-w-[450px] xl:max-w-[574px] flex flex-col justify-between">
            {/* <h2 className="font-serif text-[28px] leading-[28px] xl:text-[42px] xl:leading-[36px] text-[#2C3654]">
              <span className="block">Where Time Becomes</span>
              <span className="block mt-7">Part of the Experience</span>
            </h2>

            <div className="mt-6 h-[2px] w-[210px] bg-[#6e7a9b]" /> */}

            <div>
              <h2 className="font-serif text-[28px] leading-[28px] xl:text-[42px] xl:leading-[36px] text-[#2C3654]">
                <span className="block">Where Time Becomes</span>
                <span className="block mt-8">Part of the Experience</span>
              </h2>

              <div className="mt-8 h-[2px] w-[210px] bg-[#6e7a9b]" />
            </div>

            <div className="font-sans mt-7 space-y-7 xl:mt-10 xl:space-y-10 text-[20px] leading-[1.8] text-[#2C3654]">
              <p>
                For over a century, Scarpa has been guided by a simple belief — that{' '}
                <strong>great wine is shaped by time.</strong>
              </p>

              <p>
                <strong>Scarpa Villas</strong> were created as a natural extension of this
                philosophy - a place where the culture of wine can be lived, not just tasted — by
                those who choose to stay here.
              </p>

              <p>
                <strong>Founded in 1900</strong>, the winery has built its legacy on patience,
                respect for the land, and a deep connection to Piedmont’s terroirs.
              </p>

              <p>
                Here, <strong>among the vineyards of Monvigliero</strong>, time slows, deepens, and
                becomes part of the experience itself.
              </p>
            </div>
          </div>

          {/* IMAGE */}
          <div className="relative overflow-hidden mt-6 lg:mt-0">
            <img
              src={`${process.env.PUBLIC_URL}/images/experience/experience-img.png`}
              alt="Luxury wine villa interior"
              className="h-full min-h-[380px] lg:min-h-[620px] w-full object-cover"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
