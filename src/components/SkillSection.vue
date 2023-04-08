<script setup>
import skillData from '../data/skillData.json'
import IconLoader from './IconLoader.vue'





</script>


<template>
    <section id="skills-section">
        <article>

            <span id="content-header">Skills</span>

            <div class="skill-detail">
                <a class="skill-links" v-for="skill in skillData" :key="skill.id" :href="skill.link">
                    <IconLoader :name="skill.icon_path"></IconLoader>
                    <h3>{{ skill.name }}</h3>
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
    justify-content: center;
    align-items: flex-start;
    flex-direction: column;
    margin-top: 9rem;
    width: 90%;
    gap: 2rem;
}


.skill-detail {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    grid-gap: 2rem;
}

.skill-links {
    display: flex;
    align-items: center;
    text-decoration: none;
    color: var(--text-color-primary);
    gap: 2rem;
}


svg {
    fill: white;
    display: block;
    max-width: 100%;
    width: 2rem;
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