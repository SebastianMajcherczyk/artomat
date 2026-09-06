import React, { useCallback, useEffect, useRef, useState } from "react";
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
  const [index, setIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(1);
  const [cardWidth, setCardWidth] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [failedPhotos, setFailedPhotos] = useState(() => new Set());

  const viewportRef = useRef(null);

  const maxIndex = Math.max(0, reviews.length - visibleCount);

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
    setIndex((i) => Math.min(i, Math.max(0, reviews.length - visibleCount)));
  }, [visibleCount]);

  useEffect(() => {
    if (isPaused) return undefined;

    const timer = setInterval(() => {
      setIndex((i) => (i >= maxIndex ? 0 : i + 1));
    }, AUTOPLAY_MS);

    return () => clearInterval(timer);
  }, [maxIndex, isPaused]);

  const goPrev = () => setIndex((i) => (i <= 0 ? maxIndex : i - 1));
  const goNext = () => setIndex((i) => (i >= maxIndex ? 0 : i + 1));

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
            style={{
              gap: `${CARD_GAP}px`,
              transform: `translateX(-${index * (cardWidth + CARD_GAP)}px)`,
            }}
          >
            {reviews.map((review) => {
              const showPhoto = review.photo && !failedPhotos.has(review.id);

              return (
                <div
                  className="review-card"
                  key={review.id}
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

                  <p className="review-card-text">„{review.text}”</p>

                  <div className="review-card-author">
                    <span className="review-card-avatar" aria-hidden="true">
                      {review.author.charAt(0)}
                    </span>
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
