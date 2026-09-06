import styled from "@emotion/styled";
import { motion } from "framer-motion";

// initial={false}, gdy sekcja jest widoczna już przy pierwszym renderze
// (np. tryb "full" na podstronach), sprawia że framer-motion renderuje od
// razu docelową pozycję/opacity, bez przechodzenia przez animację. Bez tego
// zrzut ze statycznego prerenderingu łapałby przypadkową, "w locie" klatkę
// animacji sprężynowej (inny transform niż to, od czego zaczyna świeża
// hydracja u każdego kolejnego odwiedzającego) — co psuje hydrację.
export const LeftSideMotionDiv = styled(({ isSectionVisible, ...props }) => (
  <motion.div
    initial={isSectionVisible ? false : { x: "-140%", opacity: 0 }}
    animate={isSectionVisible ? { x: 0, opacity: 1 } : { opacity: 0 }}
    transition={{ type: "spring", stiffness: 50 }}
    {...props}
  />
))``;

export const RightSideMotionDiv = styled(({ isSectionVisible, ...props }) => (
  <motion.div
    initial={isSectionVisible ? false : { x: "140%", opacity: 0 }}
    animate={isSectionVisible ? { x: 0, opacity: 1 } : { opacity: 0 }}
    transition={{ type: "spring", stiffness: 50 }}
    {...props}
  />
))``;

export const BottomSideMotionDiv = styled(({ isSectionVisible, ...props }) => (
  <motion.div
    initial={isSectionVisible ? false : { y: "140%", opacity: 0 }}
    animate={isSectionVisible ? { y: 0, opacity: 1 } : { opacity: 0 }}
    transition={{ type: "spring", stiffness: 50 }}
    {...props}
  />
))``;
