import React, { Suspense, useEffect } from "react";
import { scroller } from "react-scroll";
import { Banner } from "./components/Banner/Banner";
import { Header } from "./components/Header/Header";
import { Element } from "react-scroll";
import { Parallax } from "react-parallax";
import { Footer } from "./components/Footer/Footer";

const ForWhom = React.lazy(() => import("./components/ForWhom/ForWhom"));
const Gallery = React.lazy(() => import("./components/Gallery/Gallery"));
const Technika = React.lazy(() => import("./components/Technika/Technika"));
const Ceny = React.lazy(() => import("./components/Ceny/Ceny"));
const Inspiracje = React.lazy(() =>
  import("./components/Inspiracje/Inspiracje")
);
const WallArtVisualizer = React.lazy(() =>
  import("./components/WallArtVisualizer/WallArtVisualizer")
);

const strength = 300;

const AppLazy = () => {
  useEffect(() => {
    const scrollToHash = () => {
      const hash = window.location.hash;
      if (hash) {
        const section = hash.substring(1); // usunięcie # z hash
        scroller.scrollTo(section, {
          duration: 800,
          delay: 0,
          smooth: "easeInOutQuart",
        });
      }
    };

    // Użycie setTimeout, aby upewnić się, że komponenty są w pełni załadowane
    setTimeout(scrollToHash, 500);

    // Nasłuchiwanie na zmianę hash w URL
    window.addEventListener("hashchange", scrollToHash, false);

    return () => {
      window.removeEventListener("hashchange", scrollToHash, false);
    };
  }, []);
  return (
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
          {/* <Parallax
            bgImage={require("../src/image21.jpg")}
            bgImageAlt="tło"
            strength={strength}
          > */}
          <Element name="kontakt" style={{ width: "100%" }}>
            <Footer />
          </Element>
          {/* </Parallax> */}
        </Suspense>
      </div>
    </div>
  );
};

export default AppLazy;
