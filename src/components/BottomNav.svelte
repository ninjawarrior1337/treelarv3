<template>
    {#if !navOpen}
    <button
        in:fly={{x: 10, y: 10, duration: 250}}
        out:fly={{x: 10, y: 10, duration: 250}}
        on:click={() => toggleNav()}
        class="flex items-center fixed bottom-5 right-5 px-4 py-1.5 focus:outline-none bg-gradient-to-tr to-aqours from-muse rounded shadow text-center lg:hidden text-5xl border-2 origin-bottom-right text-white"
    >
    <span class="font-light mb-2">=</span>
    </button>
    {:else}
    <div
        in:fly={{x: 10, y: 10, duration: 250}}
        out:fly={{x: 10, y: 10, duration: 250}}
        on:click={toggleNav}
        class="focus:outline-none shadow-xl fixed lg:hidden bottom-5 right-5 grid grid-cols-3 grid-rows-3 gap-2 bg-gradient-to-tr via-treelar to-treelar from-muse p-2 rounded shadow origin-bottom-right text-white"
    >
      <a
        href="/"
        class="row-span-2 h-32 w-16 bg-black flex flex-col items-center justify-center"
      >
        <FaHome class="text-3xl"></FaHome>
        <span>Home</span>
      </a>
      <a
        href="/projects"
        class="row-span-2 bg-black flex flex-col items-center justify-center"
      >
        <FaBrain class="text-2xl"></FaBrain>
        <span>Projects</span>
      </a>
      <button class="row-span-1 bg-black text-3xl">
        <img class="w-16 p-2 h-full" alt="logo" src="/logo/logo2020.svg">
      </button>
      <div class="row-span-2 bg-black"></div>
      <a
        target="_blank"
        href="https://anilist.co/user/Treelar"
        class="col-span-2 bg-black grid grid-cols-2 justify-items-center items-center"
      >
        <ToriiGate class="text-2xl"></ToriiGate>
        <span>Anime</span>
      </a>
    </div>
    {/if}
</template>

<script>
import {fly} from "svelte/transition"

import ToriiGate from "~icons/fa6-solid/torii-gate"
import FaBrain from "~icons/fa6-solid/brain"
import FaHome from "~icons/fa/home"

import {dev} from "$app/env"

let navOpen = dev

const toggleNav = () => {
    navOpen = !navOpen
}
</script>