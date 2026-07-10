import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import "./Banner.css";

import BannerVideo from "./banner-video.mp4";
import BannerPoster from "./banner-poster.webp";

import { AnimatedH1, AnimatedH3 } from "../Styled/StyledHeader";

export const Banner = () => {
  const videoRef = useRef(null);

  const { ref, inView } = useInView({
    triggerOnce: true,
    rootMargin: "-100px 0px",
  });

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

      <div className="banner-text" ref={ref}>
        <AnimatedH1 isSectionVisible={inView}>
          Druk ścienny UV w Krakowie
        </AnimatedH1>

        <AnimatedH3 isSectionVisible={inView}>
          Spraw, by Twoja ściana ożyła
        </AnimatedH3>

        {inView && (
          <motion.p
            initial="hidden"
            animate="visible"
            variants={{
              visible: { opacity: 1, transition: { delay, duration } },
              hidden: { opacity: 0 },
            }}
          >
            <strong>
              Masz w głowie wizję obrazu, grafiki, zdjęcia, logo firmy lub
              organizacji na swojej ścianie? Marzy Ci się efektowna metamorfoza
              wnętrza? Dla nas nie ma nic prostszego - wydrukujemy Twoje
              marzenia.
            </strong>
          </motion.p>
        )}

        {inView && (
          <motion.p
            initial="hidden"
            animate="visible"
            variants={{
              visible: {
                opacity: 1,
                transition: { delay: delay * 2, duration },
              },
              hidden: { opacity: 0 },
            }}
          >
            Naszą specjalnością jest{" "}
            <strong>
              druk ścienny, czyli murale wykonywane przez precyzyjną maszynę.
            </strong>{" "}
            To czerpiący z najnowszej technologii proces przenoszenia obrazów
            bezpośrednio na wybraną powierzchnię.{" "}
            <strong>
              Drukarka naścienna wykorzystuje dedykowane atramenty utwardzane za
              pomocą promieni UV.
            </strong>{" "}
            Nadruk zachowuje każdy detal, z nasyconymi kolorami i wysoką
            rozdzielczością.
          </motion.p>
        )}

        {inView && (
          <motion.p
            initial="hidden"
            animate="visible"
            variants={{
              visible: {
                opacity: 1,
                transition: { delay: delay * 3, duration },
              },
              hidden: { opacity: 0 },
            }}
          >
            Naszą metodę można porównać do odbijania obrazu na papierze za
            pomocą klasycznej drukarki atramentowej. Z tą różnicą, że tutaj{" "}
            <strong>
              główną rolę odgrywa maszyna pracująca pionowo na różnych podłożach
              - betonie, metalu, szkle, plastiku, drewnie lub cegle.
            </strong>{" "}
            Rozmiar drukarki pozwala na pokrywanie zarówno dużych powierzchni,
            jak i mniejszych pomieszczeń.
          </motion.p>
        )}

        <motion.p
          initial="hidden"
          animate="visible"
          variants={{
            visible: { opacity: 1, transition: { delay: delay * 4, duration } },
            hidden: { opacity: 0 },
          }}
        >
          Nadruki ścienne dają więcej swobody niż tapety czy naklejki - w
          jakości, sposobie przeniesienia projektu oraz ewentualnym usunięciu.
        </motion.p>

        <motion.p
          initial="hidden"
          animate="visible"
          variants={{
            visible: { opacity: 1, transition: { delay: delay * 5, duration } },
            hidden: { opacity: 0 },
          }}
        >
          Jeśli chcesz oryginalnie urządzić mieszkanie, potrzebujesz mocnej
          identyfikacji w biurze lub chcesz odmienić przestrzeń publiczną -
          personalizowany druk ścienny to strzał w dziesiątkę!
        </motion.p>
      </div>
    </div>
  );
};

export default Banner;
