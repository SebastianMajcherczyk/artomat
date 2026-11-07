import React, { Suspense, useEffect } from "react";
import { Element, scroller } from "react-scroll";
import { useLocation } from "react-router-dom";
import { Parallax } from "react-parallax";
import { Helmet } from "react-helmet-async";

import { Banner } from "../components/Banner/Banner";
import { Footer } from "../components/Footer/Footer";

const ForWhom = React.lazy(() => import("../components/ForWhom/ForWhom"));
const Gallery = React.lazy(() => import("../components/Gallery/Gallery"));
const Reviews = React.lazy(() => import("../components/Reviews/Reviews"));
const TechnikaPreview = React.lazy(
  () => import("../components/Technika/TechnikaPreview"),
);
const CenyPreview = React.lazy(() => import("../components/Ceny/CenyPreview"));
const Inspiracje = React.lazy(
  () => import("../components/Inspiracje/Inspiracje"),
);
const WallArtVisualizer = React.lazy(
  () => import("../components/WallArtVisualizer/WallArtVisualizer"),
);

const strength = 300;

// Zastępuje domyślne "Loading...", które jest za krótkie - dopóki te
// (dociągane asynchronicznie) sekcje się nie wczytają, dokument jest tak
// niski, że przeglądarka nie ma fizycznie gdzie przywrócić zapamiętanej
// pozycji scrolla po odświeżeniu strony (ląduje blisko góry, a dopiero po
// doczytaniu sekcji "doskakuje" niżej - stąd widoczny błysk). Wysokość
// przybliża typową długość tej części strony, żeby okno ładowania nie
// skracało dokumentu aż tak drastycznie.
const sectionsFallback = <div style={{ minHeight: "800vh" }} />;

export default function HomePage() {
  const location = useLocation();
  // Scroll-do-góry przy wejściu na "/" bez hasha obsługuje już globalnie
  // ScrollToTop.jsx (zamontowany raz, obok <Routes>) - stamtąd dociera
  // poprawnie i przy nawigacji wewnątrz aplikacji, i (z pominięciem
  // pierwszego mountowania) przy twardym odświeżeniu strony. Tu zostaje
  // tylko to, czego ScrollToTop nie robi: płynny scroll do konkretnej
  // sekcji, gdy w adresie jest hash (np. wejście na "/#opinie").
  useEffect(() => {
    if (!location.hash) return;

    const section = location.hash.replace("#", "");

    setTimeout(() => {
      scroller.scrollTo(section, {
        duration: 800,
        delay: 0,
        smooth: "easeInOutQuart",
        offset: -70,
      });
    }, 100);
  }, [location]);
  return (
    <>
      <Helmet>
        <title>Druk ścienny UV - Loftprint | Murale i nadruki na ścianach</title>

        <meta
          name="description"
          content="Loftprint - profesjonalny druk ścienny UV. Trwałe murale i nadruki bezpośrednio na ścianach do biur, mieszkań, szkół, lokali usługowych i obiektów sportowych."
        />

        <link rel="canonical" href="https://loftprint.pl/" />

        <meta property="og:type" content="website" />
        <meta property="og:title" content="Druk ścienny UV - Loftprint" />
        <meta
          property="og:description"
          content="Trwałe murale i nadruki UV bezpośrednio na ścianach. Realizacje dla firm, szkół, lokali usługowych, obiektów sportowych i wnętrz prywatnych."
        />
        <meta property="og:url" content="https://loftprint.pl/" />
        <meta
          property="og:image"
          content="https://loftprint.pl/social/loftprint-og.webp"
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Druk ścienny UV - Loftprint" />
        <meta
          name="twitter:description"
          content="Murale i nadruki UV drukowane bezpośrednio na ścianach."
        />
        <meta
          name="twitter:image"
          content="https://loftprint.pl/social/loftprint-og.webp"
        />
      </Helmet>

      <div className="App">
        <div className="app-container">
          <Parallax
            blur={0}
            bgImage={require("../image21.jpg")}
            bgImageAlt="tło"
            strength={strength}
          >
            <Element name="home">
              <section className="first-section">
                <Banner />
              </section>
            </Element>
          </Parallax>

          <Suspense fallback={sectionsFallback}>
          <Parallax
            blur={0}
            bgImage={require("../image22.jpg")}
            bgImageAlt="tło"
            strength={strength}
          >
            <Element name="dla-kogo">
              <section>
                <ForWhom />
              </section>
            </Element>
          </Parallax>

          <Parallax
            blur={0}
            bgImage={require("../image21.jpg")}
            bgImageAlt="tło"
            strength={strength}
          >
            <Element name="technika">
              <section>
                <TechnikaPreview />
              </section>
            </Element>
          </Parallax>

          <Parallax
            bgImage={require("../image22.jpg")}
            bgImageAlt="tło"
            strength={strength}
          >
            <Element name="gallery">
              <section>
                <Gallery mode="preview" />
              </section>
            </Element>
          </Parallax>

          <Parallax
            bgImage={require("../image21.jpg")}
            bgImageAlt="tło"
            strength={strength}
          >
            <Element name="opinie">
              <section aria-label="Opinie klientów Loftprint">
                <Reviews />
              </section>
            </Element>
          </Parallax>

          <Parallax
            bgImage={require("../image22.jpg")}
            bgImageAlt="tło"
            strength={strength}
          >
            <Element name="ceny">
              <section className="price-section">
                <CenyPreview />
              </section>
            </Element>
          </Parallax>

          <Parallax
            blur={0}
            bgImage={require("../image21.jpg")}
            bgImageAlt="tło"
            strength={strength}
          >
            <Element name="inspiracje">
              <section>
                <Inspiracje />
              </section>
            </Element>
          </Parallax>

          <Parallax
            blur={0}
            bgImage={require("../image22.jpg")}
            bgImageAlt="tło"
            strength={strength}
          >
            <Element name="visualizer">
              <section>
                <WallArtVisualizer />
              </section>
            </Element>
          </Parallax>

          <Element name="kontakt" style={{ width: "100%" }}>
            <Footer />
          </Element>
          </Suspense>
        </div>
      </div>
    </>
  );
}
