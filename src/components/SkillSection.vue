<script setup>
import skills from '../data/skillData.json'
import Icon from '../components/TheIconloader.vue'


</script>


<template>
    <section class="flex justify-center w-full min-h-full" id="skill">
        <article class="flex flex-col items-start py-8  w-11/12" id="skill-article">
            <span
                class="flex dark:bg-primary-button bg-primary-button-light shadow-2xl dark:hover:shadow-primary-button hover:shadow-primary-button-light 
                dark:text-text text-text-light rounded-full py-1 px-4 tracking-widest uppercase align-middle whitespace-nowrap text-xl lg:text-3xl font-medium font-inter">Skills</span>
            <div class="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-8 py-6 w-full">
                <div v-for="skill in skills" :key="skill.id"
                    class="max-w-2xl dark:bg-card bg-card-light rounded-lg border-b-4 shadow-2xl  transition-all ease-in-out hover:scale-95 focus:scale-95"
                    :style="{ borderColor: skill.color }">

                    <div class="flex flex-row-reverse justify-between items-center m-6">
                        <div class="flex">
                            <Icon class="block w-12 lg:w-14 aspect-auto h-auto dark:fill-text fill-text-light "
                                :name="skill.icon_path">
                            </Icon>
                        </div>
                        <div>
                            <h3
                                class="transition-all ease-in-out text-base lg:text-lg 2xl:text-2xl dark:text-text text-text-light font-crimson">
                                {{ skill.name }}
                            </h3>
                            <p
                                class="text-sm lg:text-base 2xl:text-xl transition-all ease-in-out dark:text-text text-text-light opacity-70 font-inter">
                                {{ skill.category }}</p>
                        </div>

                    </div>

                    <div class="m-6">
                        <details class="group">
                            <summary class="flex justify-end items-center font-medium cursor-pointer list-none">
                                <span class="transition group-open:rotate-180 ">
                                    <Icon class=" block w-6 aspect-auto h-auto dark:fill-text fill-text-light rotate-90"
                                        :name="'arrow'"></Icon>
                                </span>
                            </summary>
                            <div class="w-full mt-8  bg-gray-200 rounded-full dark:bg-gray-700">
                                <div class=" flex justify-center h-6 rounded-full text-text font-inter"
                                    :style="{ width: skill.rate + '%', backgroundColor: skill.color }">
                                    {{ skill.rate }}%
                                </div>
                            </div>

                        </details>
                    </div>

                </div>
            </div>


        </article>
    </section>
</template>


<style scoped></style>