<template>
    <div class="w-full fixed h-24 text-text flex justify-center items-center z-10 shadow-2xl p-8 ">
        <div class="flex justify-between items-center w-3/5">
            <div
                class="flex  text-text font-inter font-bold text-6xl tracking-wider hover:text-accent hover:transition-all ease-in-out hover:scale-95">
                <router-link to="/">
                    <h1>FK</h1>
                </router-link>
            </div>

            <div
                class="text-2xl inline-block text-text hover:underline opacity-70 transition-all ease-in-out hover:opacity-100 ">
                <router-link to="/about">Über mich</router-link>
            </div>
        </div>
    </div>
</template>
  
<style scoped></style>
