<template>
    <div class="bg-gray-900 min-h-screen w-full py-8 flex flex-col">
        <h1 class="text-center font-bold text-5xl py-3 px-8 mb-12 bg-gray-700 rounded-full self-center">Projects</h1>
        <div class="grid gap-y-16 lg:grid-cols-2 items-center justify-items-center">
            {#each projects as project}
                <ProjectCard project={project}></ProjectCard>
            {/each}
        </div>
    </div>
</template>

<script lang="ts">
import ProjectCard from "../../components/ProjectCard.svelte";
import projects from "../../assets/projects.json"
</script>

<svelte:head>
    <title>Treelar - Projects</title>
</svelte:head>