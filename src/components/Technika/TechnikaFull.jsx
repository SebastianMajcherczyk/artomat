import React from "react";
import "./TechnikaFull.css";
import {
  LeftSideMotionDiv,
  RightSideMotionDiv,
} from "../Styled/StyledMotionDiv";
import { AnimatedH2, AnimatedH3 } from "../Styled/StyledHeader";
import FAQ from "../FAQ/FAQ";

// Pełna, rozbudowana treść podstrony /technika (tekst dostarczony przez
// użytkownika, październik 2026). Renderowana zawsze w pełni widoczna
// (isSectionVisible stałe true) — to podstrona, nie sekcja homepage'owa
// wjeżdżająca przy scrollu, więc nie potrzebuje logiki scroll-trigger jak
// Technika.jsx (który dalej obsługuje skróconą wersję na stronie głównej
// i /druk-scienny-krakow — ta treść jest z nim celowo niepowiązana).
const isSectionVisible = true;

const tech = process.env.PUBLIC_URL + "/TechnikaImg";

const materials = [
  {
    name: "Pomalowana ściana",
    text: (
      <>
        To najczęstsze podłoże. Może być gładkie albo posiadać wyraźną
        strukturę. W przypadku standardowych farb ściennych realizacja zazwyczaj
        nie wymaga dodatkowych zabiegów. Znaczenie ma natomiast stan powłoki.
        Atrament może być związany z powierzchnią tylko tak dobrze, jak sama
        farba związana jest ze ścianą.
      </>
    ),
  },
  {
    name: "Beton",
    text: (
      <>
        Beton bardzo dobrze współgra z projektami industrialnymi,
        architektonicznymi, technicznymi i typograficznymi. Nie zawsze warto
        zakrywać jego charakter. Często właśnie pozostawienie widocznej
        struktury daje najlepszy efekt.
      </>
    ),
  },
  {
    name: "Cegła",
    text: (
      <>
        Możliwy jest również druk na cegle. Grafika nie przykrywa fizycznej
        struktury muru, dlatego fugi i nierówności stają się częścią obrazu.
        Przy bardzo głębokich spoinach lub mocno nieregularnej powierzchni
        wcześniej oceniamy możliwości realizacji.
      </>
    ),
  },
  {
    name: "Drewno i materiały drewnopochodne",
    text: (
      <>
        Możemy pracować również z drewnem i wieloma materiałami
        drewnopochodnymi. Znaczenie ma sposób wykończenia powierzchni. Surowe
        drewno zachowuje się inaczej niż płyta lakierowana, laminowana czy
        zabezpieczona olejem.
      </>
    ),
  },
  {
    name: "Szkło, metal, ceramika i inne powierzchnie",
    text: (
      <>
        Są możliwe, ale wymagają bardziej indywidualnego podejścia. Bardzo
        gładkie i niechłonne materiały mogą wymagać przygotowania powierzchni
        albo zastosowania primera zwiększającego przyczepność. Dlatego przy
        nietypowych materiałach nie zgadujemy. Sprawdzamy.
      </>
    ),
  },
];

const probaChecklist = [
  "przyczepność",
  "wygląd koloru",
  "krycie białego atramentu",
  "zachowanie szczegółów",
  "wpływ faktury na obraz",
];

const nieregularnyKsztaltList = [
  "mieć nieregularną obwiednię",
  "składać się z wielu niezależnych elementów",
  "mieć całkowicie przezroczyste fragmenty",
  "wykorzystywać kolor ściany",
  "płynnie przechodzić w powierzchnię podłoża",
  "omijać wybrane elementy architektury",
];

const kolorFactors = [
  "kolor podłoża",
  "jego faktura",
  "rodzaj farby",
  "światło dzienne",
  "oświetlenie sztuczne",
  "sąsiednie kolory we wnętrzu",
];

const rozdzielczoscFactors = [
  "rozdzielczość źródłowa",
  "ostrość",
  "ilość szczegółów",
  "stopień kompresji",
  "rozmiar docelowy",
  "charakter obrazu",
  "odległość oglądania",
];

const trwaloscFactors = [
  "rodzaj powierzchni",
  "farba znajdująca się pod nadrukiem",
  "nasłonecznienie",
  "wilgotność",
  "sposób eksploatacji",
  "częstotliwość czyszczenia",
  "ewentualne oddziaływanie mechaniczne",
];

const wycenaChecklist = [
  "zdjęcie całej ściany wykonane możliwie na wprost",
  "szerokość i wysokość",
  "informacja o rodzaju powierzchni i zastosowanej farbie, jeżeli jest znana",
  "planowany rozmiar nadruku",
  "grafika, projekt lub nawet sam pomysł",
];

const faqItems = [
  {
    question: "Czy świeżo pomalowana ściana nadaje się do druku?",
    answer:
      "Farba powinna być nie tylko sucha w dotyku, lecz również odpowiednio związana i utwardzona. Czas potrzebny przed rozpoczęciem realizacji zależy od produktu, podłoża, temperatury, wilgotności oraz zaleceń producenta farby. Jeżeli pomieszczenie jest przygotowywane specjalnie pod nadruk, najlepiej poinformować nas wcześniej, jaką farbą ściana będzie malowana. Możemy wtedy ocenić ją jeszcze zanim ekipa remontowa zakończy prace.",
  },
  {
    question: "Czy nadruk po wykonaniu jest suchy?",
    answer:
      "Atrament wykorzystywany przez wallPen jest utwardzany światłem UV LED już podczas nanoszenia obrazu, dlatego na typowej powierzchni nadruk nie wymaga klasycznego schnięcia jak farba ścienna. Przy nietypowych podłożach osobną kwestią jest natomiast przyczepność atramentu do powierzchni, dlatego szkło, metal, niektóre lakiery i specjalistyczne farby traktujemy inaczej niż zwykłą ścianę emulsyjną.",
  },
  {
    question: "Jak trwały jest druk UV?",
    answer:
      "W warunkach wewnętrznych prawidłowo wykonany nadruk UV jest rozwiązaniem przeznaczonym do wieloletniego użytkowania. Nie podajemy jednak jednej magicznej liczby lat dla każdej realizacji. Na trwałość wpływają między innymi rodzaj powierzchni, farba pod nadrukiem, nasłonecznienie, wilgotność, sposób eksploatacji, częstotliwość czyszczenia oraz ewentualne oddziaływanie mechaniczne. Inaczej pracuje ściana w sypialni, inaczej w hotelowym korytarzu, restauracji, hali produkcyjnej czy przestrzeni publicznej, dlatego trwałość oceniamy w kontekście konkretnego zastosowania.",
  },
  {
    question: "Czy nadruk można zabezpieczyć?",
    answer:
      "W przypadku powierzchni szczególnie narażonych na dotyk, zabrudzenia lub intensywne czyszczenie można rozważyć dodatkowe zabezpieczenie. Nie stosujemy jednak jednego uniwersalnego rozwiązania do wszystkich podłoży. Rodzaj warstwy ochronnej powinien być kompatybilny zarówno z nadrukiem UV, jak i powierzchnią znajdującą się pod nim. W wymagających zastosowaniach również ten element możemy wcześniej przetestować.",
  },
];

const TechnikaFull = () => {
  return (
    <div className="tf-container">
      {/* 1. Intro + hero */}
      <LeftSideMotionDiv
        isSectionVisible={isSectionVisible}
        className="tf-block"
      >
        <AnimatedH2 isSectionVisible={isSectionVisible}>
          Druk bezpośrednio na ścianie. Bez folii, tapety i brytów
        </AnimatedH2>
        <p>
          Druk ścienny UV pozwala nanosić zdjęcia, ilustracje, logotypy, napisy
          i wielkoformatowe kompozycje bezpośrednio na powierzchnię ściany.
          Obraz nie jest wcześniej drukowany na folii ani tapecie. Powstaje
          dokładnie tam, gdzie ma pozostać.
        </p>
        <figure className="tf-figure">
          <img
            src={`${tech}/mural.webp`}
            alt="Mural w dużym formacie wydrukowany bezpośrednio na ścianie, z nieregularnym kształtem dopasowanym do przestrzeni"
            loading="lazy"
          />
        </figure>
        <p>
          Daje to dużą swobodę projektowania. Nadruk nie musi mieć kształtu
          prostokąta. Może składać się z niezależnych elementów, kończyć się
          nieregularnie, płynnie zanikać na krawędziach albo wykorzystywać kolor
          i fakturę ściany jako część kompozycji.
        </p>
        <p>
          Możemy realizować zarówno niewielkie logotypy, jak i kilkumetrowe
          murale przeznaczone do biur, hoteli, restauracji, szkół, obiektów
          handlowych, przestrzeni publicznych i wnętrz prywatnych.
        </p>
      </LeftSideMotionDiv>

      {/* 2. Dwie drukarki wallPen */}
      <RightSideMotionDiv
        isSectionVisible={isSectionVisible}
        className="tf-block tf-block--dark"
      >
        <AnimatedH2 isSectionVisible={isSectionVisible}>
          Dwie profesjonalne drukarki wallPen
        </AnimatedH2>

        <div className="tf-wrap">
          <figure className="tf-float-image">
            <img
              src={`${tech}/2_printers.webp`}
              alt="Dwie drukarki ścienne wallPen gotowe do pracy w Loftprint"
              loading="lazy"
            />
          </figure>

          <p>
            W Loftprint pracujemy na dwóch drukarkach wallPen, profesjonalnych
            systemach druku pionowego projektowanych i produkowanych w
            Niemczech.
          </p>

          <AnimatedH3 isSectionVisible={isSectionVisible}>
            Dlaczego ma to znaczenie?
          </AnimatedH3>
          <p>
            Drukarka ścienna nie jest tylko urządzeniem, które „wypluwa
            atrament”. O jakości gotowego nadruku decydują również precyzja
            mechaniki, sposób prowadzenia głowic, pomiar odległości od
            powierzchni, stabilność ruchu, głowice drukujące, atrament,
            oprogramowanie i możliwość powtarzalnego ustawienia parametrów.
          </p>
          <p>
            wallPen jest systemem skonstruowanym od początku właśnie do
            profesjonalnego druku pionowego. Producent rozwija i wytwarza
            urządzenia w Niemczech, a sama technologia jest objęta ponad 20
            międzynarodowymi patentami. System wykorzystuje między innymi
            laserową kontrolę odległości od ściany oraz przemysłowe głowice
            Ricoh GH2220. Dla klienta ważniejsza od samej specyfikacji jest
            jednak przewidywalność efektu na gotowej ścianie.
          </p>
        </div>

        <AnimatedH3 isSectionVisible={isSectionVisible}>
          Co dają nam dwie drukarki?
        </AnimatedH3>
        <p>
          Dwie maszyny to nie tylko dwukrotnie więcej sprzętu. To przede
          wszystkim:
        </p>
        <ul className="tf-checklist">
          <li>
            większe bezpieczeństwo terminów: serwis, konserwacja czy
            nieprzewidziana sytuacja związana z jedną maszyną nie musi
            zatrzymywać wszystkich realizacji
          </li>
          <li>
            możliwość pracy równoległej: drukować jednocześnie dwie grafiki lub
            odpowiednio organizować większe zlecenia
          </li>
          <li>
            większa elastyczność przy krótkich terminach: łatwiej dopasować
            harmonogram do terminów remontów, otwarć obiektów czy wydarzeń
          </li>
          <li>
            rezerwa sprzętowa przy wymagających projektach: przy
            profesjonalnych realizacjach wolimy mieć więcej możliwości niż
            opierać cały harmonogram na jednym urządzeniu
          </li>
          <li>
            jednolity system pracy: obie maszyny wykorzystują tę samą
            technologię wallPen, co ułatwia zachowanie spójnego, wypracowanego
            procesu realizacji
          </li>
        </ul>
        <p>
          Klient nie musi interesować się zapleczem technicznym wykonawcy.
          Powinien natomiast mieć świadomość, że za jego projektem stoi nie
          jedna przypadkowa maszyna, lecz profesjonalne zaplecze stworzone do
          regularnej pracy komercyjnej.
        </p>
      </RightSideMotionDiv>

      {/* 3. Dlaczego wallPen - deep dive techniczny */}
      <LeftSideMotionDiv
        isSectionVisible={isSectionVisible}
        className="tf-block"
      >
        <AnimatedH2 isSectionVisible={isSectionVisible}>
          Dlaczego wallPen?
        </AnimatedH2>
        <p>
          Rynek drukarek ściennych jest bardzo zróżnicowany. Dostępne są zarówno
          stosunkowo niedrogie konstrukcje produkowane w Azji, jak i znacznie
          bardziej zaawansowane systemy rozwijane specjalnie z myślą o
          profesjonalnym wykorzystaniu. Sama deklarowana rozdzielczość czy
          liczba kolorów niewiele mówi o tym, jak urządzenie zachowa się podczas
          kilkugodzinnego druku na rzeczywistej ścianie. Dlatego przy wyborze
          technologii zwracaliśmy uwagę nie tylko na parametry katalogowe.
        </p>

        <div className="tf-image-row">
          <img
            src={`${tech}/wp1.jpg`}
            alt="Drukarka ścienna wallPen - widok głowicy drukującej"
            loading="lazy"
          />
          <img
            src={`${tech}/Drukarka-wallPen-589x1024.jpg`}
            alt="Drukarka ścienna wallPen - widok całej konstrukcji"
            loading="lazy"
          />
        </div>

        <AnimatedH3 isSectionVisible={isSectionVisible}>
          Precyzyjna kontrola odległości od ściany
        </AnimatedH3>
        <p>
          Ściana w rzeczywistym budynku niemal nigdy nie jest laboratoryjnie
          płaska. wallPen wykorzystuje opatentowany system laserowego pomiaru
          odległości, który pozwala maszynie reagować na zmiany powierzchni w
          czasie pracy. Producent przewiduje dzięki temu druk również na
          powierzchniach o pewnych nierównościach. Ma to szczególne znaczenie
          przy tynkach, betonie, cegle oraz ścianach, których powierzchnia nie
          jest idealnie równa.
        </p>

        <AnimatedH3 isSectionVisible={isSectionVisible}>
          Przemysłowe głowice Ricoh
        </AnimatedH3>
        <p>
          Nasze drukarki wykorzystują głowice Ricoh GH2220. wallPen współpracuje
          oficjalnie z Ricoh i wykorzystuje modułową konstrukcję z oddzielnymi
          kanałami drukującymi. Dla klienta nazwa głowicy nie jest najważniejsza.
          Liczy się to, że jest ona elementem profesjonalnego systemu, w
          którym nacisk położono na jakość i powtarzalność pracy, a nie
          wyłącznie na możliwie niską cenę urządzenia.
        </p>

        <AnimatedH3 isSectionVisible={isSectionVisible}>
          Kontrolowany ruch drukarki
        </AnimatedH3>
        <p>
          Podczas drukowania głowica wykonuje tysiące precyzyjnych przejazdów, a
          jednocześnie cała maszyna stopniowo przesuwa się wzdłuż ściany. Nawet
          niewielkie błędy mechaniczne mogą na dużej powierzchni stać się
          widoczne. Dlatego stabilność prowadzenia urządzenia, właściwe
          ustawienie szyn i przygotowanie stanowiska są równie ważne jak sama
          rozdzielczość głowicy.
        </p>

        <AnimatedH3 isSectionVisible={isSectionVisible}>
          Oprogramowanie stworzone dla konkretnego urządzenia
        </AnimatedH3>
        <p>
          wallPen posiada własny system sterowania i oprogramowanie przygotowane
          specjalnie dla tej platformy. Pozwala ono przed rozpoczęciem pracy
          kontrolować między innymi rozmiar projektu, czas druku i zużycie
          atramentu. To jeden z powodów, dla których nie traktujemy drukarki
          jako przypadkowego zestawu podzespołów połączonych z uniwersalnym
          programem RIP.
        </p>
      </LeftSideMotionDiv>

      {/* 4. Jak powstaje nadruk */}
      <RightSideMotionDiv
        isSectionVisible={isSectionVisible}
        className="tf-block tf-block--dark"
      >
        <AnimatedH2 isSectionVisible={isSectionVisible}>
          Jak powstaje nadruk?
        </AnimatedH2>
        <p>
          Po przygotowaniu projektu drukarka ustawiana jest równolegle do
          powierzchni. Głowica porusza się w pionie, nanosząc kolejne fragmenty
          obrazu, natomiast urządzenie stopniowo przemieszcza się wzdłuż ściany.
          Atrament UV jest utwardzany światłem LED już podczas drukowania. Na
          typowej pomalowanej ścianie obraz jest więc suchy bezpośrednio po
          zakończeniu pracy.
        </p>
        <p>
          Technologia wallPen obsługuje rozdzielczości od 300 do 1200 dpi, przy
          czym w praktyce parametry dobiera się do rodzaju grafiki, powierzchni,
          rozmiaru nadruku i odległości, z której będzie oglądany. W przypadku
          wielometrowego muralu nie zawsze najwyższa możliwa liczba dpi daje
          klientowi jakąkolwiek zauważalną korzyść. Znacznie ważniejsze jest
          właściwe połączenie rozdzielczości, jakości pliku, prędkości pracy i
          charakteru grafiki.
        </p>
      </RightSideMotionDiv>

      {/* 5. Powierzchnie */}
      <div className="tf-block">
        <AnimatedH2 isSectionVisible={isSectionVisible}>
          Ściana nie musi być idealnie gładka
        </AnimatedH2>
        <p>
          Jedną z największych zalet druku bezpośredniego jest możliwość
          wykorzystania powierzchni, która już istnieje. Gładka biała ściana
          daje neutralne podłoże, ale nie zawsze prowadzi do najciekawszego
          efektu. Beton, cegła, tynk strukturalny czy drewno mogą stać się
          częścią projektu. Ich naturalna faktura pozostaje widoczna i sprawia,
          że grafika wygląda zupełnie inaczej niż obraz wydrukowany wcześniej na
          płaskim materiale i dopiero później przyklejony do ściany.
        </p>
        <p>
          Technologia wallPen pozwala również kompensować niewielkie zmiany
          odległości pomiędzy głowicą a podłożem. Nie oznacza to oczywiście, że
          można bez ograniczeń drukować przez wystające elementy
          architektoniczne, dlatego każdą nietypową ścianę oceniamy
          indywidualnie.
        </p>

        <figure className="tf-figure">
          <img
            src={`${tech}/4_surfaces.webp`}
            alt="Cztery różne powierzchnie z nadrukiem UV: gładka ściana, beton, cegła i drewno"
            loading="lazy"
          />
        </figure>

        <AnimatedH3 isSectionVisible={isSectionVisible}>
          Na czym możemy drukować?
        </AnimatedH3>
        <div className="tf-materials-grid">
          {materials.map((m) => (
            <div className="tf-material-card" key={m.name}>
              <h4>{m.name}</h4>
              <p>{m.text}</p>
            </div>
          ))}
        </div>

        <AnimatedH3 isSectionVisible={isSectionVisible}>
          Dlaczego czasami robimy próbę?
        </AnimatedH3>
        <p>
          Dwie powierzchnie wyglądające niemal identycznie mogą mieć zupełnie
          inne właściwości. Dotyczy to szczególnie specjalistycznych farb,
          powłok zmywalnych, lakierowanych płyt, szkła, metalu i materiałów
          zabezpieczonych środkami hydrofobowymi. W takich sytuacjach niewielka
          próba może powiedzieć znacznie więcej niż długa karta techniczna
          produktu. Możemy wtedy ocenić między innymi:
        </p>
        <ul className="tf-checklist">
          {probaChecklist.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        <p>
          Dzięki temu to próbka jest miejscem eksperymentu, a nie docelowa
          ściana klienta.
        </p>
      </div>

      {/* 6. Biały atrament */}
      <LeftSideMotionDiv
        isSectionVisible={isSectionVisible}
        className="tf-block tf-block--dark"
      >
        <AnimatedH2 isSectionVisible={isSectionVisible}>
          Biały atrament: coś więcej niż dodatkowy kolor
        </AnimatedH2>
        <p>
          Standardowy druk kolorowy wykorzystuje CMYK. Na białej ścianie jej
          powierzchnia pełni jednocześnie funkcję białego tła. Sytuacja zmienia
          się przy ścianach grafitowych, granatowych, zielonych, czerwonych czy
          czarnych. Dlatego nasze systemy wallPen umożliwiają również
          wykorzystanie białego atramentu jako osobnego poddruku.
        </p>

        <figure className="tf-figure">
          <img
            src={`${tech}/3_layers.webp`}
            alt="Trzy warstwy druku UV na ciemnej ścianie: ciemna ściana, biały poddruk, kolor CMYK"
            loading="lazy"
          />
        </figure>

        <p>
          Najpierw może zostać wydrukowana odpowiednio przygotowana warstwa
          bieli, a następnie na niej właściwy obraz kolorowy. Dzięki temu barwa
          ściany nie prześwituje przez te fragmenty projektu, które mają
          pozostać intensywne i kryjące. wallPen wykorzystuje w tym celu
          oddzielny, piąty kanał z własną głowicą Ricoh i białym atramentem UV.
        </p>

        <AnimatedH3 isSectionVisible={isSectionVisible}>
          Biel nie musi znajdować się wszędzie
        </AnimatedH3>
        <p>
          I właśnie tutaj zaczynają się znacznie ciekawsze możliwości. Poddruk
          możemy przygotować tylko pod wybranymi fragmentami obrazu. Pozostałe
          miejsca mogą wykorzystywać naturalny kolor ściany. Dzięki temu projekt
          może wyglądać tak, jakby został stworzony razem z wnętrzem, zamiast
          być prostokątnym obrazem umieszczonym na jego powierzchni.
        </p>
      </LeftSideMotionDiv>

      {/* 7. Nieregularny kształt + architektura */}
      <RightSideMotionDiv
        isSectionVisible={isSectionVisible}
        className="tf-block"
      >
        <AnimatedH2 isSectionVisible={isSectionVisible}>
          Nadruk nie musi mieć prostokątnych krawędzi
        </AnimatedH2>
        <p>
          To jedna z cech druku ściennego, która bywa niedoceniana. Nie jesteśmy
          ograniczeni kształtem arkusza, brytu tapety ani wyciętej folii.
          Grafika może:
        </p>
        <ul className="tf-checklist">
          {nieregularnyKsztaltList.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        <p>
          Dzięki temu nadruk może wyglądać bardziej jak integralna część wnętrza
          niż dodatkowa dekoracja umieszczona na ścianie.
        </p>

        <figure className="tf-figure">
          <img
            src={`${tech}/wall_passage.webp`}
            alt="Mural o nieregularnym kształcie, płynnie przechodzący w tło ściany, dopasowany do architektury wnętrza"
            loading="lazy"
          />
        </figure>

        <AnimatedH3 isSectionVisible={isSectionVisible}>
          Projekt dopasowany do architektury
        </AnimatedH3>
        <p>
          Ściana rzadko jest pustym prostokątem. Mamy drzwi, wnęki, okna,
          narożniki, skosy, gniazda, wyłączniki i inne elementy architektury.
          Niektóre z nich możemy świadomie wykorzystać w projekcie. Dobrym
          przykładem są wnęki okienne lub przejścia pomiędzy pomieszczeniami.
          Jeżeli geometria pozwala na bezpieczny ruch głowicy, grafika może
          zostać zaprojektowana tak, aby przebiegała nad otworem oraz po jego
          bokach. W innych przypadkach przeszkodę po prostu uwzględniamy podczas
          projektowania kompozycji. Gniazda czy wyłączniki można w określonych
          sytuacjach zdemontować na czas realizacji i ponownie zamontować po
          wykonaniu nadruku.
        </p>
        <p>
          Nie próbujemy więc na siłę dopasowywać ściany do grafiki. Dopasowujemy
          grafikę do rzeczywistej ściany.
        </p>
      </RightSideMotionDiv>

      {/* 8. Kolory + rozdzielczość */}
      <LeftSideMotionDiv
        isSectionVisible={isSectionVisible}
        className="tf-block tf-block--dark"
      >
        <AnimatedH2 isSectionVisible={isSectionVisible}>
          Co z kolorami?
        </AnimatedH2>
        <p>
          Monitor i ściana działają zupełnie inaczej. Monitor emituje światło.
          Ściana je odbija. Na wygląd gotowego nadruku wpływa również:
        </p>
        <ul className="tf-checklist">
          {kolorFactors.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        <p>
          Dlatego szczególnej uwagi wymagają neutralne szarości, delikatne
          gradienty oraz kolory firmowe, dla których ważna jest możliwie duża
          powtarzalność. System wallPen obsługuje pracę z profilami ICC, ale
          nawet najlepsze zarządzanie kolorem nie zmienia faktu, że drukujemy na
          rzeczywistym materiale, a nie na świecącym ekranie. Jeżeli konkretny
          kolor ma kluczowe znaczenie, możemy wcześniej wykonać próbę.
        </p>

        <AnimatedH3 isSectionVisible={isSectionVisible}>
          Czy każde zdjęcie można wydrukować na kilku metrach?
        </AnimatedH3>
        <p>
          Nie każde. Jednocześnie duża grafika ścienna nie musi mieć takiej
          samej liczby pikseli na centymetr jak niewielkie zdjęcie oglądane z
          odległości 30 cm. Znaczenie ma przede wszystkim:
        </p>
        <ul className="tf-checklist">
          {rozdzielczoscFactors.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        <p>
          Przed realizacją sprawdzamy plik i oceniamy, czy nadaje się do
          planowanej wielkości. Logotypy, napisy i proste ilustracje najlepiej
          przekazywać w postaci wektorowej. Fotografie i bardziej skomplikowane
          obrazy przygotowujemy jako odpowiedniej jakości grafikę rastrową. W
          razie potrzeby materiał można wcześniej przeskalować, poprawić albo
          częściowo przebudować.
        </p>
      </LeftSideMotionDiv>

      {/* 9. Jak duzy + marginesy + listwy */}
      <RightSideMotionDiv
        isSectionVisible={isSectionVisible}
        className="tf-block"
      >
        <AnimatedH2 isSectionVisible={isSectionVisible}>
          Jak duży może być nadruk?
        </AnimatedH2>
        <p>
          wallPen jest systemem modułowym. Producent przewiduje możliwość
          regulacji wysokości osi do 4 metrów, a szerokość realizacji nie jest
          ograniczona długością pojedynczego arkusza czy rolki materiału. W
          Loftprint konfigurujemy urządzenie odpowiednio do konkretnej
          realizacji.
        </p>
        <p>
          Duży format nie oznacza przy tym konieczności tworzenia wielkiego
          prostokąta. Kilkumetrowa grafika może być lekka wizualnie,
          nieregularna i pozostawiać dużą część ściany niezadrukowaną.
        </p>

        <AnimatedH3 isSectionVisible={isSectionVisible}>
          Dlaczego potrzebne są marginesy?
        </AnimatedH3>
        <p>
          Głowica drukująca i jej karetka mają fizyczne wymiary. Żeby wydrukować
          ostatni fragment obrazu, urządzenie musi mieć miejsce, aby wykonać
          pełny przejazd również nieco poza krawędzią samego nadruku. Dlatego
          nie możemy drukować bezpośrednio do podłogi, sufitu, sąsiedniej ściany
          czy wystającej ościeżnicy. W typowych warunkach przyjmujemy
          orientacyjnie:
        </p>
        <ul className="tf-checklist">
          <li>około 31 cm od podłogi</li>
          <li>około 31 cm od sufitu</li>
          <li>około 15 cm od lewej strony</li>
          <li>około 15 cm od prawej strony</li>
        </ul>
        <p>
          Nie są to ograniczenia projektu jako takiego, tylko fizyczna
          przestrzeń potrzebna urządzeniu do pracy. W nietypowym pomieszczeniu
          sprawdzamy te odległości indywidualnie.
        </p>

        <AnimatedH3 isSectionVisible={isSectionVisible}>
          A co z listwami, ościeżnicami i innymi wystającymi elementami?
        </AnimatedH3>
        <p>
          Tu pojawia się ważna różnica między płaską powierzchnią a elementem
          wystającym przed ścianę. Niewielka nierówność ściany może zostać
          skompensowana przez system pomiarowy drukarki. Ościeżnica, gruba
          listwa, rura albo inny wystający element stanowi natomiast fizyczną
          przeszkodę dla poruszającej się karetki. Dlatego przed realizacją
          analizujemy przestrzeń roboczą drukarki, a nie tylko obszar widoczny
          na projekcie.
        </p>
        <p>
          Czasami rozwiązaniem jest odpowiednie przesunięcie grafiki. Innym
          razem przebudowanie kompozycji, tymczasowy demontaż elementu albo
          wykorzystanie wnęki, wokół której głowica może swobodnie pracować. To
          właśnie jeden z przykładów sytuacji, w których doświadczenie operatora
          jest równie ważne jak możliwości samej maszyny.
        </p>
      </RightSideMotionDiv>

      {/* 10. Trwałość nadruku - podstawy przed FAQ */}
      <div className="tf-block tf-block--dark">
        <AnimatedH2 isSectionVisible={isSectionVisible}>
          Jak trwały jest nadruk w praktyce?
        </AnimatedH2>
        <p>Na trwałość druku UV wpływają między innymi:</p>
        <ul className="tf-checklist">
          {trwaloscFactors.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        <p>
          Dlatego trwałość oceniamy zawsze w kontekście konkretnego zastosowania.
          Inaczej pracuje ściana w sypialni, inaczej w hotelowym korytarzu,
          restauracji czy przestrzeni publicznej.
        </p>
      </div>

      {/* 11. FAQ */}
      <div className="tf-block">
        <FAQ
          heading="Pytania, które słyszymy najczęściej"
          lead="Krótkie odpowiedzi na temat przygotowania ściany, trwałości i pielęgnacji nadruku"
          items={faqItems}
        />
      </div>

      {/* 12. Zamknięcie + CTA */}
      <div className="tf-cta">
        <h3>Technologia to dopiero początek</h3>
        <p>
          Nowoczesna drukarka może bardzo precyzyjnie nanosić atrament. Nie
          podejmie jednak za wykonawcę wszystkich decyzji. Nie oceni, czy
          konkretna farba jest właściwym podłożem. Nie zdecyduje, gdzie
          zastosować biały poddruk. Nie poprawi źle przygotowanej grafiki. Nie
          zaprojektuje kompozycji wokół wnęki. Nie przewidzi, jak neutralna
          szarość będzie wyglądała w konkretnym wnętrzu.
        </p>
        <p>
          Dlatego w Loftprint łączymy dwa profesjonalne systemy wallPen z
          doświadczeniem zdobytym podczas rzeczywistych realizacji na bardzo
          różnych powierzchniach. Nie chodzi tylko o to, żeby odpowiedzieć na
          pytanie „Czy da się to wydrukować?”. Znacznie ważniejsze jest: „Jak
          zrobić to dobrze właśnie na tej ścianie?”.
        </p>

        <h3>Masz nietypową ścianę albo pomysł?</h3>
        <p>Na początek zwykle wystarczy:</p>
        <ul className="tf-checklist tf-checklist--check">
          {wycenaChecklist.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        <p>
          Na tej podstawie możemy wstępnie ocenić możliwości realizacji. Jeżeli
          powierzchnia jest nietypowa, poprosimy o dodatkowe informacje albo
          próbkę materiału.
        </p>
        <p className="tf-cta-strong">
          Nie musisz znać technologii druku ściennego. Od tego jesteśmy my.
        </p>
      </div>
    </div>
  );
};

export default TechnikaFull;
