<script>
    import { onMount } from "svelte";
    import {loginWithEth, isLoggedIn, shortSelectedAccount} from "$lib/web3"

    onMount(async () => {
        
    })
</script>

<div class="flex flex-col items-center justify-center pt-16 min-h-screen space-y-2">
    <h1 class="text-7xl font-bold">
        Open Letters
    </h1>
    <h1 class="text-4xl font-bold">
        This might never become a thing, but this will stay here.
    </h1>
</div>

<svelte:head>
    <title>Treelar - Journal</title>
</svelte:head>