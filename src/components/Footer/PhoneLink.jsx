import React, { useState } from "react";
import { Button } from "@mui/material";

const PhoneLink = () => {
  const [direction, number] = ["+48", "691 316 700"];
  const [phone, setPhone] = useState("");
  const revealPhone = () => {
    setPhone(`${direction} ${number}`);
  };
  return (
    <div className="phone-link">
      {!phone && (
        <Button
          onClick={revealPhone}
          sx={{
            color: "#00375f",
            fontSize: "14px",
            whiteSpace: "nowrap",
            textTransform: "lowercase",
          }}
        >
          Pokaż numer...
        </Button>
      )}
      {phone && (
        <p>
          <a href={`tel:${phone}`}>{phone}</a>
        </p>
      )}
    </div>
  );
};

export default PhoneLink;
