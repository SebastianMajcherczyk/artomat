import { useEffect, useRef, useState } from "react";

// Ujawnia sekcję (isVisible -> true, raz, na stałe) gdy wejdzie w widoczny
// obszar ekranu. Zastępuje wcześniejszy wzorzec: nasłuch zdarzenia "scroll"
// + ręczne liczenie getBoundingClientRect() w każdym komponencie sekcji.
// Ten wzorzec sprawdzał widoczność tylko w momentach odpalenia zdarzenia
// scroll - przy refreshu strony w połowie jej długości żadne zdarzenie
// scroll jeszcze nie padło, więc sekcje już widoczne na ekranie stały
// schowane do pierwszego "trącenia" strony; dodatkowo szybki/duży skok
// scrolla (np. przeciągnięcie suwaka) mógł w całości przeskoczyć wąskie
// okno, w którym warunek był spełniony, i sekcja zostawała schowana na
// stałe. IntersectionObserver nie próbkuje zdarzeń scroll, tylko śledzi
// faktyczne przecięcie elementu z viewportem, więc odpala się poprawnie
// niezależnie od tempa/kierunku scrolla i natychmiast dla elementu, który
// jest w widoku już w momencie podpięcia.
export default function useSectionReveal({ skip = false } = {}) {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(skip);

  useEffect(() => {
    if (skip) return undefined;

    const node = ref.current;
    if (!node) return undefined;

    // rootMargin skraca dół obserwowanego viewportu o ~1/3 - sekcja
    // ujawnia się, gdy wejdzie w górne ~2/3 ekranu, podobnie jak poprzedni
    // próg "window.innerHeight / 1.5" używany w większości komponentów.
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin: "0px 0px -33% 0px" },
    );

    observer.observe(node);

    return () => observer.disconnect();
  }, [skip]);

  return [ref, isVisible];
}
