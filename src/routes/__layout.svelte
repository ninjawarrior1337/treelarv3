<script>
import TopNav from "../components/TopNav.svelte";
import BottomNav from "../components/BottomNav.svelte";
import "virtual:windi.css"
import Confetti from "../components/Confetti.svelte";
import Footer from "../components/Footer.svelte";
</script>

<template>
    <div class="min-h-screen overflow-x-hidden text-white bg-gray-900">
        <Confetti></Confetti>
        <TopNav></TopNav>
        <slot></slot>
        <BottomNav></BottomNav>
        <Footer></Footer>
    </div>
</template>

<style>
</style>