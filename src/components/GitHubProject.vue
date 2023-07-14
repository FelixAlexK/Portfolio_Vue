<script setup>

import { ref, onMounted } from 'vue'
import Icon from '../components/TheIconloader.vue'

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


</script>

<template>
    <section class="flex justify-center w-full min-h-full">
        <article class="flex flex-col items-start py-8 w-11/12">
            <span
                class="flex dark:bg-primary-button bg-primary-button-light shadow-2xl dark:hover:shadow-primary-button hover:shadow-primary-button-light dark:text-text text-text-light rounded-full py-1 px-4 tracking-widest uppercase align-middle whitespace-nowrap text-xl lg:text-3xl font-medium font-inter">Github
            </span>

            <div class="grid grid-cols-3 gap-8  w-full py-6">
                <a class="flex flex-col justify-between w-full dark:bg-card bg-card-light shadow-xl rounded-lg transition-all ease-in-out hover:scale-95 focus:scale-95 focus-visible:outline-1 dark:outline-accent outline-accent-light "
                    v-for="project in githubProjects" :key="project.id" :href="project.html_url" :title="project.full_name"
                    target="_blank">


                    <div class="flex flex-col p-4">
                        <h3
                            class=" m-0 p-0 font-crimson transition-all ease-in-out text-base lg:text-lg 2xl:text-2xl dark:text-text text-text-light ">
                            {{
                                project.full_name }}
                        </h3>
                        <p
                            class="m-0 p-0 font-inter transition-all ease-in-out my-2 dark:text-text text-text-light text-sm lg:text-base 2xl:text-xl opacity-30">
                            {{
                                project.description }}</p>
                    </div>




                    <div class="flex flex-row border-t-2 border-gray-500 border-opacity-10 p-4 gap-8">


                        <div class="flex flex-row justify-start items-center gap-2  dark:text-text text-text-light text-xs">
                            <Icon class=" dark:fill-text fill-text-light block aspect-auto  w-3 h-auto" :name="'star'">
                            </Icon>
                            {{ project.stargazers_count }}
                        </div>
                        <div class="flex flex-row justify-start items-center  gap-2 text-xs dark:text-text text-text-light">
                            <Icon class=" dark:fill-text fill-text-light block aspect-auto  w-3 h-auto" :name="'fork'">
                            </Icon>
                            {{ project.forks_count }}
                        </div>
                        <div class="flex flex-row justify-start items-center gap-2 text-xs dark:text-text text-text-light">
                            <Icon class=" dark:fill-text fill-text-light block aspect-auto w-3 h-auto" :name="'eye'">
                            </Icon>
                            {{ project.watchers_count }}
                        </div>




                    </div>




                </a>
            </div>





        </article>
    </section>
</template>

<style scoped></style>
