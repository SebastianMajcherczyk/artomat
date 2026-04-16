import React, { useEffect, useState } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import { AnimatedH2, AnimatedH3 } from "../Styled/StyledHeader";
import "./ForWhom.css";
import { RightSideMotionDiv } from "../Styled/StyledMotionDiv";

const ForWhom = () => {
  const [isSectionVisible, setIsSectionVisible] = useState(false);
  const [hasAnimationPlayed, setHasAnimationPlayed] = useState(false);

  const checkIfSectionIsVisible = () => {
    const section = document.querySelector(".for-whom");
    const bounds = section.getBoundingClientRect();

    const isVisible =
      bounds.top < window.innerHeight / 1.5 &&
      bounds.bottom > window.innerHeight / 1.5;

    return isVisible;
  };

  const handleScroll = () => {
    if (checkIfSectionIsVisible() && !hasAnimationPlayed) {
      setIsSectionVisible(true);
      setHasAnimationPlayed(true);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [hasAnimationPlayed]);

  const [expanded, setExpanded] = useState("panel1");
  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <div className="for-whom-container">
      <AnimatedH2 isSectionVisible={isSectionVisible}>
        Dla kogo jest druk ścienny?
      </AnimatedH2>
      <AnimatedH3 isSectionVisible={isSectionVisible}>
        Ma nieskończenie wiele zastosowań i jest idealnym rozwiązaniem dla:
      </AnimatedH3>
      <RightSideMotionDiv
        isSectionVisible={isSectionVisible}
        className="for-whom"
      >
        {" "}
        <p>
          Oferujemy pracę z innowacyjną technologią, która całkowicie zmieni
          Twoje wyobrażenie i podejście po aranżacji wnętrz. Przenoszenie
          projektów cyfrowych na ściany budynków jeszcze nigdy nie było tak
          proste! Druk ścienny to idealne rozwiązanie dla:
        </p>
        <div className="accordion-container">
          <Accordion
            expanded={expanded === "panel1"}
            onChange={handleChange("panel1")}
            sx={{ backgroundColor: "rgba(255, 255, 255, 0.15)" }}
          >
            <AccordionSummary
              expandIcon={<ArrowDownwardIcon />}
              aria-controls="panel1-content"
              id="panel1-header"
            >
              <h3>Twojej firmy</h3>
            </AccordionSummary>
            <AccordionDetails>
              <p>
                Niezależnie od branży, technologia druku ściennego oferuje
                nieograniczone możliwości kreowania przestrzeni, zamieniając
                biura i siedziby przedsiębiorstw na miejsca jedyne w swoim
                rodzaju. Logo firmy, informacje o produktach czy motywacyjne
                cytaty — to wszystko w parę godzin może zostać przeniesione do
                Twojej firmowej przestrzeni, stając się wyróżnikiem i
                wzmacniając wizerunek marki.
              </p>
            </AccordionDetails>
          </Accordion>
          <Accordion
            expanded={expanded === "panel2"}
            onChange={handleChange("panel2")}
            sx={{ backgroundColor: "rgba(255, 255, 255, 0.15)" }}
          >
            <AccordionSummary
              expandIcon={<ArrowDownwardIcon />}
              aria-controls="panel2-content"
              id="panel2-header"
            >
              <h3>Twojego domu</h3>
            </AccordionSummary>
            <AccordionDetails>
              <p>
                Druk ścienny to idealne rozwiązanie dla każdej osoby pragnącej
                urządzić mieszkanie po swojemu, tak by własne cztery ściany
                odzwierciedlały charakter, pasje i styl domowników. Nasza
                maszyna zamienia puste przestrzenie w inspirujące dzieła sztuki,
                będąc przy tym jakościową, trwałą i estetyczną alternatywą dla
                popularnych tapet lub naklejek. To również dużo lepszy sposób na
                transfer wizji i marzeń Twojej pociechy prosto na ścianę
                dziecięcego pokoju — tusz naszej drukarki jest w 100%
                wodoodporny i suchy zaraz po wykonaniu zlecenia. Umożliwia
                bezproblemowe mycie powierzchni bez zmartwień o trwałość
                naniesionego obrazu.
              </p>
            </AccordionDetails>
          </Accordion>
          <Accordion
            expanded={expanded === "panel3"}
            onChange={handleChange("panel3")}
            sx={{ backgroundColor: "rgba(255, 255, 255, 0.15)" }}
          >
            <AccordionSummary
              expandIcon={<ArrowDownwardIcon />}
              aria-controls="panel3-content"
              id="panel3-header"
            >
              <h3>Właścicieli biznesów w branży HoReCa</h3>
            </AccordionSummary>
            <AccordionDetails>
              <p>
                Dzięki personalizowanym muralom wnętrze lokalu przeobraża się w
                unikalną przestrzeń, której nie sposób zapomnieć. Technologia
                druku umożliwia m.in. stworzenie oryginalnej tapety w pokojach
                hotelowych, naniesienie menu na dowolnie wybrane podłoże,
                skomponowanie tła do zdjęć, które wyróżni Twoje miejsce,
                przyciągając uwagę gości i tworząc niepowtarzalne doświadczenia
                z wizyty.
              </p>
              {/* <div className="whom-image-box">
                <img
                  src={`${process.env.PUBLIC_URL}/For-Whom/dizzy_wall.png`}
                  alt="dizzy_wall"
                  height={200}
                />
                <img
                  src={`${process.env.PUBLIC_URL}/For-Whom/dizzy_girl.png`}
                  alt="dizzy_girl"
                  height={200}
                />
              </div> */}
            </AccordionDetails>
          </Accordion>
          <Accordion
            expanded={expanded === "panel4"}
            onChange={handleChange("panel4")}
            sx={{ backgroundColor: "rgba(255, 255, 255, 0.15)" }}
          >
            <AccordionSummary
              expandIcon={<ArrowDownwardIcon />}
              aria-controls="panel4-content"
              id="panel4-header"
            >
              <h3>Placówek edukacyjnych, szkół, przedszkoli i żłobków</h3>
            </AccordionSummary>
            <AccordionDetails>
              <p>
                Dzięki personalizowanym muralom wnętrze lokalu przeobraża się w
                unikalną przestrzeń, której nie sposób zapomnieć. Technologia
                druku umożliwia m.in. stworzenie oryginalnej tapety w pokojach
                hotelowych, naniesienie menu na dowolnie wybrane podłoże,
                skomponowanie tła do zdjęć, które wyróżni Twoje miejsce,
                przyciągając uwagę gości i tworząc niepowtarzalne doświadczenia
                z wizyty.
              </p>
            </AccordionDetails>
          </Accordion>
          <Accordion
            expanded={expanded === "panel5"}
            onChange={handleChange("panel5")}
            sx={{ backgroundColor: "rgba(255, 255, 255, 0.15)" }}
          >
            <AccordionSummary
              expandIcon={<ArrowDownwardIcon />}
              aria-controls="panel5-content"
              id="panel5-header"
            >
              <h3>Szpitali, przychodni i placówek medycznych</h3>
            </AccordionSummary>
            <AccordionDetails>
              <p>
                Z pomocą druku ściennego mamy możliwość stworzenia kojącego i
                przyjaznego środowiska, tak istotnego dla pacjentów, personelu
                oraz odwiedzających. Delikatne motywy natury, edukacyjne
                infografiki czy ilustracje dedykowane dzieciom to tylko kilka
                propozycji. Wiemy jedno — estetyczna oraz komfortowa przestrzeń
                potrafi mieć pozytywny wpływ na nastrój i samopoczucie, tym
                samym może pozostać miłym wspomnieniem z okresu powrotu do
                zdrowia.
              </p>
            </AccordionDetails>
          </Accordion>
          <Accordion
            expanded={expanded === "panel6"}
            onChange={handleChange("panel6")}
            sx={{ backgroundColor: "rgba(255, 255, 255, 0.15)" }}
          >
            <AccordionSummary
              expandIcon={<ArrowDownwardIcon />}
              aria-controls="panel6-content"
              id="panel6-header"
            >
              <h3>
                Salonów fryzjerskich i kosmetycznych, barberów, studiów tatuażu
                i piercingu
              </h3>
            </AccordionSummary>
            <AccordionDetails>
              <p>
                Unikalnie urządzony, przyciągający uwagę punkt usługowy jest
                tym, co wpływa na niepowtarzalność doświadczenia i ogólny
                pozytywny odbiór wizyty. Druk ścienny może być wykorzystany do
                ozdobienia stanowisk pracy, ścianek działowych lub recepcji —
                wszystko po to, by lokal budził zainteresowanie i tworzył
                niezapomniane wrażenia każdego Klienta.
              </p>
            </AccordionDetails>
          </Accordion>
          <Accordion
            expanded={expanded === "panel7"}
            onChange={handleChange("panel7")}
            sx={{ backgroundColor: "rgba(255, 255, 255, 0.15)" }}
          >
            <AccordionSummary
              expandIcon={<ArrowDownwardIcon />}
              aria-controls="panel7-content"
              id="panel7-header"
            >
              <h3>Klubów i dyskotek</h3>
            </AccordionSummary>
            <AccordionDetails>
              <p>
                Lokal rozrywkowy przyciąga tłumy dzięki swojej niepowtarzalnej,
                elektryzującej atmosferze. Na pozytywne odczucia imprezowiczów
                składa się nie tylko atrakcyjna oferta alkoholowo-gastronomiczne
                oraz muzyka, ale też ogólny wygląd lokalu i wyróżniające go
                elementy. Druk naścienny daje wiele możliwości w zakresie
                kreacji unikalnego wizerunku — projekty mogą tworzyć tematyczne
                przestrzenie wewnątrz klubu, podkreślać wibracje muzyki, a do
                tego spełniać rolę ścianki zdjęciowej, na tle której goście
                chętnie będą upamiętniali swój pełen wrażeń wieczór. Miejsce
                zaaranżowane jako atrakcyjne tło do zdjęć pełni później
                dodatkową funkcję marketingową, kiedy odwiedzający dzielą się
                uwiecznionymi chwilami w swoich social mediach.
              </p>
            </AccordionDetails>
          </Accordion>
          <Accordion
            expanded={expanded === "panel8"}
            onChange={handleChange("panel8")}
            sx={{ backgroundColor: "rgba(255, 255, 255, 0.15)" }}
          >
            <AccordionSummary
              expandIcon={<ArrowDownwardIcon />}
              aria-controls="panel8-content"
              id="panel8-header"
            >
              <h3>Siłowni i klubów fitness</h3>
            </AccordionSummary>
            <AccordionDetails>
              <p>
                Dzięki drukowi ściennemu możemy przekształcić niczym
                niewyróżniającą się siłownię w oryginalny, świetnie prezentujący
                się na zdjęciach klub pełen energii. Odpowiednio dobrane
                projekty zbudują atmosferę przestrzeni treningowej, która
                pobudza do wysiłku i motywuje, by osiągać ambitne cele.
                Personalizowane nadruki z logo, wykonane w klubowej kolorystyce
                podkreślą tożsamość i wyjątkowy charakter miejsca, w którym
                naprawdę przyjemnie jest ćwiczyć!
              </p>
            </AccordionDetails>
          </Accordion>
          <Accordion
            expanded={expanded === "panel9"}
            onChange={handleChange("panel9")}
            sx={{ backgroundColor: "rgba(255, 255, 255, 0.15)" }}
          >
            <AccordionSummary
              expandIcon={<ArrowDownwardIcon />}
              aria-controls="panel9-content"
              id="panel9-header"
            >
              <h3>Klubów sportowych</h3>
            </AccordionSummary>
            <AccordionDetails>
              <p>
                Klubów sportowych Kluby sportowe to miejsca pełne pasji,
                dynamiki i emocji, często łączące zawodników z kibicami. To
                wszystko doskonale można podkreślić, wykorzystując innowacyjną
                technologię druku ściennego. Przestrzeń wypełniona grafikami w
                barwach drużyny, podkreślająca dotychczasowe sukcesy, opatrzona
                projektami zawierającymi logo klubu — te i inne pomysły są na
                wyciągnięcie ręki. W dodatku tematyczne murale budują
                niepowtarzalny klimat zdjęć wykonanych podczas wszelkich
                zawodów, spotkań, imprez sportowych i innych wydarzeń.
              </p>
            </AccordionDetails>
          </Accordion>
          <Accordion
            expanded={expanded === "panel10"}
            onChange={handleChange("panel10")}
            sx={{ backgroundColor: "rgba(255, 255, 255, 0.15)" }}
          >
            <AccordionSummary
              expandIcon={<ArrowDownwardIcon />}
              aria-controls="panel10-content"
              id="panel10-header"
            >
              <h3>Warsztatów i serwisów samochodowych</h3>
            </AccordionSummary>
            <AccordionDetails>
              <p>
                Druk ścienny w krótkim czasie potrafi zamienić zwykłą
                funkcjonalna przestrzeń w wyróżniający się na rynku lokal. Nasze
                projekty przekształcą wnętrza niewielkich serwisów naprawczych
                jak i dużych warsztatów samochodowych w środowisko, które cieszy
                oko, buduje profesjonalny wizerunek marki i sprzyja skutecznej
                obsłudze klientów.
              </p>
            </AccordionDetails>
          </Accordion>
          <Accordion
            expanded={expanded === "panel11"}
            onChange={handleChange("panel11")}
            sx={{ backgroundColor: "rgba(255, 255, 255, 0.15)" }}
          >
            <AccordionSummary
              expandIcon={<ArrowDownwardIcon />}
              aria-controls="panel11-content"
              id="panel11-header"
            >
              <h3>Deweloperów </h3>
            </AccordionSummary>
            <AccordionDetails>
              <p>
                Oryginalne projekty stworzone przy pomocy drukarki naściennej to
                pole do popisu dla deweloperów, chcących podkreślić unikalność
                swojej inwestycji. Nasze projekty pomogą w stworzeniu
                atrakcyjnych przestrzeni, które budują spójny wizerunek marki,
                dodają wartości nieruchomościom oraz przyciągają uwagę
                potencjalnych nabywców. Do tego abstrakcyjne wzory, roślinne
                motywy lub miejskie widoki przeniesione na ścianę inwestycji są
                w stanie zadziwiająco zoptymalizować przestrzeń, optycznie ją
                powiększając bądź tuszując architektoniczne mankamenty.
              </p>
            </AccordionDetails>
          </Accordion>
          <Accordion
            expanded={expanded === "panel15"}
            onChange={handleChange("panel15")}
            sx={{ backgroundColor: "rgba(255, 255, 255, 0.15)" }}
          >
            <AccordionSummary
              expandIcon={<ArrowDownwardIcon />}
              aria-controls="panel15-content"
              id="panel15-header"
            >
              <h3>Każdego...</h3>
            </AccordionSummary>
            <AccordionDetails>
              <p>
                Nadamy kształt Twoim pomysłom i dowolną wizję przeniesiemy na
                ścianę łatwo, sprawnie i bez zbędnego bałaganu. Marzy Ci się
                przestrzeń ze zdjęciem, grafiką, dziełem sztuki czy innym,
                dowolnym obrazem na ścianie? Nie ma problemu!
              </p>
            </AccordionDetails>
          </Accordion>
        </div>
      </RightSideMotionDiv>
    </div>
  );
};
export default ForWhom;
