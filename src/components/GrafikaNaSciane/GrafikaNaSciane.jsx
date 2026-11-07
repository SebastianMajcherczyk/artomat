import React from "react";
import { Link as RouterLink } from "react-router-dom";
import { Parallax } from "react-parallax";
import "./GrafikaNaSciane.css";
import {
  LeftSideMotionDiv,
  RightSideMotionDiv,
} from "../Styled/StyledMotionDiv";
import { AnimatedH2, AnimatedH3 } from "../Styled/StyledHeader";
import FAQ from "../FAQ/FAQ";
import BeforeAfterSlider from "../BeforeAfterSlider/BeforeAfterSlider";

const beforeAfter = process.env.PUBLIC_URL + "/BeforeAfter";

// Te same tła co na pozostałych podstronach (src/image21.jpg,
// src/image22.jpg). Większość bloków tutaj jest wysoka, więc dostaje
// własne tło 1:1; tylko krótszy blok "Jak wygląda współpraca" jest
// połączony z FAQ, żeby nie tworzyć osobnego, wąskiego paska.
const bg1 = require("../../image21.jpg");
const bg2 = require("../../image22.jpg");
const parallaxStrength = 150;
const parallaxStyle = { width: "100%" };

// Pełna treść podstrony /inspiracje ("Grafika na ścianę"), dostarczona przez
// użytkownika (październik 2026). Komponent eksperymentalny do testowania w
// dev przed ew. podpięciem pod nawigację/homepage — patrz InspiracjePage.jsx.
const isSectionVisible = true;

const bankiZdjec = [
  {
    name: "Magnific",
    url: "https://magnific.ai",
    text: "generowanie i podbijanie jakości grafik przy użyciu AI, przydatne przy kreatywnym upscalingu.",
  },
  {
    name: "Depositphotos",
    url: "https://depositphotos.com",
    text: "szeroki wybór fotografii i gotowych kompozycji.",
  },
  {
    name: "Adobe Stock",
    url: "https://www.adobestock.com/pl",
    text: "rozbudowana biblioteka profesjonalnych zdjęć, ilustracji i innych materiałów graficznych.",
  },
];

const wspolpracaSteps = [
  {
    title: "Opowiedz nam o pomyśle.",
    text: "Możesz przesłać gotową grafikę, własne zdjęcie, logo firmy, link do inspiracji albo kilka zdań opisujących to, co chcesz zobaczyć na ścianie.",
  },
  {
    title: "Pokaż miejsce planowanego nadruku.",
    text: "Zdjęcie ściany i jej przybliżone wymiary pomogą nam ocenić możliwości projektu. Jeśli grafika ma nawiązywać do wystroju lokalu lub identyfikacji wizualnej firmy, warto przesłać również odpowiednie materiały.",
  },
  {
    title: "Wybierzmy kierunek.",
    text: "Sprawdzimy dostarczone pliki i ustalimy, czy wystarczy przygotować istniejącą grafikę, poszukać odpowiedniego materiału, czy stworzyć nową kompozycję.",
  },
  {
    title: "Przygotujemy grafikę do druku.",
    text: "Po uzgodnieniu zakresu prac i akceptacji projektu dostosujemy plik do parametrów nadruku.",
  },
];

const faqItems = [
  {
    question: "Czy mogę wydrukować na ścianie zdjęcie z telefonu?",
    answer:
      "Tak. Współczesne smartfony potrafią wykonywać zdjęcia o jakości wystarczającej nawet do dużych nadruków. Ostateczna ocena zależy od jakości konkretnej fotografii, sposobu jej zapisania oraz planowanych wymiarów.",
  },
  {
    question: "Czy mogę przesłać zdjęcie znalezione w internecie?",
    answer:
      "Możesz je przesłać jako inspirację. Sam fakt, że zdjęcie jest dostępne w internecie, nie oznacza jednak, że wolno je wykorzystać do nadruku. Jeśli nie masz odpowiednich praw, pomożemy poszukać legalnego źródła lub przygotować alternatywną grafikę.",
  },
  {
    question: "Czy można połączyć kilka zdjęć lub grafik w jeden mural?",
    answer:
      "Tak. Możemy przygotować kolaż, kompozycję panoramiczną albo bardziej rozbudowany projekt łączący różne materiały graficzne, w tym fotografie, ilustracje, logo i napisy.",
  },
  {
    question:
      "Czy możecie połączyć logo mojej firmy z grafiką nawiązującą do jej działalności?",
    answer:
      "Tak. Możemy przygotować kompozycję, w której logo zostanie połączone z motywami charakterystycznymi dla Twojej branży, produktami, architekturą, maszynami lub innymi elementami związanymi z działalnością przedsiębiorstwa. Projekt może również uwzględniać firmową kolorystykę i zasady identyfikacji wizualnej.",
  },
  {
    question: "Mam logo tylko w formacie JPG lub PNG. Czy to wystarczy?",
    answer:
      "Często tak. Wszystko zależy od rozdzielczości i wyglądu znaku. W niektórych przypadkach możemy poprawić jakość pliku, a proste logo odtworzyć w postaci wektorowej. Jeśli masz dostęp do oryginalnych plików projektu, najlepiej przesłać właśnie je.",
  },
  {
    question: "Czy sztuczna inteligencja może powiększyć dowolne zdjęcie?",
    answer: (
      <>
        <p>
          Nie każde. AI pozwala znacząco poprawić jakość wielu zdjęć,
          zwiększyć ich rozdzielczość i wyostrzyć szczegóły. Nie zawsze
          jednak potrafi wiernie odtworzyć informacje, których brakuje w
          oryginale.
        </p>
        <p>
          W takich przypadkach można zastosować tzw.{" "}
          <strong>kreatywny upscaling</strong>, w którym sztuczna
          inteligencja samodzielnie generuje brakujące detale. Pozwala to
          uzyskać atrakcyjny obraz nawet z materiału bardzo niskiej jakości,
          ale efekt może znacznie odbiegać od pierwowzoru. Dlatego metoda ta
          sprawdza się przede wszystkim wtedy, gdy ważniejszy jest efekt
          wizualny niż wierne zachowanie oryginału.
        </p>
        <p>
          Możliwości i odpowiednią metodę poprawy jakości oceniamy
          indywidualnie po obejrzeniu przesłanego pliku.
        </p>
      </>
    ),
    answerText:
      "Nie każde. AI pozwala znacząco poprawić jakość wielu zdjęć, zwiększyć ich rozdzielczość i wyostrzyć szczegóły. Nie zawsze jednak potrafi wiernie odtworzyć informacje, których brakuje w oryginale. W takich przypadkach można zastosować tzw. kreatywny upscaling, w którym sztuczna inteligencja samodzielnie generuje brakujące detale. Pozwala to uzyskać atrakcyjny obraz nawet z materiału bardzo niskiej jakości, ale efekt może znacznie odbiegać od pierwowzoru. Dlatego metoda ta sprawdza się przede wszystkim wtedy, gdy ważniejszy jest efekt wizualny niż wierne zachowanie oryginału. Możliwości i odpowiednią metodę poprawy jakości oceniamy indywidualnie po obejrzeniu przesłanego pliku.",
  },
  {
    question: "Czy mogę samodzielnie wybrać grafikę z banku zdjęć?",
    answer:
      "Oczywiście. Prześlij nam link do wybranej grafiki. Sprawdzimy jej parametry, warunki licencji i przydatność do planowanego nadruku.",
  },
  {
    question: "Czy przygotowujecie projekty graficzne od podstaw?",
    answer:
      "Tak, możemy pomóc w stworzeniu indywidualnej kompozycji z wykorzystaniem dostępnych narzędzi graficznych i AI. Zakres pracy ustalamy na podstawie pomysłu oraz oczekiwanego efektu.",
  },
  {
    question: "Czy przygotowanie grafiki jest dodatkowo płatne?",
    answer:
      "To zależy od zakresu prac. Sprawdzenie pliku lub proste dopasowanie może wymagać znacznie mniej pracy niż stworzenie rozbudowanej grafiki od podstaw. Ewentualne koszty ustalamy przed rozpoczęciem dodatkowych prac projektowych.",
  },
];

const GrafikaNaSciane = () => {
  return (
    <div className="gs-container">
      {/* 1. Intro + własne materiały klienta */}
      <Parallax bgImage={bg1} bgImageAlt="tło" strength={parallaxStrength} style={parallaxStyle}>
      <div className="gs-parallax-group">
      <LeftSideMotionDiv isSectionVisible={isSectionVisible} className="gs-block">
        <p>
          Masz własne zdjęcie, logo firmy, gotowy projekt, a może dopiero
          pomysł na wyjątkową ścianę?
        </p>
        <p>
          Nie musisz być grafikiem ani dysponować profesjonalnie przygotowanym
          projektem, aby zamówić druk ścienny. Możesz przesłać nam własną
          fotografię, logo firmy, wskazać grafikę znalezioną w internecie
          albo po prostu opowiedzieć, jaki efekt chcesz osiągnąć.
        </p>
        <p>
          W Loftprint pomagamy przygotowywać grafiki zarówno do wnętrz
          prywatnych, jak i przestrzeni biznesowych: biur, restauracji,
          hoteli, sklepów, salonów usługowych, placówek edukacyjnych i wielu
          innych miejsc.
        </p>
        <p>
          Korzystamy z różnych źródeł i narzędzi: od tradycyjnych banków
          zdjęć, przez generatywną sztuczną inteligencję (AI), po
          profesjonalną obróbkę i projektowanie w Adobe Photoshop. Dzięki
          temu możemy przygotować grafikę dopasowaną do Twojego pomysłu,
          charakteru wnętrza, identyfikacji wizualnej firmy oraz wymiarów
          konkretnej ściany.
        </p>

        <AnimatedH2 isSectionVisible={isSectionVisible}>
          Twoje zdjęcie, logo lub gotowy projekt na ścianie? Oczywiście!
        </AnimatedH2>
        <p>
          Zdjęcie z wakacji, rodzinny portret, ulubiony krajobraz, fotografia
          produktu, logo firmy, ilustracja czy grafika przygotowana przez
          projektanta – wszystkie te materiały mogą stać się podstawą
          nadruku na ścianie.
        </p>
        <p>
          W przypadku firm może to być również projekt wykorzystywany
          wcześniej w materiałach reklamowych, grafika z firmowej strony
          internetowej, motyw z opakowania produktu albo element
          identyfikacji wizualnej marki.
        </p>
        <p>
          Nie musisz samodzielnie oceniać, czy plik ma odpowiednią
          rozdzielczość lub format. Prześlij go nam wraz z przybliżonymi
          wymiarami planowanego nadruku, a sprawdzimy jego przydatność.
        </p>

        <AnimatedH3 isSectionVisible={isSectionVisible}>
          A jeśli zdjęcie lub grafika mają zbyt niską jakość?
        </AnimatedH3>
        <p>
          Jeszcze kilka lat temu niska rozdzielczość mogła oznaczać
          konieczność rezygnacji z wybranego materiału. Dzisiaj mamy
          znacznie więcej możliwości.
        </p>
        <p>
          Nowoczesne narzędzia wykorzystujące sztuczną inteligencję pozwalają
          powiększać obrazy, poprawiać ich ostrość, ograniczać szumy i
          rekonstruować część detali. W wielu przypadkach umożliwia to
          przygotowanie do dużego nadruku również fotografii, które
          pierwotnie nie nadawały się do takiego zastosowania.
        </p>
        <p>
          Dotyczy to także materiałów firmowych. Nawet jeśli dysponujesz
          jedynie niewielką grafiką lub logo zapisanym w pliku rastrowym,
          nie musi to oznaczać problemu. Proste znaki graficzne często można
          odtworzyć w postaci wektorowej, co pozwala na ich powiększanie bez
          utraty ostrości krawędzi.
        </p>
        <figure className="gs-figure">
          <BeforeAfterSlider
            beforeSrc={`${beforeAfter}/jakosc-zdjecia-ai/przed.webp`}
            afterSrc={`${beforeAfter}/jakosc-zdjecia-ai/po.webp`}
            beforeAlt="Zdjęcie zimorodka w niższej jakości, przed poprawą przez AI"
            afterAlt="To samo zdjęcie zimorodka po poprawie jakości przez AI - więcej ostrości i detali"
            beforeLabel="Przed"
            afterLabel="Po"
            aspectRatio="1448 / 1086"
            ariaLabel="Porównaj jakość zdjęcia przed i po poprawie przez AI"
          />
          <figcaption>
            Przykład poprawy jakości zdjęcia przy pomocy AI. Przesuń suwak, aby
            porównać wersję przed i po.
          </figcaption>
        </figure>

        <p>
          AI nie czyni jednak cudów. Zdjęcia bardzo mocno rozmazanego,
          skompresowanego lub pozbawionego istotnych szczegółów nie zawsze
          uda się poprawić w sposób wierny oryginałowi.
        </p>
        <p>
          Istnieją jednak narzędzia AI, które potrafią stworzyć atrakcyjny,
          szczegółowy obraz nawet na podstawie fotografii o bardzo niskiej
          jakości. Jak to możliwe? Zamiast jedynie wyostrzać i powiększać
          istniejące elementy, sztuczna inteligencja może{" "}
          <strong>
            generować nowe szczegóły, których nie da się rozpoznać na
            zdjęciu źródłowym
          </strong>
          . W pewnym sensie zgaduje, co powinno znajdować się w danym
          miejscu.
        </p>
        <p>
          Im większą swobodę twórczą pozostawimy AI, tym bardziej efekt
          końcowy może odbiegać od oryginału. Na fotografii ulicy mogą
          pojawić się nowe detale budynków, inne twarze przechodniów,
          zmodyfikowane samochody czy napisy, których w rzeczywistości nigdy
          tam nie było.
        </p>
        <p>
          Jeżeli zależy nam przede wszystkim na uzyskaniu efektownej grafiki
          dekoracyjnej, takie podejście może przynieść znakomite rezultaty.
          Trzeba jednak pamiętać, że{" "}
          <strong>
            otrzymujemy wówczas częściowo nowy obraz, a nie wiernie
            odtworzone zdjęcie
          </strong>
          .
        </p>
        <p>
          Ma to szczególne znaczenie w przypadku fotografii osób. Próba
          poprawienia bardzo niewyraźnego portretu przy wysokim poziomie
          kreatywności AI może dać piękny, realistyczny obraz twarzy, ale
          niekoniecznie będzie to już ta sama osoba.
        </p>
        <p>
          Dlatego dobór metody zależy od celu. Czasem najważniejsza jest
          wierność oryginałowi, a czasem możemy pozwolić sztucznej
          inteligencji na większą swobodę. Każdy materiał oceniamy
          indywidualnie i dobieramy sposób jego przygotowania do
          oczekiwanego efektu.
        </p>

        <figure className="gs-figure">
          <BeforeAfterSlider
            beforeSrc={`${beforeAfter}/kreatywna-ai/przed.webp`}
            afterSrc={`${beforeAfter}/kreatywna-ai/po.webp`}
            beforeAlt="Zdjęcie ulicy miasta w niskiej jakości, przed przetworzeniem przez AI"
            afterAlt="Ta sama ulica po kreatywnym przetworzeniu przez AI - więcej detali, część z nich wygenerowana"
            beforeLabel="Przed"
            afterLabel="Po"
            aspectRatio="1448 / 1088"
            ariaLabel="Porównaj zdjęcie ulicy przed i po kreatywnym przetworzeniu przez AI"
          />
          <figcaption>
            <strong className="gs-figure-title">
              Gdy AI zaczyna tworzyć, a nie tylko poprawiać
            </strong>
            Przesuń suwak i porównaj oba obrazy. Zwróć uwagę na szczegóły
            architektury, twarze przechodniów, samochody i drobne elementy
            otoczenia. Obraz po przetworzeniu jest znacznie bardziej
            szczegółowy, ale wiele detali zostało wygenerowanych przez AI, a
            nie odzyskanych z oryginalnej fotografii.
          </figcaption>
        </figure>

        <p className="gs-callout">
          <strong>Ważne:</strong> jeśli masz oryginalny plik zdjęcia, grafiki
          lub logo, prześlij go zamiast zrzutu ekranu czy miniatury pobranej
          z internetu. Im lepszy materiał wyjściowy, tym większe możliwości
          jego przygotowania.
        </p>
      </LeftSideMotionDiv>
      </div>
      </Parallax>

      {/* 2. Brak własnej grafiki - banki zdjęć i AI */}
      <Parallax bgImage={bg2} bgImageAlt="tło" strength={parallaxStrength} style={parallaxStyle}>
      <div className="gs-parallax-group">
      <RightSideMotionDiv
        isSectionVisible={isSectionVisible}
        className="gs-block gs-block--dark"
      >
        <AnimatedH2 isSectionVisible={isSectionVisible}>
          Nie masz własnej grafiki? Pomożemy znaleźć lub stworzyć odpowiednią
        </AnimatedH2>
        <p>
          Nie prowadzimy tradycyjnego katalogu gotowych wzorów do druku
          ściennego. Nie chcemy ograniczać wyboru do kilkudziesięciu czy
          kilkuset propozycji.
        </p>
        <p>
          Zamiast tego możemy korzystać z ogromnych zbiorów istniejących
          grafik oraz narzędzi pozwalających tworzyć nowe obrazy na
          indywidualne zamówienie.
        </p>
        <p>
          Niezależnie od tego, czy szukasz subtelnej dekoracji do salonu,
          efektownej panoramy do restauracji, grafiki związanej z
          działalnością firmy czy ilustracji edukacyjnej do szkoły, możemy
          pomóc w znalezieniu odpowiedniego rozwiązania.
        </p>

        <AnimatedH3 isSectionVisible={isSectionVisible}>
          Banki zdjęć – miliony fotografii, ilustracji i wzorów
        </AnimatedH3>
        <p>
          Banki zdjęć to doskonały punkt wyjścia, szczególnie jeśli szukasz
          realistycznej fotografii, konkretnego krajobrazu, motywu
          roślinnego, abstrakcji lub ilustracji w określonym stylu.
        </p>
        <p>
          Mogą być również źródłem materiałów do projektów firmowych.
          Fotografie produktów, architektury, maszyn, pojazdów, detali
          technologicznych czy motywy związane z konkretną branżą mogą
          posłużyć do stworzenia efektownej grafiki w biurze, recepcji, sali
          konferencyjnej lub lokalu usługowym.
        </p>
        <p>Możesz samodzielnie przeglądać zasoby takich serwisów jak:</p>
        <ul className="gs-bank-list">
          {bankiZdjec.map((bank) => (
            <li key={bank.name}>
              <a href={bank.url} target="_blank" rel="noreferrer">
                {bank.name}
              </a>{" "}
              – {bank.text}
            </li>
          ))}
        </ul>
        <p>
          Jeśli znajdziesz coś interesującego, wystarczy przesłać nam link
          lub numer wybranego materiału. Sprawdzimy możliwości wykorzystania
          go w projekcie oraz ewentualne koszty licencji.
        </p>
        <p>
          Nie musisz też ograniczać się do jednej grafiki. Możemy
          wykorzystać wybrane elementy różnych materiałów, odpowiednio je
          połączyć i przygotować spójną kompozycję, pod warunkiem że
          pozwalają na to prawa do wykorzystanych materiałów.
        </p>

        <AnimatedH3 isSectionVisible={isSectionVisible}>
          Grafiki generowane przez AI – gdy gotowy obraz nie wystarcza
        </AnimatedH3>
        <p>
          A co, jeśli masz bardzo konkretną wizję, ale nie możesz znaleźć
          odpowiadającej jej grafiki?
        </p>
        <p>
          Tutaj z pomocą przychodzi generatywna sztuczna inteligencja.
          Nowoczesne modele AI pozwalają tworzyć obrazy na podstawie opisu,
          zdjęć referencyjnych lub wstępnego szkicu.
        </p>
        <p>
          Może to być bajkowy krajobraz do pokoju dziecięcego, futurystyczna
          panorama miasta, kompozycja inspirowana antyczną sztuką, motyw
          nawiązujący do działalności firmy albo abstrakcja w kolorach
          dopasowanych do wnętrza.
        </p>
        <p>
          Wyobraź sobie na przykład salon samochodowy, którego ścianę zdobi
          dynamiczna kompozycja motoryzacyjna, biuro firmy budowlanej z
          panoramą nowoczesnej architektury albo gabinet medyczny z subtelną
          grafiką nawiązującą do specjalizacji placówki.
        </p>
        <p>
          Zamiast szukać pojedynczego obrazu, który przypadkiem spełni
          wszystkie oczekiwania, możemy stworzyć kompozycję uwzględniającą
          wybraną tematykę, kolorystykę i proporcje ściany.
        </p>
        <p>
          Możliwości nie ograniczają się do generowania całych obrazów od
          podstaw. AI może również pomóc w zmianie stylu istniejącej
          grafiki, rozbudowaniu jej kompozycji lub stworzeniu brakujących
          elementów.
        </p>
        <p>
          Nie oznacza to jednak, że każdy wygenerowany obraz jest od razu
          gotowy do wydrukowania. Grafiki AI również wymagają kontroli
          szczegółów, proporcji i jakości. Szczególnie ważne jest sprawdzanie
          napisów, logotypów, elementów technicznych oraz ilustracji o
          charakterze edukacyjnym.
        </p>
      </RightSideMotionDiv>
      </div>
      </Parallax>

      {/* 3. Logo firmy i grafika firmowa */}
      <Parallax bgImage={bg1} bgImageAlt="tło" strength={parallaxStrength} style={parallaxStyle}>
      <div className="gs-parallax-group">
      <LeftSideMotionDiv isSectionVisible={isSectionVisible} className="gs-block">
        <AnimatedH2 isSectionVisible={isSectionVisible}>
          Logo firmy to dopiero początek – grafika, która opowiada o Twojej
          działalności
        </AnimatedH2>
        <p>
          Firmowa ściana nie musi ograniczać się do umieszczenia logo na
          jednolitym tle.
        </p>
        <p>
          Odpowiednio przygotowana kompozycja może łączyć znak firmowy z
          grafikami przedstawiającymi branżę, produkty, usługi lub wartości,
          z którymi marka chce być kojarzona.
        </p>
        <p>
          Firma transportowa może wykorzystać motywy dróg, pojazdów i map.
          Przedsiębiorstwo przemysłowe może pokazać maszyny, procesy
          produkcyjne lub charakterystyczne elementy swojej technologii.
          Biuro projektowe może zdecydować się na kompozycję opartą na
          rysunkach technicznych i architekturze, a restauracja na
          ilustrację nawiązującą do kuchni, regionu lub historii lokalu.
        </p>
        <p>
          Możemy wkomponować logo w rozbudowaną grafikę tak, aby stanowiło
          jej naturalną część, a nie przypadkowo dodany element. Możliwe
          jest również wykorzystanie firmowej kolorystyki,
          charakterystycznych kształtów, haseł reklamowych czy innych
          elementów identyfikacji wizualnej.
        </p>

        <AnimatedH3 isSectionVisible={isSectionVisible}>
          Nie masz profesjonalnego logo lub księgi identyfikacji wizualnej?
        </AnimatedH3>
        <p>
          Nie każda firma dysponuje kompletem materiałów przygotowanych
          przez agencję reklamową. Szczególnie w przypadku mniejszych
          przedsiębiorstw logo bywa dostępne jedynie jako niewielki plik JPG
          lub PNG.
        </p>
        <p>
          Nie oznacza to, że nie można wykorzystać go w projekcie. W
          zależności od jakości i stopnia skomplikowania znaku możemy
          spróbować przygotować wersję odpowiednią do druku
          wielkoformatowego, odtworzyć proste elementy w postaci wektorowej
          lub zaproponować inne rozwiązanie.
        </p>
        <p>
          Jeśli firma posiada opracowaną identyfikację wizualną, możemy z
          kolei dostosować projekt do jej wytycznych, zachowując właściwe
          kolory, proporcje logo i pozostałe elementy marki.
        </p>

        <AnimatedH3 isSectionVisible={isSectionVisible}>
          Nie tylko reklama – również atmosfera wnętrza
        </AnimatedH3>
        <p>
          Grafika firmowa nie zawsze musi bezpośrednio przedstawiać produkty
          czy usługi.
        </p>
        <p>
          W hotelu może nawiązywać do historii lub charakterystycznych
          miejsc regionu. W restauracji może budować atmosferę wnętrza, a w
          biurze tworzyć przestrzeń bardziej przyjazną pracownikom i
          gościom. W placówce edukacyjnej może łączyć funkcję dekoracyjną z
          przekazywaniem wiedzy.
        </p>
        <p>
          Warto zastanowić się nie tylko nad tym, co ma przedstawiać nadruk,
          ale również jakie wrażenie powinien wywoływać u osób, które będą
          go codziennie oglądały.
        </p>
      </LeftSideMotionDiv>
      </div>
      </Parallax>

      {/* 4. Połączenie metod */}
      <Parallax bgImage={bg2} bgImageAlt="tło" strength={parallaxStrength} style={parallaxStyle}>
      <div className="gs-parallax-group">
      <RightSideMotionDiv
        isSectionVisible={isSectionVisible}
        className="gs-block gs-block--dark"
      >
        <AnimatedH2 isSectionVisible={isSectionVisible}>
          Połączenie AI, banków zdjęć i Photoshopa – projekt dopasowany do
          Twojej ściany
        </AnimatedH2>
        <p>Najciekawsze efekty często powstają dzięki połączeniu różnych metod.</p>
        <p>
          Punktem wyjścia może być fotografia z banku zdjęć, fragment
          ilustracji wygenerowanej przez AI, logo firmy albo własny materiał
          klienta. Następnie możemy dopasować kolorystykę, zmienić układ
          elementów, rozbudować tło, usunąć niepożądane fragmenty i połączyć
          wszystko w jedną kompozycję.
        </p>
        <p>
          Przykładowo: podoba Ci się konkretny krajobraz, ale potrzebujesz
          znacznie szerszego obrazu? Możemy spróbować rozbudować jego
          otoczenie.
        </p>
        <p>
          Chcesz umieścić na ścianie logo firmy, kilka charakterystycznych
          maszyn i elementy związane z jej działalnością? Możemy przygotować
          z nich wspólną, spójną grafikę.
        </p>

        <figure className="gs-figure">
          <BeforeAfterSlider
            beforeSrc={`${beforeAfter}/logo-plus-grafika/przed.webp`}
            afterSrc={`${beforeAfter}/logo-plus-grafika/po.webp`}
            beforeAlt="Logo firmy i osobna grafika tematyczna jako materiały wyjściowe do kompozycji"
            afterAlt="Logo i grafika połączone we wspólną kompozycję wydrukowaną na ścianie"
            beforeLabel="Materiały"
            afterLabel="Na ścianie"
            aspectRatio="1850 / 1088"
            ariaLabel="Porównaj materiały wyjściowe (logo i grafikę) z efektem na ścianie"
          />
          <figcaption>
            Przykładowe połączenie logo firmy z grafiką tematyczną w jedną
            kompozycję na ścianie.
          </figcaption>
        </figure>

        <p>
          A może prowadzisz restaurację i chciałbyś połączyć historyczne
          motywy z nowoczesną stylistyką wnętrza? W takim przypadku projekt
          może powstać z wielu osobno przygotowanych elementów.
        </p>
        <p>
          Dzięki temu nie musisz dopasowywać swojej wizji do ograniczeń
          jednego gotowego obrazu.
        </p>
      </RightSideMotionDiv>
      </div>
      </Parallax>

      {/* 5. Dopasowanie projektu do wnętrza */}
      <Parallax bgImage={bg1} bgImageAlt="tło" strength={parallaxStrength} style={parallaxStyle}>
      <div className="gs-parallax-group">
      <LeftSideMotionDiv isSectionVisible={isSectionVisible} className="gs-block">
        <AnimatedH2 isSectionVisible={isSectionVisible}>
          Projekt dopasowany do wnętrza, a nie odwrotnie
        </AnimatedH2>
        <p>
          Grafika, która znakomicie wygląda na monitorze, nie zawsze równie
          dobrze sprawdzi się na dużej ścianie.
        </p>
        <p>
          Przygotowując projekt do{" "}
          <RouterLink to="/technika">druku ściennego</RouterLink>, zwracamy
          uwagę między innymi na jego proporcje, rozdzielczość, kolorystykę,
          rozmieszczenie ważnych elementów oraz rodzaj podłoża.
        </p>

        <AnimatedH3 isSectionVisible={isSectionVisible}>
          Proporcje i kompozycja
        </AnimatedH3>
        <p>
          Długa ściana w firmowym korytarzu może wymagać zupełnie innego
          projektu niż niewielka powierzchnia w domowym gabinecie. Podobnie
          ściana w sali konferencyjnej, restauracji czy recepcji może
          narzucać określony układ elementów.
        </p>
        <p>
          Czasem wystarczy odpowiednie kadrowanie, a czasem lepszym
          rozwiązaniem jest rozbudowanie kompozycji lub przygotowanie jej od
          podstaw.
        </p>
        <p>
          Jeśli projekt zawiera logo, napisy, twarze lub inne istotne
          elementy, uwzględniamy ich rozmieszczenie względem dostępnej
          powierzchni, mebli i wyposażenia wnętrza.
        </p>

        <AnimatedH3 isSectionVisible={isSectionVisible}>
          Kolor ściany i tło grafiki
        </AnimatedH3>
        <p>
          Projekt może zajmować prostokątną powierzchnię albo mieć
          nieregularne krawędzie, dzięki którym lepiej wpisuje się w
          przestrzeń.
        </p>
        <p>
          Znaczenie ma również kolor podłoża. Na ciemnych ścianach niektóre
          grafiki wymagają zastosowania białego poddruku, aby zachować
          zamierzoną kolorystykę.
        </p>
        <p>
          W przypadku projektów firmowych szczególną uwagę warto zwrócić na
          kolory identyfikacji wizualnej. Należy przy tym pamiętać, że
          odwzorowanie kolorów na ścianie może różnić się od ich wyglądu na
          monitorze lub materiałach drukowanych inną technologią.
        </p>

        <AnimatedH3 isSectionVisible={isSectionVisible}>
          Detale i czytelność
        </AnimatedH3>
        <p>
          Duży nadruk oglądany z niewielkiej odległości powinien zachować
          odpowiednią jakość, ale nie każdy projekt wymaga takiej samej
          szczegółowości.
        </p>
        <p>
          Inne kryteria stosujemy do fotografii krajobrazowej, inne do logo,
          a jeszcze inne do ilustracji z drobnymi napisami, schematami
          technicznymi czy elementami edukacyjnymi.
        </p>
        <p>
          Dlatego przed drukiem sprawdzamy nie tylko sam plik, ale również
          jego dopasowanie do planowanego rozmiaru.
        </p>
      </LeftSideMotionDiv>
      </div>
      </Parallax>

      {/* 6-7. Jak wygląda współpraca (krótki) + FAQ */}
      <Parallax bgImage={bg2} bgImageAlt="tło" strength={parallaxStrength} style={parallaxStyle}>
      <div className="gs-parallax-group">
      <RightSideMotionDiv
        isSectionVisible={isSectionVisible}
        className="gs-block gs-block--dark"
      >
        <AnimatedH2 isSectionVisible={isSectionVisible}>
          Jak wygląda współpraca przy wyborze grafiki?
        </AnimatedH2>
        <ol className="gs-steps">
          {wspolpracaSteps.map((step) => (
            <li key={step.title}>
              <strong>{step.title}</strong> {step.text}
            </li>
          ))}
        </ol>
        <p>
          Zakres i ewentualny koszt dodatkowych prac graficznych ustalamy
          indywidualnie, zależnie od stopnia skomplikowania projektu.
        </p>
      </RightSideMotionDiv>
      <div className="gs-block">
        <FAQ
          heading="Najczęściej zadawane pytania"
          lead="Krótkie odpowiedzi o wyborze, jakości i przygotowaniu grafiki do druku"
          items={faqItems}
          animated={false}
        />
      </div>
      </div>
      </Parallax>

      {/* 8. Zamknięcie + CTA */}
      <div className="gs-cta">
        <h2>Masz pomysł? Zacznijmy od niego.</h2>
        <p>
          Nie musisz znać parametrów technicznych pliku ani wiedzieć, jak
          przygotować grafikę do druku ściennego.
        </p>
        <p>
          Niezależnie od tego, czy planujesz dekorację prywatnego wnętrza,
          oryginalną aranżację lokalu, czy nadruk podkreślający charakter
          Twojej firmy, pomożemy ocenić możliwości realizacji.
        </p>
        <p className="gs-cta-strong">
          Prześlij nam zdjęcie, logo, gotowy projekt lub po prostu opisz
          swój pomysł. Sprawdzimy dostępne rozwiązania i podpowiemy, jak
          najlepiej przenieść Twoją wizję na ścianę.
        </p>
        <RouterLink
          to={{ pathname: "/", hash: "#kontakt" }}
          className="gs-cta-button"
        >
          Skontaktuj się z Loftprint
        </RouterLink>
      </div>
    </div>
  );
};

export default GrafikaNaSciane;
