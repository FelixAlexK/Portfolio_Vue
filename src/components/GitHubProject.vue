<script setup>

import { ref, onMounted, defineAsyncComponent } from 'vue'


const githubUser = "FelixAlexK"
const API_URL = `https://api.github.com/users/${githubUser}/repos?sort=pushed`
const githubProjects = ref([])

onMounted(() => {
    fetch(API_URL, {
        headers: {
            accept: "application/vnd.github+json",
        }
    }).then((response) => response.json())
        .then((data) => githubProjects.value = data)
        .catch((error) => console.log(error.message))
})

const starIcon = defineAsyncComponent(() =>
    import('../assets/icons/github_icons/star_icon.svg')
)

const forkIcon = defineAsyncComponent(() =>
    import('../assets/icons/github_icons/fork_icon.svg')
)

const wazcherIcon = defineAsyncComponent(() =>
    import('../assets/icons/github_icons/eye_icon.svg')
)


</script>

<template>
    <section class="flex justify-center items-center w-full min-h-full">
        <article class="flex flex-col items-start mt-36 w-11/12">
            <span
                class="flex bg-primary-button shadow-2xl hover:shadow-primary-button  text-text rounded-full py-1 px-4 tracking-widest uppercase align-middle whitespace-nowrap text-3xl font-medium">Projekte</span>
            <div class="grid grid-cols-4 gap-8 py-12 w-full">
                <a class="flex flex-col justify-between w-full bg-secondary-button-500 shadow-xl rounded-lg transition-all ease-in-out hover:scale-95 focus:scale-95 focus-visible:outline-1 outline-accent "
                    v-for="project in githubProjects" :key="project.id" :href="project.html_url" :title="project.full_name"
                    target="_blank">
                    <div class="flex flex-col p-4">
                        <h3 class="p-0 m-0 transition-all ease-in-out text-2xl text-text pr-2">{{ project.full_name }}
                        </h3>
                        <p class="p-0 m-0 transition-all ease-in-out text-text my-2 text-xl opacity-30">{{
                            project.description }}</p>
                    </div>

                    <div class="flex flex-row w-full border-t border-opacity-10 border-text p-4 gap-8">
                        <div class="flex flex-row justify-start items-center gap-2 text-xl text-text">
                            <component class="block max-w-full w-4 h-auto" :is='starIcon'></component>
                            {{ project.stargazers_count }}
                        </div>
                        <div class="flex flex-row justify-start items-center gap-2 text-xl text-text">
                            <component class="block max-w-full w-4 h-auto" :is='forkIcon'></component>
                            {{ project.forks_count }}
                        </div>
                        <div class="flex flex-row justify-start items-center gap-2 text-xl text-text">
                            <component class="block max-w-full w-4 h-auto" :is='wazcherIcon'></component>
                            {{ project.watchers_count }}
                        </div>
                    </div>
                </a>
            </div>
        </article>
    </section>
</template>

<style scoped></style>
