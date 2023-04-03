<script setup>

</script>

<template>
    <section>
        <article>

            <h1>Hi, ich bin Felix!</h1>
            <p>
                <strong>Student</strong>
                an der <a href="https://www.hs-heilbronn.de/de" title="hs-heilbronn.de" target="_blank">Hochschule
                    Heilbronn.</a>
                <br>
                Ich habe eine große Leidenschaft für alles rund um die Technik und finde es unglaublich spannend,
                mich
                damit auseinanderzusetzen.
            </p>
            <p>
                Ich bin stets offen für neue Lernmöglichkeiten, besonders wenn es um technologische Entwicklungen
                geht.
            </p>


        </article>
    </section>
</template>

<style scoped>
section {
    width: 100%;
    display: flex;
    justify-content: center;
    min-height: 75vh;

}

article {
    margin-top: var(--header-height);
    display: flex;

    justify-content: center;
    align-items: center;
    flex-direction: column;
    max-width: 90%;

}



h1 {
    color: var(--text-color-primary);
    font-family: var(--crimson-font);
    font-weight: 700;
    font-size: clamp(2rem, 6vw, 4rem);
    margin: 0 0 16px 0;

}

p {
    display: block;
    text-align: center;
    font-size: clamp(1.2rem, 2vw, 2.1rem);
    color: var(--text-color-second);
    font-family: var(--inter-font);
    margin-block-start: 1rem;
    margin-block-end: 1rem;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    max-width: 45ch;
}

p strong {
    color: #f4f4f5;
}

p a {
    font-size: inherit;
    color: var(--text-color-second);
    text-decoration: none;
}

p a:hover {
    color: var(--second);
    text-decoration: underline;
    transition: all 0.2s ease-in-out;
}

@media (max-width: 600px) {
    * {
        margin: 0;
        padding: 0;
    }
}
</style>