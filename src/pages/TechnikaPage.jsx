import React from "react";
import { Helmet } from "react-helmet-async";
import { Header } from "../components/Header/Header";
import { Footer } from "../components/Footer/Footer";
import Technika from "../components/Technika/Technika";

export default function TechnikaPage() {
  return (
    <>
      <Helmet>
        <title>Technika druku ściennego UV - Loftprint</title>
        <meta
          name="description"
          content="Sprawdź, jak wygląda technika druku ściennego UV, na jakich powierzchniach można drukować i jak przebiega realizacja."
        />
        <link rel="canonical" href="https://loftprint.pl/technika" />
      </Helmet>

      <Header />
      <main>
        <section className="subpage-intro">
          <h1>Technika druku ściennego UV</h1>
          <p>
            Druk ścienny UV pozwala nanosić grafikę bezpośrednio na ścianę,
            beton, cegłę, szkło, drewno i inne powierzchnie. Na tej stronie
            pokazujemy, jak wygląda ten proces w praktyce.
          </p>
        </section>

        <section>
          <Technika />
        </section>
      </main>
      <Footer />
    </>
  );
}
