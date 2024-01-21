import auto from "@sveltejs/adapter-auto"
import vercel from "@sveltejs/adapter-vercel"
import preprocess from "svelte-preprocess"
import process from "node:process"

/** @type {import('@sveltejs/kit').Config} */
const config = {
    preprocess: preprocess(),
    kit: {
        adapter: process.env["VERCEL"] ? vercel({runtime: "edge"}) : auto(),
        inlineStyleThreshold: 5000
    }
}

export default config