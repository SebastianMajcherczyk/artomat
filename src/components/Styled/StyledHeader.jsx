import styled from "@emotion/styled";
import { motion } from "framer-motion";

// Definicje wariantów animacji dla h2 i h3
const h2AnimationVariants = {
  hidden: { x: -200, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 50,
      duration: 0.8,
    },
  },
};

const h3AnimationVariants = {
  hidden: { x: 200, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 50,
      duration: 0.8,
    },
  },
};

// Komponent dla h2 z animacją przesunięcia
export const AnimatedH2 = styled(({ isSectionVisible, ...props }) => (
  <motion.h2
    initial="hidden"
    animate={isSectionVisible ? "visible" : "hidden"}
    variants={h2AnimationVariants}
    {...props}
  />
))``;

// Komponent dla h3 z analogiczną animacją przesunięcia
export const AnimatedH3 = styled(({ isSectionVisible, ...props }) => (
  <motion.h3
    initial="hidden"
    animate={isSectionVisible ? "visible" : "hidden"}
    variants={h3AnimationVariants}
    {...props}
  />
))``;
