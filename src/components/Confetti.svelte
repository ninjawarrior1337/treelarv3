<script lang="ts">
    import confetti from "canvas-confetti"
    import { confettiActive, confettiColor } from "$lib/useConfetti";
    import { onDestroy, onMount } from "svelte";
    import {browser} from "$app/environment"
    import { currentBirthdayIdol } from "$lib/useLoveLive";

    const randomInRange = (min: number, max: number) => {
        return Math.random() * (max - min) + min;
    }

    $: {
        if($currentBirthdayIdol) {
            $confettiActive = true
            $confettiColor = $currentBirthdayIdol.color
        }
    }

    let animFrameId = 0
    
    const animate = () => {
        if(browser) {
            animFrameId = requestAnimationFrame(animate)
            confetti({
                particleCount: 1,
                startVelocity: 0,
                ticks: 500,
                origin: {
                    x: Math.random(),
                    y: Math.random() - 0.5
                },
                colors: [$confettiColor],
                shapes: ["square", "circle"],
                gravity: randomInRange(0.4, 0.6),
                scalar: randomInRange(0.4, 1),
                drift: randomInRange(-0.4, 0.4)
            })
        }
    }

    const start = () => {
        if(browser) {
            animate()
        }
    }

    const stop = () => {
        if(browser) {
            cancelAnimationFrame(animFrameId)
        }
    }

    $: {
        $confettiActive ? start() : stop()
    }

    $: {
        $confettiColor
        if($confettiActive) {
            stop()
            start()
        }
    }

    onDestroy(() => {
        stop()
    })
</script>

<div></div>