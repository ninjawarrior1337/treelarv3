<script lang="ts">
import type { Character } from "mei";
import BottomNav from "../components/BottomNav.svelte";
import Confetti from "../components/Confetti.svelte";
import Footer from "../components/Footer.svelte";
import "../styles.css"

import {IdolStore} from "./store"

$: colors = $IdolStore?.color ? [$IdolStore?.color] : []

</script>

<template>
    <div class="min-h-screen overflow-x-hidden text-white bg-gray-900">
        <Confetti colors={colors}></Confetti>
        <slot></slot>
        <BottomNav></BottomNav>
        <Footer></Footer>
    </div>
</template>

<style>
</style>