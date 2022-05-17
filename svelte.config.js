import preprocess from 'svelte-preprocess';
import adapter from "@sveltejs/adapter-vercel"
import WindiCSS from 'vite-plugin-windicss';

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
		adapter: adapter({
			// edge: true
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
