import path from "path";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  json: {
    namedExports: true, // Enable named exports for JSON
    esModule: true, // Allow ES Module imports for JSON
  },
});
