import React, { useEffect, useState } from "react";
import { Link as RouterLink } from "react-router-dom";
import "./CenyPreview.scss";
import {
  LeftSideMotionDiv,
  RightSideMotionDiv,
} from "../Styled/StyledMotionDiv";
import { AnimatedH2, AnimatedH3 } from "../Styled/StyledHeader";

const CenyPreview = () => {
  const [isSectionVisible, setIsSectionVisible] = useState(false);
  const [hasAnimationPlayed, setHasAnimationPlayed] = useState(false);

  const checkIfSectionIsVisible = () => {
    const section = document.querySelector(".ceny-preview");
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
    <div className="ceny-preview-container">
      <AnimatedH2 isSectionVisible={isSectionVisible}>Ceny</AnimatedH2>

      <AnimatedH3 isSectionVisible={isSectionVisible}>
        Najważniejsze informacje w skrócie
      </AnimatedH3>

      <LeftSideMotionDiv
        className="ceny-preview"
        isSectionVisible={isSectionVisible}
      >
        <div className="ceny-preview-card">
          <p>
            Każda realizacja wyceniana jest indywidualnie, bo koszt zależy m.in.
            od wielkości grafiki, rodzaju podłoża, lokalizacji i tego, czy
            potrzebny jest biały podkład.
          </p>

          <ul className="ceny-preview-list">
            <li>
              od <strong>300 zł netto / m²</strong> dla standardowego nadruku
            </li>
            <li>
              od <strong>400 zł netto / m²</strong> przy druku z białym
              podkładem
            </li>
            <li>
              <strong>minimum zamówienia: 800 zł</strong> + właściwy VAT
            </li>
          </ul>

          <p>Dojazd na terenie Krakowa i najbliższych okolic jest bezpłatny.</p>
        </div>
      </LeftSideMotionDiv>

      <RightSideMotionDiv
        className="ceny-preview-box"
        isSectionVisible={isSectionVisible}
      >
        <div className="ceny-preview-card">
          <h3>Od czego zależy finalna wycena?</h3>

          <div className="ceny-preview-tags">
            <span>Wielkość grafiki</span>
            <span>Rodzaj podłoża</span>
            <span>Kolor ściany</span>
            <span>Biały podkład</span>
            <span>Lokalizacja</span>
            <span>Korekty graficzne</span>
          </div>

          <p>
            Na pełnej stronie o cenach znajdziesz więcej szczegółów, stawek i
            zasad wyceny.
          </p>

          <div className="ceny-preview-actions">
            <RouterLink to="/ceny" className="ceny-preview-link primary">
              Zobacz pełną stronę o cenach
            </RouterLink>
          </div>
        </div>
      </RightSideMotionDiv>
    </div>
  );
};

export default CenyPreview;
