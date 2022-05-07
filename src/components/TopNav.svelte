<script>
    import {confettiActive} from "$lib/useConfetti"
    import { isLoggedIn, shortSelectedAccount, logout } from "$lib/web3";
</script>

<div class="fixed hidden lg:block z-10 w-full bg-gray-900 mb-8 text-white">
    <div class="w-full h-16 grid grid-cols-12 justify-items-center items-center">
        <div class="h-16 p-3 mr-12 col-span-3">
            <a sveltekit:prefetch href="/">
                <img class="h-full object-contain" alt="logo" src="/logo/logoamphibia.png">
            </a>
        </div>
        <div class="h-full flex space-x-12 col-span-6">
            <a
                sveltekit:prefetch
                href="/"
                class="grid place-items-center text-gray-200 text-white lg:text-lg text-xl bg-gray-800 px-2"
            >
                Home
            </a>
            <a
                sveltekit:prefetch
                href="/projects"
                class="grid place-items-center text-white lg:text-lg text-xl bg-gray-800 px-2"
            >
                Projects
            </a>
            <a
                target="_blank"
                href="https://anilist.co/user/Treelar"
                class="grid place-items-center text-white lg:text-lg text-xl bg-gray-800 px-2"
            >
                Anime
            </a>
            {#if $isLoggedIn}
            <a
                sveltekit:prefetch
                href="/journal"
                class="grid place-items-center text-white lg:text-lg text-xl bg-gray-800 px-2"
            >
                Open Letters
            </a>
            {/if}
        </div>
        <div class="col-span-3 flex flex-row items-center space-x-3">
            {#if $confettiActive}
            <button
                class="truncate grid place-items-center bg-blue-500 p-2 rounded-lg"
                on:click={() => {$confettiActive = false}}
            >
                Turn Off Confetti
            </button>
            {/if}
            {#if $isLoggedIn}
            <h3 class="text-xl font-semibold text-gradient-treelar cursor-pointer" on:click={logout}>{$shortSelectedAccount}</h3>
            {/if}
        </div>
    </div>
    <div class="bg-gradient-to-r from-muse via-treelar to-treelar h-1"></div>
</div>
<div class="lg:h-8"></div>