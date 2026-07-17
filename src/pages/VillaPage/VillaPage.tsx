import { OtherVillas } from '../../sections/VillaPageSections/OtherVillas/OtherVillas';
import { VillaAmenities } from '../../sections/VillaPageSections/VillaAmenities/VillaAmenities';
import { VillaBookingCTA } from '../../sections/VillaPageSections/VillaBookingCTA/VillaBookingCTA';
import { VillaFeatures } from '../../sections/VillaPageSections/VillaFeatures/VillaFeatures';
import { VillaHero } from '../../sections/VillaPageSections/VillaHero/VillaHero';
import { VillaOverview } from '../../sections/VillaPageSections/VillaOverview/VillaOverview';

export function VillaPage() {
  return (
    <>
      <main className="mx-auto max-w-8xl 2xl:max-w-[1920px]">
        <VillaHero />
        <VillaOverview />
        <VillaFeatures />
        <VillaAmenities />
        <VillaBookingCTA />
        <OtherVillas />
      </main>
    </>
  );
}
