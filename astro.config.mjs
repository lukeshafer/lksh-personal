// @ts-check
import { defineConfig } from 'astro/config';
import { ecsstatic } from '@acab/ecsstatic/vite';
import solidJs from '@astrojs/solid-js';

import alpinejs from '@astrojs/alpinejs';

// https://astro.build/config
import node from '@astrojs/node';

// https://astro.build/config
export default defineConfig({
	integrations: [solidJs(), alpinejs()],
	vite: {
		plugins: [ecsstatic()],
	},
	output: 'server',
	adapter: node({
		mode: 'standalone',
	}),
});
