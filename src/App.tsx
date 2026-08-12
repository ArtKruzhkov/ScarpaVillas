import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Navbar } from './sections/Navbar/Navbar';
import { Footer } from './sections/Footer/Footer';
import { HomePage } from './pages/HomePage/HomePage';
import { StoryPage } from './pages/StoryPage/StoryPage';
import { VillasPage } from './pages/VillasPage/VillasPage';
import { VillaPage } from './pages/VillaPage/VillaPage';
import { BorgoPage } from './pages/BorgoPage/BorgoPage';
import { OriginsPage } from './pages/OriginsPage/OriginsPage';
import { ScarpaWineryPage } from './pages/ScarpaWineryPage/ScarpaWineryPage';
import { PeoplePage } from './pages/PeoplePage/PeoplePage';

import './App.css';
import { PressPage } from './pages/PressPage/PressPage';
import { ExperiencesPage } from './pages/ExperiencesPage/ExperiencesPage';
import { StaysPage } from './pages/StaysPage/StaysPage';
import { DiscoverPage } from './pages/DiscoverPage/DiscoverPage';

export default function App() {
  return (
    <div className="min-h-dvh bg-white text-ink-900">
      <Navbar />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/:lang" element={<HomePage />} />

        <Route path="/villas" element={<VillasPage />} />
        <Route path="/:lang/villas" element={<VillasPage />} />

        <Route path="/villas/:villaId" element={<VillaPage />} />
        <Route path="/:lang/villas/:villaId" element={<VillaPage />} />

        <Route path="/borgo" element={<BorgoPage />} />
        <Route path="/:lang/borgo" element={<BorgoPage />} />

        <Route path="/experiences" element={<ExperiencesPage />} />
        <Route path="/:lang/experiences" element={<ExperiencesPage />} />

        <Route path="/story" element={<StoryPage />} />
        <Route path="/:lang/story" element={<StoryPage />} />

        <Route path="/story/origins" element={<OriginsPage />} />
        <Route path="/:lang/story/origins" element={<OriginsPage />} />

        <Route path="/story/scarpa-winery" element={<ScarpaWineryPage />} />
        <Route path="/:lang/story/scarpa-winery" element={<ScarpaWineryPage />} />

        <Route path="/story/people" element={<PeoplePage />} />
        <Route path="/:lang/story/people" element={<PeoplePage />} />

        <Route path="/story/press" element={<PressPage />} />
        <Route path="/:lang/story/press" element={<PressPage />} />

        <Route path="/stays" element={<StaysPage />} />
        <Route path="/:lang/stays" element={<StaysPage />} />

        <Route path="/discover" element={<DiscoverPage />} />
        <Route path="/:lang/discover" element={<DiscoverPage />} />
      </Routes>

      <Footer />
    </div>
  );
}
