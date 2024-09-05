import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: "autoUpdate",
      includeAssets: ["favicon.ico", "robots.txt", "apple-touch-icon.png"],
      manifest: {
        name: "Nombre de tu App",
        short_name: "App",
        description: "Descripción de tu App",
        theme_color: "#ffffff",
        icons: [],
        screenshots: [
          {
            src: "/assets/github.png",
            sizes: "540x720",
            type: "image/png",
            form_factor: "narrow",
          },
          {
            src: "/assets/linkedin.png",
            sizes: "1080x1920",
            type: "image/png",
            form_factor: "standard",
          },
        ],
      },
    }),
  ],
});
