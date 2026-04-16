import { Link as RouterLink } from "react-router-dom";
import { Link } from "@mui/material";
import styled from "@emotion/styled";

export const StyledButton1 = styled(Link)(({ theme, disableHoverScale }) => ({
  color: "#00375f",
  display: "inline-block",
  fontSize: "13px",
  fontWeight: "700",
  borderRadius: "24px",
  marginLeft: "5px",
  marginRight: "5px",
  padding: "0.2rem 0.2rem",
  transition: "0.7s ease",
  textDecoration: "none",
  textAlign: "center",
  cursor: "pointer",
  textTransform: "uppercase",
  whiteSpace: "nowrap",
  "&:hover": {
    transform: "scale(1.1)",
    color: "#8b003d",
  },
  "@media (min-width: 1060px)": {
    fontSize: "16px",
  },
}));

export const StyledButton2 = styled(Link)(({ theme }) => ({
  // minWidth: '65px',
  color: "#00375f",
  display: "inline-block",
  textDecoration: "none",
  textAlign: "center",
  cursor: "pointer",
  transition: "transform 0.3s ease",
  "&:hover": {
    transform: "scale(1.1)",
    textShadow: "5px 5px 10px #000",
  },
}));
