<script lang="ts">
    import Logo3D from "../components/Logo3D.svelte";
    import {currentBirthdayIdol} from "$lib/useLoveLive"
    import { chainId, loginWithEth, selectedAccount } from "$lib/web3";
    import { browser } from "$app/env";

    const colorTable = {
        Vue: ["#41B883", "https://vuejs.org"],
        React: ["#00d8ff", "https://reactjs.org/"],
        ラブライブ: [
            "#e4007f",
            "https://love-live.fandom.com/wiki/Main_Page",
        ],
        Kotlin: ["#F88909", "https://kotlinlang.org/"],
        Golang: ["#00ADD8", "https://golang.org/"],
        Svelte: ["#ff3e00", "https://svelte.dev"],
        ETH: ["#8c92b2", "https://ethereum.org/"],
        IPFS: ["#69c4cd", "https://ipfs.io/"],
        Arch: ["#1793D1", "https://archlinux.org"],
        本: ["#ff0000", ""],
        TOH: ["#AF6F2C", "https://theowlhouse.fandom.com"],
        Amphibia: ["#11A77D", "https://amphibia.fandom.com/wiki/Amphibia_Wiki"]
    };
    const colorText = (input: String): String => {
        var finalStr = input;
        for (var [key, [color, link]] of Object.entries(colorTable)) {
            if (input.includes(key)) {
                finalStr = finalStr.replace(
                    key,
                    `<a rel="noopener noreferrer" style="color: ${color}" href="${link}" target="_blank">${key}</a>`
                );
            }
        }
        return finalStr;
    };
</script>

<svelte:head>
    <title>Treelar</title>
</svelte:head>

<div class="flex flex-col lg:flex-row items-center justify-center md:grid-cols-2 min-h-screen">
    <Logo3D></Logo3D>
    <div class="mx-16 space-y-2">
        {#if browser}
            <h1 class="text-4xl md:text-6xl mb-4 pb-4">
                <span>Hi,</span>
                {#if $selectedAccount !== "0x13bf47aeff3e7496097670eb4849f9311ffad865"}
                <span>I'm</span>
                {/if}
                <span on:click={loginWithEth} class="text-gradient-treelar cursor-pointer">Treelar</span>
            </h1>
        {/if}
        <h2 class="text-3xl md:text-4xl">{@html colorText("日本語勉強中")}</h2>
        <h2 class="text-3xl md:text-4xl">
            {@html colorText("Svelte / Vue over React")}
        </h2>
        <h2 class="text-3xl md:text-4xl">{@html colorText("Amphibia / TOH / ラブライブ")}</h2>
        <h2 class="text-3xl md:text-4xl">
            {@html colorText("I use Arch btw")}
        </h2>

        {#if $currentBirthdayIdol}
        <h2 id="idolBirthday" class="text-2xl md:text-4xl mt-8 truncate" style="--idol-color: {$currentBirthdayIdol?.color}">
            Happy Birthday {$currentBirthdayIdol?.name}!
        </h2>
        {/if}
    </div>
</div>

<style>
    #idolBirthday {
        color: var(--idol-color);
    }
</style>
