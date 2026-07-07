import React, { useEffect, useState } from "react";
import { LeftSideMotionDiv } from "../Styled/StyledMotionDiv";
import { AnimatedH2, AnimatedH3 } from "../Styled/StyledHeader";
import "./Ceny.css";

const Ceny = ({ mode = "home", showHeading = true }) => {
  const isFullMode = mode === "full";

  const [isSectionVisible, setIsSectionVisible] = useState(isFullMode);
  const [hasAnimationPlayed, setHasAnimationPlayed] = useState(isFullMode);

  const checkIfSectionIsVisible = () => {
    const section = document.querySelector(".ceny");
    if (!section) return false;

    const bounds = section.getBoundingClientRect();

    return (
      bounds.top < window.innerHeight / 1.1 &&
      bounds.bottom > window.innerHeight / 1.1
    );
  };

  const handleScroll = () => {
    if (checkIfSectionIsVisible() && !hasAnimationPlayed) {
      setIsSectionVisible(true);
      setHasAnimationPlayed(true);
    }
  };

  useEffect(() => {
    if (isFullMode) return;

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [hasAnimationPlayed, isFullMode]);

  return (
    <div className="price-container">
      {showHeading && (
        <AnimatedH2 isSectionVisible={isSectionVisible}>Ceny</AnimatedH2>
      )}

      {showHeading && (
        <AnimatedH3 isSectionVisible={isSectionVisible}>
          Ile to kosztuje.
        </AnimatedH3>
      )}

      <LeftSideMotionDiv
        className="ceny title"
        isSectionVisible={isSectionVisible}
      >
        <div>
          <p>
            Każdy nadruk jest inny i wyjątkowy, z tego powodu{" "}
            <strong>
              finalną wycenę możemy przedstawić po indywidualnym omówieniu
              potrzeb i szczegółów projektu.
            </strong>
          </p>
          <p>
            Ostateczny koszt uzależniony jest od wielu czynników, m.in.:
            szczegółowość wybranej grafiki, ogólna złożoność i wielkość
            projektu, lokalizacja, rodzaj podłoża, ewentualne konsultacje
            graficzne i naniesione na obraz korekty.
          </p>
          <p>
            Wiemy jednak, że jesteś ciekawy przybliżonych kosztów usługi oraz
            jak ważna jest możliwość ich oszacowania! Nasze podstawowe stawki
            to:
          </p>
          <ul>
            <li>
              1 m² nadruku kosztuje:
              <ul>
                <li>
                  300,00 netto + 8% VAT = 324,00 PLN w przypadku wykonywania
                  zdobienia w lokalu mieszkalnym (mieszkanie do 150 m2 lub dom
                  do 300m2)
                </li>
                <li>
                  300,00 netto + 23% VAT = 369,00 PLN w pozostałych przypadkach
                </li>
              </ul>
            </li>
            <li>
              1 m² nadruku z białym podkładem (wymagany jest w przypadku ścian o
              ciemniejszych kolorach) kosztuje:
              <ul>
                <li>
                  400,00 netto + 8% VAT = 432,00 PLN w przypadku wykonywania
                  zdobienia w lokalu mieszkalnym (mieszkanie do 150 m2 lub dom
                  do 300m2)
                </li>
                <li>
                  400,00 netto + 23% VAT = 492,00 PLN w pozostałych przypadkach
                </li>
              </ul>
            </li>
            <li>
              Minimalna wartość zamówienia wynosi 800,00 PLN (+ VAT 8% lub 23%)
            </li>
          </ul>
          Montaż i przygotowanie sprzętu do druku odbywa się u Klienta.{" "}
          <strong>
            Dojazd na terenie Krakowa i w jego bezpośrednim sąsiedztwie jest
            bezpłatny.
          </strong>{" "}
          W przypadku innych lokalizacji brane są pod uwagę rzeczywiste koszty
          dotarcia na miejsce. Po wcześniejszych ustaleniach{" "}
          <strong>opłata transportowa zawarta jest w wycenie.</strong>
        </div>
      </LeftSideMotionDiv>
    </div>
  );
};

export default Ceny;
