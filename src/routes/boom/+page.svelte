<script lang="ts">
  import { run } from "svelte/legacy";

  import { Howl, Howler } from "howler";
  import { onDestroy, onMount } from "svelte";

  let boom: Howl = $state(
    new Howl({
      src: ["/assets/boom/boom.mp3"],
      html5: true,
    })
  );

  let selectedInterval = $state(2);
  let booming = $state(false);
  let currentTimeout: number | undefined = $state();

  const randomN = (n: number) => {
    return Math.floor(Math.random() * n);
  };

  const playBoom = () => {
    boom.play();
  };

  const startBooming = (interval: number) => {
    removeTimeout()
    currentTimeout = window.setTimeout(
      () => {
        playBoom();
        startBooming(interval);
      },
      randomN(interval) * 1000
    );
    booming = true;
  };

  const removeTimeout = () => {
    if(currentTimeout) {
        window.clearTimeout(currentTimeout);
        booming = false;
    }
  };

  $effect(() => {
    if(!booming) {
        removeTimeout()
    }
  });

  onDestroy(() => {
    removeTimeout();
  });
</script>

<div class="grid w-screen h-screen place-items-center content-center space-y-4">
  <button class="bg-treelar text-4xl rounded p-2" onclick={playBoom}>
    Boom Now
  </button>
  <div></div>
  <span
    >Boom Interval (Boom at least once sometime in the next {selectedInterval}
    seconds from the previous boom)</span
  >
  <input
    class="bg-gray-800 border-2 rounded p-2"
    placeholder="Boom Interval"
    type="number"
    min="2"
    bind:value={selectedInterval}
  />
  <button class="bg-muse text-5xl rounded p-4" onclick={() => {
    if(!booming) {
        startBooming(selectedInterval)
    } else {
        booming = false;
    }
  }}>
    {#if booming}
      Stop Booms
    {:else}
      Start Booms
    {/if}
  </button>
</div>
