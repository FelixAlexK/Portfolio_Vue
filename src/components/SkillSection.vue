<script setup>
import skillData from '../data/skillData.json'
import IconLoader from './IconLoader.vue'
import { ref, onMounted } from 'vue'
import 'https://flackr.github.io/scroll-timeline/dist/scroll-timeline.js';

const first = ref(null)
const second = ref(null)
const third = ref(null)

const scrollTimeLine = new ScrollTimeline({
    scrollOffsets: [
        new CSSUnitValue(0, 'percent'),
        new CSSUnitValue(50, 'percent'),
    ],
});

onMounted(() => {

    if (window.matchMedia('(min-width: 600px)').matches) {


        first.value.animate(
            {
                transform: ['translateX(25%)', 'translateX(0)'],
            },
            {
                timeline: scrollTimeLine,
            }
        );

        second.value.animate(
            {
                transform: ['translateX(-25%)', 'translateX(0)'],
            },
            {
                timeline: scrollTimeLine,
            }
        );

        third.value.animate(
            {
                transform: ['translateX(25%)', 'translateX(0)'],
            },
            {
                timeline: scrollTimeLine,
            }
        );
    } 

});






</script>


<template>
    <section class="page" id="skills-section">

        <article>
            <span id="content-header">Skills</span>
        </article>



        <section class="logo-wall" id="logowall">
            <div class="row" ref="first">
                <a :href="skill.link" v-for="skill in skillData.first" :key="skill.id">
                    <IconLoader :fill="skill.color" :name="skill.icon_path">
                    </IconLoader>
                </a>


            </div>
            <div class="row" ref="second">
                <a :href="skill.link" v-for="skill in skillData.second" :key="skill.id">
                    <IconLoader :fill="skill.color" :name="skill.icon_path">
                    </IconLoader>

                </a>
            </div>
            <div class="row" ref="third">
                <a :href="skill.link" v-for="skill in skillData.third" :key="skill.id">
                    <IconLoader :fill="skill.color" :name="skill.icon_path">
                    </IconLoader>

                </a>
            </div>
        </section>



    </section>
</template>


<style scoped>
section {
    display: flex;
    align-items: center;
    flex-direction: column;
    width: 100%;
    max-height: 100vh;
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



.logo-wall {
    width: 100%;
    overflow: hidden;
    margin-top: 2rem;
}

.row {
    width: 90%;
    height: 20rem;
    display: flex;
    flex-direction: row;
    justify-content: space-around;

}


svg {
    max-width: 100%;
    display: block;
    width: clamp(1rem, 10vw, 6rem);
    opacity: 1;
    transition: all 250ms ease-in-out;
}

svg:hover {
    scale: 0.95;
}

@media (max-width: 600px) {
    * {
        margin: 0;
        padding: 0;
    }

    .row{
        height: 10rem;
    }
}
</style>