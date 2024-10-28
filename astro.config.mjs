import { defineConfig } from "astro/config";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
  site: "https://marcorfilacarreras.cloud",
  assets: "relative",
  build: {
    inlineStylesheets: "always",
  },
  buildOptions: {
    sitemap: true,
  },
  redirects: {
    "/": {
      status: 302,
      destination: "/es",
    },
  },
});
