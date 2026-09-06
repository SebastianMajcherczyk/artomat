import React, { Suspense } from "react";
import { Element } from "react-scroll";
import { Parallax } from "react-parallax";
import { Helmet } from "react-helmet-async";

import { Footer } from "../Footer/Footer";
import RegionalBanner from "../Banner/RegionalBanner";
import FAQ from "../FAQ/FAQ";
import { faqKrakowItems } from "../FAQ/faq-krakow-data";

const krakowIntroParagraph = (
  <strong>
    Prowadzisz firmę, siłownię, szkołę lub obiekt sportowy w Krakowie lub
    Małopolsce i masz w głowie wizję konkretnego obrazu, grafiki albo logo na
    ścianie? Chcesz, żeby przestrzeń od progu robiła na gościach wrażenie?
    Druk ścienny pozwala zrealizować takie pomysły bez generalnego remontu.
  </strong>
);

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
          Druk ścienny Kraków - Loftprint | Murale drukowane na ścianie
        </title>

        <meta
          name="description"
          content="Druk ścienny UV w Krakowie i Małopolsce. Trwałe nadruki bezpośrednio na ścianach do biur, szkół, siłowni, lokali usługowych, mieszkań i obiektów sportowych."
        />

        <link rel="canonical" href="https://loftprint.pl/druk-scienny-krakow" />

        <meta property="og:type" content="website" />
        <meta property="og:title" content="Druk ścienny Kraków - Loftprint" />
        <meta
          property="og:description"
          content="Murale i nadruki UV drukowane bezpośrednio na ścianach w Krakowie i Małopolsce. Realizacje dla firm, szkół, lokali usługowych i wnętrz prywatnych."
        />
        <meta
          property="og:url"
          content="https://loftprint.pl/druk-scienny-krakow"
        />
        <meta
          property="og:image"
          content="https://loftprint.pl/social/loftprint-og.webp"
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Druk ścienny Kraków - Loftprint" />
        <meta
          name="twitter:description"
          content="Druk ścienny UV w Krakowie i Małopolsce - murale i nadruki bezpośrednio na ścianach."
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
            bgImage={require("../../image21.jpg")}
            bgImageAlt="tło"
            strength={strength}
          >
            <Element name="home">
              <section className="first-section">
                <RegionalBanner
                  title="Druk ścienny UV w Krakowie"
                  introParagraph={krakowIntroParagraph}
                />
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
                <section aria-label="Technika druku ściennego UV w Krakowie">
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
                <section aria-label="Realizacje druku ściennego">
                  <Gallery mode="preview" />
                </section>
              </Element>
            </Parallax>

            <Parallax
              blur={0}
              bgImage={require("../../image21.jpg")}
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
              blur={0}
              bgImage={require("../../image22.jpg")}
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
              bgImage={require("../../image21.jpg")}
              bgImageAlt="tło"
              strength={strength}
            >
              <Element name="faq">
                <section aria-label="Najczęściej zadawane pytania">
                  <FAQ
                    heading="Najczęściej zadawane pytania"
                    lead="Druk ścienny w Krakowie – najważniejsze informacje przed zamówieniem"
                    items={faqKrakowItems}
                  />
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
