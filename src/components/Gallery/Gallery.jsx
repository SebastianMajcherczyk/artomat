import react, { useState } from "react";

import { useEffect } from "react";
import { RightSideMotionDiv } from "../Styled/StyledMotionDiv";
import { AnimatedH2, AnimatedH3 } from "../Styled/StyledHeader";
import MediaGallery from "./MediaGallery";
import ProjectSlider from "./ProjectSlider/ProjectSlider";
import "./Gallery.css";

const Gallery = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const [isSectionVisible, setIsSectionVisible] = useState(false);
  const [hasAnimationPlayed, setHasAnimationPlayed] = useState(false);

  const checkIfSectionIsVisible = () => {
    const section = document.querySelector(".gallery");
    const bounds = section.getBoundingClientRect();

    const isVisible =
      bounds.top < window.innerHeight / 1.5 &&
      bounds.bottom > window.innerHeight / 1.5;

    return isVisible;
  };

  const handleScroll = () => {
    if (checkIfSectionIsVisible() && !hasAnimationPlayed) {
      setIsSectionVisible(true);
      setHasAnimationPlayed(true);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [hasAnimationPlayed]);

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
      <AnimatedH2 isSectionVisible={isSectionVisible}>Galeria</AnimatedH2>
      <AnimatedH3 isSectionVisible={isSectionVisible}>
        Zobacz nasze realizacje.
      </AnimatedH3>
      <RightSideMotionDiv
        isSectionVisible={isSectionVisible}
        className="gallery title"
      >
        <p className="paragraph">
          Nasze realizacje nie są po prostu zwykłymi nadrukami na ścianach.
          Każdy wykonany projekt, to pasja, historia i pomysł, któremu nadaliśmy
          kształtu i formy. Odkryj, co zmalowaliśmy:
        </p>

        <MediaGallery
          selectedProject={selectedProject}
          setSelectedProject={setSelectedProject}
        />
      </RightSideMotionDiv>
    </div>
  );
};

export default Gallery;
