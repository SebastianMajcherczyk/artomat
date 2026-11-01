import React, { useEffect, useState } from "react";
import { Link as RouterLink } from "react-router-dom";
import "./Inspiracje.css";
import {
  LeftSideMotionDiv,
  RightSideMotionDiv,
} from "../Styled/StyledMotionDiv";
import { AnimatedH2, AnimatedH3 } from "../Styled/StyledHeader";

const Inspiracje = () => {
  const [isSectionVisible, setIsSectionVisible] = useState(false);
  const [hasAnimationPlayed, setHasAnimationPlayed] = useState(false);

  const checkIfSectionIsVisible = () => {
    const section = document.querySelector(".inspiracje-preview");
    if (!section) return false;

    const bounds = section.getBoundingClientRect();

    return (
      bounds.top < window.innerHeight / 1.3 &&
      bounds.bottom > window.innerHeight / 1.3
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
    <div className="inspiracje-preview-container">
      <AnimatedH2 isSectionVisible={isSectionVisible}>
        Grafika na ścianę
      </AnimatedH2>
      <AnimatedH3 isSectionVisible={isSectionVisible}>
        Od pomysłu do wyjątkowego nadruku
      </AnimatedH3>

      <LeftSideMotionDiv
        className="inspiracje-preview"
        isSectionVisible={isSectionVisible}
      >
        <div className="inspiracje-preview-card">
          <p>
            Masz własne zdjęcie, logo firmy lub gotowy projekt? A może
            dopiero szukasz pomysłu na oryginalną aranżację ściany?
          </p>
          <p>
            Nie ograniczamy Cię do katalogu gotowych wzorów. Dzięki
            połączeniu profesjonalnych narzędzi graficznych, banków zdjęć i
            sztucznej inteligencji możemy pomóc w stworzeniu kompozycji
            dopasowanej do Twoich oczekiwań.
          </p>
          <p>
            Możemy poprawić jakość zdjęcia, rozbudować istniejącą grafikę,
            połączyć różne obrazy w spójną całość albo stworzyć zupełnie
            nowy projekt. Od osobistej dekoracji wnętrza po firmowy mural
            łączący logo z motywami charakterystycznymi dla danej branży.
          </p>
        </div>
      </LeftSideMotionDiv>

      <RightSideMotionDiv
        className="inspiracje-preview-box"
        isSectionVisible={isSectionVisible}
      >
        <div className="inspiracje-preview-card">
          <img
            className="inspiracje-preview-image"
            src={`${process.env.PUBLIC_URL}/Inspiracje/grafika-na-sciane.webp`}
            alt="Projekt graficzny przygotowywany w Photoshopie na podstawie zdjęcia turbin wiatrowych, docelowo do druku ściennego"
            loading="lazy"
            width="1200"
            height="675"
          />

          <div className="inspiracje-preview-tags">
            <span>Własne zdjęcie</span>
            <span>Logo firmy</span>
            <span>Banki zdjęć</span>
            <span>Sztuczna inteligencja</span>
          </div>

          <p className="inspiracje-preview-lead">
            Zobacz, jak z prostego zdjęcia, kilku elementów lub samego
            pomysłu może powstać wyjątkowa grafika na ścianę.
          </p>

          <div className="inspiracje-preview-actions">
            <RouterLink
              to="/inspiracje"
              className="inspiracje-preview-link primary"
            >
              Odkryj więcej inspiracji
            </RouterLink>
          </div>
        </div>
      </RightSideMotionDiv>
    </div>
  );
};

export default Inspiracje;
