<script lang="ts">
    import {faBrain, faHeart} from "@fortawesome/free-solid-svg-icons"
    import {faEthereum, faGithub, faTwitter} from "@fortawesome/free-brands-svg-icons"
    import {page} from "$app/stores"
    import Fa from "svelte-fa"

    const computeIcon = (path: string) => {
        if(path.includes("projects")) {
            return faBrain
        }
        else if(path.includes("journal")) {
            return faEthereum
        }
        else {
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
        <span class="text-gradient-treelar">Treelar</span>
    </div>
    <div class="space-x-2 py-2 text-2xl">
        <a rel="prefetch" target="_blank" href="https://github.com/ninjawarrior1337">
            <Fa icon={faGithub}></Fa>
        </a>
        <a rel="prefetch" target="_blank" href="https://twitter.com/TYNROH">
            <Fa icon={faTwitter} class="text-blue-400"></Fa>
        </a>
    </div>
</div>