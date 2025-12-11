import { defineConfig } from "astro/config";
import { fileURLToPath } from "node:url";

// Resolve alias paths
const assetsPath = fileURLToPath(new URL("../shared-assets", import.meta.url));

export default defineConfig({
  vite: {
    resolve: {
      alias: {
        "@assets": assetsPath,
      },
    },
    server: {
      fs: {
        allow: ['.', '../..'],
      },
    },
  },
});
