import { Link as RouterLink } from "react-router-dom";
import { StyledButton1 } from "../Styled/StyledButtons";
import "./Navbar.css";

export const Navbar = () => {
  return (
    <div className="navbar">
      <StyledButton1 component={RouterLink} to="/">
        Start
      </StyledButton1>

      <StyledButton1
        component={RouterLink}
        to={{ pathname: "/", hash: "#dla-kogo" }}
      >
        Dla kogo
      </StyledButton1>

      <StyledButton1 component={RouterLink} to="/technika">
        Technika
      </StyledButton1>

      <StyledButton1 component={RouterLink} to="/gallery">
        Realizacje
      </StyledButton1>

      <StyledButton1 component={RouterLink} to="/ceny">
        Ceny
      </StyledButton1>

      <StyledButton1
        component={RouterLink}
        to={{ pathname: "/", hash: "#inspiracje" }}
      >
        Inspiracje
      </StyledButton1>

      <StyledButton1
        component={RouterLink}
        to={{ pathname: "/", hash: "#visualizer" }}
      >
        Wizualizacje
      </StyledButton1>

      <StyledButton1
        component={RouterLink}
        to={{ pathname: "/", hash: "#kontakt" }}
      >
        Kontakt
      </StyledButton1>
    </div>
  );
};
