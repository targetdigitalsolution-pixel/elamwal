import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Home } from "./screens/Home/Home";
import "./globals.css";

createRoot(document.getElementById("app")).render(
  <StrictMode>
    <Home />
  </StrictMode>,
);