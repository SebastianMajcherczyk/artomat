import React from "react";
import "./Footer.css";
import EmailLink from "./EmailLink";
import PhoneLink from "./PhoneLink";
import WhatsAppLink from "./WhatsAppLink";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import EmailIcon from "@mui/icons-material/Email";
import PlaceIcon from "@mui/icons-material/Place";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import InstagramIcon from "@mui/icons-material/Instagram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import { Tooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";
import { Link as ScrollLink } from "react-scroll"; // Import React Scroll
import { Link as RouterLink } from "react-router-dom"; // Import React Router

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-2">
        {/* Link do przewijania do góry strony */}
        <ScrollLink to="home" smooth={true} duration={500} spy={true}>
          <RouterLink to="/home" href="/home">
            <img
              src="/mascot.png"
              alt="logo"
              className="mascot"
              height="170px"
            />
          </RouterLink>
        </ScrollLink>

        {/* Social media section */}
        <div className="social-media">
          <a
            href="https://www.facebook.com/profile.php?id=61556020384377"
            target="_blank"
            rel="noreferrer"
            className="social-icon"
            data-tooltip-id="fb-tooltip"
            aria-label="facebook-link"
            title="Facebook"
          >
            <FacebookOutlinedIcon />
          </a>
          <a
            href="https://www.instagram.com/loftprint_pl/"
            target="_blank"
            rel="noreferrer"
            className="social-icon"
            data-tooltip-id="ig-tooltip"
            aria-label="IG link"
            title="Instagram"
          >
            <InstagramIcon />
          </a>
          <WhatsAppLink />
          <Tooltip
            id="fb-tooltip"
            place="top"
            variant="info"
            content="Facebook"
            delayHide={100}
            style={{ backgroundColor: "#8b003d" }}
          />
          <Tooltip
            id="ig-tooltip"
            place="top"
            variant="info"
            content="Instagram"
            delayHide={100}
            style={{ backgroundColor: "#8b003d" }}
          />
        </div>

        {/* Contact section */}
        <div className="contact">
          <p>Kontakt:</p>
          <div className="phone">
            <LocalPhoneIcon />
            <p>telefon:</p>
            <PhoneLink />
          </div>
          <div className="email">
            <EmailIcon />
            <p>mail:</p>
            <EmailLink />
          </div>
          <div className="address">
            <PlaceIcon />
            <p>Adres: </p>
            <p>ul. Darwina 62F</p>
            <p>31-764 Kraków</p>
          </div>
        </div>
      </div>
    </footer>
  );
};
