<script setup>
import skills from '../data/skillData.json'
import Icon from '../components/TheIconloader.vue'


</script>


<template>
    <section class="flex justify-center items-center w-full bg-slate-800">
        <article class="flex flex-col items-start mt-36 w-11/12">
            <span
                class="flex bg-slate-900 text-white rounded-full py-1 px-4 tracking-widest uppercase align-middle whitespace-nowrap text-3xl font-medium">Skills</span>
            <div class="grid grid-cols-4 gap-8 py-12 w-full">
                <div v-for="skill in skills" :key="skill.id"
                    class="flex justify-around w-full bg-transparent rounded-lg border-b-4  shadow-2xl transition-all delay-150 ease-in-out hover:scale-95 focus:scale-95"
                    :style="{ borderColor: skill.color }">
                    <div class="flex flex-col p-4 relative">

                        <h3 class="m-0 p-0 transition-all delay-150 ease-in-out text-2xl text-white">{{ skill.name }}
                        </h3>
                        <p class="text-base m-0 p-0 transition-all delay-150 ease-in-out text-slate-50 my-2 opacity-70">{{
                            skill.category }}</p>
                    </div>
                    <Icon class="block w-8 h-auto fill-slate-50 opacity-30 hover:opacity-100" :name="skill.icon_path">
                    </Icon>
                </div>
            </div>


        </article>
    </section>
</template>


<style scoped></style>