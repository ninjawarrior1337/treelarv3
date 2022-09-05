// import adapter from "@sveltejs/adapter-auto"
import adapter from "@sveltejs/adapter-vercel"
import preprocess from "svelte-preprocess"

/** @type {import('@sveltejs/kit').Config} */
const config = {
    preprocess: preprocess(),
    kit: {
        adapter: adapter({edge: true}),
        inlineStyleThreshold: 5000
    }
}

export default config