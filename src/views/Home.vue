<script setup>
import GitHubProject from '../components/GitHubProject.vue';
import AboutMeLandingPage from '../components/AboutMeLandingPage.vue';
import SkillLandingPage from '../components/SkillLandingPage.vue'
</script>

<template>
    <div class="home">

        <AboutMeLandingPage></AboutMeLandingPage>
        <div class="main-content-container">
            <SkillLandingPage></SkillLandingPage>
            <GitHubProject></GitHubProject>
        </div>
        <div class="footer">Footer</div>
    </div>
</template>

