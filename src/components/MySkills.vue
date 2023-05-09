<script setup>
import skills from '../data/skillData.json'
import Icon from '../components/TheIconloader.vue'


</script>


<template>
    <section id="skills-section">
        <article>
            <span id="content-header">Skills</span>
            <div class="skill-grid">
                <div v-for="skill in skills" :key="skill.id" class="skill-items-container"
                    :style="{ borderColor: skill.color }">
                    <div id="skill-item">

                        <h3>{{ skill.name }}</h3>
                        <p>{{ skill.category }}</p>
                    </div>
                    <Icon :name="skill.icon_path"></Icon>
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

.skill-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 2rem;
    padding-top: 3rem;
    width: 100%;
}

.skill-items-container {
    display: flex;
    justify-content: space-between;
    text-decoration: none;
    width: 100%;
    padding: 1rem 2rem;
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

    position: relative;
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
    font-size: clamp(0.5rem, 1vh, 1.2rem);
    line-height: 1.5em;
    opacity: 1;


}


svg {
    display: block;
    width: 2rem;
    height: auto;
    fill: var(--text-color-second);
    opacity: 0.3;
}

svg:hover {
    opacity: 1;
}


@media (width < 60em) {
    * {
        margin: 0;
        padding: 0;
    }

    .skill-grid {

        grid-template-columns: repeat(2, 1fr);

    }
}

@media (width < 40em) {
    * {
        margin: 0;
        padding: 0;
    }

    .skill-grid {

        grid-template-columns: repeat(2, 1fr);

    }

    .skill-items-container {
        display: flex;
        justify-content: flex-start;
    }

    svg {
        display: none;
    }
}

@media (width < 20em) {

    .skill-grid {

        grid-template-columns: repeat(1, 1fr);

    }
}
</style>