<script setup>

import { ref } from 'vue';

const logoText = ref('FK');
const scrollTop = () => {
    window.scrollTo(0, 0);
}


</script>


<template>
    <div id="nav">
        <div id="logo">

            <router-link to="/">
                <h1>{{ logoText }}</h1>
            </router-link>

        </div>
        <div id="nav-items">
            <router-link @click="scrollTop" to="/">Startseite</router-link>
            <router-link @click="scrollTop" to="/about">Über mich</router-link>
        </div>


    </div>
</template>

<style scoped>
@media (max-width: 600px) {

    a {
        text-decoration: none;
    }

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
        font-size: clamp(1rem, 1vw, 2rem);
        display: inline-block;
        margin-left: 2rem;
        color: white;
        opacity: 0.7;
        transition: 0.2s ease color;
    }

    #nav-items a.router-link-active {
        border-bottom: var(--second) solid 6px;
        opacity: 1;
        transition: all 0.2s ease-in-out;
    }

    #logo h1 {
        color: var(--text-color-primary);
        font-family: var(--lato-font);
        font-size: clamp(2rem, 4vw, 4rem);
        letter-spacing: 0.05em;
    }


}

@media (min-width: 601px) {
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
        font-size: clamp(1rem, 1vw, 2rem);
        display: inline-block;
        margin-left: 2rem;
        color: white;
        opacity: 0.7;
        transition: 0.2s ease color;
        text-decoration: none;
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
        font-size: clamp(2rem, 4vw, 4rem);
        letter-spacing: 0.05em;
    }

    #logo h1:hover {
        color: var(--second);
        scale: 0.95;
        transition: all 0.2s ease-in-out;
    }
}
</style>