import { sveltekit } from '@sveltejs/kit/vite';
import WindiCSS from 'vite-plugin-windicss';
import Icons from "unplugin-icons/vite"


/** @type {import('vite').UserConfig} */
const config = {
    plugins: [
        sveltekit(),
        WindiCSS(),
        Icons({compiler: "svelte"})
    ],
    optimizeDeps: {
		exclude: [ "@fortawesome/free-solid-svg-icons", "@fortawesome/free-brands-svg-icons" ]
	}
}

export default config