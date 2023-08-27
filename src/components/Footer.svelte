<script lang="ts">
    import faBrain from "~icons/fa-solid/brain"
    import faHeart from "~icons/fa/heart"
    import ethLogo from "~icons/fa6-brands/ethereum"
    import GithubLogo from "~icons/fa6-brands/github"
    import TwitterLogo from "~icons/fa6-brands/x-twitter"
    import MastodonLogo from "~icons/fa6-brands/mastodon"
    import {page} from "$app/stores"

    const computeIcon = (path: string) => {
        if(path.includes("projects")) {
            return faBrain
        }
        else if(path.includes("journal")) {
            return ethLogo
        }
        else {
            return faHeart
        }
    }
    
    $: currentIcon = computeIcon($page.url.pathname)
</script>

<div class="bg-gradient-to-r from-muse via-treelar to-treelar h-1"></div>
<div class="py-4 text-center w-full text-xl">
    <div class="flex items-center justify-center space-x-1">
        <span>Made with</span>
        <svelte:component class="text-muse" this={currentIcon}></svelte:component>
        <span>by</span>
        <span class="text-gradient-treelar">Treelar</span>
    </div>
    <div class="space-x-4 py-2 text-2xl flex items-center justify-center">
        <a rel="prefetch noreferrer" target="_blank" href="https://github.com/ninjawarrior1337">
            <GithubLogo></GithubLogo>
        </a>
        <a rel="prefetch noreferrer" target="_blank" href="https://twitter.com/TYNROH">
            <TwitterLogo class="text-gray-800"></TwitterLogo>
        </a>
        <a rel="me" href="https://mastodon.social/@treelar" target="_blank">
            <MastodonLogo></MastodonLogo>
        </a>
    </div>
</div>