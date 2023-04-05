<script setup>

</script>

<template>
    <section>
        <article>
            <h1>Impressum</h1>

            <h2>Angaben gem&auml;&szlig; &sect; 5 TMG</h2>
            <p>Felix Kuhbier<br />
                Karlstra&szlig;e 33<br />
                74072 Heilbronn</p>

            <h2>Kontakt</h2>
            <p>E-Mail: felixk.dev@proton.me</p>

            <p>Quelle: <a href="https://www.e-recht24.de">eRecht24</a></p>
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

h2 {
    display: flex;
    align-items: flex-start;
    font-size: clamp(1rem, 2vw, 2rem);
    font-weight: 700;
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

a {
    text-decoration: none;
    color: var(--text-color-second);
}

a:hover {
    text-decoration: underline;
}
</style>