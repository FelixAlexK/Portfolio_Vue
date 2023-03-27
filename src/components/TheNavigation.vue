<script setup>

import { ref } from 'vue';

const logoText = ref('FK')


</script>


<template>
    <div id="nav">
        <div id="logo">

            <router-link to="/">
                <h1>{{ logoText }}</h1>
            </router-link>

        </div>
        <div id="nav-items">
            <router-link to="/">Home</router-link>
            <router-link to="/about">About</router-link>
            <router-link to="/contact">Contact</router-link>
        </div>


    </div>
</template>