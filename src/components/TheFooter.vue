<script setup>

</script>

<template>
    <div class="dark:bg-background bg-background-light flex justify-center items-center w-full">
        <div class="flex  items-center w-full p-4">

            <div class=" flex flex-col items-end w-full gap-2 text-base lg:text-xl 2xl:text-2xl uppercase dark:text-text text-text-light">
                <router-link class="hover:underline" to="/">Startseite</router-link>
                <routerLink class="hover:underline" to="/about">Über mich</routerLink>
                <a class="hover:underline" href="mailto:felixk.dev@proton.me">E-mail</a>
                <a class="hover:underline" href="https://github.com/FelixAlexK" target="_blank">Github</a>
                <router-link class="hover:underline" to="/impressum">Impressum</router-link>
            </div>
        </div>

    </div>
</template>

