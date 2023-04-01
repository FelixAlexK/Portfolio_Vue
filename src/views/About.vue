<script setup>



</script>


<template>
    <div class="about">
        <div class="about-content">
            <h1>About</h1>
            <div class="img-left-text-right">
                <div class="image-container">

                    <img src="../assets/img/IMG_4706.jpeg" alt="logo" loading="lazy" format="jpeg">

                </div>
                <p>
                    <strong>Hi, ich bin Felix</strong>
                    ich komme aus einer kleinen Gemeinde im Schwarzwald. Als Student im 4. Semester an der Hochschule
                    Heilbronn begeistere ich mich seit meiner Kindheit für die Welt der Computer
                    und der Programmierung. Es erfüllt mich mit Freude und Motivation, jeden Tag mehr darüber zu lernen.
                    Neben meinem Studium unternehme ich gerne etwas mit Freunden, gehe essen, zocke und koche gerne.
                    Durch mein Studium habe ich bereits zahlreiche kleine Projekte umgesetzt,
                    bei denen ich wertvolle Erfahrungen in der Software-Entwicklung und der Zusammenarbeit im Team sammeln
                    konnte.
                    Diese Praxiserfahrung hilft mir, meine Kenntnisse zu vertiefen und mich kontinuierlich
                    weiterzuentwickeln.
                    Ich bin immer auf der Suche nach neuen Herausforderungen und Möglichkeiten,
                    um meine Fähigkeiten zu verbessern.
                </p>
            </div>
        </div>
    </div>
</template>

<style scoped>
.about {

    width: 100%;
    display: flex;
    min-height: 100vh;
}

.about-content {
    width: 90%;
    margin: var(--header-height);
    display: flex;
    flex-direction: column;
}

.about h1 {
    display: flex;
    align-items: flex-start;
    font-size: 6vh;
    font-weight: 700;

}


img {
    display: block;
    max-width: 100%;
    width: 30rem;
    min-width: 1rem;
    height: auto;
    border-radius: 2rem;
}

.img-left-text-right {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    margin-bottom: 2rem;
    gap: 4rem;
}

.img-left-text-right strong {
    font-size: 2vh;
    font-weight: 700;
    margin-bottom: 4rem;
}

.img-left-text-right p {
    font-family: 'Inter', sans-serif;
    display: flex;
    flex-wrap: wrap;
    flex-flow: column;
    text-align: left;
    font-size: 2vh;
    margin-block-start: 1rem;
    margin-block-end: 1rem;
    max-width: 60ch;

}</style>