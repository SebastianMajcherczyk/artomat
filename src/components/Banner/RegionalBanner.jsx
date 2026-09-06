// RegionalBanner.jsx — baner dla regionalnych podstron SEO
// (np. /druk-scienny-krakow, w przyszłości np. /druk-scienny-slask).
// Wideo (pojedyncze, bez slidera — z uwagi na SEO/czas ładowania), podtytuł
// (h3) i akapity techniczne są wspólne dla wszystkich regionów — jedyne, co
// różni się między wersjami lokalnymi, to tytuł (h1) i pierwszy,
// wprowadzający akapit (`introParagraph`).
import React, { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import "./Banner.css";

import BannerVideo from "./banner-video.mp4";

import { AnimatedH1, AnimatedH3 } from "../Styled/StyledHeader";

// Ścieżka statyczna (nie import webpack), żeby dokładnie zgadzała się z
// <link rel="preload"> w public/index.html — inaczej przeglądarka pobiera
// ten sam obraz dwa razy pod dwoma różnymi adresami.
const BannerPoster = process.env.PUBLIC_URL + "/posters/banner-poster.webp";

const subtitle = "Metamorfoza ścian w Twojej firmie, szkole lub obiekcie sportowym";

const sharedParagraphs = [
  <>
    Naszą specjalnością jest{" "}
    <strong>
      druk ścienny UV, czyli murale wykonywane przez precyzyjną drukarkę
      naścienną bezpośrednio na tynku.
    </strong>{" "}
    To nowoczesny proces przenoszenia obrazu na ścianę w biurach, siłowniach,
    szkołach czy korytarzach obiektów sportowych.{" "}
    <strong>
      Używamy dedykowanych atramentów utwardzanych promieniami UV,
    </strong>{" "}
    dzięki czemu nadruk jest trwały, odporny na światło i zachowuje pełnię
    kolorów oraz detali.
  </>,
  <>
    Technicznie można to porównać do pracy klasycznej drukarki atramentowej,
    z tą różnicą, że tutaj{" "}
    <strong>
      maszyna pracuje pionowo bezpośrednio przy ścianie – na betonie, cegle,
      metalu, drewnie czy szkle.
    </strong>{" "}
    Dzięki temu możemy realizować zarówno duże murale w halach i na
    korytarzach, jak i bardziej kameralne projekty w mniejszych
    pomieszczeniach.
  </>,
  <>
    Nadruki ścienne dają większą swobodę niż tapety czy naklejki – pod
    względem jakości, swobody projektowania i możliwości późniejszego
    odświeżenia ściany. Nie musisz martwić się o łączenia pasów ani
    odklejające się brzegi.
  </>,
  <>
    Jeśli zależy Ci na mocnej identyfikacji wizualnej w biurze, chcesz
    wyróżnić swoją siłownię lub klub, albo szukasz pomysłu na nowoczesną
    dekorację ścian w szkole czy obiekcie sportowym –{" "}
    <strong>
      druk ścienny to praktyczny sposób na efekt „wow” bez uciążliwego
      remontu.
    </strong>
  </>,
];

const RegionalBanner = ({ title, introParagraph }) => {
  const videoRef = useRef(null);

  // Banner jest zawsze widoczny od razu (bez przewijania), więc nie potrzeba
  // IntersectionObserver — patrz komentarz w Banner.jsx o hydracji.
  const [inView, setInView] = useState(false);

  useEffect(() => {
    setInView(true);
  }, []);

  useEffect(() => {
    const video = videoRef.current;

    if (!video) return;

    video.muted = true;
    video.loop = true;
    video.playsInline = true;

    video.play().catch(() => {
      // Autoplay może zostać zablokowany w niektórych warunkach.
      // Poster nadal zostanie pokazany, więc nie robimy z tego błędu.
    });
  }, []);

  const delay = 0.5;
  const duration = 1.5;

  const paragraphs = [introParagraph, ...sharedParagraphs];

  return (
    <div className="banner-container">
      <div className="div-for-slider">
        <video
          ref={videoRef}
          className="banner-video"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster={BannerPoster}
          fetchPriority="high"
          disableRemotePlayback
          aria-label="Przykłady realizacji druku ściennego Loftprint"
        >
          <source src={BannerVideo} type="video/mp4" />
        </video>
      </div>

      <div className="banner-text">
        <AnimatedH1 isSectionVisible={inView}>{title}</AnimatedH1>
        <AnimatedH3 isSectionVisible={inView}>{subtitle}</AnimatedH3>

        {paragraphs.map((paragraph, index) => (
          <motion.p
            key={index}
            initial="hidden"
            animate="visible"
            variants={{
              visible: {
                opacity: 1,
                transition: { delay: delay * (index + 1), duration },
              },
              hidden: { opacity: 0 },
            }}
          >
            {paragraph}
          </motion.p>
        ))}
      </div>
    </div>
  );
};

export default RegionalBanner;
