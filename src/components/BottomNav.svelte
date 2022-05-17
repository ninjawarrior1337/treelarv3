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
        <Fa icon={faHome} size="2x"></Fa>
        <span>Home</span>
      </a>
      <a
        href="/projects"
        class="row-span-2 bg-black flex flex-col items-center justify-center"
      >
        <Fa icon={faBrain} size="2x"></Fa>
        <span>Projects</span>
      </a>
      <button class="row-span-1 bg-black text-3xl">
        <img class="w-16 p-2 h-full" alt="logo" src="/logo/logo2020.svg">
      </button>
      {#if $isLoggedIn}
        <a href="journal" class="row-span-2 bg-black flex flex-col items-center justify-center">
          <Fa icon={faBook} size="2x"></Fa>
          Journal
        </a>
      {:else}
        <div class="row-span-2 bg-black"></div>
      {/if}
      <a
        target="_blank"
        href="https://anilist.co/user/Treelar"
        class="col-span-2 bg-black grid grid-cols-2 justify-items-center items-center"
      >
        <Fa icon={faToriiGate} size="2x"></Fa>
        <span>Anime</span>
      </a>
    </div>
    {/if}
</template>

<script>
import Fa from "svelte-fa/src/fa.svelte"
import {fly} from "svelte/transition"
import {faToriiGate, faBrain, faHome, faBook} from "@fortawesome/free-solid-svg-icons"
import {mode} from "$app/env"
import { isLoggedIn } from "$lib/web3";
let navOpen = mode === "development"
const toggleNav = () => {
    navOpen = !navOpen
}
</script>