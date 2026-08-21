import { OtherVillas } from '../../sections/VillaPageSections/OtherVillas/OtherVillas';
import { VillaAmenities } from '../../sections/VillaPageSections/VillaAmenities/VillaAmenities';
import { VillaBookingCTA } from '../../sections/VillaPageSections/VillaBookingCTA/VillaBookingCTA';
import { VillaFeatures } from '../../sections/VillaPageSections/VillaFeatures/VillaFeatures';
import { VillaHero } from '../../sections/VillaPageSections/VillaHero/VillaHero';
import { VillaOverview } from '../../sections/VillaPageSections/VillaOverview/VillaOverview';
import { smoothScrollToTop } from '../../utils/smoothScrollToTop/smoothScrollToTop';

import { villas } from '../../data/villas';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { ContactUs } from '../../components/ui/ContactUs';

export function VillaPage() {
  const { villaId } = useParams();

  // useEffect(() => {
  //   window.scrollTo({
  //     top: 0,
  //     behavior: 'smooth',
  //   });
  // }, [villaId]);
  useEffect(() => {
    smoothScrollToTop(1500);
  }, [villaId]);

  const villa = villas.find((villa) => villa.id === villaId);

  if (!villa) {
    return <div>Villa not found</div>;
  }

  return (
    <>
      <main key={villa.id} className="mx-auto max-w-8xl 2xl:max-w-[1920px]">
        <VillaHero hero={villa.hero} />
        <VillaOverview overview={villa.overview} />
        <VillaFeatures features={villa.features} />
        <VillaAmenities amenities={villa.amenities} />
        <VillaBookingCTA bookingCTA={villa.bookingCTA} />
        <OtherVillas currentVillaId={villa.id} />
      </main>

      <ContactUs phone="34620165833" className="fixed bottom-4 right-4 z-50" />
    </>
  );
}
