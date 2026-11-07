import { useState } from "react";
import { RightSideMotionDiv } from "../Styled/StyledMotionDiv";
import { AnimatedH2, AnimatedH3 } from "../Styled/StyledHeader";
import MediaGallery from "./MediaGallery";
import ProjectViewerV2 from "../GalleryV2/ProjectViewerV2";
import useSectionReveal from "../../hooks/useSectionReveal";
import "./Gallery.css";

const FEATURED_GALLERY_IDS = [35, 30, 28, 14, 22, 29, 39, 38, 26];

const DEFAULT_LEAD = (
  <p className="paragraph">
    Nasze realizacje nie są po prostu zwykłymi nadrukami na ścianach. Każdy
    wykonany projekt, to pasja, historia i pomysł, któremu nadaliśmy kształtu
    i formy. Odkryj, co zmalowaliśmy:
  </p>
);

const Gallery = ({
  mode = "full",
  showHeading = true,
  showLead = true,
  heading = "Galeria",
  subheading = "Zobacz nasze realizacje.",
  leadContent = DEFAULT_LEAD,
  previewProjectIds = FEATURED_GALLERY_IDS,
}) => {
  const [selectedProject, setSelectedProject] = useState(null);

  const isFullMode = mode === "full";

  const [sectionRef, isSectionVisible] = useSectionReveal({
    skip: isFullMode,
  });

  return (
    <div className="gallery-container" ref={sectionRef}>
      {selectedProject && (
        <ProjectViewerV2
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}

      {showHeading && (
        <AnimatedH2 isSectionVisible={isSectionVisible}>{heading}</AnimatedH2>
      )}

      {showHeading && (
        <AnimatedH3 isSectionVisible={isSectionVisible}>
          {subheading}
        </AnimatedH3>
      )}

      <RightSideMotionDiv
        isSectionVisible={isSectionVisible}
        className="gallery title"
      >
        {showLead && leadContent}

        <MediaGallery
          mode={mode}
          previewProjectIds={previewProjectIds}
          setSelectedProject={setSelectedProject}
          initialRows={3.5}
          rowsStep={2}
        />
      </RightSideMotionDiv>
    </div>
  );
};

export default Gallery;
