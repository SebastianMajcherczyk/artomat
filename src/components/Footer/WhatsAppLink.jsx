import React, { useState } from "react";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import { Tooltip } from "react-tooltip";

const WhatsAppLink = () => {
  const [direction, number] = ["48", "691316700"];
  const [phone, setPhone] = useState("");

  const revealWhatsApp = () => {
    setPhone(`${direction}${number}`);
  };

  const message = encodeURIComponent(
    "Dzień dobry. Jestem zainteresowany nadrukiem ściennym. Proszę o kontakt."
  );
  const whatsappUrl = `https://wa.me/${phone}?text=${message}`;

  return (
    <div>
      <a
        href={whatsappUrl}
        className="social-icon"
        data-tooltip-id="wa-tooltip"
        aria-label="WhatsApp link"
        target="_blank"
        rel="noopener noreferrer"
        data-tooltip-delay-hide={100}
      >
        <WhatsAppIcon onClick={revealWhatsApp} />{" "}
      </a>{" "}
      <Tooltip
        id="wa-tooltip"
        place="top"
        variant="info"
        content="WhatsApp"
        delayHide={100}
        style={{ backgroundColor: "#8b003d" }}
      />
    </div>
  );
};

export default WhatsAppLink;
