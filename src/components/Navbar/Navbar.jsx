import { Link as RouterLink } from "react-router-dom";
import { StyledButton1 } from "../Styled/StyledButtons";
import "./Navbar.css";

export const Navbar = () => {
  return (
    <div className="navbar">
      <StyledButton1 component={RouterLink} to="/home" href="/home">
        Home
      </StyledButton1>
      <StyledButton1 component={RouterLink} to="/dla-kogo" href="/dla-kogo">
        Dla kogo
      </StyledButton1>
      <StyledButton1 component={RouterLink} to="/technika" href="/technika">
        Technika
      </StyledButton1>
      <StyledButton1 component={RouterLink} to="/gallery" href="/gallery">
        Realizacje
      </StyledButton1>
      <StyledButton1 component={RouterLink} to="/ceny" href="/ceny">
        Ceny
      </StyledButton1>
      <StyledButton1 component={RouterLink} to="/inspiracje" href="/inspiracje">
        Inspiracje
      </StyledButton1>
      <StyledButton1 component={RouterLink} to="/visualizer" href="/visualizer">
        Wizualizacje
      </StyledButton1>
      <StyledButton1 component={RouterLink} to="/kontakt" href="/kontakt">
        Kontakt
      </StyledButton1>
    </div>
  );
};
