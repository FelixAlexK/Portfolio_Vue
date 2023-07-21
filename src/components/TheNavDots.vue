<script setup>
import Icon from '../components/TheIconloader.vue'

const props = defineProps({
    sections: Array,

})
</script>


<template>
    <div class="fixed right-0 top-1/2 -translate-y-1/2 z-10 grid invisible lg:visible">
        <a :href="'#' + section" v-smooth-scroll v-for="(section, index) in props.sections" :key="index">
            <Icon :name="'dot'" class="block w-14 aspect-auto h-auto dark:fill-accent fill-accent-light "></Icon>
        </a>

    </div>
</template>