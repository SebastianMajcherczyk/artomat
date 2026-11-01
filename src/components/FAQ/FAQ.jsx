import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import { AnimatedH2, AnimatedH3 } from "../Styled/StyledHeader";
import { RightSideMotionDiv } from "../Styled/StyledMotionDiv";
import "./FAQ.css";

const FAQ = ({ heading, lead, items, animated = true }) => {
  const [isSectionVisible, setIsSectionVisible] = useState(!animated);
  const [hasAnimationPlayed, setHasAnimationPlayed] = useState(!animated);
  const [expanded, setExpanded] = useState("panel0");

  const checkIfSectionIsVisible = () => {
    const section = document.querySelector(".faq-box");
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

  // Na statycznych podstronach (animated=false) sekcja ma być od razu w
  // pełni widoczna, bez wjeżdżania z boku przy scrollu - patrz
  // TechnikaFull.jsx/GrafikaNaSciane.jsx, gdzie reszta treści dzieli ten
  // sam, stały stan "isSectionVisible". FAQ.jsx jest jedynym wyjątkiem
  // w tych komponentach, bo ma wbudowaną własną detekcję scrolla.
  useEffect(() => {
    if (!animated) return;
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [hasAnimationPlayed, animated]);

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        // item.answer bywa JSX-em (wyróżnienia <strong>, kilka akapitów) -
        // w JSON-LD potrzebny jest czysty tekst, więc dla takich pozycji
        // korzystamy z answerText zamiast serializować element React.
        text: typeof item.answer === "string" ? item.answer : item.answerText,
      },
    })),
  };

  return (
    <div className="faq-container">
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify(faqSchema)}
        </script>
      </Helmet>

      <AnimatedH2 isSectionVisible={isSectionVisible}>{heading}</AnimatedH2>
      {lead && (
        <AnimatedH3 isSectionVisible={isSectionVisible}>{lead}</AnimatedH3>
      )}

      <RightSideMotionDiv isSectionVisible={isSectionVisible} className="faq-box">
        <div className="accordion-container">
          {items.map((item, index) => (
            <Accordion
              key={item.question}
              expanded={expanded === `panel${index}`}
              onChange={handleChange(`panel${index}`)}
              sx={{ backgroundColor: "rgba(255, 255, 255, 0.15)" }}
            >
              <AccordionSummary
                expandIcon={<ArrowDownwardIcon />}
                aria-controls={`faq-panel${index}-content`}
                id={`faq-panel${index}-header`}
              >
                <h3>{item.question}</h3>
              </AccordionSummary>
              <AccordionDetails>
                {typeof item.answer === "string" ? (
                  <p>{item.answer}</p>
                ) : (
                  item.answer
                )}
              </AccordionDetails>
            </Accordion>
          ))}
        </div>
      </RightSideMotionDiv>
    </div>
  );
};

export default FAQ;
