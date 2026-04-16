// Banner.jsx — prosta wersja (slider od razu, bez postera)
import React, { useEffect, useCallback } from "react";
import AwesomeSlider from "react-awesome-slider";
import withAutoplay from "react-awesome-slider/dist/autoplay";
import "react-awesome-slider/dist/styles.css";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import "./Banner.css";

import Video1 from "./Artformer.mp4";
import Video2 from "./Witnica-banner.mp4";
import Video3 from "./Bulaj2.mp4";
import Video4 from "./Frida2.mp4";
import Video5 from "./Tiger.mp4";
import Video6 from "./Leaves.mp4";

import { AnimatedH1, AnimatedH3 } from "../Styled/StyledHeader";

export const Banner = () => {
  const AutoplaySlider = withAutoplay(AwesomeSlider);

  const { ref, inView } = useInView({
    triggerOnce: true,
    rootMargin: "-100px 0px",
  });

  // Funkcja ustawiająca właściwości <video> i uruchamiająca odtwarzanie
  const ensureVideosPlaying = useCallback(() => {
    const videos = document.querySelectorAll(".slider video");
    videos.forEach((video) => {
      try {
        video.muted = true;
        video.loop = true;
        video.autoplay = true;
        video.preload = "auto";
        video.controls = false;
        video.setAttribute("playsinline", "true");
        video.setAttribute("webkit-playsinline", "true");
        video.setAttribute("disableRemotePlayback", "true");
        video.play().catch(() => {});
      } catch {}
    });
  }, []);

  // Po montażu od razu spróbuj odtworzyć
  useEffect(() => {
    // daj jedną klatkę na zrenderowanie slidera
    requestAnimationFrame(ensureVideosPlaying);
  }, [ensureVideosPlaying]);

  const delay = 0.5;
  const duration = 1.5;

  return (
    <div className="banner-container">
      <div className="div-for-slider">
        <AutoplaySlider
          className="slider"
          play={true}
          cancelOnInteraction={false}
          interval={5000}
          animation=""
          bullets={false}
          organicArrows={false}
          infinite={true}
          transitionDelay={500}
          onFirstMount={ensureVideosPlaying}
          onTransitionStart={ensureVideosPlaying}
        >
          <div data-src={Video1} />
          <div data-src={Video2} />
          <div data-src={Video3} />
          <div data-src={Video4} />
          <div data-src={Video5} />
          <div data-src={Video6} />
        </AutoplaySlider>
      </div>

      {/* ——— Teksty jak wcześniej ——— */}
      <div className="banner-text" ref={ref}>
        <AnimatedH1 isSectionVisible={inView}>Druk ścienny</AnimatedH1>
        <AnimatedH3 isSectionVisible={inView}>
          Spraw by Twoja ściana ożyła
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
              wnętrza? Dla nas nie ma nic prostszego – wydrukujemy Twoje
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
            bezpośrednio na dowolną powierzchnię.{" "}
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
              główną rolę odgrywa maszyna pracująca pionowo na każdym możliwym
              podłożu – betonie, metalu, szkle, plastiku, drewnie lub cegle!
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
          Nadruki ścienne dają więcej swobody niż tapety czy naklejki – w
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
          identyfikacji w biurze lub chcesz odmienić przestrzeń publiczną –
          personalizowany druk ścienny to strzał w dziesiątkę!
        </motion.p>
      </div>
    </div>
  );
};

export default Banner;
