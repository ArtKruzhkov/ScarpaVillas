import { useEffect } from 'react';
import { VillasHero } from '../../sections/VillasPageSections/VillasHero/VillasHero';

export function VillasPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <main className="mx-auto max-w-8xl 2xl:max-w-[1920px]">
        <VillasHero />
      </main>
    </>
  );
}
