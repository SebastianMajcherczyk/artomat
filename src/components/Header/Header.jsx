import React from "react";
import { Link } from "react-router-dom";
import { Navbar } from "../Navbar/Navbar";
import "./Header.css";
import { HamburgerMenu } from "../Hamburger/Hamburger";

export const Header = () => {
  return (
    <div className="header">
      <Link to="/">
        <img src="/logo_6.png" alt="logo" className="logo" height="50px" />
      </Link>

      <Navbar />
      <HamburgerMenu />
    </div>
  );
};
