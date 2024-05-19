<script lang="ts">
import {marked} from "marked"

export let project: {
    title?: string;
    description?: string;
    img?: string;
    logoChar?: string
    links?: string[];
} = {}

$: descriptionMd = marked(project.description||"")
</script>

<div class="h-full w-11/12 flex flex-col justify-around p-8 shadow-2xl bg-gradient-to-tr backdrop-blur-xl from-gray-700 to-gray-800 rounded-lg">
    <div class="flex flex-col lg:flex-row mb-4">
        {#if project.img}
            <img
                src={project.img}
                class="w-40 p-4 mx-auto object-contain lg:order-last drop-shadow-xl aspect-square"
                alt={project.title+' logo'}
            >
        {:else if project.logoChar}
            <span class="w-40 p-4 mx-auto h-min lg:order-last text-9xl bg-clip-text text-transparent bg-gradient-to-tr from-muse from-20% to-60% to-treelar">{project.logoChar}</span>
        {/if}
        <div>
            <h1 class="text-4xl underline mb-4">{project.title}</h1>
            <div class="text-2xl">{@html descriptionMd}</div>
        </div>
        <div class="flex-grow"></div>
    </div>
    <div
        class="flex items-center justify-end mt-4 border-t-4 border-blue-500"
    >
        {#each project.links || [] as link}    
            <a
                class="text-2xl font-bold mx-2 mt-4 underline"
                href={link.split('=')[1]}
                rel="noopener noreferrer"
                target="_blank"
            >{link.split("=")[0]}</a>
        {/each}
    </div>
</div>