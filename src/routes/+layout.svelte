<script lang="ts">
    import BottomNav from "../components/BottomNav.svelte";
    import Confetti from "../components/Confetti.svelte";
    import Footer from "../components/Footer.svelte";
    import "../styles.css";

    interface Props {
        children?: import("svelte").Snippet;
        data: import("./$types").LayoutData;
    }

    let { children, data }: Props = $props();
</script>

<template>
    <div class="min-h-svh overflow-x-hidden text-white bg-gray-900">
        {#await data.birthdays then idols}
            <Confetti colors={idols.map((i) => i.color)}></Confetti>
        {/await}
        {@render children?.()}
        <BottomNav></BottomNav>
        <Footer></Footer>
    </div>
</template>

<style>
</style>
