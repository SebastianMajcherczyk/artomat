import React, { useEffect, useState } from "react";
import { Link as RouterLink } from "react-router-dom";
import "./TechnikaPreview.css";
import {
  LeftSideMotionDiv,
  RightSideMotionDiv,
} from "../Styled/StyledMotionDiv";
import { AnimatedH2, AnimatedH3 } from "../Styled/StyledHeader";

const TechnikaPreview = () => {
  const [isSectionVisible, setIsSectionVisible] = useState(false);
  const [hasAnimationPlayed, setHasAnimationPlayed] = useState(false);

  const checkIfSectionIsVisible = () => {
    const section = document.querySelector(".technika-preview");
    if (!section) return false;

    const bounds = section.getBoundingClientRect();

    return (
      bounds.top < window.innerHeight / 1.5 &&
      bounds.bottom > window.innerHeight / 1.5
    );
  };

  const handleScroll = () => {
    if (checkIfSectionIsVisible() && !hasAnimationPlayed) {
      setIsSectionVisible(true);
      setHasAnimationPlayed(true);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [hasAnimationPlayed]);

  return (
    <div className="technika-preview-container">
      <AnimatedH2 isSectionVisible={isSectionVisible}>
        Możliwości drukarki ściennej UV
      </AnimatedH2>

      <AnimatedH3 isSectionVisible={isSectionVisible}>
        Najważniejsze informacje w skrócie
      </AnimatedH3>

      <LeftSideMotionDiv
        isSectionVisible={isSectionVisible}
        className="technika-preview"
      >
        <div className="technika-preview-card">
          <p>
            Druk ścienny UV pozwala nanosić grafikę bezpośrednio na ścianę,
            beton, cegłę, szkło, drewno i inne powierzchnie.
            <strong>
              {" "}
              Maksymalna wysokość druku wynosi 4 metry, a szerokość jest
              praktycznie nieograniczona.
            </strong>
          </p>

          <p>
            Typowa szybkość pracy to około <strong>0,8-1,6 m²/h</strong>. Na
            klasycznych ścianach nadruk jest zwykle suchy i utrwalony od razu po
            wydruku.
          </p>

          <p>
            Technologia pozwala też kompensować do pewnego stopnia nierówności
            ściany, dlatego dobrze sprawdza się również na bardziej wymagających
            powierzchniach.
          </p>
        </div>
      </LeftSideMotionDiv>

      <RightSideMotionDiv
        isSectionVisible={isSectionVisible}
        className="technika-preview-box"
      >
        <div className="technika-preview-card">
          <h3>Na jakich powierzchniach drukujemy?</h3>

          <div className="technika-preview-tags">
            <span>Ściana</span>
            <span>Beton</span>
            <span>Cegła</span>
            <span>Szkło</span>
            <span>Drewno</span>
            <span>Metal</span>
          </div>

          <p>
            Na stronie poświęconej technice pokazujemy dokładniej marginesy
            robocze, ograniczenia, trwałość nadruku i specyfikę różnych podłoży.
          </p>

          <div className="technika-preview-actions">
            <RouterLink
              to="/technika"
              className="technika-preview-link primary"
            >
              Zobacz pełną stronę o technice
            </RouterLink>

            <RouterLink
              to={{ pathname: "/", hash: "#kontakt" }}
              className="technika-preview-link secondary"
            >
              Zapytaj o swoją ścianę
            </RouterLink>
          </div>
        </div>
      </RightSideMotionDiv>
    </div>
  );
};

export default TechnikaPreview;
