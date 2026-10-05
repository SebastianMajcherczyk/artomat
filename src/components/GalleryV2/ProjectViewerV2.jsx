import React, { useEffect, useRef, useState } from "react";
import { Close, ChevronLeft, ChevronRight } from "@mui/icons-material";
import "./ProjectViewerV2.css";

const ProjectViewerV2 = ({ project, onClose }) => {
  const media = project.media;
  const count = media.length;
  const loop = count > 1;

  // Kopie skrajnych slajdów na obu końcach pozwalają przewijać bez końca:
  // [ostatni, ...media, pierwszy]. Gdy użytkownik trafi na kopię, po
  // zatrzymaniu przewijania przeskakujemy bez animacji na prawdziwy slajd.
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

  // Kierunek liczony z zapamiętanego celu, nie z pozycji w trakcie animacji,
  // więc szybkie naciskanie strzałek zawsze idzie do przodu.
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
    <div className="pv2" role="dialog" aria-modal="true" aria-label={project.title}>
      <button type="button" className="pv2-close" onClick={onClose} aria-label="Zamknij">
        <Close />
      </button>

      {count > 1 && (
        <div className="pv2-counter">
          {activeIndex + 1} / {count}
        </div>
      )}

      {loop && (
        <>
          <button
            type="button"
            className="pv2-nav pv2-nav--prev"
            onClick={prev}
            aria-label="Poprzednia pozycja"
          >
            <ChevronLeft />
          </button>
          <button
            type="button"
            className="pv2-nav pv2-nav--next"
            onClick={next}
            aria-label="Następna pozycja"
          >
            <ChevronRight />
          </button>
        </>
      )}

      <div className="pv2-scroller" ref={scrollerRef} onScroll={handleScroll}>
        {slides.map((item, pos) => (
          <div
            key={`${project.slug}-${pos}`}
            className="pv2-slide"
            ref={(el) => (slideRefs.current[pos] = el)}
          >
            {item.type === "image" ? (
              <img
                src={item.src}
                alt={item.alt || project.title}
                className="pv2-media"
                loading={pos <= 2 ? "eager" : "lazy"}
              />
            ) : (
              <video
                src={item.src}
                className="pv2-media"
                muted
                loop
                playsInline
                preload={pos === offset ? "auto" : "metadata"}
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectViewerV2;
