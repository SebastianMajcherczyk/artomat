import React, { useEffect, useState } from "react";
import { RightSideMotionDiv } from "../Styled/StyledMotionDiv";
import { AnimatedH2, AnimatedH3 } from "../Styled/StyledHeader";
import MediaGallery from "./MediaGallery";
import ProjectSlider from "./ProjectSlider/ProjectSlider";
import "./Gallery.css";

const FEATURED_GALLERY_IDS = [35, 30, 28, 31, 22, 29, 39, 36, 26];

const Gallery = ({ mode = "full", showHeading = true, showLead = true }) => {
  const [selectedProject, setSelectedProject] = useState(null);

  const isFullMode = mode === "full";

  const [isSectionVisible, setIsSectionVisible] = useState(isFullMode);
  const [hasAnimationPlayed, setHasAnimationPlayed] = useState(isFullMode);

  const checkIfSectionIsVisible = () => {
    const section = document.querySelector(".gallery");
    if (!section) return false;

    const bounds = section.getBoundingClientRect();

    return (
      bounds.top < window.innerHeight / 1.5 &&
      bounds.bottom > window.innerHeight / 1.5
    );
  };

  const handleScroll = () => {
    if (checkIfSectionIsVisible() && !hasAnimationPlayed) {
      setIsSectionVisible(true);
      setHasAnimationPlayed(true);
    }
  };

  useEffect(() => {
    if (isFullMode) return;

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [hasAnimationPlayed, isFullMode]);

  return (
    <div className="gallery-container">
      {selectedProject && (
        <div className="overlay" onClick={() => setSelectedProject(null)}>
          <ProjectSlider
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        </div>
      )}

      {showHeading && (
        <AnimatedH2 isSectionVisible={isSectionVisible}>Galeria</AnimatedH2>
      )}

      {showHeading && (
        <AnimatedH3 isSectionVisible={isSectionVisible}>
          Zobacz nasze realizacje.
        </AnimatedH3>
      )}

      <RightSideMotionDiv
        isSectionVisible={isSectionVisible}
        className="gallery title"
      >
        {showLead && (
          <p className="paragraph">
            Nasze realizacje nie są po prostu zwykłymi nadrukami na ścianach.
            Każdy wykonany projekt, to pasja, historia i pomysł, któremu
            nadaliśmy kształtu i formy. Odkryj, co zmalowaliśmy:
          </p>
        )}

        <MediaGallery
          mode={mode}
          previewProjectIds={FEATURED_GALLERY_IDS}
          setSelectedProject={setSelectedProject}
          initialRows={3.5}
          rowsStep={2}
        />
      </RightSideMotionDiv>
    </div>
  );
};

export default Gallery;
