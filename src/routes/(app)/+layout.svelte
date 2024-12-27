<script lang="ts">
    import BottomNav from "@/components/BottomNav.svelte";
    import Confetti from "@/components/Confetti.svelte";
    import Footer from "@/components/Footer.svelte";
    import "../../styles.css"

    import {useIdolStore} from "../store.svelte"
        interface Props {
        children?: import('svelte').Snippet;
    }

    let idolData = useIdolStore()

    let { children }: Props = $props();

    let colors = $derived(idolData.data?.color ? [idolData.data?.color] : [])

</script>

<template>
    <div class="min-h-screen overflow-x-hidden text-white bg-gray-900">
        <Confetti colors={colors}></Confetti>
        {@render children?.()}
        <BottomNav></BottomNav>
        <Footer></Footer>
    </div>
</template>

<style>
</style>