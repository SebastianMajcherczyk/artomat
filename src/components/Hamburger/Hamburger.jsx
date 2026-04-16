import React, { useState } from "react";
import Hamburger from "hamburger-react";
import "./Hamburger.css";
import { StyledButton2 } from "../Styled/StyledButtons";
import { Link as RouterLink } from "react-router-dom";

export const HamburgerMenu = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="hamburger">
      <Hamburger toggled={menuOpen} toggle={setMenuOpen} />
      <ul
        className={menuOpen ? "nav-links open" : "nav-links"}
        onClick={() => setMenuOpen(false)}
      >
        <li onClick={() => setMenuOpen(false)}>
          <StyledButton2 component={RouterLink} to="/home" href="/home">
            Home
          </StyledButton2>
        </li>
        <li onClick={() => setMenuOpen(false)}>
          <StyledButton2 component={RouterLink} to="/dla-kogo" href="/dla-kogo">
            Dla kogo
          </StyledButton2>
        </li>
        <li onClick={() => setMenuOpen(false)}>
          <StyledButton2 component={RouterLink} to="/technika" href="/technika">
            Technika
          </StyledButton2>
        </li>
        <li onClick={() => setMenuOpen(false)}>
          <StyledButton2 component={RouterLink} to="/gallery" href="/gallery">
            Realizacje
          </StyledButton2>
        </li>
        <li onClick={() => setMenuOpen(false)}>
          <StyledButton2 component={RouterLink} to="/ceny" href="/ceny">
            Ceny
          </StyledButton2>
        </li>
        <li onClick={() => setMenuOpen(false)}>
          <StyledButton2
            component={RouterLink}
            to="/inspiracje"
            href="/inspiracje"
          >
            Inspiracje
          </StyledButton2>
        </li>
        <li onClick={() => setMenuOpen(false)}>
          <StyledButton2
            component={RouterLink}
            to="/visualizer"
            href="/visualizer"
          >
            Wizualizacje
          </StyledButton2>
        </li>
        <li onClick={() => setMenuOpen(false)}>
          <StyledButton2 component={RouterLink} to="/kontakt" href="/kontakt">
            Kontakt
          </StyledButton2>
        </li>
      </ul>
    </div>
  );
};
