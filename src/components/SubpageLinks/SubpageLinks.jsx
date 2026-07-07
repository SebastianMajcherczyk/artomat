import React from "react";
import { Link as RouterLink } from "react-router-dom";
import "./SubpageLinks.css";

const SubpageLinks = ({ title = "Zobacz także", items = [] }) => {
  return (
    <nav className="subpage-links" aria-label="Dalsza nawigacja">
      <h2 className="subpage-links-title">{title}</h2>

      <div className="subpage-links-grid">
        {items.map((item) => (
          <RouterLink
            key={item.label}
            to={item.to}
            className="subpage-link-card"
          >
            <span className="subpage-link-label">{item.label}</span>
            {item.description && (
              <span className="subpage-link-description">
                {item.description}
              </span>
            )}
          </RouterLink>
        ))}
      </div>
    </nav>
  );
};

export default SubpageLinks;
