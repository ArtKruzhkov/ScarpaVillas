import { useEffect } from 'react';
import { VillasHero } from '../../sections/VillasPageSections/VillasHero/VillasHero';
import { VillasShare } from '../../sections/VillasPageSections/VillasShare/VillasShare';
import { VillasAdviceCTA } from '../../sections/VillasPageSections/VillasAdviceCTA/VillasAdviceCTA';
import { VillasPlanStayCTA } from '../../sections/VillasPageSections/VillasPlanStay/VillasPlanStay';
import { VillasGrid } from '../../sections/VillasPageSections/VillasGrid/VillasGrid';

export function VillasPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <main className="mx-auto max-w-8xl 2xl:max-w-[1920px]">
        <VillasHero />
        <VillasShare />
        <VillasGrid />
        <VillasAdviceCTA />
        <VillasPlanStayCTA />
      </main>
    </>
  );
}
