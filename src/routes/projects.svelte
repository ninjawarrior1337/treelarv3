<template>
    <div class="bg-gray-900 min-h-screen w-full">
        {#each projects as project}
            <ProjectCard project={project}></ProjectCard>
        {/each}
    </div>
</template>

<script lang="ts">
import ProjectCard from "../components/ProjectCard.svelte";
import projects from "../assets/projects.json"
</script>

<svelte:head>
    <title>Treelar - Projects</title>
</svelte:head>