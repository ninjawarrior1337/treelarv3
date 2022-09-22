<script lang="ts">
    import { onMount } from "svelte";

    let Logo3D

    export let data: (import("./$types").PageData)

    onMount(async () => {
        Logo3D = (await import("../components/Logo3D.svelte")).default
    })

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
    {#if Logo3D}
        <svelte:component this={Logo3D}></svelte:component>
    {:else}
        <div class="lg:order-last w-[450px]"></div>
    {/if}
    <div class="mx-16 space-y-2">
        <h1 class="text-4xl md:text-6xl mb-4 pb-4">
            <span>Hi, I'm</span>
            <span class="text-gradient-treelar cursor-pointer">Treelar</span>
        </h1>
        <h2 class="text-3xl md:text-4xl">{@html colorText("日本語勉強中")}</h2>
        <h2 class="text-3xl md:text-4xl">
            {@html colorText("Svelte / Vue over React")}
        </h2>
        <h2 class="text-3xl md:text-4xl">{@html colorText("ラブライブ / TOH / Amphibia")}</h2>
        <h2 class="text-3xl md:text-4xl">
            {@html colorText("I use Arch btw")}
        </h2>

        {#if data.idol}
        <h2 class="text-2xl md:text-4xl pb-4 truncate" style="color: {data.idol.color}">
            Happy Birthday {data.idol.name}!
        </h2>
        {/if}
    </div>
</div>
