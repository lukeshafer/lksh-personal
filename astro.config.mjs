// @ts-check
import { defineConfig } from "astro/config";
import { ecsstatic } from "@acab/ecsstatic/vite";

// https://astro.build/config
import solidJs from "@astrojs/solid-js";

// https://astro.build/config
export default defineConfig({
	integrations: [solidJs()],
	vite: {
		plugins: [ecsstatic()],
	},
});
