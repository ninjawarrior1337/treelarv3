import auto from "@sveltejs/adapter-auto";
import vercel from "@sveltejs/adapter-vercel";
import node from "@sveltejs/adapter-node";
import { sveltePreprocess } from "svelte-preprocess";
import process from "node:process";
import { sveltekit } from "@sveltejs/kit/vite";
import tailwindcss from "@tailwindcss/vite";
import Icons from "unplugin-icons/vite";

/** @type {import('vite').UserConfig} */ const config = {
  plugins: [
    tailwindcss(),
    sveltekit({
      preprocess: sveltePreprocess(),
      adapter: process.env["VERCEL"] ? vercel() : process.env["IN_NIX"] ? node() : auto(),
      inlineStyleThreshold: 5000,
    }),
    Icons({ compiler: "svelte" }),
  ],
};

export default config;
