<script setup>
import Icon from '../components/TheIconloader.vue'
</script>

<template>
    <div class="dark:bg-background bg-background-light w-full">
        <div class="flex items-end w-full p-4">

            <div
                class=" flex flex-col items-end w-full gap-2 text-base lg:text-xl 2xl:text-2xl uppercase dark:text-text text-text-light">
                <router-link class="hover:scale-95" to="/">
                    <Icon class="dark:fill-text fill-text-light block aspect-auto w-10 2xl:w-12 h-auto" :name="'home'">
                    </Icon>
                </router-link>
                <routerLink class="hover:scale-95" to="/about">
                    <Icon class="dark:fill-text fill-text-light block aspect-auto w-10 2xl:w-12 h-auto" :name="'account'">
                    </Icon>
                </routerLink>
                <a class="hover:scale-95" href="mailto:felixk.dev@proton.me">
                    <Icon class="dark:fill-text fill-text-light block aspect-auto w-10 2xl:w-12 h-auto" :name="'email'">
                    </Icon>
                </a>
                <a class="hover:scale-95" href="https://github.com/FelixAlexK" target="_blank">
                    <Icon class="dark:fill-text fill-text-light block aspect-auto w-10 h-auto" :name="'github'"></Icon>
                </a>
                <router-link class="hover:scale-95" to="/impressum">
                    <Icon class="dark:fill-text fill-text-light block aspect-auto w-10 2xl:w-12 h-auto"
                        :name="'format_section'">
                    </Icon>
                </router-link>
            </div>
        </div>
        <div class=" w-full flex justify-center items-center">
            <p class="dark:text-text text-text-light opacity-60 font-inter text-sm">
                V1.7.2
            </p>
        </div>

    </div>
</template>

