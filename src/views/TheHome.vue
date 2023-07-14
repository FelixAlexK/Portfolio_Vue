<script setup>
//import GitHubProject from '../components/GitHubProject.vue';
import svgLoader from 'vite-svg-loader';
import GitHubProject from '../components/GitHubProject.vue';
import SkillLandingPage from '../components/MySkills.vue'
import AboutMeLandingPage from '../components/TheHomepage.vue';
</script>

<template>
    <div class="h-full overflow-hidden">
        <AboutMeLandingPage></AboutMeLandingPage>
        <div
            class="bg-gradient-to-t dark:from-secondary-button dark:to-background from-secondary-button-light to-background-light flex flex-col bg-no-repeat bg-cover">
            <SkillLandingPage></SkillLandingPage>
            <GitHubProject></GitHubProject>
        </div>
    </div>
</template>

