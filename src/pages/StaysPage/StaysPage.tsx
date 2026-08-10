import { useEffect } from 'react';
import { ContactUs } from '../../components/ui/ContactUs';
import { StaysHero } from '../../sections/StaysPageSections/StaysHero/StaysHero';

export function StaysPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <main className="mx-auto max-w-8xl 2xl:max-w-[1920px]">
        <StaysHero />
      </main>

      <ContactUs phone="34620165833" className="fixed bottom-4 right-4 z-50" />
    </>
  );
}
