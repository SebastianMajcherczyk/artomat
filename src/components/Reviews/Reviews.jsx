import React, { useCallback, useEffect, useMemo, useRef, useState } from "react";
import "./Reviews.css";
import { AnimatedH2, AnimatedH3 } from "../Styled/StyledHeader";
import { GOOGLE_REVIEWS_URL, reviews } from "./reviews-data";

const AUTOPLAY_MS = 5000;
const CARD_GAP = 20;

const computeVisibleCount = (width) => {
  if (width >= 1200) return 4;
  if (width >= 768) return 3;
  return 1;
};

const Reviews = () => {
  const [isSectionVisible, setIsSectionVisible] = useState(false);
  const [hasAnimationPlayed, setHasAnimationPlayed] = useState(false);
  const [visibleCount, setVisibleCount] = useState(1);
  const [cardWidth, setCardWidth] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [failedPhotos, setFailedPhotos] = useState(() => new Set());

  const viewportRef = useRef(null);

  const cloneCount = visibleCount;
  const extended = useMemo(
    () => [
      ...reviews.slice(-cloneCount),
      ...reviews,
      ...reviews.slice(0, cloneCount),
    ],
    [cloneCount],
  );
  const [pos, setPos] = useState(cloneCount);
  const [animate, setAnimate] = useState(true);
  const [dragX, setDragX] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [interactionKey, setInteractionKey] = useState(0);
  const touchRef = useRef(null);

  const normalize = (p) => {
    let x = p;
    while (x >= cloneCount + reviews.length) x -= reviews.length;
    while (x < cloneCount) x += reviews.length;
    return x;
  };

  const checkIfSectionIsVisible = () => {
    const section = document.querySelector(".reviews-section");
    if (!section) return false;

    const bounds = section.getBoundingClientRect();

    return (
      bounds.top < window.innerHeight / 1.3 &&
      bounds.bottom > window.innerHeight / 1.3
    );
  };

  const handleScroll = () => {
    if (checkIfSectionIsVisible() && !hasAnimationPlayed) {
      setIsSectionVisible(true);
      setHasAnimationPlayed(true);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [hasAnimationPlayed]);

  useEffect(() => {
    const measure = () => {
      const viewportWidth = viewportRef.current?.clientWidth || 0;
      const count = computeVisibleCount(window.innerWidth);
      const width = (viewportWidth - (count - 1) * CARD_GAP) / count;

      setVisibleCount(count);
      setCardWidth(width);
    };

    measure();

    const ro = new ResizeObserver(measure);
    if (viewportRef.current) ro.observe(viewportRef.current);
    window.addEventListener("resize", measure);

    return () => {
      window.removeEventListener("resize", measure);
      ro.disconnect();
    };
  }, []);

  useEffect(() => {
    setAnimate(false);
    setPos(cloneCount);
    const frame = requestAnimationFrame(() => setAnimate(true));
    return () => cancelAnimationFrame(frame);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [visibleCount]);

  useEffect(() => {
    if (isPaused) return undefined;

    const timer = setInterval(() => setPos((p) => p + 1), AUTOPLAY_MS);

    return () => clearInterval(timer);
  }, [isPaused, interactionKey]);

  const goPrev = () => {
    setInteractionKey((k) => k + 1);
    setPos((p) => p - 1);
  };
  const goNext = () => {
    setInteractionKey((k) => k + 1);
    setPos((p) => p + 1);
  };

  const handleTouchStart = (e) => {
    const t = e.touches[0];
    touchRef.current = { x: t.clientX, y: t.clientY, axis: null };
    setIsDragging(true);
    setIsPaused(true);
  };

  const handleTouchMove = (e) => {
    const start = touchRef.current;
    if (!start) return;
    const t = e.touches[0];
    const dx = t.clientX - start.x;
    const dy = t.clientY - start.y;
    if (!start.axis && (Math.abs(dx) > 6 || Math.abs(dy) > 6)) {
      start.axis = Math.abs(dx) > Math.abs(dy) ? "x" : "y";
    }
    if (start.axis === "x") setDragX(dx);
  };

  const handleTouchEnd = (e) => {
    const start = touchRef.current;
    touchRef.current = null;
    setIsDragging(false);
    setIsPaused(false);
    if (!start || start.axis !== "x") {
      setDragX(0);
      return;
    }
    const endX = e.changedTouches[0]?.clientX ?? start.x;
    const dx = endX - start.x;
    const threshold = Math.min(60, (viewportRef.current?.clientWidth || 0) * 0.15);
    setDragX(0);
    if (dx <= -threshold) goNext();
    else if (dx >= threshold) goPrev();
  };

  const handleTrackTransitionEnd = (e) => {
    if (e.target !== e.currentTarget) return;
    const normalized = normalize(pos);
    if (normalized === pos) return;
    setAnimate(false);
    setPos(normalized);
    requestAnimationFrame(() => requestAnimationFrame(() => setAnimate(true)));
  };

  const handlePhotoError = useCallback((id) => {
    setFailedPhotos((prev) => new Set(prev).add(id));
  }, []);

  return (
    <div className="reviews-section">
      <AnimatedH2 isSectionVisible={isSectionVisible}>
        Opinie klientów
      </AnimatedH2>

      <AnimatedH3 isSectionVisible={isSectionVisible}>
        Zobacz, co mówią o nas klienci na Google
      </AnimatedH3>

      <div
        className="reviews-carousel"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <button
          type="button"
          className="reviews-arrow reviews-arrow-prev"
          onClick={goPrev}
          aria-label="Poprzednie opinie"
        >
          ‹
        </button>

        <div className="reviews-viewport" ref={viewportRef}>
          <div
            className="reviews-track"
            onTransitionEnd={handleTrackTransitionEnd}
            style={{
              gap: `${CARD_GAP}px`,
              transform: `translateX(calc(-${pos * (cardWidth + CARD_GAP)}px + ${dragX}px))`,
              transition: animate && !isDragging ? undefined : "none",
            }}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
            onTouchCancel={handleTouchEnd}
          >
            {extended.map((review, i) => {
              const showPhoto = review.photo && !failedPhotos.has(review.id);

              return (
                <div
                  className="review-card"
                  key={`${i}-${review.id}`}
                  style={{ flex: `0 0 ${cardWidth}px` }}
                >
                  {showPhoto && (
                    <div className="review-card-photo">
                      <img
                        src={review.photo}
                        alt={`Realizacja Loftprint – opinia klienta ${review.author}`}
                        loading="lazy"
                        onError={() => handlePhotoError(review.id)}
                      />
                    </div>
                  )}

                  <div className="review-card-rating" aria-hidden="true">
                    {"★".repeat(review.rating)}
                  </div>

                  <p className="review-card-text">{`„${review.text}”`}</p>

                  <div className="review-card-author">
                    {review.avatar ? (
                      <img
                        className="review-card-avatar"
                        src={review.avatar}
                        alt=""
                      />
                    ) : (
                      <span className="review-card-avatar" aria-hidden="true">
                        {review.author.charAt(0)}
                      </span>
                    )}
                    <span>{review.author}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <button
          type="button"
          className="reviews-arrow reviews-arrow-next"
          onClick={goNext}
          aria-label="Następne opinie"
        >
          ›
        </button>
      </div>

      <a
        className="reviews-google-link"
        href={GOOGLE_REVIEWS_URL}
        target="_blank"
        rel="noopener noreferrer"
      >
        Zobacz wszystkie opinie na Google →
      </a>
    </div>
  );
};

export default Reviews;
