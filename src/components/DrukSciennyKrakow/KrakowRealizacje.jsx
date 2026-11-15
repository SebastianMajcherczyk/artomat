import { Link as RouterLink } from "react-router-dom";
import { RightSideMotionDiv } from "../Styled/StyledMotionDiv";
import { AnimatedH2 } from "../Styled/StyledHeader";
import useSectionReveal from "../../hooks/useSectionReveal";
import { krakowRealizacje } from "./krakow-realizacje-data";
import "./KrakowRealizacje.css";

const KrakowRealizacje = () => {
  const [sectionRef, isSectionVisible] = useSectionReveal();

  return (
    <div className="kr-container" ref={sectionRef}>
      <AnimatedH2 isSectionVisible={isSectionVisible}>
        Realizacje Loftprint w Krakowie i okolicach
      </AnimatedH2>

      <RightSideMotionDiv isSectionVisible={isSectionVisible} className="kr-body">
        <p className="kr-intro">
          Kraków to miejsce, w którym powstało wiele naszych realizacji druku
          ściennego. Pracowaliśmy dla hoteli, restauracji, firm, szkół,
          instytucji kultury oraz klientów indywidualnych. Każdy z tych
          projektów miał inne założenia, od prostego logotypu na ścianie po
          wielometrowe murale i grafiki wymagające precyzyjnego odwzorowania
          drobnych detali.
        </p>
        <p className="kr-intro">
          Poniżej prezentujemy wybrane realizacje Loftprint w Krakowie i
          najbliższej okolicy. Pokazują one, jak różne zastosowania może mieć
          druk UV bezpośrednio na ścianie, niezależnie od tego, czy chodzi o
          identyfikację wizualną marki, aranżację wnętrza, ekspozycję
          muzealną czy prywatną przestrzeń.
        </p>

        <div className="kr-list">
          {krakowRealizacje.map((item, index) => (
            <article key={item.slug} className="kr-item">
              <h3>{item.title}</h3>

              <div className="kr-item-body">
                <img
                  className={
                    "kr-figure-img" +
                    (index % 2 === 1
                      ? " kr-figure-img--right"
                      : " kr-figure-img--left")
                  }
                  src={item.image}
                  alt={item.alt}
                  width={item.width}
                  height={item.height}
                  loading="lazy"
                  decoding="async"
                />

                <p>{item.text}</p>

                {(item.gallerySlug || item.facebookReelUrl) && (
                  <div className="kr-links">
                    {item.gallerySlug && (
                      <RouterLink to={`/gallery/${item.gallerySlug}`}>
                        Zobacz więcej zdjęć tej realizacji
                      </RouterLink>
                    )}
                    {item.facebookReelUrl && (
                      <a
                        href={item.facebookReelUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Zobacz film z realizacji na Facebooku
                      </a>
                    )}
                  </div>
                )}
              </div>
            </article>
          ))}
        </div>

        <div className="kr-outro">
          <h3>
            Druk ścienny w Krakowie – od niewielkich logotypów po duże murale
          </h3>
          <p>
            Przedstawione realizacje pokazują różnorodność zastosowań druku
            ściennego w Krakowie i okolicach. W zależności od potrzeb
            wykonujemy logotypy, dekoracje restauracyjne, grafiki
            edukacyjne, elementy ekspozycji oraz wielkoformatowe murale,
            dobierając technologię i sposób przygotowania projektu do
            konkretnego podłoża. Jeśli planujesz podobną realizację, zobacz
            również naszą pełną galerię lub skontaktuj się z Loftprint, aby
            omówić możliwości wykonania nadruku w Twoim wnętrzu.
          </p>

          <div className="kr-outro-actions">
            <RouterLink to="/gallery" className="kr-link primary">
              Zobacz pełną galerię realizacji
            </RouterLink>
            <RouterLink
              to={{ pathname: "/", hash: "#kontakt" }}
              className="kr-link secondary"
            >
              Skontaktuj się z nami
            </RouterLink>
          </div>
        </div>
      </RightSideMotionDiv>
    </div>
  );
};

export default KrakowRealizacje;
