import UnoCSS from 'unocss/vite'
import { defineConfig } from 'vite'
import solidPlugin from "vite-plugin-solid";

export default defineConfig(async () => ({
  plugins: [
    UnoCSS(),
    solidPlugin()
  ],
  clearScreen: false,
  server: {
    port: 8080,
    strictPort: true,
  },
  envPrefix: ["VITE_", "TAURI_"],
}));
