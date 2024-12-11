import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  base: '/wp-content/plugins/react-wordpress/widget/build/', // Set the base path
  plugins: [react()],
  build: {
    outDir: "../build", // Build one level up
    assetsDir: "assets", // Folder for static assets
    manifest: true, // Generate a manifest.json
    rollupOptions: {
      input: "./src/main.tsx",
      output: {
        entryFileNames: "assets/[name].js",
        chunkFileNames: "assets/[name].js",
        assetFileNames: "assets/[name].[ext]",
      },
    },
  },
});
