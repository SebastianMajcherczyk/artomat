import React, { useEffect, useState } from "react";
import "./Technika.css";
import {
  LeftSideMotionDiv,
  RightSideMotionDiv,
} from "../Styled/StyledMotionDiv";
import { AnimatedH2, AnimatedH3 } from "../Styled/StyledHeader";

const Technika = () => {
  const [isSectionVisible, setIsSectionVisible] = useState(false);
  const [hasAnimationPlayed, setHasAnimationPlayed] = useState(false);

  const checkIfSectionIsVisible = () => {
    const section = document.querySelector(".technika");
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
        Możliwości drukarki ściennej UV
      </AnimatedH2>
      <AnimatedH3 isSectionVisible={isSectionVisible}>
        Szczegóły i dane techniczne
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
          zadrukowanie nawet dużych powierzchni.
          <strong>
            {" "}
            Maksymalna wysokość druku wynosi 3,50 metra, a szerokość jest
            nieograniczona.
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
            alt="max-height"
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
            alt="max-height"
            className="icon"
          />
          <img
            src={`${process.env.PUBLIC_URL}/Dimensions/icon_left_small.webp`}
            alt="max-height"
            className="icon"
          />

          <img
            src={`${process.env.PUBLIC_URL}/Dimensions/icon_bottom_small.webp`}
            alt="max-height"
            className="icon"
          />
          <img
            src={`${process.env.PUBLIC_URL}/Dimensions/icon_top_small.webp`}
            alt="max-height"
            className="icon"
          />
        </div>
        <p>
          <strong> Szybkość druku wynosi około 0,8 m²/h do 1,6 m²/h. </strong>{" "}
          Głowica drukarki podczas nanoszenia projektu, równocześnie suszy i
          ostatecznie utwierdza atrament za pomocą zintegrowanej lampy UV. Tak
          zautomatyzowana i dokładnie zaprojektowana maszyna sprawia, że{" "}
          <strong>
            obraz naniesiony na klasyczną otynkowaną ścianę jest utrwalony i
            suchy natychmiast po wydruku.
          </strong>{" "}
          W przypadku nietypowych powierzchni takich jak szkło czy metal czas
          schnięcia wynosi od kilkunastu godzin do 2-3 dni.
        </p>
        <p>
          Gotowy, suchy i utrwalony <strong>obraz jest odporny na wodę</strong>,
          więc i zabrudzenia. Istnieje możliwość swobodnego mycia zadrukowanej
          ściany. <strong>Trwałość projektu </strong> wykonanego wewnątrz
          budynku na klasycznym podłożu pokrytym farbą emulsyjną wynosi{" "}
          <strong> 10 lat.</strong>W przypadku nietypowych powierzchni lub druku
          zewnętrznego, wystawionego na większą ekspozycję na warunki
          atmosferyczne i promieniowanie słoneczne, jest to 5 lat.
        </p>
      </LeftSideMotionDiv>
      <RightSideMotionDiv
        isSectionVisible={isSectionVisible}
        className="surfaces title"
      >
        <h3>Powierzchnie, którym możemy nadać nowy charakter.</h3>
        <p>
          Podłożem, na którym najczęściej wykonywany jest druk ścienny jest
          typowa, otynkowana, pokryta gładzią i pomalowana ściana. Nie jest to
          jednak koniec naszych możliwości. Technologia druku naściennego
          umożliwia przenoszenie obrazów także na powierzchnie metalowe,
          drewniane, szklane, ceglane i wiele innych!
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
              alt="glass"
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
          sprawy — podłoże nas nie ogranicza!{" "}
          <strong>
            Pracujemy z technologią, która kompensuje do 5 cm nierówności
            powierzchni.
          </strong>{" "}
          Łagodne fałdy, garby lub ewentualne nachylenia nie stanowią problemu.{" "}
        </p>
      </RightSideMotionDiv>
    </div>
  );
};

export default Technika;
