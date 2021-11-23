<script lang="ts">
    import {faBrain, faHeart} from "@fortawesome/free-solid-svg-icons"
    import {faGithub, faTwitter} from "@fortawesome/free-brands-svg-icons"
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
    <div class="space-x-2">
        <a rel="prefetch" target="_blank" href="https://github.com/ninjawarrior1337">
            <Fa icon={faGithub} size="1x"></Fa>
        </a>
        <a rel="prefetch" target="_blank" href="https://twitter.com/TYNROH">
            <Fa icon={faTwitter} class="text-blue-400" size="1x"></Fa>
        </a>
    </div>
</div>