import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import { BrowserRouter } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";

import AppLazy from "./App-lazy";

const container = document.getElementById("root");
const app = (
  // <React.StrictMode>
  <HelmetProvider>
    <BrowserRouter>
      <AppLazy />
    </BrowserRouter>
  </HelmetProvider>
  // </React.StrictMode>
);

// Strony prerenderowane (patrz scripts/prerender.js) zostawiają w #root
// gotowy HTML — wtedy trzeba "przejąć" go przez hydrateRoot, a nie renderować
// od nowa przez createRoot (to drugie zniszczyłoby i odtworzyło cały DOM,
// mrugnięciem ekranu i bez realnej korzyści z prerenderingu).
if (container.hasChildNodes()) {
  ReactDOM.hydrateRoot(container, app);
} else {
  ReactDOM.createRoot(container).render(app);
}
