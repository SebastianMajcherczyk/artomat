import React from "react";
import { Helmet } from "react-helmet-async";
import { Footer } from "../components/Footer/Footer";
import GrafikaNaSciane from "../components/GrafikaNaSciane/GrafikaNaSciane";
import SubpageLinks from "../components/SubpageLinks/SubpageLinks";

export default function InspiracjePage() {
  return (
    <>
      <Helmet>
        <title>Grafika na ścianę – własne zdjęcia, projekty i AI | Loftprint</title>

        <meta
          name="description"
          content="Własne zdjęcie, gotowa grafika czy projekt AI? Sprawdź, jak w Loftprint przygotowujemy obrazy do druku na ścianie i pomagamy stworzyć indywidualny mural."
        />

        <link rel="canonical" href="https://loftprint.pl/inspiracje/" />

        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Grafika na ścianę – własne zdjęcia, projekty i AI | Loftprint"
        />
        <meta
          property="og:description"
          content="Własne zdjęcie, gotowa grafika czy projekt AI? Sprawdź, jak w Loftprint przygotowujemy obrazy do druku na ścianie i pomagamy stworzyć indywidualny mural."
        />
        <meta property="og:url" content="https://loftprint.pl/inspiracje/" />
        <meta
          property="og:image"
          content="https://loftprint.pl/social/loftprint-og.webp"
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Grafika na ścianę – własne zdjęcia, projekty i AI | Loftprint"
        />
        <meta
          name="twitter:description"
          content="Skąd wziąć grafikę do druku ściennego? Własne zdjęcie, bank zdjęć, AI czy indywidualny projekt."
        />
        <meta
          name="twitter:image"
          content="https://loftprint.pl/social/loftprint-og.webp"
        />
      </Helmet>

      <main>
        <section className="subpage-intro">
          <h1>Grafika na ścianę</h1>

          <p>Od własnego zdjęcia i logo firmy po indywidualny projekt.</p>
        </section>

        <section aria-label="Grafika do druku ściennego: źródła i przygotowanie">
          <GrafikaNaSciane />
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
              label: "Technika druku",
              to: "/technika",
              description: "Sprawdź, jak wygląda proces druku ściennego UV.",
            },
            {
              label: "Realizacje",
              to: "/gallery",
              description: "Zobacz przykłady wykonanych realizacji Loftprint.",
            },
            {
              label: "Kontakt",
              to: { pathname: "/", hash: "#kontakt" },
              description: "Napisz do nas i opowiedz o swoim pomyśle.",
            },
          ]}
        />
      </main>

      <Footer />
    </>
  );
}
