<script setup>
import { ref } from 'vue'
import skills from '../data/skillData.json'



</script>


<template>
    <section id="skills-section">
        <article>
            <span id="content-header">Skills</span>
            <div class="skill-container">
                <div v-for="skill in skills" :key="skill.id" class="skill-items-container"
                    :style="{ borderColor: skill.color }">
                    <div id="skill-item">
                        <h3>{{ skill.name }}</h3>
                        <p>{{ skill.category }}</p>
                    </div>
                </div>
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

.skill-container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    grid-gap: 2rem;
    padding: 3rem 0;
    width: 100%;
}

.skill-items-container {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    text-decoration: none;
    width: 100%;
    background-color: var(--github-project-background);
    border-radius: 0.5rem;
    border-bottom: 0.5rem inset;
    box-shadow: var(--primary) 0px 20px 30px -10px;
    transition: 150ms ease-in-out all;
}

.skill-items-container:hover,
:focus {
    scale: 0.95;
}

#skill-item {
    display: flex;
    flex-direction: column;
    padding: 1rem;
}


#skill-item h3,
p {
    margin: 0;
    padding: 0;
    transition: 150ms ease-in-out all;

}

#skill-item h3 {
    font-size: clamp(1rem, 1.5vw, 1.5rem);
    color: var(--text-color-primary);
}

#skill-item p {
    color: var(--text-color-second);
    margin: 0.5rem 0;
    font-size: clamp(0.5rem, 1vh, 1.2rem);
    line-height: 1.5em;
    opacity: 1;


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