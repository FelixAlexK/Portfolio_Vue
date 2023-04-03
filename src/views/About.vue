<script setup>



</script>


<template>
    <section>
        <article>
            <h1>Über mich</h1>
            <div class="text-image-container">
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
        </article>
    </section>
</template>

<style scoped>
section {
    width: 100%;
    display: flex;
    min-height: 100vh;
}

article {
    width: 90%;
    margin-top: var(--header-height);
    margin-left: 2rem;
    display: flex;
    flex-direction: column;

}

h1 {
    display: flex;
    align-items: flex-start;
    font-size: clamp(2rem, 6vw, 4rem);
    font-weight: 700;
    color: var(--text-color-primary);

}


img {
    display: block;
    max-width: 100%;
    width: clamp(20rem, 60vw, 30rem);
    height: auto;
    border-radius: 2rem;
    object-fit: cover;
    object-position: center;
}

.text-image-container {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    margin-bottom: 2rem;
    width: 100%;

}

p strong {
    display: flex;
    font-weight: 700;
    margin-bottom: 2rem;
    color: var(--text-color-primary);
}

p {
    font-family: var(--inter-font);
    display: block;
    font-size: clamp(1.2rem, 1.5vw, 2.1rem);
    margin-block-start: 1rem;
    margin-block-end: 1rem;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    max-width: 45ch;
    color: var(--text-color-second);
    margin-left: 2rem;
}

@media (max-width: 600px) {
    article {
        
        max-width: 600px;
    }

    

    p {
        margin: 0;
        margin-top: 2rem;
        max-width: 30ch;
    }

    .text-image-container {
        display: flex;
        align-items: center;
        justify-content: left;
        margin-bottom: 2rem;
        max-width: 600px;
        
    }


}
</style>