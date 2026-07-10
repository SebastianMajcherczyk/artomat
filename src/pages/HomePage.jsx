import React, { Suspense, useEffect } from "react";
import { Element, scroller } from "react-scroll";
import { useLocation } from "react-router-dom";
import { Parallax } from "react-parallax";
import { Helmet } from "react-helmet-async";

import { Banner } from "../components/Banner/Banner";
import { Footer } from "../components/Footer/Footer";

const ForWhom = React.lazy(() => import("../components/ForWhom/ForWhom"));
const Gallery = React.lazy(() => import("../components/Gallery/Gallery"));
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

export default function HomePage() {
  const location = useLocation();
  useEffect(() => {
    if (location.hash) {
      const section = location.hash.replace("#", "");

      setTimeout(() => {
        scroller.scrollTo(section, {
          duration: 800,
          delay: 0,
          smooth: "easeInOutQuart",
          offset: -70,
        });
      }, 100);
    } else {
      window.scrollTo(0, 0);
    }
  }, [location]);
  return (
    <>
      <Helmet>
        <title>Druk ścienny - Loftprint | Murale drukowane na ścianie</title>
        <meta
          name="description"
          content="Loftprint - druk ścienny UV. Trwałe murale i nadruki bezpośrednio na ścianie do biur, mieszkań, szkół i obiektów sportowych."
        />
        <link rel="canonical" href="https://loftprint.pl/" />
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

          <Suspense fallback={<div>Loading...</div>}>
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
              <Element name="ceny">
                <section className="price-section">
                  <CenyPreview />
                </section>
              </Element>
            </Parallax>

            <Parallax
              blur={0}
              bgImage={require("../image22.jpg")}
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
              bgImage={require("../image21.jpg")}
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
