import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { ListProducts } from "./components/Home/ListProducts.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ListProducts />
  </StrictMode>
);
