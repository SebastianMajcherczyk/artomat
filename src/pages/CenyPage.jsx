import React from "react";
import { Helmet } from "react-helmet-async";
import { Header } from "../components/Header/Header";
import { Footer } from "../components/Footer/Footer";
import Ceny from "../components/Ceny/Ceny";

export default function CenyPage() {
  return (
    <>
      <Helmet>
        <title>Ceny druku ściennego - Loftprint</title>
        <meta
          name="description"
          content="Zobacz, od czego zależy cena druku ściennego UV i jak wyceniane są realizacje dla mieszkań, biur, szkół i lokali usługowych."
        />
        <link rel="canonical" href="https://loftprint.pl/ceny" />
      </Helmet>

      <Header />
      <main>
        <section className="subpage-intro">
          <h1>Ceny druku ściennego</h1>
          <p>
            Koszt realizacji zależy między innymi od wielkości grafiki, rodzaju
            podłoża, stopnia skomplikowania projektu oraz miejsca montażu. Tutaj
            znajdziesz najważniejsze informacje o wycenie.
          </p>
        </section>

        <section>
          <Ceny />
        </section>
      </main>
      <Footer />
    </>
  );
}
