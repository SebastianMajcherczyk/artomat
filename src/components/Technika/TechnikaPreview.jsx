import React, { useEffect, useState } from "react";
import { Link as RouterLink } from "react-router-dom";
import "./TechnikaPreview.css";
import {
  LeftSideMotionDiv,
  RightSideMotionDiv,
  BottomSideMotionDiv,
} from "../Styled/StyledMotionDiv";
import { AnimatedH2, AnimatedH3 } from "../Styled/StyledHeader";

const tech = process.env.PUBLIC_URL + "/Technika";

const features = [
  {
    title: "Duży format, bez łączenia brytów",
    image: {
      src: `${tech}/max_size.webp`,
      alt: "Maksymalna wysokość nadruku do 4 metrów, szerokość praktycznie bez ograniczeń",
    },
    content: (
      <>
        <p>
          Maksymalna wysokość nadruku wynosi do 4 metrów. Szerokość jest
          natomiast teoretycznie nieograniczona, ponieważ drukarka
          przemieszcza się wzdłuż ściany po systemie szyn.
        </p>
        <p>
          Dzięki temu możliwe są zarówno niewielkie logotypy, jak i
          wielometrowe kompozycje zajmujące dużą część wnętrza.
        </p>
      </>
    ),
  },
  {
    title: "Marginesy potrzebne do pracy drukarki",
    image: {
      src: `${tech}/margins.webp`,
      alt: "Minimalne marginesy robocze drukarki wokół nadruku",
    },
    content: (
      <>
        <p>
          Głowica drukująca porusza się na karetce, która potrzebuje
          przestrzeni również poza samą krawędzią nadruku. Dlatego grafika
          nie może dochodzić całkowicie do podłogi, sufitu ani bocznych
          przeszkód. W typowych warunkach należy pozostawić około:
        </p>
        <ul>
          <li>31 cm od podłogi</li>
          <li>31 cm od sufitu</li>
          <li>15 cm od lewej strony</li>
          <li>15 cm od prawej strony</li>
        </ul>
        <p>
          Przy nietypowych ścianach, wnękach lub innych elementach
          architektonicznych możliwość realizacji oceniamy indywidualnie.
        </p>
      </>
    ),
  },
  {
    title: "Nie tylko biała, idealnie gładka ściana",
    content: (
      <>
        <p>
          Drukujemy na typowych ścianach malowanych, ale również na betonie,
          cegle, drewnie i wielu innych powierzchniach.
        </p>
        <p>
          Faktura podłoża nie zawsze jest przeszkodą. Często może stać się
          częścią samej grafiki i nadać jej charakter, którego nie da się
          uzyskać na klasycznej tapecie.
        </p>
        <p>
          Na ciemnych i intensywnie kolorowych ścianach wykorzystujemy
          również biały poddruk, dzięki któremu kolory mogą zachować
          odpowiednią intensywność.
        </p>
      </>
    ),
  },
  {
    title: "Nadruk nie musi być prostokątem",
    content: (
      <>
        <p>
          Druk bezpośredni daje dużą swobodę projektowania. Grafika może
          mieć nieregularny kształt, składać się z wielu niezależnych
          elementów albo płynnie zanikać na krawędziach.
        </p>
        <p>
          Możemy również dopasować projekt do architektury wnętrza,
          wykorzystując wnęki, przejścia czy inne elementy ściany jako część
          kompozycji.
        </p>
      </>
    ),
  },
  {
    title: "Technologia to tylko część dobrej realizacji",
    content: (
      <>
        <p>
          Na końcowy efekt wpływają również rodzaj podłoża, kolor ściany,
          jakość pliku, skala projektu oraz sposób przygotowania białego
          poddruku.
        </p>
        <p>
          Dlatego każdą realizację traktujemy indywidualnie. W przypadku
          nietypowych materiałów lub szczególnie wymagających projektów
          możemy wcześniej wykonać próbę i dobrać sposób realizacji do
          konkretnej powierzchni.
        </p>
      </>
    ),
  },
];

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
      <AnimatedH2 isSectionVisible={isSectionVisible}>Technika</AnimatedH2>

      <AnimatedH3 isSectionVisible={isSectionVisible}>
        Druk bezpośrednio na ścianie
      </AnimatedH3>

      <LeftSideMotionDiv
        isSectionVisible={isSectionVisible}
        className="technika-preview"
      >
        <div className="technika-preview-card">
          <p>
            Druk ścienny UV pozwala nanosić zdjęcia, grafiki, ilustracje,
            napisy i logotypy bezpośrednio na powierzchnię ściany, bez
            tapety, folii czy innych materiałów pośrednich.
          </p>
          <p>
            W Loftprint pracujemy na dwóch profesjonalnych drukarkach
            wallPen, zaprojektowanych i produkowanych w Niemczech specjalnie
            do druku pionowego. Precyzyjna mechanika, laserowa kontrola
            odległości od powierzchni oraz przemysłowe głowice Ricoh
            pozwalają uzyskać wysoką jakość również przy dużych,
            wymagających realizacjach.
          </p>
          <p>
            Dwie maszyny dają nam dodatkowo większą elastyczność terminów,
            możliwość prowadzenia realizacji równolegle oraz większe
            bezpieczeństwo przy większych projektach.
          </p>
        </div>
      </LeftSideMotionDiv>

      <RightSideMotionDiv
        isSectionVisible={isSectionVisible}
        className="technika-preview-grid-wrap"
      >
        <div className="technika-preview-grid">
          {features.map((f) => (
            <div className="technika-preview-feature" key={f.title}>
              {f.image && (
                <img
                  src={f.image.src}
                  alt={f.image.alt}
                  loading="lazy"
                  className="technika-preview-feature-image"
                />
              )}
              <h4>{f.title}</h4>
              {f.content}
            </div>
          ))}
        </div>
      </RightSideMotionDiv>

      <BottomSideMotionDiv
        isSectionVisible={isSectionVisible}
        className="technika-preview-box"
      >
        <div className="technika-preview-card">
          <p>
            Chcesz wiedzieć więcej o możliwościach i ograniczeniach druku
            ściennego?
          </p>

          <div className="technika-preview-actions">
            <RouterLink
              to="/technika"
              className="technika-preview-link primary"
            >
              Poznaj technikę druku ściennego →
            </RouterLink>
          </div>
        </div>
      </BottomSideMotionDiv>
    </div>
  );
};

export default TechnikaPreview;
