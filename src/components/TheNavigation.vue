<script setup>

import { ref } from 'vue';

const logoText = ref('FK');



</script>


<template>
    <div id="nav">
        <div id="logo">

            <router-link to="/">
                <h1>{{ logoText }}</h1>
            </router-link>

        </div>
        <div id="nav-items">
            <router-link to="/">Startseite</router-link>
            <router-link to="/about">Über mich</router-link>
        </div>


    </div>
</template>

<style scoped>
#nav {
    position: fixed;
    width: 100%;
    height: var(--header-height);
    background: var(--nav-background);
    color: var(--text-color-primary);
    display: flex;
    align-items: center;
    justify-content: space-between;
    z-index: 2;
    box-shadow: rgba(0, 0, 0, 0.45) 0px 25px 20px -20px;
    padding: 2rem;
}


#nav-items a {
    font-size: 2vh;
    display: inline-block;
    margin: 0 20px;
    color: white;
    opacity: 0.7;
    transition: 0.2s ease color;
}

#nav-items a:hover:not(.router-link-active) {
    opacity: 1;
    color: var(--second);
    transition: all 0.2s ease-in-out;
}

#nav-items a.router-link-active {
    border-bottom: var(--second) solid 6px;
    opacity: 1;
    transition: all 0.2s ease-in-out;
}

#logo h1 {
    color: var(--text-color-primary);
    font-family: var(--lato-font);
    font-size: 4vh;
    letter-spacing: 0.05em;
}

#logo h1:hover {
    color: var(--second);
    font-size: 3.2em;
    transition: all 0.2s ease-in-out;
}


</style>