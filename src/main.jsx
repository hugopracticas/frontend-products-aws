import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { ListProducts } from "./components/Home/ListProducts.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ListProducts />
  </StrictMode>
);
