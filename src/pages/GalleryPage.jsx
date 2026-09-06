import React from "react";
import { Helmet } from "react-helmet-async";
import { Footer } from "../components/Footer/Footer";
import Gallery from "../components/Gallery/Gallery";
import SubpageLinks from "../components/SubpageLinks/SubpageLinks";

export default function GalleryPage() {
  return (
    <>
      <Helmet>
        <title>Realizacje druku ściennego UV - Loftprint</title>

        <meta
          name="description"
          content="Zobacz realizacje Loftprint - druk ścienny UV, murale i nadruki bezpośrednio na ścianach w biurach, szkołach, lokalach usługowych, obiektach sportowych i wnętrzach prywatnych."
        />

        <link rel="canonical" href="https://loftprint.pl/gallery" />

        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Realizacje druku ściennego UV - Loftprint"
        />
        <meta
          property="og:description"
          content="Galeria realizacji Loftprint: murale i nadruki UV drukowane bezpośrednio na ścianach w firmach, szkołach, lokalach usługowych i wnętrzach prywatnych."
        />
        <meta property="og:url" content="https://loftprint.pl/gallery" />
        <meta
          property="og:image"
          content="https://loftprint.pl/social/loftprint-og.webp"
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Realizacje druku ściennego UV - Loftprint"
        />
        <meta
          name="twitter:description"
          content="Zobacz przykłady murali i nadruków UV drukowanych bezpośrednio na ścianach."
        />
        <meta
          name="twitter:image"
          content="https://loftprint.pl/social/loftprint-og.webp"
        />
      </Helmet>

      <main>
        <section className="subpage-intro">
          <h1>Realizacje druku ściennego UV</h1>

          <p>
            Zobacz realizacje wykonane przez Loftprint bezpośrednio na ścianach
            w biurach, szkołach, lokalach usługowych, obiektach sportowych i
            wnętrzach prywatnych. Kliknij miniaturę, aby otworzyć wybraną
            realizację i obejrzeć zdjęcia oraz filmy.
          </p>
        </section>

        <section aria-label="Galeria realizacji druku ściennego">
          <Gallery mode="full" showHeading={false} showLead={false} />
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
              label: "Ceny",
              to: "/ceny",
              description: "Zobacz, od czego zależy wycena realizacji.",
            },
            {
              label: "Opinie klientów",
              to: { pathname: "/", hash: "#opinie" },
              description: "Zobacz, co mówią o nas klienci na Google.",
            },
          ]}
        />
      </main>

      <Footer />
    </>
  );
}
