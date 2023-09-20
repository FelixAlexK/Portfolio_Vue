<script setup>
  import GitHubProject from '../components/GitHubSection.vue';
  import SkillLandingPage from '../components/SkillSection.vue';
  import AboutMeLandingPage from '../components/LandingSection.vue';
  import TheNavDots from '../components/TheNavDots.vue';
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

    <TheNavDots :sections="['landing', 'skill', 'github']"></TheNavDots>
  </div>
</template>
