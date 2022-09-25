<script lang="ts">
import {marked} from "marked"

export let project: {
    title?: string;
    description?: string;
    img?: string;
    links?: string[];
} = {}

$: descriptionMd = marked(project.description||"")
</script>

<div class="w-10/12 mx-auto p-8 my-16 shadow-xl bg-gray-800 rounded-sm">
    <div class="flex flex-col lg:flex-row mb-4">
        {#if project.img}
            <img
                src={project.img}
                class="w-32 px-2 mx-auto pb-4 object-contain lg:order-last"
                alt={project.title+' logo'}
            >
        {/if}
        <div>
            <h1 class="text-4xl underline mb-4">{project.title}</h1>
            <div class="text-2xl">{@html descriptionMd}</div>
        </div>
        <div class="flex-grow"></div>
    </div>
    <div
        class="flex items-center justify-end h-full mt-4 border-t-4 border-blue-500"
    >
        {#each project.links || [] as link}    
            <a
                class="text-2xl font-bold mx-2 mt-4 underline"
                href={link.split('=')[1]}
                rel="noopener"
                target="_blank"
            >{link.split("=")[0]}</a>
        {/each}
    </div>
</div>