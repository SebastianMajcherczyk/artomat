import React from "react";
import { Navbar } from "../Navbar/Navbar";
import "./Header.css";
import { HamburgerMenu } from "../Hamburger/Hamburger";
import { useNavigate } from "react-router";
import { Link as ScrollLink } from "react-scroll";

export const Header = () => {
  const navigate = useNavigate();
  return (
    <div className="header">
      <ScrollLink to="home" smooth={true} duration={500} spy={true}>
        <img
          src="/logo_6.png"
          alt="logo"
          className="logo"
          height="50px"
          onClick={() => navigate("/")}
        />
      </ScrollLink>

      <Navbar />
      <HamburgerMenu />
    </div>
  );
};
