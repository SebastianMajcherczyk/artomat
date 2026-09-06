import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import { AnimatedH2, AnimatedH3 } from "../Styled/StyledHeader";
import { RightSideMotionDiv } from "../Styled/StyledMotionDiv";
import "./FAQ.css";

const FAQ = ({ heading, lead, items }) => {
  const [isSectionVisible, setIsSectionVisible] = useState(false);
  const [hasAnimationPlayed, setHasAnimationPlayed] = useState(false);
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

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [hasAnimationPlayed]);

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
        text: item.answer,
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
                <p>{item.answer}</p>
              </AccordionDetails>
            </Accordion>
          ))}
        </div>
      </RightSideMotionDiv>
    </div>
  );
};

export default FAQ;
