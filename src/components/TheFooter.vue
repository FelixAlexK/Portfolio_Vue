<script setup>

</script>

<template>
    <div class="bg-background flex flex-row justify-around items-center p-8 w-full ">
        <div class="flex justify-start items-start">
            <img class="block w-32 h-auto" src="../assets/logo/logowhite.png" alt="logo" loading="lazy" format="png">
        </div>

        <div class="flex justify-around items-center w-full text-lg uppercase text-text ">
            <router-link class="hover:underline" to="/">Startseite</router-link>
            <routerLink class="hover:underline" to="/about">Über mich</routerLink>
            <a class="hover:underline" href="mailto:felixk.dev@proton.me">E-mail</a>
            <a class="hover:underline" href="https://github.com/FelixAlexK" target="_blank">Github</a>
            <router-link class="hover:underline" to="/impressum">Impressum</router-link>
        </div>
    </div>
</template>

