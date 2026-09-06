import React from "react";
import { Helmet } from "react-helmet-async";

import { Footer } from "../components/Footer/Footer";
import Ceny from "../components/Ceny/Ceny";
import SubpageLinks from "../components/SubpageLinks/SubpageLinks";

export default function CenyPage() {
  return (
    <>
      <Helmet>
        <title>Ceny druku ściennego UV - Loftprint</title>

        <meta
          name="description"
          content="Zobacz, od czego zależy cena druku ściennego UV. Sprawdź, jak wyceniane są nadruki na ścianach do mieszkań, biur, szkół, lokali usługowych i obiektów sportowych."
        />

        <link rel="canonical" href="https://loftprint.pl/ceny" />

        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Ceny druku ściennego UV - Loftprint"
        />
        <meta
          property="og:description"
          content="Sprawdź, od czego zależy koszt nadruku na ścianie: wielkość grafiki, rodzaj podłoża, biały podkład, lokalizacja i przygotowanie projektu."
        />
        <meta property="og:url" content="https://loftprint.pl/ceny" />
        <meta
          property="og:image"
          content="https://loftprint.pl/social/loftprint-og.webp"
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Ceny druku ściennego UV - Loftprint"
        />
        <meta
          name="twitter:description"
          content="Jak wyceniany jest druk ścienny UV i od czego zależy koszt realizacji?"
        />
        <meta
          name="twitter:image"
          content="https://loftprint.pl/social/loftprint-og.webp"
        />
      </Helmet>

      <main>
        <section className="subpage-intro">
          <h1>Ceny druku ściennego UV</h1>

          <p>
            Koszt realizacji zależy między innymi od wielkości grafiki, rodzaju
            podłoża, stopnia skomplikowania projektu, ewentualnego białego
            podkładu oraz miejsca wykonania nadruku. Tutaj znajdziesz
            najważniejsze informacje o wycenie druku ściennego.
          </p>
        </section>

        <section aria-label="Informacje o cenach druku ściennego UV">
          <Ceny mode="full" showHeading={false} />
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
              description: "Zobacz przykłady wykonanych realizacji Loftprint.",
            },
            {
              label: "Technika druku",
              to: "/technika",
              description: "Sprawdź, jak wygląda proces druku ściennego UV.",
            },
          ]}
        />
      </main>

      <Footer />
    </>
  );
}
