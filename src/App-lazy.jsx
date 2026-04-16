import React, { Suspense, useEffect } from "react";
import { scroller } from "react-scroll";
import { Banner } from "./components/Banner/Banner";
import { Header } from "./components/Header/Header";
import { Element } from "react-scroll";
import { Parallax } from "react-parallax";
import { Footer } from "./components/Footer/Footer";
import { useLocation } from "react-router-dom";
import { Helmet } from "react-helmet-async";

import { DrukSciennyKrakow } from "./components/DrukSciennyKrakow/DrukSciennyKrakow";
const ForWhom = React.lazy(() => import("./components/ForWhom/ForWhom"));
const Gallery = React.lazy(() => import("./components/Gallery/Gallery"));
const Reviews = React.lazy(() => import("./components/Reviews/Reviews"));
const Technika = React.lazy(() => import("./components/Technika/Technika"));
const Ceny = React.lazy(() => import("./components/Ceny/Ceny"));
const Inspiracje = React.lazy(
  () => import("./components/Inspiracje/Inspiracje"),
);
const WallArtVisualizer = React.lazy(
  () => import("./components/WallArtVisualizer/WallArtVisualizer"),
);

const strength = 300;

const AppLazy = () => {
  const location = useLocation();
  const path = location.pathname;

  useEffect(() => {
    const currentPath = location.pathname;
    if (currentPath === "/druk-scienny-krakow") {
      return;
    }
    // Ustawienie timeoutu na 500ms przed przewinięciem do sekcji
    const section = currentPath.substring(1); // Usuwa "/" z początku ścieżki URL
    if (section) {
      setTimeout(() => {
        scroller.scrollTo(section, {
          duration: 800,
          delay: 0,
          smooth: "easeInOutQuart",
        });
      }, 500); // Czas na załadowanie komponentów
    }
  }, [path]);

  // Jeśli URL to /druk-scienny-krakow -> renderujemy osobną stronę
  if (path === "/druk-scienny-krakow") {
    return <DrukSciennyKrakow />;
  }

  return (
    <>
      <Helmet>
        <title>Druk ścienny – Loftprint | Murale drukowane na ścianie</title>
        <meta
          name="description"
          content="Loftprint – druk ścienny UV. Trwałe murale i nadruki bezpośrednio na ścianie: biura, mieszkania, siłownie, szkoły, obiekty sportowe. Ściana ożyje bez remontu."
        />
        <link rel="canonical" href="https://loftprint.pl" />
      </Helmet>
      <div className="App">
        <div className="app-container">
          <Parallax
            blur={0}
            bgImage={require("../src/image21.jpg")}
            bgImageAlt="tło"
            strength={strength}
          >
            <Header />
            <Element name="home">
              <section className="first-section">
                <Banner />
              </section>
            </Element>
          </Parallax>

          <Suspense fallback={<div>Loading...</div>}>
            <Parallax
              blur={0}
              bgImage={require("../src/image22.jpg")}
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
              bgImage={require("../src/image21.jpg")}
              bgImageAlt="tło"
              strength={strength}
            >
              <Element name="technika">
                <section>
                  <Technika />
                </section>
              </Element>
            </Parallax>
            <Parallax
              bgImage={require("../src/image22.jpg")}
              bgImageAlt="tło"
              strength={strength}
            >
              <Element name="gallery">
                <section>
                  <Gallery />
                </section>
              </Element>
            </Parallax>
            <Parallax
              bgImage={require("../src/image21.jpg")}
              bgImageAlt="tło"
              strength={strength}
            >
              {/* <section>
                <Reviews />
              </section> */}
            </Parallax>
            <Parallax
              bgImage={require("../src/image21.jpg")}
              bgImageAlt="tło"
              strength={strength}
            >
              <Element name="ceny">
                <section className="price-section">
                  <Ceny />
                </section>
              </Element>
            </Parallax>

            <Parallax
              blur={0}
              bgImage={require("../src/image22.jpg")}
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
              bgImage={require("../src/image21.jpg")}
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
};

export default AppLazy;
