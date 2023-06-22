<script setup>
//import GitHubProject from '../components/GitHubProject.vue';
import GitHubProject from '../components/GitHubProject.vue';
import SkillLandingPage from '../components/MySkills.vue'
import AboutMeLandingPage from '../components/TheHomepage.vue';
</script>

<template>
    <div class="h-full overflow-hidden">
        <AboutMeLandingPage></AboutMeLandingPage>
        <div class="dark:bg-gradient-to-t dark:from-secondary-button dark:to-background bg-gradient-to-t from-secondary-button-light to-background-light flex flex-col bg-no-repeat bg-cover">
            <SkillLandingPage></SkillLandingPage>
            <GitHubProject></GitHubProject>
        </div>
    </div>
</template>

