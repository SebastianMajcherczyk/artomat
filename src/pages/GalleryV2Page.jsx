import React from "react";
import { Helmet } from "react-helmet-async";
import { useNavigate, useParams } from "react-router-dom";
import { Footer } from "../components/Footer/Footer";
import GalleryV2 from "../components/GalleryV2/GalleryV2";
import SubpageLinks from "../components/SubpageLinks/SubpageLinks";
import { projects } from "../components/Gallery/Gallery-data";

const BASE_TITLE = "Realizacje druku ściennego UV - Loftprint";
const BASE_DESCRIPTION =
  "Zobacz realizacje Loftprint - druk ścienny UV, murale i nadruki bezpośrednio na ścianach w biurach, szkołach, lokalach usługowych, obiektach sportowych i wnętrzach prywatnych.";

export default function GalleryV2Page() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const activeProject = slug ? projects.find((p) => p.slug === slug) : null;

  const pageTitle = activeProject
    ? `${activeProject.title.trim()} - Realizacja druku ściennego UV - Loftprint`
    : BASE_TITLE;
  const canonical = activeProject
    ? `https://loftprint.pl/gallery/${activeProject.slug}/`
    : "https://loftprint.pl/gallery/";

  return (
    <>
      <Helmet>
        <title>{pageTitle}</title>
        <meta name="description" content={BASE_DESCRIPTION} />
        <link rel="canonical" href={canonical} />

        <meta property="og:type" content="website" />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={BASE_DESCRIPTION} />
        <meta property="og:url" content={canonical} />
        <meta
          property="og:image"
          content="https://loftprint.pl/social/loftprint-og.webp"
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={pageTitle} />
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
          <GalleryV2
            projects={projects}
            activeProject={activeProject}
            onClose={() => navigate("/gallery")}
          />
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
