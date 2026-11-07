import { Link as RouterLink } from "react-router-dom";
import "./TechnikaPreview.css";
import {
  LeftSideMotionDiv,
  RightSideMotionDiv,
  BottomSideMotionDiv,
} from "../Styled/StyledMotionDiv";
import { AnimatedH2, AnimatedH3 } from "../Styled/StyledHeader";
import useSectionReveal from "../../hooks/useSectionReveal";

const tech = process.env.PUBLIC_URL + "/TechnikaImg";

const features = [
  {
    title: "Duży format, bez łączenia brytów",
    image: {
      src: `${tech}/max_size.webp`,
      alt: "Maksymalna wysokość nadruku do 4 metrów, szerokość praktycznie bez ograniczeń",
    },
    content: (
      <>
        <p>
          Maksymalna wysokość nadruku to 4 metry, a szerokość jest
          praktycznie nieograniczona. Drukarka przemieszcza się wzdłuż ściany
          po systemie szyn, stopniowo nanosząc kolejne fragmenty obrazu.
        </p>
        <p>
          Technologia sprawdza się zarówno przy niewielkich logotypach w
          firmowych recepcjach, jak i rozbudowanych kompozycjach w hotelach,
          szkołach czy obiektach użyteczności publicznej. Przykładem jest
          wykonany przez nas w Krakowie panoramiczny mural o szerokości
          ponad 8 metrów, przedstawiający Smoka Wawelskiego i symbole
          miasta.
        </p>
      </>
    ),
  },
  {
    title: "Marginesy potrzebne do pracy drukarki",
    image: {
      src: `${tech}/margins.webp`,
      alt: "Minimalne marginesy robocze drukarki wokół nadruku",
    },
    content: (
      <>
        <p>
          Drukarka potrzebuje odpowiedniej przestrzeni roboczej, dlatego
          nadruk nie może dochodzić bezpośrednio do sufitu, podłogi ani
          bocznych przeszkód. Przy standardowych warunkach należy uwzględnić
          następujące minimalne marginesy:
        </p>
        <ul>
          <li>31 cm od podłogi</li>
          <li>31 cm od sufitu</li>
          <li>15 cm od lewej strony</li>
          <li>15 cm od prawej strony</li>
        </ul>
        <p>
          W przypadku wnęk, skosów, schodów lub innych nietypowych elementów
          architektonicznych możliwości wykonania nadruku oceniamy
          indywidualnie.
        </p>
      </>
    ),
  },
  {
    title: "Nie tylko biała, idealnie gładka ściana",
    content: (
      <>
        <p>
          Druk ścienny wykonujemy na typowych powierzchniach malowanych, ale
          również na betonie, cegle, drewnie i wielu innych materiałach.
          Odpowiednio dobrana technologia pozwala wykorzystać naturalną
          fakturę podłoża jako element kompozycji.
        </p>
        <p>
          Ma to szczególne znaczenie przy aranżacji loftów, lokali
          usługowych czy wnętrz krakowskich kamienic, gdzie oryginalna
          struktura ściany może dodatkowo podkreślić charakter grafiki.
        </p>
        <p>
          Możemy drukować także na ścianach ciemnych i intensywnie
          kolorowych. W takich przypadkach stosujemy biały poddruk, który
          pozwala zachować odpowiednią intensywność i czytelność kolorów.
        </p>
      </>
    ),
  },
  {
    title: "Nadruk nie musi być prostokątem",
    content: (
      <>
        <p>
          W przeciwieństwie do tradycyjnej fototapety druk bezpośredni nie
          wymaga zamknięcia projektu w prostokątnym formacie. Grafika może
          mieć nieregularny obrys, składać się z oddzielnych elementów lub
          stopniowo zanikać, płynnie łącząc się z kolorem ściany.
        </p>
        <p>
          Daje to dużą swobodę projektowania, od dyskretnych dekoracji po
          rozbudowane kompozycje łączące logotypy, fotografie, ilustracje i
          elementy architektury wnętrza.
        </p>
      </>
    ),
  },
  {
    title: "Technologia to tylko część dobrej realizacji",
    content: (
      <>
        <p>
          O jakości i trwałości nadruku decyduje nie tylko sama drukarka.
          Równie istotne są rodzaj i stan podłoża, kolor ściany,
          przygotowanie grafiki oraz właściwe zastosowanie białego poddruku.
        </p>
        <p>
          Dlatego przed realizacją analizujemy warunki techniczne i pomagamy
          dopasować projekt do konkretnego miejsca. W przypadku nietypowych
          powierzchni możemy wykonać próbę przyczepności lub sprawdzić
          wybrane rozwiązania przed rozpoczęciem właściwego druku.
        </p>
      </>
    ),
  },
];

const TechnikaPreviewKrakow = () => {
  const [sectionRef, isSectionVisible] = useSectionReveal();

  return (
    <div className="technika-preview-container" ref={sectionRef}>
      <AnimatedH2 isSectionVisible={isSectionVisible}>Technika</AnimatedH2>

      <AnimatedH3 isSectionVisible={isSectionVisible}>
        Druk ścienny UV w Krakowie. Technologia, która daje nowe możliwości
      </AnimatedH3>

      <LeftSideMotionDiv
        isSectionVisible={isSectionVisible}
        className="technika-preview"
      >
        <div className="technika-preview-card">
          <p>
            Druk ścienny UV pozwala przenosić zdjęcia, grafiki, ilustracje,
            napisy i logotypy bezpośrednio na powierzchnię ściany, bez
            konieczności stosowania tapet, folii czy innych materiałów
            pośrednich.
          </p>
          <p>
            W Loftprint wykorzystujemy dwie profesjonalne drukarki wallPen,
            zaprojektowane i produkowane w Niemczech. Dzięki precyzyjnej
            mechanice, laserowej kontroli odległości od podłoża i
            przemysłowym głowicom Ricoh możemy wykonywać zarówno niewielkie
            dekoracje, jak i wielkoformatowe murale o wysokiej
            szczegółowości.
          </p>
          <p>
            Dysponując dwiema maszynami, możemy elastyczniej planować
            terminy, realizować zlecenia równolegle i sprawniej obsługiwać
            większe projekty na terenie Krakowa i Małopolski.
          </p>
        </div>
      </LeftSideMotionDiv>

      <RightSideMotionDiv
        isSectionVisible={isSectionVisible}
        className="technika-preview-grid-wrap"
      >
        <div className="technika-preview-grid">
          {features.map((f) => (
            <div className="technika-preview-feature" key={f.title}>
              {f.image && (
                <img
                  src={f.image.src}
                  alt={f.image.alt}
                  loading="lazy"
                  className="technika-preview-feature-image"
                />
              )}
              <h4>{f.title}</h4>
              {f.content}
            </div>
          ))}
        </div>
      </RightSideMotionDiv>

      <BottomSideMotionDiv
        isSectionVisible={isSectionVisible}
        className="technika-preview-box"
      >
        <div className="technika-preview-card">
          <p>
            Planujesz druk ścienny w Krakowie lub okolicach? Poznaj
            szczegółowe możliwości technologii i sprawdź, jak przygotować
            ścianę do nadruku.
          </p>

          <div className="technika-preview-actions">
            <RouterLink
              to="/technika"
              className="technika-preview-link primary"
            >
              Poznaj technikę druku ściennego →
            </RouterLink>
          </div>
        </div>
      </BottomSideMotionDiv>
    </div>
  );
};

export default TechnikaPreviewKrakow;
