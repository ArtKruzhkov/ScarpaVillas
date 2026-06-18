import { useEffect } from 'react';
import { StoryChapters } from '../../sections/StoryChapters/StoryChapters';
import { StoryHero } from '../../sections/StoryHero/StoryHero';
import { StoryVillasCTA } from '../../sections/StoryVillasCTA/StoryVillasCTA';

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
