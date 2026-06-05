// src/components/Gallery/MediaGallery.jsx
import React, {
  useEffect,
  useMemo,
  useRef,
  useState,
  useCallback,
} from "react";
import { useNavigate } from "react-router-dom";
import "./MediaGallery.css";
import { projects as originalProjects } from "./Gallery-data.js";

const shuffleArray = (array) => {
  const copy = [...array];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
};

const MediaGallery = ({
  setSelectedProject,
  mode = "full",
  previewProjectIds = [],
  initialRows = 3.5,
  rowsStep = 2,
}) => {
  const navigate = useNavigate();
  const gridRef = useRef(null);
  const firstThumbRef = useRef(null);

  const isPreviewMode = mode === "preview";

  const [visibleRows, setVisibleRows] = useState(initialRows);
  const [maxHeight, setMaxHeight] = useState("none");
  const [totalRows, setTotalRows] = useState(0);

  const projects = useMemo(() => {
    if (isPreviewMode) {
      const featuredProjects =
        previewProjectIds.length > 0
          ? originalProjects.filter((project) =>
              previewProjectIds.includes(project.id),
            )
          : originalProjects.slice(0, 9);

      return shuffleArray(featuredProjects);
    }

    return originalProjects;
  }, [isPreviewMode, previewProjectIds]);

  const thumbs = useMemo(() => {
    const out = [];
    projects.forEach((project) => {
      project.thumbnails.forEach((thumb, idx) => {
        out.push({ project, thumb, key: `${project.id}-${idx}` });
      });
    });
    return out;
  }, [projects]);

  const recomputeMaxHeight = useCallback(() => {
    const gridEl = gridRef.current;
    const thumbEl = firstThumbRef.current;

    if (!gridEl || !thumbEl) return;

    const cs = getComputedStyle(gridEl);

    const padTop = parseFloat(cs.paddingTop || "0") || 0;
    const padBottom = parseFloat(cs.paddingBottom || "0") || 0;
    const padLeft = parseFloat(cs.paddingLeft || "0") || 0;
    const padRight = parseFloat(cs.paddingRight || "0") || 0;

    let gapY = 0;
    let gapX = 0;

    const rg = parseFloat(cs.rowGap || "");
    const cg = parseFloat(cs.columnGap || "");
    if (Number.isFinite(rg)) gapY = rg;
    if (Number.isFinite(cg)) gapX = cg;

    if (!Number.isFinite(rg) || !Number.isFinite(cg)) {
      const parts = (cs.gap || "").trim().split(/\s+/);
      const g1 = parseFloat(parts[0] || "0") || 0;
      const g2 = parseFloat(parts[1] || parts[0] || "0") || 0;
      if (!Number.isFinite(rg)) gapY = g1;
      if (!Number.isFinite(cg)) gapX = g2;
    }

    const rect = thumbEl.getBoundingClientRect();
    const tileW = rect.width;
    const tileH = rect.height;

    const contentWidth = gridEl.clientWidth - padLeft - padRight;

    const columns = Math.max(
      1,
      Math.floor((contentWidth + gapX) / (tileW + gapX)),
    );

    const computedTotalRows = Math.ceil(thumbs.length / columns);
    setTotalRows(computedTotalRows);

    if (isPreviewMode) {
      setMaxHeight("none");
      return;
    }

    if (visibleRows >= computedTotalRows) {
      setMaxHeight(`${Math.ceil(gridEl.scrollHeight) + 1}px`);
      return;
    }

    const rowsShown = Math.min(visibleRows, computedTotalRows);
    const full = Math.floor(rowsShown);
    const frac = Math.max(0, Math.min(1, rowsShown - full));

    let H = padTop + padBottom;

    if (full > 0) H += full * tileH + (full - 1) * gapY;
    if (frac > 0 && full < computedTotalRows) H += gapY + frac * tileH;

    setMaxHeight(`${Math.ceil(H) + 1}px`);
  }, [isPreviewMode, thumbs.length, visibleRows]);

  useEffect(() => {
    if (!isPreviewMode) {
      setVisibleRows(initialRows);
    }
  }, [isPreviewMode, initialRows, thumbs.length]);

  useEffect(() => {
    const onResize = () => recomputeMaxHeight();

    recomputeMaxHeight();
    window.addEventListener("resize", onResize);

    const img = firstThumbRef.current?.querySelector("img");
    if (img && !img.complete) {
      img.addEventListener("load", recomputeMaxHeight, { once: true });
    }

    const ro = new ResizeObserver(() => recomputeMaxHeight());
    if (gridRef.current) ro.observe(gridRef.current);

    return () => {
      window.removeEventListener("resize", onResize);
      ro.disconnect();
    };
  }, [recomputeMaxHeight]);

  useEffect(() => {
    if (!isPreviewMode && totalRows && visibleRows > totalRows) {
      setVisibleRows(totalRows);
    }
  }, [isPreviewMode, totalRows, visibleRows]);

  const handleThumbnailClick = (project) => {
    if (typeof setSelectedProject === "function") {
      setSelectedProject(project);
    }
  };

  const handleShowMore = () => {
    setVisibleRows((prev) => {
      if (!totalRows) return prev + rowsStep;

      const next = prev + rowsStep;
      return next >= totalRows ? totalRows : next;
    });
  };

  const isFullyLoaded =
    isPreviewMode || (totalRows > 0 && visibleRows >= totalRows);
  console.log("MediaGallery mode:", mode);
  return (
    <div className="gallery-wrap">
      <div
        className={`gallery-collapsible ${
          !isPreviewMode && !isFullyLoaded ? "is-collapsed" : ""
        }`}
        style={{ maxHeight: isPreviewMode ? "none" : maxHeight }}
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

      {isPreviewMode ? (
        <button
          type="button"
          className="gallery-toggle"
          onClick={() => navigate("/gallery")}
        >
          Zobacz pełną galerię realizacji
        </button>
      ) : !isFullyLoaded ? (
        <button
          type="button"
          className="gallery-toggle"
          onClick={handleShowMore}
        >
          Pokaż kolejne realizacje
        </button>
      ) : null}
    </div>
  );
};

export default MediaGallery;
