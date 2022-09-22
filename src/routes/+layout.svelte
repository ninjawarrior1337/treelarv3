<script lang="ts">
import TopNav from "../components/TopNav.svelte";
import BottomNav from "../components/BottomNav.svelte";
import Confetti from "../components/Confetti.svelte";
import Footer from "../components/Footer.svelte";
import "../styles.css"

export let data: (import("./$types").PageData)

$: confettiColor = data.idol?.color ? [data.idol?.color]: []

</script>

<template>
    <div class="min-h-screen overflow-x-hidden text-white bg-gray-900">
        <Confetti colors={confettiColor}></Confetti>
        <slot></slot>
        <BottomNav></BottomNav>
        <Footer></Footer>
    </div>
</template>

<style>
</style>