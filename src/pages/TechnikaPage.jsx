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
          content="Sprawdź, jak działa druk ścienny UV, na jakich powierzchniach można drukować, jakie są ograniczenia techniczne i jak przebiega realizacja nadruku na ścianie."
        />

        <link rel="canonical" href="https://loftprint.pl/technika" />

        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Technika druku ściennego UV - Loftprint"
        />
        <meta
          property="og:description"
          content="Zobacz, jak wygląda drukowanie grafiki bezpośrednio na ścianie, betonie, cegle, szkle, drewnie i innych powierzchniach."
        />
        <meta property="og:url" content="https://loftprint.pl/technika" />
        <meta
          property="og:image"
          content="https://loftprint.pl/social/loftprint-og.webp"
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Technika druku ściennego UV - Loftprint"
        />
        <meta
          name="twitter:description"
          content="Jak działa druk ścienny UV i na jakich powierzchniach można wykonać nadruk?"
        />
        <meta
          name="twitter:image"
          content="https://loftprint.pl/social/loftprint-og.webp"
        />
      </Helmet>

      <main>
        <section className="subpage-intro">
          <h1>Technika druku ściennego UV</h1>

          <p>
            Druk ścienny UV pozwala nanosić grafikę bezpośrednio na ścianę,
            beton, cegłę, szkło, drewno i inne powierzchnie. Na tej stronie
            pokazujemy, jak wygląda ten proces w praktyce, jakie są możliwości
            technologii i z jakimi ograniczeniami trzeba się liczyć przed
            realizacją.
          </p>
        </section>

        <section aria-label="Informacje techniczne o druku ściennym UV">
          <Technika mode="full" showHeading={false} />
        </section>

        <SubpageLinks
          title="Co dalej?"
          items={[
            {
              label: "Strona główna",
              to: "/",
              description:
                "Wróć do strony głównej i zobacz najważniejsze informacje.",
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
