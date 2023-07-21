<script setup>


</script>


<template>
    <div class=" fixed h-12 lg:h-24 flex dark:text-text text-text-light w-full  p-4  z-10 shadow-2xl py-8 ">


        <div class="flex justify-between 2xl:justify-around items-center w-full">
            <div
                class=" font-inter font-bold text-3xl lg:text-4xl 2xl:text-5xl tracking-wider dark:hover:text-accent hover:text-accent-light  hover:transition-all ease-in-out hover:scale-95">
                <router-link to="/">
                    <h1>FK</h1>
                </router-link>
            </div>



            <div class="flex items-center flex-row gap-4 lg:gap-8">
                <div
                    class="text-lg lg:text-2xl 2xl:text-2xl   hover:underline opacity-70 transition-all ease-in-out hover:opacity-100 ">
                    <router-link to="/about">Über mich</router-link>
                </div>

                <div class="text-lg  text-text ">
                    <button id="theme-toggle" type="button"
                        class="text-text-light dark:text-text   focus:outline-none  rounded-lg text-sm p-2.5">
                        <svg id="theme-toggle-dark-icon" class="w-5 lg:w-8   h-5 lg:h-8  hidden" fill="currentColor"
                            viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path>
                        </svg>
                        <svg id="theme-toggle-light-icon" class="w-5 lg:w-8   h-5 lg:h-8  hidden" fill="currentColor"
                            viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                                fill-rule="evenodd" clip-rule="evenodd"></path>
                        </svg>
                    </button>
                </div>
            </div>

        </div>





    </div>
</template>
  
<style scoped></style>
