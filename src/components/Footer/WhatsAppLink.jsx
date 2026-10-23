import React from "react";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import { Tooltip } from "react-tooltip";

const WhatsAppLink = () => {
  const direction = "48";
  const number = "691316700";

  // href zostaje pusty w statycznym HTML-u (ochrona przed botami zbierającymi
  // numery) — prawdziwy adres liczymy i otwieramy dopiero w momencie
  // kliknięcia, więc działa za pierwszym razem, w jednym kliknięciu.
  const openWhatsApp = (event) => {
    event.preventDefault();
    const message = encodeURIComponent(
      "Dzień dobry. Jestem zainteresowany nadrukiem ściennym. Proszę o kontakt.",
    );
    window.open(
      `https://wa.me/${direction}${number}?text=${message}`,
      "_blank",
      "noopener,noreferrer",
    );
  };

  return (
    <>
      <button
        type="button"
        className="social-icon"
        data-tooltip-id="wa-tooltip"
        aria-label="WhatsApp link"
        onClick={openWhatsApp}
        data-tooltip-delay-hide={100}
        style={{
          background: "none",
          border: "none",
          padding: 0,
          margin: 0,
          color: "inherit",
          font: "inherit",
        }}
      >
        <WhatsAppIcon />
      </button>
      <Tooltip
        id="wa-tooltip"
        place="top"
        variant="info"
        content="WhatsApp"
        delayHide={100}
        style={{ backgroundColor: "#8b003d" }}
      />
    </>
  );
};

export default WhatsAppLink;
