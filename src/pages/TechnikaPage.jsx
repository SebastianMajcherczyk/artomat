import React from "react";
import { Helmet } from "react-helmet-async";
import { Footer } from "../components/Footer/Footer";
import Technika from "../components/Technika/Technika";
import SubpageLinks from "../components/SubpageLinks/SubpageLinks";

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
          <Technika mode="full" showHeading={false} />
        </section>

        <SubpageLinks
          title="Co dalej?"
          items={[
            {
              label: "Strona główna",
              to: "/",
              description:
                "Wróć do strony głównej i zobacz najważniejsze sekcje.",
            },
            {
              label: "Realizacje",
              to: "/gallery",
              description:
                "Zobacz przykłady nadruków ściennych w różnych wnętrzach.",
            },
            {
              label: "Ceny",
              to: "/ceny",
              description: "Sprawdź, od czego zależy wycena realizacji.",
            },
          ]}
        />
      </main>
      <Footer />
    </>
  );
}
