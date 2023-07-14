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
    <section class="flex justify-center w-full min-h-full">
        <article class="flex flex-col items-start py-8 w-11/12">
            <span
                class="flex dark:bg-primary-button bg-primary-button-light shadow-2xl dark:hover:shadow-primary-button hover:shadow-primary-button-light dark:text-text text-text-light rounded-full py-1 px-4 tracking-widest uppercase align-middle whitespace-nowrap text-xl lg:text-3xl font-medium font-inter">Github
            </span>
            <div class="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-4 gap-8 py-6">
                <a class="  dark:bg-card bg-card-light shadow-xl rounded-lg transition-all ease-in-out hover:scale-95 focus:scale-95 focus-visible:outline-1 dark:outline-accent outline-accent-light"
                    v-for="project in githubProjects" :key="project.id" :href="project.html_url" :title="project.full_name"
                    target="_blank">
                    <div class="row-auto col-auto p-4">

                        <h3
                            class=" font-crimson transition-all ease-in-out text-base lg:text-lg 2xl:text-2xl dark:text-text text-text-light ">
                            {{
                                project.full_name }}
                        </h3>
                        <p
                            class="transition-all ease-in-out font-inter dark:text-text text-text-light text-sm lg:text-base 2xl:text-xl opacity-30">
                            {{
                                project.description }}</p>


                        <div
                            class="flex w-full border-t border-opacity-10 dark:border-text border-text-light gap-8 mt-4 py-4">
                            <div
                                class="flex flex-row  items-baseline gap-2 text-base dark:text-text text-text-light">
                                <component class=" dark:fill-text fill-text-light block  w-4 h-auto" :is='starIcon'>
                                </component>
                                {{ project.stargazers_count }}
                            </div>
                            <div
                                class="flex flex-row  items-baseline gap-2 text-base dark:text-text text-text-light">
                                <component class=" dark:fill-text fill-text-light block  w-4 h-auto" :is='forkIcon'>
                                </component>
                                {{ project.forks_count }}
                            </div>
                            <div
                                class="flex flex-row  items-baseline gap-2 text-base dark:text-text text-text-light">
                                <component class=" dark:fill-text fill-text-light block w-4 h-auto" :is='wazcherIcon'>
                                </component>
                                {{ project.watchers_count }}
                            </div>
                        </div>
                    </div>

                </a>
            </div>
        </article>
    </section>
</template>

<style scoped></style>
