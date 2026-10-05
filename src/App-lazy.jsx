import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import "./App.css";
import { Header } from "./components/Header/Header";
import HomePage from "./pages/HomePage";
import TechnikaPage from "./pages/TechnikaPage";
import CenyPage from "./pages/CenyPage";
import { DrukSciennyKrakow } from "./components/DrukSciennyKrakow/DrukSciennyKrakow";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";
import GalleryV2Page from "./pages/GalleryV2Page";

const AppLazy = () => {
  return (
    <>
      <Header />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/home" element={<Navigate to="/" replace />} />
        <Route path="/technika" element={<TechnikaPage />} />
        <Route path="/ceny" element={<CenyPage />} />
        <Route path="/gallery" element={<GalleryV2Page />} />
        <Route path="/druk-scienny-krakow" element={<DrukSciennyKrakow />} />
        <Route path="/gallery/:slug" element={<GalleryV2Page />} />
      </Routes>
    </>
  );
};

export default AppLazy;
