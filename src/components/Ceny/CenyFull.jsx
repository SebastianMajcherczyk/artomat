import React from "react";
import { Link as RouterLink } from "react-router-dom";
import "./CenyFull.css";
import {
  LeftSideMotionDiv,
  RightSideMotionDiv,
} from "../Styled/StyledMotionDiv";
import { AnimatedH2, AnimatedH3 } from "../Styled/StyledHeader";
import FAQ from "../FAQ/FAQ";

// Pełna treść podstrony /ceny, dostarczona przez użytkownika (listopad
// 2026). Renderowana zawsze w pełni widoczna (isSectionVisible stałe true),
// tak jak TechnikaFull.jsx i GrafikaNaSciane.jsx - to podstrona, nie sekcja
// homepage'owa wjeżdżająca przy scrollu.
const isSectionVisible = true;

const standardChecklist = [
  "gładka lub stosunkowo równa ściana",
  "odpowiednio przygotowane i stabilne podłoże",
  "swobodny dostęp do miejsca wykonywania nadruku",
  "możliwość ustawienia i wypoziomowania urządzenia bez dodatkowych konstrukcji",
  "standardowa wysokość i lokalizacja nadruku",
  "grafika dostarczona w jakości pozwalającej na jej przygotowanie do druku",
];

const higherPriceCases = [
  {
    title: "Nierówne lub nietypowe podłoże",
    text: "Cegła, mocno strukturalny tynk, głębokie nierówności lub inne nietypowe powierzchnie mogą wymagać prób, dodatkowego przygotowania albo wolniejszej pracy.",
  },
  {
    title: "Ściany przy schodach",
    text: "Jeżeli podłoże pod urządzeniem znajduje się na różnych poziomach, konieczne może być wykonanie odpowiedniego podestu lub innego sposobu bezpiecznego ustawienia drukarki.",
  },
  {
    title: "Utrudniony dostęp do ściany",
    text: "Stała zabudowa, instalacje, barierki, urządzenia techniczne lub inne elementy znajdujące się bezpośrednio przed ścianą mogą wymagać dodatkowego przygotowania stanowiska.",
  },
  {
    title: "Druk wymagający podestu lub rusztowania",
    text: "W niektórych realizacjach dostęp do powierzchni wymaga wykonania dodatkowej konstrukcji, podestu lub zastosowania rusztowania. Takie elementy są uwzględniane indywidualnie w wycenie.",
  },
  {
    title: "Nietypowe powierzchnie",
    text: (
      <>
        Druk na szkle, metalu, drewnie czy niektórych powłokach malarskich
        może wymagać wcześniejszych testów przyczepności, zastosowania
        odpowiedniego primera lub dodatkowego zabezpieczenia gotowego
        nadruku. Więcej o tym, na jakich powierzchniach drukujemy, znajdziesz
        na stronie o{" "}
        <RouterLink to="/technika">technice druku ściennego</RouterLink>.
      </>
    ),
  },
];

const priceFactors = [
  {
    name: "Powierzchnia nadruku",
    text: "Podstawowa cena liczona jest za metr kwadratowy grafiki.",
  },
  {
    name: "Kolor ściany",
    text: "Na jasnych powierzchniach zazwyczaj wystarcza druk CMYK. Ciemna ściana może wymagać dodatkowej warstwy białego atramentu.",
  },
  {
    name: "Rodzaj podłoża",
    text: "Standardowa pomalowana ściana jest najprostszym przypadkiem. Cegła, beton, drewno, szkło lub metal mogą wymagać dodatkowego przygotowania.",
  },
  {
    name: "Dostęp do miejsca druku",
    text: "Im łatwiejsze ustawienie urządzenia przy ścianie, tym prostsza realizacja.",
  },
  {
    name: "Przygotowanie grafiki",
    text: (
      <>
        Gotowy plik dobrej jakości możemy stosunkowo szybko przygotować do
        druku. Jeśli projekt wymaga retuszu, rekonstrukcji, przygotowania
        grafiki od podstaw lub bardziej rozbudowanych prac graficznych,
        ustalamy ich zakres indywidualnie - zobacz, jak pomagamy{" "}
        <RouterLink to="/inspiracje">wybrać i przygotować grafikę</RouterLink>
        .
      </>
    ),
  },
  {
    name: "Lokalizacja",
    text: "Na terenie Krakowa i w jego bezpośrednim sąsiedztwie dojazd jest bezpłatny. Przy dalszych realizacjach do wyceny doliczamy rzeczywiste koszty dojazdu.",
  },
];

const standardExamples = [
  { size: "2 × 1,5 m (3 m²)", price: "900 zł netto" },
  { size: "3 × 2 m (6 m²)", price: "1800 zł netto" },
  { size: "5 × 2 m (10 m²)", price: "3000 zł netto" },
];

const whiteBaseExamples = [
  { size: "2 × 1,5 m (3 m²)", price: "1200 zł netto" },
  { size: "3 × 2 m (6 m²)", price: "2400 zł netto" },
  { size: "5 × 2 m (10 m²)", price: "4000 zł netto" },
];

const quoteChecklist = [
  "wymiary planowanego nadruku",
  "zdjęcie całej ściany oraz jej najbliższego otoczenia",
  "miejscowość realizacji",
  "informacja o rodzaju powierzchni i użytej farbie, jeśli jest znana",
  "grafika lub krótka informacja o tym, co ma znaleźć się na ścianie",
];

const faqItems = [
  {
    question: "Czy cena druku ściennego zawsze liczona jest za metr kwadratowy?",
    answer:
      "W standardowych realizacjach jest to podstawowy sposób obliczania ceny. Przy nietypowych ścianach, trudnym dostępie lub dodatkowych pracach technicznych przygotowujemy wycenę indywidualną.",
  },
  {
    question: "Czy ciemna ściana zwiększa cenę?",
    answer:
      "Najczęściej tak. Na ciemnym podłożu stosujemy biały atrament tworzący podkład pod właściwe kolory grafiki. Cena takiego nadruku wynosi standardowo 400 zł netto za m².",
  },
  {
    question: "Czy muszę wcześniej przygotować ścianę?",
    answer:
      "Ściana powinna być stabilna, czysta i odpowiednio przygotowana do druku. Jeżeli nie masz pewności, czy istniejąca powierzchnia nadaje się do wykonania nadruku, prześlij nam jej zdjęcie oraz informację, jaką farbą została pomalowana.",
  },
  {
    question: "Czy wykonujecie małe nadruki?",
    answer:
      "Tak. Nie ma technicznej przeszkody, aby wykonać niewielką grafikę, logo lub napis. Obowiązuje jednak minimalna wartość zamówienia wynosząca 800 zł netto.",
  },
  {
    question: "Czy można wycenić nadruk tylko na podstawie zdjęcia?",
    answer:
      "W wielu przypadkach tak. Zdjęcie ściany, jej wymiary i podstawowe informacje o planowanej grafice zazwyczaj wystarczają do przygotowania wiarygodnej wyceny.",
  },
];

const CenyFull = () => {
  return (
    <div className="cf-container">
      {/* 1. Stawki podstawowe */}
      <LeftSideMotionDiv isSectionVisible={isSectionVisible} className="cf-block">
        <p>
          Na ostateczny koszt mogą jednak wpływać także rodzaj i stan
          podłoża, dostęp do ściany, lokalizacja oraz sposób przygotowania
          grafiki. Poniżej wyjaśniamy, kiedy obowiązuje standardowa cena
          druku ściennego i w jakich sytuacjach wycena może wymagać
          indywidualnego podejścia.
        </p>

        <AnimatedH2 isSectionVisible={isSectionVisible}>
          Ile kosztuje druk ścienny?
        </AnimatedH2>

        <div className="cf-price-grid">
          <div className="cf-price-card">
            <h4>Druk CMYK na jasnej ścianie</h4>
            <span className="cf-price-value">300 zł</span>
            <span className="cf-price-unit">netto / m²</span>
            <ul className="cf-price-vat">
              <li>324 zł brutto przy stawce VAT 8%</li>
              <li>369 zł brutto przy stawce VAT 23%</li>
            </ul>
          </div>

          <div className="cf-price-card">
            <h4>Druk CMYK + biały podkład</h4>
            <span className="cf-price-value">400 zł</span>
            <span className="cf-price-unit">netto / m²</span>
            <p className="cf-price-note">
              Stosujemy przede wszystkim przy druku na ciemnych i
              intensywnie kolorowych powierzchniach.
            </p>
            <ul className="cf-price-vat">
              <li>432 zł brutto przy stawce VAT 8%</li>
              <li>492 zł brutto przy stawce VAT 23%</li>
            </ul>
          </div>
        </div>

        <p className="cf-callout">
          <strong>Minimalna wartość zamówienia: 800 zł netto.</strong>
        </p>

        <p>
          Stawka VAT 8% może mieć zastosowanie przy realizacji w lokalu
          mieszkalnym spełniającym odpowiednie warunki. W pozostałych
          przypadkach stosowana jest stawka VAT 23%.
        </p>
      </LeftSideMotionDiv>

      {/* 2. Co obejmuje standardowa cena */}
      <RightSideMotionDiv
        isSectionVisible={isSectionVisible}
        className="cf-block cf-block--dark"
      >
        <AnimatedH2 isSectionVisible={isSectionVisible}>
          Co obejmuje standardowa cena?
        </AnimatedH2>
        <p>
          Podane wyżej ceny dotyczą typowych realizacji, czyli przede
          wszystkim nadruku na przygotowanej ścianie, do której możemy
          swobodnie ustawić urządzenie i przeprowadzić druk w standardowych
          warunkach.
        </p>
        <p>Najczęściej jest to:</p>
        <ul className="cf-checklist cf-checklist--check">
          {standardChecklist.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        <p>
          W takich warunkach bardzo często koszt można policzyć po prostu na
          podstawie powierzchni grafiki.
        </p>
      </RightSideMotionDiv>

      {/* 3. Kiedy cena może być wyższa */}
      <LeftSideMotionDiv isSectionVisible={isSectionVisible} className="cf-block">
        <AnimatedH2 isSectionVisible={isSectionVisible}>
          Kiedy cena druku ściennego może być wyższa?
        </AnimatedH2>
        <p>
          Nie każda ściana znajduje się w pustym, prostokątnym pomieszczeniu.
          Drukujemy również w miejscach, które wymagają dodatkowego
          przygotowania technicznego.
        </p>
        <p>Indywidualnej wyceny mogą wymagać między innymi:</p>

        {higherPriceCases.map((c) => (
          <React.Fragment key={c.title}>
            <AnimatedH3 isSectionVisible={isSectionVisible}>
              {c.title}
            </AnimatedH3>
            <p>{c.text}</p>
          </React.Fragment>
        ))}

        <p>
          Nietypowa ściana nie oznacza więc, że nadruku nie da się wykonać.
          Oznacza jedynie, że przed podaniem ceny musimy sprawdzić warunki
          realizacji.
        </p>
      </LeftSideMotionDiv>

      {/* 4. Co wpływa na cenę */}
      <RightSideMotionDiv
        isSectionVisible={isSectionVisible}
        className="cf-block cf-block--dark"
      >
        <AnimatedH2 isSectionVisible={isSectionVisible}>
          Co wpływa na cenę druku na ścianie?
        </AnimatedH2>
        <p>Największy wpływ na koszt mają:</p>

        <div className="cf-factors-grid">
          {priceFactors.map((f) => (
            <div className="cf-factor-card" key={f.name}>
              <h4>{f.name}</h4>
              <p>{f.text}</p>
            </div>
          ))}
        </div>
      </RightSideMotionDiv>

      {/* 5. Przykładowe ceny */}
      <LeftSideMotionDiv isSectionVisible={isSectionVisible} className="cf-block">
        <AnimatedH2 isSectionVisible={isSectionVisible}>
          Przykładowe ceny nadruków
        </AnimatedH2>
        <p>Dla standardowej, jasnej ściany i łatwego dostępu:</p>

        <div className="cf-example-grid">
          <div className="cf-example-group">
            <h4>Druk standardowy</h4>
            {standardExamples.map((row) => (
              <div className="cf-example-row" key={row.size}>
                <span className="cf-example-size">{row.size}</span>
                <span className="cf-example-price">{row.price}</span>
              </div>
            ))}
          </div>

          <div className="cf-example-group">
            <h4>Druk z białym podkładem</h4>
            {whiteBaseExamples.map((row) => (
              <div className="cf-example-row" key={row.size}>
                <span className="cf-example-size">{row.size}</span>
                <span className="cf-example-price">{row.price}</span>
              </div>
            ))}
          </div>
        </div>

        <p>
          Są to przykładowe kalkulacje dla standardowych warunków.
          Ostateczną cenę potwierdzamy przed realizacją.
        </p>
      </LeftSideMotionDiv>

      {/* 6. Dojazd */}
      <RightSideMotionDiv
        isSectionVisible={isSectionVisible}
        className="cf-block cf-block--dark"
      >
        <AnimatedH2 isSectionVisible={isSectionVisible}>
          Ile kosztuje dojazd?
        </AnimatedH2>
        <p>
          Dojazd na terenie Krakowa i w jego bezpośrednim sąsiedztwie jest
          bezpłatny.
        </p>
        <p>
          Realizujemy nadruki również w innych częściach Polski. W takim
          przypadku koszt transportu ustalamy na podstawie rzeczywistych
          kosztów dotarcia na miejsce i podajemy go od razu w przygotowanej
          wycenie.
        </p>
      </RightSideMotionDiv>

      {/* 7. Jak otrzymać wycenę */}
      <div className="cf-block">
        <AnimatedH2 isSectionVisible={isSectionVisible}>
          Jak otrzymać dokładną wycenę?
        </AnimatedH2>
        <p>W większości przypadków nie potrzebujemy wizji lokalnej.</p>
        <p>Do wstępnej wyceny wystarczą:</p>
        <ul className="cf-checklist cf-checklist--check">
          {quoteChecklist.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        <p>
          Na tej podstawie możemy ocenić zarówno koszt nadruku, jak i
          ewentualne dodatkowe wymagania techniczne.
        </p>
      </div>

      {/* 8. FAQ */}
      <div className="cf-block cf-block--dark">
        <FAQ
          heading="Najczęściej zadawane pytania"
          lead="Krótkie odpowiedzi o zasadach wyceny druku ściennego"
          items={faqItems}
          animated={false}
        />
      </div>

      {/* 9. CTA */}
      <div className="cf-cta">
        <h2>Chcesz poznać cenę swojego nadruku?</h2>
        <p>
          Wyślij nam zdjęcie ściany, jej wymiary oraz informację, co
          chciałbyś na niej wydrukować. W większości przypadków to
          wystarczy, żebyśmy mogli przygotować konkretną wycenę.
        </p>
        <RouterLink
          to={{ pathname: "/", hash: "#kontakt" }}
          className="cf-cta-button"
        >
          Napisz do nas po wycenę
        </RouterLink>
      </div>
    </div>
  );
};

export default CenyFull;
