<script lang="ts">
  import ToriiGate from "~icons/fa6-solid/torii-gate"
  import FaBrain from "~icons/fa6-solid/brain"
  import FaHome from "~icons/fa/home"
  import { spring } from "svelte/motion";
  import { onMount } from "svelte";

  let navOpen = import.meta.env.DEV;

  const navState = spring({
      dim: 4,
      opacity: 0,
      progress: 0
  });

  onMount(() => {
      setNavState(navOpen)
  })

  const setNavState = (open: boolean) => {
      if (!open) {
          navState.set({
              dim: 4,
              opacity: 0,
              progress: 0
          });
      } else {
          navState.set({
              dim: 16,
              opacity: 1,
              progress: 100
          });
      }
      navOpen = open
  };
</script>

<button
  on:click={() => setNavState(!navOpen)}
  style:width={`${$navState.dim}rem`}
  style:height={`${$navState.dim}rem`}
  class="grid grid-cols-3 grid-rows-3 gap-2 select-none cursor-pointer shadow-xl border-2 fixed bottom-6 right-6 bg-gradient-to-tr via-treelar to-treelar from-muse p-2 rounded text-white [&>*]:w-full [&>*]:h-full"
>
  {#if $navState.progress > 10}
      <a
          href="/"
          style:opacity={`${$navState.opacity}`}
          class="row-span-2 bg-black grid gap-4 place-items-center content-center"
      >
          <FaHome class="text-3xl" />
          <span>Home</span>
      </a>
      <a
          href="/projects"
          style:opacity={`${$navState.opacity}`}
          class="row-span-2 bg-black grid gap-4 place-items-center content-center"
      >
          <FaBrain class="text-2xl" />
          <span>Projects</span>
      </a>
      <button style:opacity={`${$navState.opacity}`} class="row-span-1 bg-black text-3xl">
          <img class="p-2 h-full" alt="logo" src="/logo/logo2020.svg" />
      </button>
      <div style:opacity={`${$navState.opacity}`} class="row-span-2 bg-black" />
      <a
          style:opacity={`${$navState.opacity}`}
          target="_blank"
          rel="noreferrer"
          href="https://anilist.co/user/Treelar"
          class="col-span-2 bg-black grid grid-cols-2 justify-items-center items-center"
      >
          <ToriiGate class="text-2xl" />
          <span>Anime</span>
      </a>
  {:else}
      {#each [...Array(9).keys()] as e}
          <div class="bg-black"></div>
      {/each}
  {/if}
</button>