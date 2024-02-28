import React, { useEffect, useState } from "react";
import "./Technika.css";
import { LeftSideMotionDiv } from "../Styled/StyledMotionDiv";
import { AnimatedH2, AnimatedH3 } from "../Styled/StyledHeader";

const Technika = () => {
  const [isSectionVisible, setIsSectionVisible] = useState(false);
  const [hasAnimationPlayed, setHasAnimationPlayed] = useState(false);

  const checkIfSectionIsVisible = () => {
    const section = document.querySelector(".technika");
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
    <div className="technika-container">
      <AnimatedH2 isSectionVisible={isSectionVisible}>Technika</AnimatedH2>
      <AnimatedH3 isSectionVisible={isSectionVisible}>
        Trochę wiedzy praktycznej.
      </AnimatedH3>

      <LeftSideMotionDiv
        isSectionVisible={isSectionVisible}
        className="technika title "
      >
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui amet
          quasi nostrum ratione. Dolorum aspernatur, recusandae tempore facere
          incidunt labore, quasi eius repellat corrupti voluptates et quidem
          similique mollitia suscipit?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui amet
          quasi nostrum ratione. Dolorum aspernatur, recusandae tempore facere
          incidunt labore, quasi eius repellat corrupti voluptates et quidem
          similique mollitia suscipit?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui amet
          quasi nostrum ratione. Dolorum aspernatur, recusandae tempore facere
          incidunt labore, quasi eius repellat corrupti voluptates et quidem
          similique mollitia suscipit?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui amet
          quasi nostrum ratione. Dolorum aspernatur, recusandae tempore facere
          incidunt labore, quasi eius repellat corrupti voluptates et quidem
          similique mollitia suscipit?
        </p>
      </LeftSideMotionDiv>
    </div>
  );
};

export default Technika;
