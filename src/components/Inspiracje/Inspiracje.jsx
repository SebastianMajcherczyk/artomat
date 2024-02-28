import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import "./Inspiracje.css";
import {
  LeftSideMotionDiv,
  RightSideMotionDiv,
} from "../Styled/StyledMotionDiv";
import { AnimatedH2, AnimatedH3 } from "../Styled/StyledHeader";

const Inspiracje = () => {
  const [isSectionVisible, setIsSectionVisible] = useState(false);
  const [hasAnimationPlayed, setHasAnimationPlayed] = useState(false);

  const checkIfSectionIsVisible = () => {
    const section = document.querySelector(".inspirations-container");
    const bounds = section.getBoundingClientRect();

    const isVisible =
      bounds.top < window.innerHeight / 1.1 &&
      bounds.bottom > window.innerHeight / 1.1;

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
    <div className="inspirations-container">
      <AnimatedH2 isSectionVisible={isSectionVisible}>Inspiracje</AnimatedH2>
      <AnimatedH3 isSectionVisible={isSectionVisible}>
        Poszukaj pomysłu na swoją ścianę.
      </AnimatedH3>
      <LeftSideMotionDiv
        isSectionVisible={isSectionVisible}
        className="inspirations left-div"
      >
        <h4>Trochę naszych podpowiedzi</h4>
      </LeftSideMotionDiv>
      <RightSideMotionDiv
        isSectionVisible={isSectionVisible}
        className="inspirations right-div"
      >
        <h4>A tutaj możesz znaleźć coś co Cię zainspiruje</h4>
      </RightSideMotionDiv>
    </div>
  );
};

export default Inspiracje;
