<script setup>
import GitHubProject from '../components/GitHubProject.vue';
import AboutMeLandingPage from '../components/Homepage.vue';
import SkillLandingPage from '../components/MySkills.vue'
</script>

<template>
    <div class="home">

        <AboutMeLandingPage></AboutMeLandingPage>
        <div class="main-content-container">
            <SkillLandingPage></SkillLandingPage>
            <GitHubProject></GitHubProject>
        </div>
    </div>
</template>

