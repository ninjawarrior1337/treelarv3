import { sveltekit } from '@sveltejs/kit/vite';
import Icons from "unplugin-icons/vite"
import path from "path";


/** @type {import('vite').UserConfig} */
const config = {
    resolve: {
        alias: {
          "@": path.resolve(__dirname, "./src"),
        },
      },
    plugins: [
        sveltekit(),
        Icons({compiler: "svelte"})
    ],
}

export default config