import React, { Suspense } from "react";
import { Element } from "react-scroll";
import { Parallax } from "react-parallax";
import { Helmet } from "react-helmet-async";
import { Header } from "../Header/Header";
import { Footer } from "../Footer/Footer";
import BannerKrakow from "../Banner/BannerKrakow";

const ForWhomKrakow = React.lazy(() => import("../ForWhom/ForWhomKrakow"));
const Gallery = React.lazy(() => import("../Gallery/Gallery"));
const Reviews = React.lazy(() => import("../Reviews/Reviews"));
const TechnikaKrakow = React.lazy(() => import("../Technika/TechnikaKrakow"));
const Ceny = React.lazy(() => import("../Ceny/Ceny"));
const Inspiracje = React.lazy(() => import("../Inspiracje/Inspiracje"));
const WallArtVisualizer = React.lazy(
  () => import("../WallArtVisualizer/WallArtVisualizer"),
);

const strength = 300;

export const DrukSciennyKrakow = () => {
  return (
    <>
      <Helmet>
        <title>
          Druk ścienny Kraków – Loftprint | Murale drukowane na ścianie
        </title>
        <meta
          name="description"
          content="Druk ścienny w Krakowie i Małopolsce. Trwałe nadruki UV bez remontu – biura, szkoły, siłownie, obiekty sportowe. Loftprint drukuje bezpośrednio na ścianie."
        />
        <link rel="canonical" href="https://loftprint.pl/druk-scienny-krakow" />
      </Helmet>
      <div className="App">
        <div className="app-container">
          <Parallax
            blur={0}
            bgImage={require("../../image21.jpg")}
            bgImageAlt="tło"
            strength={strength}
          >
            <Header />
            <Element name="home">
              <section className="first-section">
                <BannerKrakow />
              </section>
            </Element>
          </Parallax>

          <Suspense fallback={<div>Loading...</div>}>
            <Parallax
              blur={0}
              bgImage={require("../../image22.jpg")}
              bgImageAlt="tło"
              strength={strength}
            >
              <Element name="dla-kogo">
                <section>
                  <ForWhomKrakow />
                </section>
              </Element>
            </Parallax>

            <Parallax
              blur={0}
              bgImage={require("../../image21.jpg")}
              bgImageAlt="tło"
              strength={strength}
            >
              <Element name="technika">
                <section>
                  <TechnikaKrakow />
                </section>
              </Element>
            </Parallax>

            <Parallax
              blur={0}
              bgImage={require("../../image22.jpg")}
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
              blur={0}
              bgImage={require("../../image21.jpg")}
              bgImageAlt="tło"
              strength={strength}
            >
              {/* Opinie zostawiamy jak u Ciebie – na razie wyłączone */}
              {/* <section>
              <Reviews />
            </section> */}
            </Parallax>

            <Parallax
              blur={0}
              bgImage={require("../../image21.jpg")}
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
              bgImage={require("../../image22.jpg")}
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
              bgImage={require("../../image21.jpg")}
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

export default DrukSciennyKrakow;
