import React from "react";
import { Routes, Route } from "react-router-dom";

import HomePage from "./pages/HomePage";
import TechnikaPage from "./pages/TechnikaPage";
import CenyPage from "./pages/CenyPage";
import GalleryPage from "./pages/GalleryPage";
import { DrukSciennyKrakow } from "./components/DrukSciennyKrakow/DrukSciennyKrakow";

const AppLazy = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/technika" element={<TechnikaPage />} />
      <Route path="/ceny" element={<CenyPage />} />
      <Route path="/gallery" element={<GalleryPage />} />
      <Route path="/druk-scienny-krakow" element={<DrukSciennyKrakow />} />
    </Routes>
  );
};

export default AppLazy;
