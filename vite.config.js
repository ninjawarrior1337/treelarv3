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
}

export default config