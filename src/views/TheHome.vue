<script setup>
//import GitHubProject from '../components/GitHubProject.vue';
import GitHubProject from '../components/GitHubProject.vue';
import SkillLandingPage from '../components/MySkills.vue'
import AboutMeLandingPage from '../components/TheHomepage.vue';
</script>

<template>
    <div class="h-full">
        <AboutMeLandingPage></AboutMeLandingPage>
        <div class="bg-gradient-to-t from-secondary-button to-background flex flex-col bg-no-repeat bg-cover">
            <SkillLandingPage></SkillLandingPage>
            <GitHubProject></GitHubProject>
        </div>
    </div>
</template>

