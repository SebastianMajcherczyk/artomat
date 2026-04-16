// BannerKrakow.jsx — wersja banneru dla podstrony „Druk ścienny Kraków”
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

const BannerKrakow = () => {
  const AutoplaySlider = withAutoplay(AwesomeSlider);

  const { ref, inView } = useInView({
    triggerOnce: true,
    rootMargin: "-100px 0px",
  });

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

  useEffect(() => {
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

      <div className="banner-text" ref={ref}>
        <AnimatedH1 isSectionVisible={inView}>Druk ścienny Kraków</AnimatedH1>
        <AnimatedH3 isSectionVisible={inView}>
          Metamorfoza ścian w Twojej firmie, szkole lub obiekcie sportowym
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
              Prowadzisz firmę, siłownię, szkołę lub obiekt sportowy w Krakowie
              lub Małopolsce i masz w głowie wizję konkretnego obrazu, grafiki
              albo logo na ścianie? Chcesz, żeby przestrzeń od progu robiła na
              gościach wrażenie? Druk ścienny pozwala zrealizować takie pomysły
              bez generalnego remontu.
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
              druk ścienny UV, czyli murale wykonywane przez precyzyjną drukarkę
              naścienną bezpośrednio na tynku.
            </strong>{" "}
            To nowoczesny proces przenoszenia obrazu na ścianę w biurach,
            siłowniach, szkołach czy korytarzach obiektów sportowych w Krakowie
            i okolicach.{" "}
            <strong>
              Używamy dedykowanych atramentów utwardzanych promieniami UV,
            </strong>{" "}
            dzięki czemu nadruk jest trwały, odporny na światło i zachowuje
            pełnię kolorów oraz detali.
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
            Technicznie można to porównać do pracy klasycznej drukarki
            atramentowej, z tą różnicą, że tutaj{" "}
            <strong>
              maszyna pracuje pionowo bezpośrednio przy ścianie – na betonie,
              cegle, metalu, drewnie czy szkle.
            </strong>{" "}
            Dzięki temu możemy realizować zarówno duże murale w halach i na
            korytarzach, jak i bardziej kameralne projekty w mniejszych
            pomieszczeniach.
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
          Nadruki ścienne dają większą swobodę niż tapety czy naklejki – pod
          względem jakości, swobody projektowania i możliwości późniejszego
          odświeżenia ściany. Nie musisz martwić się o łączenia pasów ani
          odklejające się brzegi.
        </motion.p>

        <motion.p
          initial="hidden"
          animate="visible"
          variants={{
            visible: { opacity: 1, transition: { delay: delay * 5, duration } },
            hidden: { opacity: 0 },
          }}
        >
          Jeśli zależy Ci na mocnej identyfikacji wizualnej w krakowskim biurze,
          chcesz wyróżnić swoją siłownię lub klub, albo szukasz pomysłu na
          nowoczesną dekorację ścian w szkole czy obiekcie sportowym –{" "}
          <strong>
            druk ścienny w Krakowie to praktyczny sposób na efekt „wow” bez
            uciążliwego remontu.
          </strong>
        </motion.p>
      </div>
    </div>
  );
};

export default BannerKrakow;
