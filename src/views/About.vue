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
                    Als Student an der Hochschule Heilbronn begeistere ich mich seit meiner Kindheit für die Welt der
                    Computer
                    und der Programmierung.
                    Es erfüllt mich mit Freude und Motivation, jeden Tag mehr darüber zu lernen.
                    Durch mein Studium habe ich bereits zahlreiche kleine Projekte umgesetzt,
                    bei denen ich wertvolle Erfahrungen in der Software-Entwicklung und der Zusammenarbeit im Team sammeln
                    konnte.
                    Diese Praxiserfahrung hilft mir, meine Kenntnisse zu vertiefen und mich kontinuierlich
                    weiterzuentwickeln.
                </p>
            </div>
        </div>
    </div>
</template>

<style scoped>
.about {

    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
}

.about-content {
    display: flex;
    flex-direction: column;
}

.about h1 {
    display: flex;
    font-size: 6rem;
    font-weight: 700;

}



img {
    display: block;
    max-width: 100%;
    width: 30rem;
    height: auto;
    border-radius: 2rem;
}

.img-left-text-right {
    display: flex;
    align-items: center;
    gap: 4rem;
}

.img-left-text-right strong{
    font-size: 2rem;
    font-weight: 700;
    margin-bottom: 4rem;
}

.img-left-text-right p {
    font-family: 'Inter', sans-serif;
    display: flex;
    text-align: left;
    flex-wrap: wrap;
    font-size: 2rem;
    margin-block-start: 1rem;
    margin-block-end: 1rem;
    max-width: 60ch;
}
</style>