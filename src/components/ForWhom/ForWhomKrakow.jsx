import React, { useEffect, useState } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import { AnimatedH2, AnimatedH3 } from "../Styled/StyledHeader";
import "./ForWhom.css";
import { RightSideMotionDiv } from "../Styled/StyledMotionDiv";

const ForWhomKrakow = () => {
  const [isSectionVisible, setIsSectionVisible] = useState(false);
  const [hasAnimationPlayed, setHasAnimationPlayed] = useState(false);

  const checkIfSectionIsVisible = () => {
    const section = document.querySelector(".for-whom");
    if (!section) return false;

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
        Dla kogo jest druk ścienny w Krakowie?
      </AnimatedH2>
      <AnimatedH3 isSectionVisible={isSectionVisible}>
        Sprawdza się w firmach, obiektach sportowych i przestrzeniach
        publicznych w Krakowie i Małopolsce
      </AnimatedH3>
      <RightSideMotionDiv
        isSectionVisible={isSectionVisible}
        className="for-whom"
      >
        <p>
          Pracujemy z technologią, która pozwala w krótkim czasie całkowicie
          odmienić wnętrza w Krakowie i okolicach. Druk ścienny umożliwia
          przeniesienie projektu z ekranu komputera bezpośrednio na ścianę – w
          biurze, klubie sportowym, szkole czy obiekcie usługowym. To
          rozwiązanie idealne wszędzie tam, gdzie zależy Ci na mocnym efekcie
          wizualnym bez generalnego remontu.
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
              <h3>Twojej firmy w Krakowie</h3>
            </AccordionSummary>
            <AccordionDetails>
              <p>
                Niezależnie od branży, druk ścienny pozwala zamienić biuro lub
                siedzibę firmy w Krakowie w miejsce, które od progu komunikuje
                charakter marki. Wystarczy jedna dobrze zaprojektowana ściana:
                logo, hasło, grafika produktowa lub wartości firmy mogą w kilka
                godzin pojawić się na recepcji, w sali konferencyjnej lub
                przestrzeni dla pracowników, wzmacniając spójny wizerunek marki.
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
              <h3>Twojego mieszkania lub domu</h3>
            </AccordionSummary>
            <AccordionDetails>
              <p>
                Druk ścienny to świetne rozwiązanie dla osób, które chcą
                urządzić mieszkanie po swojemu – tak, by ściany oddawały
                charakter domowników. Może to być panorama Krakowa, ulubione
                zdjęcie, abstrakcyjny wzór albo motyw do pokoju dziecka. Nadruk
                jest trwały, wodoodporny i suchy od razu po wykonaniu, więc
                ścianę można bez problemu delikatnie myć bez obaw o zniszczenie
                obrazu.
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
              <h3>Biznesów w branży HoReCa</h3>
            </AccordionSummary>
            <AccordionDetails>
              <p>
                Hotele, hostele, restauracje i kawiarnie w Krakowie konkurują
                nie tylko ofertą, ale też klimatem wnętrz. Personalizowane
                murale pozwalają stworzyć zapadające w pamięć pokoje, strefy
                śniadaniowe, ściany przy barze czy miejsca do zdjęć. Druk
                ścienny może zastąpić klasyczną tapetę, pełniąc jednocześnie
                funkcję dekoracji i narzędzia marketingowego – goście chętnie
                fotografują się w ciekawych przestrzeniach i dzielą nimi w
                mediach społecznościowych.
              </p>
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
              <h3>Placówek edukacyjnych: szkół, przedszkoli i żłobków</h3>
            </AccordionSummary>
            <AccordionDetails>
              <p>
                W krakowskich szkołach i przedszkolach druk ścienny pozwala
                zamienić korytarze i sale dydaktyczne w przyjazne, inspirujące
                przestrzenie. Na ścianie można umieścić mapę świata, tablice z
                zasadami, alfabet, bohaterów bajek albo cytaty, które motywują
                uczniów. Taka dekoracja jest trwała, a jednocześnie łatwa do
                odświeżenia w przyszłości, gdy pojawi się potrzeba zmiany
                wystroju.
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
                W przychodniach i szpitalach ważna jest atmosfera spokoju i
                bezpieczeństwa. Druk ścienny pozwala wprowadzić na ściany
                delikatne motywy natury, ilustracje dla dzieci czy czytelne
                infografiki. Estetycznie zaprojektowane wnętrze może poprawiać
                komfort pacjentów i personelu, a jednocześnie pomagać w
                poruszaniu się po obiekcie dzięki spójnemu systemowi oznaczeń.
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
                Salonów fryzjerskich, kosmetycznych, barberów i studiów tatuażu
              </h3>
            </AccordionSummary>
            <AccordionDetails>
              <p>
                W branży beauty i usługowej liczy się pierwsze wrażenie. Druk
                ścienny może podkreślić charakter salonu – od minimalizmu po
                klimat street artu. Oryginalna ściana przy recepcji, w strefie
                oczekiwania albo przy stanowiskach pracy staje się tłem do
                zdjęć, wzmacnia rozpoznawalność marki i pomaga wyróżnić lokal na
                tle innych w Krakowie.
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
              <h3>Klubów i lokali rozrywkowych</h3>
            </AccordionSummary>
            <AccordionDetails>
              <p>
                Klimat klubów i dyskotek w dużej mierze tworzą światło i
                wystrój. Druk ścienny pozwala stworzyć tematyczne strefy – od
                klubowych grafik po motywy nawiązujące do muzyki. Ściana
                zaprojektowana jako ścianka do zdjęć zachęca gości do robienia
                fotek, które później naturalnie promują lokal w social mediach.
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
                Odpowiednio zaprojektowane grafiki wprowadzają energię do
                przestrzeni treningowej. W krakowskich siłowniach druk ścienny
                świetnie sprawdza się przy strefie wolnych ciężarów, cardio czy
                salach fitness. Motywacyjne hasła, dynamiczne sylwetki czy
                klubowe kolory z logotypem pomagają budować społeczność i
                zachęcają klientów do powrotu.
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
                Kluby sportowe to miejsca tworzące silną tożsamość – zarówno dla
                zawodników, jak i kibiców. Druk ścienny pozwala wyeksponować
                barwy klubowe, herb, historię klubu i najważniejsze sukcesy na
                korytarzach, w szatniach, salach konferencyjnych czy strefach
                VIP. Murale w klubowych barwach tworzą świetne tło dla zdjęć z
                meczów i wydarzeń, budując rozpoznawalny wizerunek drużyny.
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
                W warsztatach i serwisach samochodowych druk ścienny pomaga
                uporządkować przestrzeń i nadać jej profesjonalny charakter.
                Ściana z logotypem, strefa przyjęcia klientów, grafiki z
                ikonografią motoryzacyjną czy czytelne oznaczenia stanowisk
                sprawiają, że miejsce prezentuje się nowocześnie i budzi większe
                zaufanie klientów.
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
              <h3>Deweloperów i inwestycji mieszkaniowych</h3>
            </AccordionSummary>
            <AccordionDetails>
              <p>
                Dla deweloperów druk ścienny jest narzędziem do wyróżnienia
                inwestycji – zarówno na wizualizacjach mieszkań pokazowych, jak
                i w częściach wspólnych: holach, klatkach schodowych czy
                garażach. Murale mogą budować spójny charakter osiedla,
                optycznie powiększać przestrzeń i dodawać jej prestiżu, co
                doceniają potencjalni nabywcy mieszkań.
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
              <h3>Każdego, kto chce odmienić ściany</h3>
            </AccordionSummary>
            <AccordionDetails>
              <p>
                Jeżeli masz pomysł na ścianę w Krakowie lub Małopolsce – my
                pomożemy zamienić go w gotowy nadruk. Może to być zdjęcie,
                grafika, dzieło sztuki, cytat albo zupełnie autorski projekt.
                Druk ścienny pozwala w prosty i czysty sposób przejść od wizji
                do realizacji, bez tygodniowego remontu i bałaganu.
              </p>
            </AccordionDetails>
          </Accordion>
        </div>
      </RightSideMotionDiv>
    </div>
  );
};

export default ForWhomKrakow;
