import React, { useEffect, useRef, useState } from "react";
import { Close, ChevronLeft, ChevronRight } from "@mui/icons-material";
import "./ProjectViewerRich.css";

const AUTOPLAY_MS = 11000;

// Następca ProjectViewerV2 (ten plik zostaje na razie nieużywany, jako
// siatka bezpieczeństwa) - ta sama mechanika slidera (scroll-snap,
// strzałki, licznik, pętla, autoplay, pauza/play wideo w zależności od
// widoczności), rozszerzona o tytuł (zawsze, z fallbackiem na tytuł
// realizacji z miniatury) i opcjonalny, dłuższy opis pod każdym
// zdjęciem/wideo. Podpis jest częścią tego samego slajdu co media (nie
// osobnym elementem podmienianym przez JS), więc - tak jak już dziś alt
// na obrazkach - jest zawsze obecny w DOM-ie dla każdego slajdu, nie tylko
// aktywnego: crawler/bot widzi wszystkie tytuły i opisy w statycznym
// HTML-u, bez żadnej interakcji.
//
// Tytuły/opisy per zdjęcie (media[].title / media[].description w
// Gallery-data.js) są w pełni opcjonalne i dodawane stopniowo - brak
// opisu po prostu nie renderuje akapitu, nic się nie "psuje" wizualnie.
const ProjectViewerRich = ({ project, onClose }) => {
  const media = project.media;
  const count = media.length;
  const loop = count > 1;

  const slides = loop ? [media[count - 1], ...media, media[0]] : media;
  const offset = loop ? 1 : 0;

  const scrollerRef = useRef(null);
  const slideRefs = useRef([]);
  const settleTimer = useRef(null);
  const pendingReal = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const slideWidth = () => scrollerRef.current?.clientWidth ?? 0;

  const currentPos = () => {
    const scroller = scrollerRef.current;
    if (!scroller || !slideWidth()) return offset;
    return Math.round(scroller.scrollLeft / slideWidth());
  };

  const realIndexFromPos = (pos) => {
    if (!loop) return pos;
    if (pos === 0) return count - 1;
    if (pos === slides.length - 1) return 0;
    return pos - offset;
  };

  const jumpTo = (slidePos) => {
    const scroller = scrollerRef.current;
    if (!scroller) return;
    scroller.scrollLeft = slidePos * slideWidth();
  };

  const goToSlide = (slidePos) => {
    scrollerRef.current?.scrollTo({
      left: slidePos * slideWidth(),
      behavior: "smooth",
    });
  };

  const step = (dir) => {
    const from = pendingReal.current ?? realIndexFromPos(currentPos());
    const to = (from + dir + count) % count;
    pendingReal.current = to;

    let pos;
    if (dir > 0 && from === count - 1) pos = slides.length - 1;
    else if (dir < 0 && from === 0) pos = 0;
    else pos = to + offset;
    goToSlide(pos);
  };

  const settle = () => {
    pendingReal.current = null;
    const pos = currentPos();
    if (loop && pos === 0) {
      jumpTo(count);
      setActiveIndex(count - 1);
    } else if (loop && pos === slides.length - 1) {
      jumpTo(1);
      setActiveIndex(0);
    } else {
      setActiveIndex(realIndexFromPos(pos));
    }
  };

  const handleScroll = () => {
    setActiveIndex(realIndexFromPos(currentPos()));
    clearTimeout(settleTimer.current);
    settleTimer.current = setTimeout(settle, 120);
  };

  useEffect(() => {
    jumpTo(offset);
    return () => clearTimeout(settleTimer.current);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [project]);

  useEffect(() => {
    const scroller = scrollerRef.current;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const video = entry.target.querySelector("video");
          if (!video) return;
          if (entry.isIntersecting && entry.intersectionRatio >= 0.6) {
            video.play().catch(() => {});
          } else {
            video.pause();
          }
        });
      },
      { root: scroller, threshold: [0.6] },
    );
    slideRefs.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, [project]);

  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, []);

  const next = () => step(1);
  const prev = () => step(-1);

  useEffect(() => {
    if (!loop) return undefined;
    const timer = setInterval(() => step(1), AUTOPLAY_MS);
    return () => clearInterval(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [project]);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") onClose();
      if (!loop) return;
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  });

  return (
    <div className="pvr" role="dialog" aria-modal="true" aria-label={project.title}>
      <button type="button" className="pvr-close" onClick={onClose} aria-label="Zamknij">
        <Close />
      </button>

      {count > 1 && (
        <div className="pvr-counter">
          {activeIndex + 1} / {count}
        </div>
      )}

      {loop && (
        <>
          <button
            type="button"
            className="pvr-nav pvr-nav--prev"
            onClick={prev}
            aria-label="Poprzednia pozycja"
          >
            <ChevronLeft />
          </button>
          <button
            type="button"
            className="pvr-nav pvr-nav--next"
            onClick={next}
            aria-label="Następna pozycja"
          >
            <ChevronRight />
          </button>
        </>
      )}

      <div className="pvr-scroller" ref={scrollerRef} onScroll={handleScroll}>
        {slides.map((item, pos) => {
          const title = item.title || project.title;

          return (
            <div
              key={`${project.slug}-${pos}`}
              className="pvr-slide"
              ref={(el) => (slideRefs.current[pos] = el)}
            >
              <div className="pvr-media-wrap">
                {item.type === "image" ? (
                  <img
                    src={item.src}
                    alt={item.alt || title}
                    className="pvr-media"
                    loading={pos <= 2 ? "eager" : "lazy"}
                  />
                ) : (
                  <video
                    src={item.src}
                    className="pvr-media"
                    muted
                    loop
                    playsInline
                    preload={pos === offset ? "auto" : "metadata"}
                  />
                )}
              </div>

              <div className="pvr-caption">
                <h3>{title}</h3>
                {item.description && <p>{item.description}</p>}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProjectViewerRich;
