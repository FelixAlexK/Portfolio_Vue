<template>
    <div class="w-full bg-slate-900 fixed h-24 text-slate-50 flex items-center justify-between z-10 shadow-2xl p-8 ">
        <div
            class="text-slate-50 font-lato text-6xl tracking-wider hover:text-emerald-300 hover:transition-all ease-in-out scale-95">
            <router-link to="/">
                <h1>FK</h1>
            </router-link>
        </div>

        <div
            class="text-2xl hover:text-emerald-300 inline-block text-slate-50 hover:underline opacity-70 transition-all ease-in-out router-link-active hover:opacity-100 ">
            <router-link to="/about">Über mich</router-link>
        </div>
    </div>
</template>
  
<style scoped></style>
