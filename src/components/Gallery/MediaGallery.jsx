// src/components/Gallery/MediaGallery.jsx
import React, {
  useEffect,
  useMemo,
  useRef,
  useState,
  useCallback,
} from "react";
import "./MediaGallery.css";
import { projects as originalProjects } from "./Gallery-data.js";

const MediaGallery = ({ setSelectedProject, collapsedRows = 3.5 }) => {
  const wrapperRef = useRef(null);
  const gridRef = useRef(null);
  const firstThumbRef = useRef(null);

  const [expanded, setExpanded] = useState(false);
  const [maxHeight, setMaxHeight] = useState("none");

  // 1) Jednorazowe tasowanie (Fisher–Yates)
  const shuffledProjects = useMemo(() => {
    const copy = [...originalProjects];
    for (let i = copy.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [copy[i], copy[j]] = [copy[j], copy[i]];
    }
    return copy;
  }, []);

  // 2) Spłaszczamy do miniaturek
  const thumbs = useMemo(() => {
    const out = [];
    shuffledProjects.forEach((project) => {
      project.thumbnails.forEach((thumb, idx) => {
        out.push({ project, thumb, key: `${project.id}-${idx}` });
      });
    });
    return out;
  }, [shuffledProjects]);

  // 3) Pomiar wysokości (dla N=3.5 wiersza w stanie zwiniętym)
  const recomputeMaxHeight = useCallback(() => {
    const gridEl = gridRef.current;
    const thumbEl = firstThumbRef.current;
    if (!gridEl || !thumbEl) return;

    const cs = getComputedStyle(gridEl);

    // padding siatki (u Ciebie: 6px z góry i 6px z dołu)
    const padTop = parseFloat(cs.paddingTop || "0") || 0;
    const padBottom = parseFloat(cs.paddingBottom || "0") || 0;
    const padLeft = parseFloat(cs.paddingLeft || "0") || 0;
    const padRight = parseFloat(cs.paddingRight || "0") || 0;

    // gap (obsługa sytuacji gdy przeglądarka zwraca np. "12px 10px")
    let gapY = 0;
    let gapX = 0;

    const rg = parseFloat(cs.rowGap || "");
    const cg = parseFloat(cs.columnGap || "");
    if (Number.isFinite(rg)) gapY = rg;
    if (Number.isFinite(cg)) gapX = cg;

    if (!Number.isFinite(rg) || !Number.isFinite(cg)) {
      const parts = (cs.gap || "").trim().split(/\s+/);
      const g1 = parseFloat(parts[0] || "0") || 0; // row-gap
      const g2 = parseFloat(parts[1] || parts[0] || "0") || 0; // column-gap
      if (!Number.isFinite(rg)) gapY = g1;
      if (!Number.isFinite(cg)) gapX = g2;
    }

    // ✅ expanded: bierzemy realną wysokość treści (uwzględnia padding i wszystko co faktycznie wystaje)
    if (expanded) {
      setMaxHeight(`${Math.ceil(gridEl.scrollHeight) + 1}px`); // +1px bezpiecznik
      return;
    }

    // --- collapsed: liczenie z uwzględnieniem paddingu i subpikseli ---
    const rect = thumbEl.getBoundingClientRect();
    const tileW = rect.width;
    const tileH = rect.height;

    // uwaga: clientWidth zawiera padding, więc odejmujemy go dla liczenia kolumn
    const contentWidth = gridEl.clientWidth - padLeft - padRight;

    const columns = Math.max(
      1,
      Math.floor((contentWidth + gapX) / (tileW + gapX))
    );

    const totalRows = Math.ceil(thumbs.length / columns);
    const rowsShown = Math.min(collapsedRows, totalRows);

    const full = Math.floor(rowsShown);
    const frac = Math.max(0, Math.min(1, rowsShown - full));

    let H = padTop + padBottom;

    if (full > 0) H += full * tileH + (full - 1) * gapY;
    if (frac > 0 && full < totalRows) H += gapY + frac * tileH;

    setMaxHeight(`${Math.ceil(H) + 1}px`);
  }, [collapsedRows, expanded, thumbs.length]);

  useEffect(() => {
    const onResize = () => recomputeMaxHeight();
    recomputeMaxHeight();
    window.addEventListener("resize", onResize);

    // dociągnięcie po załadowaniu pierwszego obrazka
    const img = firstThumbRef.current?.querySelector("img");
    if (img && !img.complete) {
      img.addEventListener("load", recomputeMaxHeight, { once: true });
    }

    // obserwacja zmian rozmiaru siatki (zmiana kolumn itp.)
    const ro = new ResizeObserver(() => recomputeMaxHeight());
    if (gridRef.current) ro.observe(gridRef.current);

    return () => {
      window.removeEventListener("resize", onResize);
      ro.disconnect();
    };
  }, [recomputeMaxHeight]);

  const handleThumbnailClick = (project) => {
    if (typeof setSelectedProject === "function") setSelectedProject(project);
  };

  const toggleExpanded = () => {
    const goingToCollapse = expanded;
    setExpanded((e) => !e);

    if (goingToCollapse && wrapperRef.current) {
      const offset = window.innerWidth >= 768 ? 80 : 60; // wysokość nagłówka
      const top =
        wrapperRef.current.getBoundingClientRect().top +
        window.pageYOffset -
        offset;
      setTimeout(() => {
        window.scrollTo({ top, behavior: "smooth" });
      }, 40);
    }
  };

  return (
    <div className="gallery-wrap" ref={wrapperRef}>
      <div
        className={`gallery-collapsible ${expanded ? "" : "is-collapsed"}`}
        style={{ maxHeight }}
      >
        <ul className="gallery-grid" ref={gridRef}>
          {thumbs.map((item, idx) => (
            <li key={item.key}>
              <button
                className="thumb"
                data-title={item.project.title}
                aria-label={`Otwórz projekt: ${item.project.title}`}
                onClick={() => handleThumbnailClick(item.project)}
                ref={idx === 0 ? firstThumbRef : null}
              >
                <img src={item.thumb} alt={item.project.title} loading="lazy" />
              </button>
            </li>
          ))}
        </ul>
      </div>

      <button
        type="button"
        className="gallery-toggle"
        onClick={toggleExpanded}
        aria-expanded={expanded}
      >
        {expanded ? "Pokaż mniej realizacji" : "Zobacz więcej realizacji"}
      </button>
    </div>
  );
};

export default MediaGallery;
