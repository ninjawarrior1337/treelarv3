<script lang="ts">
    import { onMount } from "svelte";
    import Logo from "../components/Logo.svelte";
    import FaMusic from "~icons/fa/music"

    import {useIdolStore} from "./store.svelte"
    import { trpc } from "../trpc";

    const colorTable: {[k: string]: [string, string]} = {
        Vue: ["#41B883", "https://vuejs.org"],
        React: ["#00d8ff", "https://reactjs.org/"],
        ラブライバー: [
            "#e4007f",
            "https://love-live.fandom.com/wiki/Main_Page",
        ],
        Kotlin: ["#F88909", "https://kotlinlang.org/"],
        Golang: ["#00ADD8", "https://golang.org/"],
        Svelte: ["#ff3e00", "https://svelte.dev"],
        ETH: ["#8c92b2", "https://ethereum.org/"],
        IPFS: ["#69c4cd", "https://ipfs.io/"],
        Arch: ["#1793D1", "https://archlinux.org"],
        NixOS: ["#7EBAE4", "https://nixos.org"],
        Fedora: ["#3c6eb4", "https://fedoraproject.org"],
        本: ["#ff0000", ""],
        TOH: ["#AF6F2C","https://theowlhouse.fandom.com"],
        Amphibia: ["#11A77D", "https://amphibia.fandom.com/wiki/Amphibia_Wiki"],
        software: ["#3399ff", "/projects"]
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

    const idolData = useIdolStore()
</script>

<svelte:head>
    <title>Treelar</title>
</svelte:head>

<div class="flex flex-col lg:flex-row items-center justify-center md:grid-cols-2 min-h-screen">
    <Logo/>
    <div class="mx-16 space-y-2">
        <h1 class="text-4xl lg:text-6xl mb-4 pb-4">
            <span>Hi, I'm</span>
            <span class="text-gradient-treelar cursor-pointer">Treelar</span>
        </h1>
        <div class="text-2xl lg:text-4xl space-y-2">
            <h2>
                I write software
            </h2>
            <h2>
                {@html colorText("日本語勉強中")}
            </h2>
            <h2>
                {@html colorText("Svelte / React / Vue")}
            </h2>
            <h2>
                {@html colorText("I use Arch / macOS / NixOS")}
            </h2>
        </div>
        

        {#if idolData.data}
        <h2 class="text-2xl md:text-4xl pb-4 truncate" style="color: {idolData.data.color}">
            Happy Birthday {idolData.data.name}!
        </h2>
        {/if}
    </div>
</div>
