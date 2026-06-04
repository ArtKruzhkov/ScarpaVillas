import React from 'react';
import { Container } from '../../components/layout/Container';

export function Experience() {
  return (
    <section className="bg-white py-20">
      <Container>
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-[504px_minmax(0,1fr)] lg:items-start px-6">
          {/* LEFT CONTENT */}
          <div className="max-w-[504px]">
            <h2 className="font-serif text-[34px] leading-[70px] tracking-[0.05em] text-[#2C3654]">
              Where Time Becomes
              <br />
              Part of the Experience
            </h2>

            <div className="mt-4 h-[2px] w-[210px] bg-[#6e7a9b]" />

            <div className="font-sans mt-11 space-y-11 text-[18px] leading-[1.8] text-[#2C3654]">
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
          <div className="relative overflow-hidden">
            <img
              src={`${process.env.PUBLIC_URL}/images/experience/experience-img.png`}
              alt="Luxury wine villa interior"
              className="h-full min-h-[620px] w-full object-cover"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
