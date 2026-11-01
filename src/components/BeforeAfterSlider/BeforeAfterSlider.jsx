import React, { useCallback, useRef, useState } from "react";
import "./BeforeAfterSlider.css";

// Reużywalny suwak "przed/po" (np. ilustracja poprawy jakości zdjęcia przez
// AI). Obie grafiki powinny mieć te same wymiary w px - komponent nakłada
// jedną na drugą i przesuwa tylko maskę (clip-path), więc inne proporcje
// powodują "skok" obrazu przy przesuwaniu suwaka.
const BeforeAfterSlider = ({
  beforeSrc,
  afterSrc,
  beforeAlt,
  afterAlt,
  beforeLabel = "Przed",
  afterLabel = "Po",
  initialPosition = 50,
  aspectRatio,
  ariaLabel = "Porównaj zdjęcie przed i po",
}) => {
  const [position, setPosition] = useState(initialPosition);
  const wrapperRef = useRef(null);
  const draggingRef = useRef(false);

  const updateFromClientX = useCallback((clientX) => {
    const rect = wrapperRef.current?.getBoundingClientRect();
    if (!rect) return;
    const ratio = ((clientX - rect.left) / rect.width) * 100;
    setPosition(Math.min(100, Math.max(0, ratio)));
  }, []);

  const handlePointerDown = (event) => {
    draggingRef.current = true;
    event.currentTarget.setPointerCapture(event.pointerId);
    updateFromClientX(event.clientX);
  };

  const handlePointerMove = (event) => {
    if (!draggingRef.current) return;
    updateFromClientX(event.clientX);
  };

  const handlePointerUp = (event) => {
    draggingRef.current = false;
    if (event.currentTarget.hasPointerCapture?.(event.pointerId)) {
      event.currentTarget.releasePointerCapture(event.pointerId);
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === "ArrowLeft") {
      setPosition((p) => Math.max(0, p - 3));
    } else if (event.key === "ArrowRight") {
      setPosition((p) => Math.min(100, p + 3));
    } else if (event.key === "Home") {
      setPosition(0);
    } else if (event.key === "End") {
      setPosition(100);
    }
  };

  return (
    <div
      className="bas-wrapper"
      ref={wrapperRef}
      style={aspectRatio ? { aspectRatio } : undefined}
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
      onPointerCancel={handlePointerUp}
    >
      <img className="bas-image bas-image--after" src={afterSrc} alt={afterAlt} loading="lazy" />

      <div className="bas-before-clip" style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}>
        <img className="bas-image bas-image--before" src={beforeSrc} alt={beforeAlt} loading="lazy" />
      </div>

      <span className="bas-badge bas-badge--before">{beforeLabel}</span>
      <span className="bas-badge bas-badge--after">{afterLabel}</span>

      <div
        className="bas-divider"
        style={{ left: `${position}%` }}
        role="slider"
        aria-label={ariaLabel}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={Math.round(position)}
        tabIndex={0}
        onKeyDown={handleKeyDown}
      >
        <span className="bas-handle">
          <span className="bas-handle-arrow bas-handle-arrow--left">‹</span>
          <span className="bas-handle-arrow bas-handle-arrow--right">›</span>
        </span>
      </div>
    </div>
  );
};

export default BeforeAfterSlider;
