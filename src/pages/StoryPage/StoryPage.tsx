import { useEffect } from 'react';
import { StoryChapters } from '../../sections/StoryPageSections/StoryChapters/StoryChapters';
import { StoryHero } from '../../sections/StoryPageSections/StoryHero/StoryHero';
import { StoryVillasCTA } from '../../sections/StoryPageSections/StoryVillasCTA/StoryVillasCTA';

export function StoryPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <main className="mx-auto max-w-8xl 2xl:max-w-[1920px]">
        <StoryHero />
        <StoryChapters />
        <StoryVillasCTA />
      </main>
    </>
  );
}
