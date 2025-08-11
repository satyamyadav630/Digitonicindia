// src/main.jsx

import React from "react";
import ReactDOM from "react-dom/client"; // ✅ This gives us createRoot
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "@fontsource/roboto"; // Defaults to weight 400
import "@fontsource/roboto/700.css"; // Bold weight


// ✅ FIXED: Use createRoot from ReactDOM
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
