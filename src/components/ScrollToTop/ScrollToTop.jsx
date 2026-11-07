import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname, hash } = useLocation();
  // Ten komponent montuje się raz, globalnie (patrz App-lazy.jsx), więc jego
  // pierwszy efekt odpala się też przy zwykłym twardym odświeżeniu strony -
  // nie tylko przy nawigacji w obrębie aplikacji. Wymuszenie scrollTo(0,0)
  // przy tym pierwszym montowaniu ścigało się wtedy z natywnym przywracaniem
  // pozycji scrolla przez przeglądarkę po refreshu, dając widoczny "błysk"
  // góry strony przed doskoczeniem do właściwego miejsca. Pomijamy więc ten
  // pierwszy przebieg efektu - scrollTo(0,0) ma reagować tylko na faktyczną
  // zmianę trasy w działającej już aplikacji.
  const isFirstRender = useRef(true);

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }

    if (!hash) {
      window.scrollTo({ top: 0, behavior: "auto" });
    }
  }, [pathname, hash]);

  return null;
};

export default ScrollToTop;
