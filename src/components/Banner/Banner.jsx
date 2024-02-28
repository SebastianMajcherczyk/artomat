import React, { useEffect } from "react";
import AwesomeSlider from "react-awesome-slider";
import withAutoplay from "react-awesome-slider/dist/autoplay";
import "react-awesome-slider/dist/styles.css";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import "./Banner.css";

import Video1 from "./Adam.mp4";
import Video2 from "./Giraffe.mp4";
import Video3 from "./Kancelaria.mp4";
import Video4 from "./Pies.mp4";
import Video5 from "./Suszarnia.mp4";
import Video6 from "./Yoda.mp4";
import { AnimatedH2, AnimatedH3 } from "../Styled/StyledHeader";

export const Banner = () => {
  const AutoplaySlider = withAutoplay(AwesomeSlider);
  const { ref, inView } = useInView({
    triggerOnce: true,
    rootMargin: "-100px 0px",
  });

  const delay = 0.7;
  const duration = 1.5;

  const modifyVideoElements = () => {
    const videos = document.querySelectorAll(".slider video");
    videos.forEach((video) => {
      video.muted = true;
      video.autoplay = true;
      video.preload = "auto";
      video.controls = false;
      video.play().catch((e) => {
        console.error("Error trying to play the video:", e);
      });
    });
  };
  useEffect(() => {
    modifyVideoElements();
  }, []);

  return (
    <div className="banner-container">
      <div className="div-for-slider">
        <AutoplaySlider
          className="slider"
          play={true}
          cancelOnInteraction={false}
          onTransitionStart={modifyVideoElements}
          onFirstMount={modifyVideoElements}
          interval={5000}
          animation=""
          bullets={false}
          organicArrows={false}
          infinite={true}
          transitionDelay={500}
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
        <AnimatedH2 isSectionVisible={inView}>Nadruki ścienne</AnimatedH2>
        <AnimatedH3 isSectionVisible={inView}>
          Spraw by Twoja ściana ożyła.
        </AnimatedH3>

        {inView && (
          <motion.p
            initial="hidden"
            animate="visible"
            variants={{
              visible: {
                opacity: 1,
                transition: { delay: delay, duration: duration }, // Opóźnienie dla każdego paragrafu
              },
              hidden: { opacity: 0 },
            }}
          >
            Druk ścienny to nowoczesna technologia umożliwiająca zdobienie ścian
            z zachowaniem niezwykłej wierności odwzorowania projektu oraz
            wysokiej jakości i trwałości. Drukowanie odbywa się z użyciem
            specjalnej drukarki drukującej wykorzystaniem tuszy utrwardzanych za
            pomocą promieni UV. Taka technologia pozwala na uzyskanie doskonale
            nasyconych kolorów i doskonałego odwzorowania szczegółów.
          </motion.p>
        )}
        {inView && (
          <motion.p
            initial="hidden"
            animate="visible"
            variants={{
              visible: {
                opacity: 1,
                transition: { delay: delay * 2, duration: duration },
              },
              hidden: { opacity: 0 },
            }}
          >
            Dzięki naszym spersonalizowanym projektom ściennym, masz możliwość
            wyróżnienia każdej przestrzeni. Niezależnie od tego, czy szukasz
            profesjonalnego druku ściennego do biura, identyfikacji wizualnej
            firmy, czy budynków administracji publicznej, posiadamy kompetencje,
            aby dostarczyć znakomite efekty, spełniające Twoje oczekiwania.
          </motion.p>
        )}
        {inView && (
          <motion.p
            initial="hidden"
            animate="visible"
            variants={{
              visible: {
                opacity: 1,
                transition: { delay: delay * 3, duration: duration },
              },
              hidden: { opacity: 0 },
            }}
          >
            Jesteśmy dumni z tworzenia wydruków ściennych w wysokiej
            rozdzielczości, które wiernie odwzorowują cyfrowe dzieła sztuki i
            ujmują nawet najdrobniejsze szczegóły. Nasze artystyczne usługi
            druku ściennego pozwalają na stworzenie zapierających dech w
            piersiach murali i ożywienie Twojej wyobraźni na dużą skalę.
          </motion.p>
        )}
        <motion.p
          initial="hidden"
          animate="visible"
          variants={{
            visible: {
              opacity: 1,
              transition: { delay: delay * 4, duration: duration },
            },
            hidden: { opacity: 0 },
          }}
        >
          Każdy projekt jest dla nas wyjątkowy, dlatego w Loft Print oferujemy
          kompleksowe doradztwo w zakresie projektowania ścian, by Twoja
          koncepcja została perfekcyjnie zrealizowana. Nasz zespół specjalistów
          będzie ściśle współpracował z Tobą, aby w pełni zrozumieć Twoje
          potrzeby, doradzić i stworzyć projekt, który zaspokoi Twoje
          oczekiwania.
        </motion.p>
      </div>
    </div>
  );
};
