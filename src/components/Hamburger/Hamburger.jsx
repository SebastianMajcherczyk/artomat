import React, { useEffect, useState } from "react";
import "./Hamburger.css";
import { StyledButton2 } from "../Styled/StyledButtons";
import { Link as RouterLink, useLocation } from "react-router-dom";

export const HamburgerMenu = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname, location.hash]);

  return (
    <div className="hamburger">
      <button
        type="button"
        className={`hamburger-toggle ${menuOpen ? "is-open" : ""}`}
        aria-label="Menu"
        aria-expanded={menuOpen}
        onClick={() => setMenuOpen((prev) => !prev)}
      >
        <span className="hamburger-bar" />
        <span className="hamburger-bar" />
        <span className="hamburger-bar" />
      </button>

      <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
        <li>
          <StyledButton2
            component={RouterLink}
            to="/"
            onClick={() => setMenuOpen(false)}
          >
            Start
          </StyledButton2>
        </li>

        <li>
          <StyledButton2
            component={RouterLink}
            to={{ pathname: "/", hash: "#dla-kogo" }}
            onClick={() => setMenuOpen(false)}
          >
            Dla kogo
          </StyledButton2>
        </li>

        <li>
          <StyledButton2
            component={RouterLink}
            to="/technika"
            onClick={() => setMenuOpen(false)}
          >
            Technika
          </StyledButton2>
        </li>

        <li>
          <StyledButton2
            component={RouterLink}
            to="/gallery"
            onClick={() => setMenuOpen(false)}
          >
            Realizacje
          </StyledButton2>
        </li>

        <li>
          <StyledButton2
            component={RouterLink}
            to="/ceny"
            onClick={() => setMenuOpen(false)}
          >
            Ceny
          </StyledButton2>
        </li>

        <li>
          <StyledButton2
            component={RouterLink}
            to={{ pathname: "/", hash: "#inspiracje" }}
            onClick={() => setMenuOpen(false)}
          >
            Inspiracje
          </StyledButton2>
        </li>

        <li>
          <StyledButton2
            component={RouterLink}
            to={{ pathname: "/", hash: "#visualizer" }}
            onClick={() => setMenuOpen(false)}
          >
            Wizualizacje
          </StyledButton2>
        </li>

        <li>
          <StyledButton2
            component={RouterLink}
            to={{ pathname: "/", hash: "#kontakt" }}
            onClick={() => setMenuOpen(false)}
          >
            Kontakt
          </StyledButton2>
        </li>
      </ul>
    </div>
  );
};
