<script lang="ts">
    import {faBrain, faHeart} from "@fortawesome/free-solid-svg-icons"
    import {page} from "$app/stores"
    import Fa from "svelte-fa"

    const computeIcon = (path: string) => {
        if(path.includes("projects")) {
            return faBrain
        } else {
            return faHeart
        }
    }
    
    $: currentIcon = computeIcon($page.path)
</script>

<div class="bg-gradient-to-r from-muse via-treelar to-treelar h-1"></div>
<div class="py-4 text-center w-full text-xl">
    <div>
        Made with
        <Fa icon={currentIcon} class="text-muse"></Fa>
        by
        <span class="bg-gradient-to-br from-muse via-treelar to-treelar bg-clip-text text-transparent">Treelar</span>
    </div>
</div>