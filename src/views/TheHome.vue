<script setup>
import GitHubProject from '../components/GitHubSection.vue';
import SkillLandingPage from '../components/SkillSection.vue'
import AboutMeLandingPage from '../components/LandingSection.vue';
import Icon from '../components/TheIconloader.vue'
</script>

<template>
    <div class="flex h-full overflow-hidden">
        <div>
            <AboutMeLandingPage></AboutMeLandingPage>
            <div
                class="bg-gradient-to-t dark:from-secondary-button dark:to-background from-secondary-button-light to-background-light flex flex-col bg-no-repeat bg-cover">
                <SkillLandingPage></SkillLandingPage>
                <GitHubProject></GitHubProject>
            </div>
        </div>

        <div class="fixed right-0 top-1/2 -translate-y-1/2 z-10 grid mr-5 invisible lg:visible">
            <a href="#landing" v-smooth-scroll>
                <Icon :name="'dot'" class="block w-14 aspect-auto h-auto dark:fill-accent fill-accent-light "></Icon>
            </a>
            <a href="#skill" v-smooth-scroll>
                <Icon :name="'dot'" class="block w-14 aspect-auto h-auto dark:fill-accent fill-accent-light "></Icon>
            </a>
            <a href="#github" v-smooth-scroll>
                <Icon :name="'dot'" class="block w-14 aspect-auto h-auto dark:fill-accent fill-accent-light "></Icon>
            </a>
        </div>
    </div>
</template>

