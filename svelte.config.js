import auto from "@sveltejs/adapter-auto"
import vercel from "@sveltejs/adapter-vercel"
import node from "@sveltejs/adapter-node"
import {sveltePreprocess} from "svelte-preprocess"
import process from "node:process"

/** @type {import('@sveltejs/kit').Config} */
const config = {
    preprocess: sveltePreprocess(),
    kit: {
        adapter: process.env["VERCEL"] ? vercel({runtime: "edge"}) : process.env["IN_NIX"] ? node() : auto(),
        inlineStyleThreshold: 5000
    }
}

export default config