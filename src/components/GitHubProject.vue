<script setup>

import { ref, onMounted, defineAsyncComponent } from 'vue'


const githubUser = "FelixAlexK"
const API_URL = `https://api.github.com/users/${githubUser}/repos?sort=pushed`
const githubProjects = ref([])

onMounted(() => {
    fetch(API_URL, {
        headers: {
            accept: "application/vnd.github+json",
        }
    }).then((response) => response.json())
        .then((data) => githubProjects.value = data)
        .catch((error) => console.log(error.message))
})

const starIcon = defineAsyncComponent(() =>
    import('../assets/icons/github_icons/star_icon.svg')
)

const forkIcon = defineAsyncComponent(() =>
    import('../assets/icons/github_icons/fork_icon.svg')
)

const wazcherIcon = defineAsyncComponent(() =>
    import('../assets/icons/github_icons/eye_icon.svg')
)


</script>

<template>
    <section id="project-section">
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
                            <component :is='starIcon'></component>
                            {{ project.stargazers_count }}
                        </div>
                        <div class="stat">
                            <component :is='forkIcon'></component>
                            {{ project.forks_count }}
                        </div>
                        <div class="stat">
                            <component :is='wazcherIcon'></component>
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
    align-items: center;
    width: 100%;
    min-height: 100%;

}

article {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-top: 9rem;
    width: 90%;
}

.github-project {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    grid-gap: 2rem;
    padding: 3rem 0;
    width: 100%;
}


.github-project-link {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    text-decoration: none;
    width: 100%;
    background-color: var(--github-project-background);
    box-shadow: var(--primary) 0px 20px 30px -10px;
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
    font-size: clamp(1rem, 1.5vh, 1.5rem);
    color: var(--text-color-primary);
    padding-right: 0.5rem;
}

.github-project-details p {
    color: var(--text-color-second);
    margin: 0.5rem 0;
    font-size: clamp(0.5rem, 1vh, 1.2rem);
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
    gap: 0.5rem;
    font-size: 1vh;
    color: var(--text-color-primary);


}

img {
    display: block;
    max-width: 100%;
    min-width: 1rem;
    height: auto;
}

@media (max-width: 600px) {
    * {
        margin: 0;
        padding: 0;
    }
}
</style>
