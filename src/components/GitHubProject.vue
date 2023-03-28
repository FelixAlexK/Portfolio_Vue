<script setup>

import { ref, watchEffect } from 'vue'


const API_URL = `https://api.github.com/users/FelixAlexK/repos`
const githubProjects = ref(null)

watchEffect(async () => {
    // this effect will run immediately and then
    // re-run whenever currentBranch.value changes

    githubProjects.value = await (await fetch(API_URL)).json()
})

</script>

<template>
    <a class="github-project" v-for="project in githubProjects" :key="project.id" :href="project.html_url"
        :title="project.full_name" target="_blank">
        <div class="github-project-details">
            <h3>{{ project.full_name }}</h3>
            <p>{{ project.description }}</p>
        </div>
    </a>
</template>
