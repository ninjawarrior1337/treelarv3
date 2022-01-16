import preprocess from 'svelte-preprocess';
import adapter from "@sveltejs/adapter-static"
import WindiCSS from 'vite-plugin-windicss';
import { windi } from 'svelte-windicss-preprocess';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: [
		preprocess(),
		// windi()
	],

	kit: {
		// hydrate the <div id="svelte"> element in src/app.html
		target: '#svelte',
		adapter: adapter({

		}),
		vite: {
			plugins: [
				WindiCSS()
			],
			host: "0.0.0.0:1234"
		}
	},
};

export default config;
