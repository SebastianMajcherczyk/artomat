import React, { useCallback, useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { Parallax } from "react-parallax";
import ProjectViewerV2 from "./ProjectViewerV2";
import "./GalleryV2.css";

const INITIAL_ROWS = 3.5;
const ROWS_STEP = 2;

// Te same tła co na pozostałych podstronach i na homepage'owej sekcji
// galerii (src/image22.jpg). Panel siatki rośnie dynamicznie po "Pokaż
// kolejne realizacje" (zmiana max-height), a react-parallax mierzy
// wysokość tła tylko przy montowaniu / scrollu / resize okna - bez
// dodatkowego zabiegu tło mogłoby nie nadążyć za rozwinięciem. Dlatego
// <Parallax key={visibleRows}> niżej: zmiana key wymusza przemontowanie
// (i ponowny pomiar) przy każdym kroku rozwinięcia.
const bg = require("../../image22.jpg");
const parallaxStrength = 150;
const parallaxStyle = { width: "100%" };

const shuffleArray = (array) => {
  const copy = [...array];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
};

const GalleryV2 = ({ projects, activeProject, onClose }) => {
  // Kolejność wyjściowa jest deterministyczna (ta sama co w danych), żeby
  // zgadzała się z prerenderem — losowanie dopiero po zamontowaniu w
  // przeglądarce, raz na wejście na stronę (nie przy "Pokaż kolejne").
  const [displayProjects, setDisplayProjects] = useState(projects);

  useEffect(() => {
    setDisplayProjects(shuffleArray(projects));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [projects]);

  const [visibleRows, setVisibleRows] = useState(INITIAL_ROWS);
  const [totalRows, setTotalRows] = useState(0);
  const [maxHeight, setMaxHeight] = useState("none");
  const gridRef = useRef(null);
  const firstTileRef = useRef(null);

  // .gv2-collapsible animuje max-height przez 0.45s (patrz GalleryV2.scss) -
  // przemontowanie <Parallax> (żeby na nowo zmierzyła wysokość tła) musi
  // poczekać, aż ta animacja się skończy, inaczej złapie wysokość sprzed
  // rozwinięcia. parallaxTick rośnie dopiero 500ms po każdej zmianie
  // maxHeight (debounce przez czyszczenie poprzedniego timeoutu).
  const [parallaxTick, setParallaxTick] = useState(0);
  useEffect(() => {
    const t = setTimeout(() => setParallaxTick((n) => n + 1), 500);
    return () => clearTimeout(t);
  }, [maxHeight]);

  const recompute = useCallback(() => {
    const grid = gridRef.current;
    const tile = firstTileRef.current;
    if (!grid || !tile) return;

    const cs = getComputedStyle(grid);
    const padTop = parseFloat(cs.paddingTop) || 0;
    const padBottom = parseFloat(cs.paddingBottom) || 0;
    const padLeft = parseFloat(cs.paddingLeft) || 0;
    const padRight = parseFloat(cs.paddingRight) || 0;
    const gapY = parseFloat(cs.rowGap) || 0;
    const gapX = parseFloat(cs.columnGap) || 0;

    const tileRect = tile.getBoundingClientRect();
    const contentWidth = grid.clientWidth - padLeft - padRight;
    const columns = Math.max(
      1,
      Math.floor((contentWidth + gapX) / (tileRect.width + gapX)),
    );
    const rows = Math.ceil(displayProjects.length / columns);
    setTotalRows(rows);

    if (visibleRows >= rows) {
      setMaxHeight("none");
      return;
    }

    const rowsShown = Math.min(visibleRows, rows);
    const full = Math.floor(rowsShown);
    const frac = rowsShown - full;

    let height = padTop + padBottom;
    if (full > 0) height += full * tileRect.height + (full - 1) * gapY;
    if (frac > 0 && full < rows) height += gapY + frac * tileRect.height;
    setMaxHeight(`${Math.ceil(height) + 1}px`);
  }, [displayProjects.length, visibleRows]);

  useEffect(() => {
    recompute();
    const observer = new ResizeObserver(recompute);
    if (gridRef.current) observer.observe(gridRef.current);
    window.addEventListener("resize", recompute);
    return () => {
      observer.disconnect();
      window.removeEventListener("resize", recompute);
    };
  }, [recompute]);

  const isFullyExpanded = totalRows > 0 && visibleRows >= totalRows;

  const showMore = () =>
    setVisibleRows((v) => Math.min(v + ROWS_STEP, totalRows));
  const showLess = () => setVisibleRows(INITIAL_ROWS);

  return (
    <div className="gv2">
      <Parallax
        key={parallaxTick}
        bgImage={bg}
        bgImageAlt="tło"
        strength={parallaxStrength}
        style={parallaxStyle}
      >
      <div className="gv2-parallax-pad">
      <div className="gv2-panel">
        <div
          className={`gv2-collapsible${isFullyExpanded ? "" : " is-collapsed"}`}
          style={{ maxHeight: isFullyExpanded ? "none" : maxHeight }}
        >
          <ul className="gv2-grid" ref={gridRef}>
            {displayProjects.map((project, index) => (
              <li key={project.id}>
                <Link
                  to={`/gallery/${project.slug}`}
                  className="gv2-thumb"
                  data-title={project.title.trim()}
                  aria-label={`Otwórz realizację: ${project.title.trim()}`}
                  ref={index === 0 ? firstTileRef : null}
                >
                  <img
                    src={project.thumbnails[0]}
                    alt={project.title.trim()}
                    loading="lazy"
                  />
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {!isFullyExpanded && (
          <button type="button" className="gv2-toggle" onClick={showMore}>
            Pokaż kolejne realizacje
          </button>
        )}
        {isFullyExpanded && totalRows > INITIAL_ROWS && (
          <button type="button" className="gv2-toggle" onClick={showLess}>
            Pokaż mniej realizacji
          </button>
        )}
      </div>
      </div>
      </Parallax>

      {activeProject && (
        <ProjectViewerV2 project={activeProject} onClose={onClose} />
      )}
    </div>
  );
};

export default GalleryV2;
