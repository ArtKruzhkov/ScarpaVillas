import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Navbar } from './sections/Navbar/Navbar';
import { Footer } from './sections/Footer/Footer';
import { HomePage } from './pages/HomePage/HomePage';
import { StoryPage } from './pages/StoryPage/StoryPage';
import { VillasPage } from './pages/VillasPage/VillasPage';
import { VillaPage } from './pages/VillaPage/VillaPage';
import { BorgoPage } from './pages/BorgoPage/BorgoPage';

import './App.css';

export default function App() {
  return (
    <div className="min-h-dvh bg-white text-ink-900">
      <Navbar />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/:lang" element={<HomePage />} />

        <Route path="/story" element={<StoryPage />} />
        <Route path="/:lang/story" element={<StoryPage />} />

        <Route path="/villas" element={<VillasPage />} />
        <Route path="/:lang/villas" element={<VillasPage />} />

        <Route path="/villas/:villaId" element={<VillaPage />} />
        <Route path="/:lang/villas/:villaId" element={<VillaPage />} />

        <Route path="/borgo" element={<BorgoPage />} />
        <Route path="/:lang/borgo" element={<BorgoPage />} />
      </Routes>

      <Footer />
    </div>
  );
}
