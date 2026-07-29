import { useEffect } from 'react';
import { BorgoAbout } from '../../sections/BorgoPageSections/BorgoAbout/BorgoAbout';
import { BorgoEstate } from '../../sections/BorgoPageSections/BorgoEstate/BorgoEstate';
import { BorgoHero } from '../../sections/BorgoPageSections/BorgoHero/BorgoHero';
import { BorgoMoments } from '../../sections/BorgoPageSections/BorgoMoments/BorgoMoments';

export function BorgoPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main>
      <BorgoHero />
      <BorgoEstate />
      <BorgoAbout />
      <BorgoMoments />
    </main>
  );
}
