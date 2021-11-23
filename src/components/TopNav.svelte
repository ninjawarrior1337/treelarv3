<script>
    import {confettiActive} from "$lib/useConfetti"
</script>


<div class="fixed hidden lg:block z-10 w-full bg-gray-900 mb-8 text-white">
    <div class="w-full h-16 grid grid-cols-12 justify-items-center">
        <div class="h-16 p-3 mr-12 col-span-3">
            <a href="/">
                <img class="h-full object-contain" alt="logo" src="/logo/logo2020.png">
            </a>
        </div>
        <div class="h-full flex space-x-12 col-span-6">
            <a
                href="/"
                class="grid place-items-center text-gray-200 text-white lg:text-lg text-xl bg-gray-800 px-2"
            >
                Home
            </a>
            <a
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
        </div>
        <div class="col-span-3">
            {#if $confettiActive}
            <button
                class="h-full truncate grid place-items-center"
                on:click={() => {$confettiActive = false}}
            >
                Turn Off Confetti
            </button>
            {/if}
        </div>
    </div>
    <div class="bg-gradient-to-r from-muse via-treelar to-treelar h-1"></div>
</div>
<div class="lg:h-8"></div>