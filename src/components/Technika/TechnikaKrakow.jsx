import React, { useEffect, useState } from "react";
import "./Technika.css";
import {
  LeftSideMotionDiv,
  RightSideMotionDiv,
} from "../Styled/StyledMotionDiv";
import { AnimatedH2, AnimatedH3 } from "../Styled/StyledHeader";

const TechnikaKrakow = () => {
  const [isSectionVisible, setIsSectionVisible] = useState(false);
  const [hasAnimationPlayed, setHasAnimationPlayed] = useState(false);

  const checkIfSectionIsVisible = () => {
    const section = document.querySelector(".technika");
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

  return (
    <div className="technika-container">
      <AnimatedH2 isSectionVisible={isSectionVisible}>
        Jak działa drukarka ścienna UV, z której korzystamy w Krakowie?
      </AnimatedH2>
      <AnimatedH3 isSectionVisible={isSectionVisible}>
        Szczegóły i dane techniczne – co możemy wydrukować w Twoim obiekcie
      </AnimatedH3>

      <LeftSideMotionDiv
        isSectionVisible={isSectionVisible}
        className="technika "
      >
        <p>
          Proces drukowania rozpoczyna się po odpowiednim ustawieniu urządzenia
          do pracy i załadowaniu wybranego pliku do pamięci drukarki. Głowica
          maszyny porusza się w pionie, nanosząc wzór z rozdzielczością do 720 x
          1440 dpi na daną powierzchnię. W tym samym czasie cała drukarka
          przemieszcza się w prawo po szynach. Dzięki temu możliwe jest
          zadrukowanie nawet dużych ścian w biurach, klubach sportowych czy
          szkołach w Krakowie i okolicach.
          <strong>
            {" "}
            Maksymalna wysokość druku wynosi 4 metry, a szerokość jest
            praktycznie nieograniczona.
          </strong>
        </p>
        <div className="icon-container">
          <img
            src={`${process.env.PUBLIC_URL}/Dimensions/icon_height_small.webp`}
            alt="max-height"
            className="icon"
          />
          <img
            src={`${process.env.PUBLIC_URL}/Dimensions/icon_width_small.webp`}
            alt="max-width"
            className="icon"
          />
        </div>
        <p>
          Z uwagi na to, że drukarka wraz z głowicą mają określone gabaryty,
          jedyną koniecznością jest uwzględnienie w planowanym projekcie
          następujących marginesów:
          <br />
          Od góry: 35 cm <br />
          Od dołu: 35 cm <br />
          Od lewej strony: 12 cm <br />
          Od prawej strony: 12 cm
        </p>
        <div className="icon-container">
          <img
            src={`${process.env.PUBLIC_URL}/Dimensions/icon_right_small.webp`}
            alt="margin-right"
            className="icon"
          />
          <img
            src={`${process.env.PUBLIC_URL}/Dimensions/icon_left_small.webp`}
            alt="margin-left"
            className="icon"
          />

          <img
            src={`${process.env.PUBLIC_URL}/Dimensions/icon_bottom_small.webp`}
            alt="margin-bottom"
            className="icon"
          />
          <img
            src={`${process.env.PUBLIC_URL}/Dimensions/icon_top_small.webp`}
            alt="margin-top"
            className="icon"
          />
        </div>
        <p>
          <strong>Szybkość druku wynosi około 0,8 m²/h do 1,6 m²/h.</strong>{" "}
          Głowica drukarki podczas nanoszenia projektu równocześnie suszy i
          ostatecznie utwardza atrament za pomocą zintegrowanej lampy UV. Tak
          zaprojektowany proces sprawia, że{" "}
          <strong>
            obraz naniesiony na klasyczną, otynkowaną ścianę jest utrwalony i
            suchy natychmiast po wydruku.
          </strong>{" "}
          W przypadku nietypowych powierzchni, takich jak szkło czy metal, czas
          pełnego utwardzenia może wynosić od kilkunastu godzin do 2–3 dni – co
          bierzemy pod uwagę przy planowaniu realizacji w krakowskich obiektach.
        </p>
        <p>
          Gotowy, suchy i utrwalony{" "}
          <strong>obraz jest odporny na wodę i zabrudzenia</strong>, dzięki
          czemu ścianę można delikatnie myć bez obaw o uszkodzenie nadruku.{" "}
          <strong>Trwałość projektu</strong> wykonanego wewnątrz budynku na
          klasycznym podłożu pokrytym farbą emulsyjną wynosi{" "}
          <strong>około 10 lat.</strong> W przypadku nietypowych powierzchni lub
          druku zewnętrznego, wystawionego na większą ekspozycję na warunki
          atmosferyczne i promieniowanie słoneczne, przyjmujemy trwałość na
          poziomie około 5 lat.
        </p>
      </LeftSideMotionDiv>

      <RightSideMotionDiv
        isSectionVisible={isSectionVisible}
        className="surfaces title"
      >
        <h3>Powierzchnie, którym możemy nadać nowy charakter w Krakowie.</h3>
        <p>
          Najczęściej drukujemy na typowych, otynkowanych i pomalowanych
          ścianach w mieszkaniach, biurach i obiektach usługowych. Technologia
          druku naściennego umożliwia jednak przenoszenie obrazów także na
          powierzchnie metalowe, drewniane, szklane, ceglane i wiele innych –
          dzięki czemu możemy dopasować się do różnych przestrzeni w Krakowie i
          Małopolsce.
        </p>
        <div className="surfaces-gallery">
          <div className="surface-section">
            <h4>Beton</h4>
            <img
              src={`${process.env.PUBLIC_URL}/Surfaces/concrete-thumb.webp`}
              alt="concrete"
            />
          </div>
          <div className="surface-section">
            <h4>Metal</h4>
            <img
              src={`${process.env.PUBLIC_URL}/Surfaces/steel-thumb.webp`}
              alt="metal"
            />
          </div>
          <div className="surface-section">
            <h4>Szkło</h4>
            <img
              src={`${process.env.PUBLIC_URL}/Surfaces/glass-thumb.webp`}
              alt="glass"
            />
          </div>
          <div className="surface-section">
            <h4>Drewno</h4>
            <img
              src={`${process.env.PUBLIC_URL}/Surfaces/barbecue-thumb.webp`}
              alt="wood"
            />
          </div>
          <div className="surface-section">
            <h4>Cegła</h4>
            <img
              src={`${process.env.PUBLIC_URL}/Surfaces/brick2-thumb.webp`}
              alt="brick"
            />
          </div>
        </div>
        <p>
          Masz nietypową lub nierówną ścianę, którą chcesz ozdobić? Nie ma
          problemu – podłoże rzadko nas ogranicza.{" "}
          <strong>
            Pracujemy z technologią, która kompensuje do około 5 cm nierówności
            powierzchni.
          </strong>{" "}
          Łagodne fałdy, garby lub nachylenia nie stanowią przeszkody. Dzięki
          temu możemy realizować projekty również w starszych budynkach
          krakowskich kamienic czy obiektach o mniej idealnych ścianach.
        </p>
      </RightSideMotionDiv>
    </div>
  );
};

export default TechnikaKrakow;
