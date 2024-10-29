<script lang="ts">
  import { run } from "svelte/legacy";

  import { onMount, onDestroy } from "svelte";
  import confetti from "canvas-confetti";
  import { browser } from "$app/environment";

  interface Props {
    colors: string[];
  }

  let { colors }: Props = $props();

  const randomInRange = (min: number, max: number) => {
    return Math.random() * (max - min) + min;
  };

  let interval: number | undefined = $state();

  $effect(() => {
    if (colors.length > 0 && browser) {
      interval = window.setInterval(() => {
        confetti({
          particleCount: 1,
          startVelocity: 0,
          ticks: 500,
          origin: {
            x: Math.random(),
            y: Math.random() - 0.5,
          },
          colors: colors,
          shapes: ["square", "circle"],
          gravity: randomInRange(0.4, 0.6),
          scalar: randomInRange(0.4, 1),
          drift: randomInRange(-0.4, 0.4),
        });
      }, 10);
    }
  });

  onDestroy(() => {
    if(interval) {
      clearInterval(interval);
    }
  });
</script>

<div></div>
