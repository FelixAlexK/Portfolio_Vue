<script setup>
import skills from '../data/skillData.json'
import Icon from '../components/TheIconloader.vue'


</script>


<template>
    <section class="flex justify-center w-full min-h-full">
        <article class="flex flex-col items-start py-8 w-11/12">
            <span
                class="flex dark:bg-primary-button bg-primary-button-light shadow-2xl dark:hover:shadow-primary-button hover:shadow-primary-button-light dark:text-text text-text-light rounded-full py-1 px-4 tracking-widest uppercase align-middle whitespace-nowrap text-xl font-medium">Skills</span>
            <div class="grid grid-cols-2 gap-8 py-6">
                <div v-for="skill in skills" :key="skill.id"
                    class="w-full dark:bg-card bg-card-light rounded-lg border-b-4  shadow-2xl transition-all delay-150 ease-in-out hover:scale-95 focus:scale-95 "
                    :style="{ borderColor: skill.color }">
                    <div class="row-auto col-auto ">

                        <div class="flex items-end justify-end m-2">
                            <Icon class="block w-8 h-auto dark:fill-text fill-text-light opacity-30 hover:opacity-100" :name="skill.icon_path">
                            </Icon>
                        </div>
                        <div class="p-4">
                            <h3 class=" transition-all delay-150 ease-in-out text-base dark:text-text text-text-light">{{ skill.name }}
                            </h3>
                            <p class="text-sm transition-all delay-150 ease-in-out dark:text-text text-text-light opacity-70">{{
                                skill.category }}</p>
                        </div>


                    </div>
                </div>
            </div>


        </article>
    </section>
</template>


<style scoped></style>