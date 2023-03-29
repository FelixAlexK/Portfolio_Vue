<script setup>

import { ref, watchEffect } from 'vue'
import EYE from '../../public/icons/eye_icon.svg'

const API_URL = `https://api.github.com/users/FelixAlexK/repos`
const githubProjects = ref(null)

watchEffect(async () => {
    // this effect will run immediately and then
    // re-run whenever currentBranch.value changes

    githubProjects.value = await (await fetch(API_URL)).json()
})

</script>

<template>
    <section>
        <article>
            <span id="content-header">Projekte</span>
            <div class="github-project">
                <a class="github-project-link" v-for="project in githubProjects" :key="project.id" :href="project.html_url"
                    :title="project.full_name" target="_blank">
                    <div class="github-project-details">
                        <h3>{{ project.full_name }}</h3>
                        <p>{{ project.description }}</p>
                    </div>

                    <div class="stats">
                        <div class="stat">
                            <img src="/icons/star_icon.svg" format="svg" alt="stargazers_count" loading="lazy">
                            {{ project.stargazers_count }}
                        </div>
                        <div class="stat">
                            <img src="/icons/fork_icon.svg" format="svg" alt="forks" loading="lazy">
                            {{ project.forks }}
                        </div>
                        <div class="stat">
                            <img src="/icons/eye_icon.svg" format="svg" alt="watchers_count" loading="lazy">
                            {{ project.watchers_count }}
                        </div>
                    </div>
                </a>
            </div>
        </article>
    </section>
</template>

<style scoped>
section {
    display: flex;
    justify-content: center;
    padding: 9rem 9rem 9rem 9rem;
    gap: 1.5rem;
}

article {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
}

.github-project {
    display: grid;
    grid-template-columns: 2fr 2fr 2fr;
    grid-gap: 2rem;
    margin: 4rem 0;
}


.github-project-link {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    text-decoration: none;
    width: 100%;
    min-height: 15rem;
    background-color: var(--github-project-background);
    border-radius: 0.5rem;
    transition: 150ms ease-in-out all;

}

.github-project-link:hover,
:focus {
    scale: 0.95;
}

.github-project-link:hover h3 {
    color: var(--second);
}

.github-project-link:focus-visible {
    outline: 0.1rem solid var(--second);
}

.github-project-details {
    display: flex;
    flex-direction: column;
    padding: 1rem;
}

.github-project-details h3,
p {
    margin: 0;
    padding: 0;
    transition: 150ms ease-in-out all;

}

.github-project-details h3 {
    font-size: 2rem;
    color: var(--text-color-primary);
}

.github-project-details p {
    color: var(--text-color-second);
    margin: 0.5rem 0;
    font-size: 1rem;
    line-height: 1.5em;
    opacity: 0.3;


}

.stats {
    display: flex;
    flex-direction: row;
    width: 100%;
    border-top: 0.1rem solid rgba(255, 255, 255, 0.03);
    padding: 1rem;
    gap: 2rem;
}

.stat {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    gap: 00.5rem;
    font-size: 1rem;
    color: var(--text-color-primary);


}

img {
    fill: white;
    width: 1rem;
    height: auto;
}
</style>
