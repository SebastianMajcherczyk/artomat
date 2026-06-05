import React from "react";
import { Helmet } from "react-helmet-async";
import { Header } from "../components/Header/Header";
import { Footer } from "../components/Footer/Footer";
import Gallery from "../components/Gallery/Gallery";

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

      <Header />
      <main>
        <section className="subpage-intro">
          <h1>Realizacje druku ściennego</h1>
          <p>
            Prezentujemy wybrane realizacje wykonane bezpośrednio na ścianach.
            To przykłady zastosowań w różnych wnętrzach i na różnych typach
            powierzchni.
          </p>
        </section>

        <section>
          <Gallery mode="full" />
          <Gallery mode="full" />
        </section>
      </main>
      <Footer />
    </>
  );
}
