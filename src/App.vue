<script setup>
  import TheNavigation from './components/TheNavigation.vue';
  import TheFooter from './components/TheFooter.vue';
  import { switchModes } from './scripts/darkmode';

  switchModes();
</script>

<template>
  <TheNavigation></TheNavigation>
  <div>
    <router-view></router-view>
  </div>
  <TheFooter></TheFooter>
</template>
