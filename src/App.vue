<script setup>
import TheNavigation from './components/TheNavigation.vue'
import TheFooter from './components/TheFooter.vue';
</script>

<template>
  <TheNavigation></TheNavigation>
  <div class="container">
    <router-view></router-view>
  </div>
  <TheFooter></TheFooter>
</template>

<style scoped>

</style>
