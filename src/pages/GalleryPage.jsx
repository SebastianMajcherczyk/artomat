import React from "react";
import { Helmet } from "react-helmet-async";
import { Footer } from "../components/Footer/Footer";
import Gallery from "../components/Gallery/Gallery";
import SubpageLinks from "../components/SubpageLinks/SubpageLinks";

export default function GalleryPage() {
  return (
    <>
      <Helmet>
        <title>Realizacje druku ściennego - Loftprint</title>
        <meta
          name="description"
          content="Zobacz realizacje Loftprint - nadruki ścienne w biurach, szkołach, lokalach usługowych, obiektach sportowych i wnętrzach prywatnych."
        />
        <link rel="canonical" href="https://loftprint.pl/gallery" />
      </Helmet>

      <main>
        <section className="subpage-intro">
          <h1>Realizacje druku ściennego</h1>
          <p>
            Zobacz realizacje wykonane przez Loftprint bezpośrednio na ścianach
            w biurach, szkołach, lokalach usługowych, obiektach sportowych i
            wnętrzach prywatnych. Kliknij miniaturę, aby otworzyć wybraną
            realizację i obejrzeć zdjęcia oraz filmy.
          </p>
        </section>

        <section>
          <Gallery mode="full" showHeading={false} showLead={false} />
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
              label: "Technika druku",
              to: "/technika",
              description: "Sprawdź, jak wygląda proces druku ściennego UV.",
            },
            {
              label: "Ceny",
              to: "/ceny",
              description: "Zobacz, od czego zależy wycena realizacji.",
            },
          ]}
        />
      </main>
      <Footer />
    </>
  );
}
