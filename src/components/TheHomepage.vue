<script setup>
import Icon from '../components/TheIconloader.vue'
</script>

<template>
    <section
        class=" flex flex-col w-full justify-center items-center  h-screen dark:bg-background bg-background-light pt-16 scroll-smooth">
        <article class="flex h-full m-8 lg:m-16 w-11/12 ">
            <div class="flex flex-col justify-center items-center gap-8">
                <h1 class="dark:text-text text-text-light font-crimson font-bold text-3xl lg:text-6xl 2xl:text-8xl">Hi,
                    ich
                    bin
                    Felix!</h1>
                <div
                    class="block text-center text-lg lg:text-2xl 2xl:text-4xl dark:text-text text-text-light font-inter w-full lg:w-2/3 2xl:w-2/4">
                    <p>
                        <strong class="dark:text-accent text-accent-light">Student</strong>
                        an der <a class=" hover:underline transition-all ease-linear "
                            href=" https://www.hs-heilbronn.de/de" title="hs-heilbronn.de" target="_blank">Hochschule
                            Heilbronn.</a>
                        <br>
                        Ich habe eine große Leidenschaft für alles rund um die Technik und finde es unglaublich
                        spannend,
                        mich
                        damit auseinanderzusetzen.
                    </p>
                    <br>
                    <p>
                        Ich bin stets offen für neue Lernmöglichkeiten, besonders wenn es um technologische
                        Entwicklungen
                        geht.
                    </p>
                </div>
            </div>
        </article>
        <div class="flex pb-4">
            <a href="#skill-article">
                <Icon class=" block w-14 aspect-auto h-auto dark:fill-text fill-text-light  motion-safe:animate-bounce"
                    :name="'arrowdown'">
                </Icon>
            </a>

        </div>
    </section>
</template>
