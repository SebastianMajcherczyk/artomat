import React from "react";
import { StyledButton1 } from "../Styled/StyledButtons";
import "./Navbar.css";

import { Link as ScrollLink } from "react-scroll";

export const Navbar = () => {
  return (
    <div className="navbar">
      <ScrollLink
        to="home"
        smooth={true}
        duration={500}
        spy={true}
        activeClass="active-link"
      >
        <StyledButton1>Home</StyledButton1>
      </ScrollLink>
      <ScrollLink
        to="technika"
        smooth={true}
        duration={500}
        spy={true}
        activeClass="active-link"
      >
        <StyledButton1>Technika</StyledButton1>
      </ScrollLink>
      <ScrollLink
        to="gallery"
        smooth={true}
        duration={500}
        spy={true}
        activeClass="active-link"
      >
        <StyledButton1>Realizacje</StyledButton1>
      </ScrollLink>
      <ScrollLink
        to="ceny"
        smooth={true}
        duration={500}
        spy={true}
        activeClass="active-link"
      >
        <StyledButton1 o>Ceny</StyledButton1>
      </ScrollLink>
      <ScrollLink
        to="inspiracje"
        smooth={true}
        duration={500}
        spy={true}
        activeClass="active-link"
      >
        <StyledButton1>Inspiracje</StyledButton1>
      </ScrollLink>
      <ScrollLink
        to="visualizer"
        smooth={true}
        duration={500}
        spy={true}
        activeClass="active-link"
      >
        <StyledButton1>Wizualizacje</StyledButton1>
      </ScrollLink>
      <ScrollLink
        to="kontakt"
        smooth={true}
        duration={1000}
        spy={true}
        activeClass="active-link"
      >
        <StyledButton1>Kontakt</StyledButton1>{" "}
      </ScrollLink>
    </div>
  );
};
