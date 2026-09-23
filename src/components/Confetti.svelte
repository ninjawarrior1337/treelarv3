<script lang="ts">
  import confetti from "canvas-confetti";
  import { browser } from "$app/environment";

  interface Props {
    colors: string[];
  }

  let { colors }: Props = $props();

  const randomInRange = (min: number, max: number) => {
    return Math.random() * (max - min) + min;
  };

  // Browsers throttle timers in a hidden tab rather than stopping them, so the
  // interval keeps trickling particles out while the tab is in the background
  // and then floods the screen the moment it comes back. Track visibility so
  // the effect below can stop spawning outright. `browser` is false during SSR,
  // where `document` does not exist.
  let visible = $state(browser ? !document.hidden : true);

  $effect(() => {
    if (!browser) {
      return;
    }

    const onVisibilityChange = () => {
      visible = !document.hidden;
    };

    // Re-sync on mount in case visibility changed before the listener attached.
    onVisibilityChange();
    document.addEventListener("visibilitychange", onVisibilityChange);

    return () => document.removeEventListener("visibilitychange", onVisibilityChange);
  });

  $effect(() => {
    // Re-runs whenever the colors array or visibility changes, so tear the
    // previous timers down first — otherwise every change would leak another set.
    if (colors.length === 0 || !browser || !visible) {
      return;
    }

    // canvas-confetti resolves gravity, drift, scalar, origin, angle and spread
    // once per confetti() call and hands the same values to every particle in
    // it, and it picks each particle's colour with `colors[temp % colors.length]`
    // while counting `temp` down from particleCount — which, at particleCount 1,
    // is always colors[0]. So a single call either ignores every colour but the
    // first, or (at particleCount = colors.length) sends them all down one shared
    // trajectory. One call per colour, each with its own randomised motion, is
    // the only way to get both: every colour is used and each falls its own way.
    const CYCLE_MS = 10 * colors.length;
    const STAGGER_MS = 5;

    let cancelled = false;
    const timers: number[] = [];

    const cycle = () => {
      if (cancelled) {
        return;
      }

      colors.forEach((color, i) => {
        timers.push(
          window.setTimeout(() => {
            if (cancelled) {
              return;
            }
            confetti({
              particleCount: 1,
              startVelocity: 0,
              ticks: 500,
              origin: {
                x: Math.random(),
                y: Math.random() - 0.5,
              },
              colors: [color],
              shapes: ["square", "circle"],
              gravity: randomInRange(0.4, 0.6),
              scalar: randomInRange(0.4, 1),
              drift: randomInRange(-0.4, 0.4),
            });
          }, i * STAGGER_MS),
        );
      });

      // One particle per colour per cycle keeps the overall density unchanged.
      timers.push(window.setTimeout(cycle, CYCLE_MS));
    };

    cycle();

    return () => {
      cancelled = true;
      timers.forEach(clearTimeout);
    };
  });
</script>

<div></div>
