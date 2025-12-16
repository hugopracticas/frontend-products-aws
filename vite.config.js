/// <reference types="vitest" />
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  test: {
    environment: "jsdom",
    globals: true,                 // 👈 MUY IMPORTANTE
    setupFiles: "./src/setupTests.js", // 👈 archivo que vamos a crear
  },
});
