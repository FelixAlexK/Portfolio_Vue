<script setup>

const scrollTop = () => {
    window.scrollTo(0, 0);
}


</script>

<template>
    <div class="footer">
        <div class="footer-logo">
            <img src="../assets/logo/logowhite.png" alt="logo" loading="lazy" format="png">
        </div>

        <div class="footer-content">
            <router-link @click="scrollTop" to="/">Startseite</router-link>
            <routerLink @click="scrollTop" to="/about">About</routerLink>
            <a href="mailto:felix.kuhbier@gmx.de">E-mail</a>
            <a href="https://github.com/FelixAlexK" target="_blank">Github</a>
        </div>
    </div>
</template>

<style scoped>
.footer {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 2rem;
    background-color: var(--footer-background-color);
    width: 100%;
    min-height: 15rem;
}

.footer-content {
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    font-size: 1.5vh;
    text-transform: uppercase;
}

a {
    text-decoration: none;
    color: var(--text-color-primary);
}

a:hover {
    text-decoration: underline;
}

.footer-logo {
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;


}

img {
    display: block;
    width: 8rem;
    max-width: 100%;
    height: auto;
}
</style>