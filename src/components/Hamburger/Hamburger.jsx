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
        <li>
          <StyledButton2 component={RouterLink} to="/">
            Start
          </StyledButton2>
        </li>

        <li>
          <StyledButton2
            component={RouterLink}
            to={{ pathname: "/", hash: "#dla-kogo" }}
          >
            Dla kogo
          </StyledButton2>
        </li>

        <li>
          <StyledButton2 component={RouterLink} to="/technika">
            Technika
          </StyledButton2>
        </li>

        <li>
          <StyledButton2 component={RouterLink} to="/gallery">
            Realizacje
          </StyledButton2>
        </li>

        <li>
          <StyledButton2 component={RouterLink} to="/ceny">
            Ceny
          </StyledButton2>
        </li>

        <li>
          <StyledButton2
            component={RouterLink}
            to={{ pathname: "/", hash: "#inspiracje" }}
          >
            Inspiracje
          </StyledButton2>
        </li>

        <li>
          <StyledButton2
            component={RouterLink}
            to={{ pathname: "/", hash: "#visualizer" }}
          >
            Wizualizacje
          </StyledButton2>
        </li>

        <li>
          <StyledButton2
            component={RouterLink}
            to={{ pathname: "/", hash: "#kontakt" }}
          >
            Kontakt
          </StyledButton2>
        </li>
      </ul>
    </div>
  );
};
