<script setup>


</script>


<template>
    <section id="skills-section">
        <article>

            <span id="content-header">Skills</span>
            <table>
                <thead>
                    <tr>
                        <th>Programmiersprachen & Frameworks</th>
                        <th>Software & Plattform</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            <p>JavaScript</p>
                        </td>
                        <td>
                            <p>git</p>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <p>HTML</p>
                        </td>
                        <td>
                            <p>Windows</p>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <p>CSS</p>
                        </td>
                        <td>
                            <p>Visual Studio Code</p>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <p>Node.js</p>
                        </td>
                        <td>
                            <p>Android Studio</p>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <p>Vue.js</p>
                        </td>
                        <td>
                            <p>IntelliJ</p>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <p>Java</p>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <p>Kotlin</p>
                        </td>
                    </tr>
                </tbody>
            </table>

        </article>
    </section>
</template>


<style scoped>
section {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    min-height: 100%;

}

article {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-top: 9rem;
    width: 90%;
    gap: 2rem;
}

table {
    border-collapse: collapse;
    font-size: 2vh;
    min-width: 400px;
    width: 100%;
}

thead tr {
    text-align: left;
}

th,
td {

    color: var(--text-color-primary);
    padding: 1rem 0;
    padding-right: 4rem;
}

tbody td {
    color: var(--text-color-second);
    height: min-content;
}

p {
    width: fit-content;
}


p:hover {
    color: var(--second);
    scale: 0.95;
    transition: all 0.2s ease-in-out;
}

@media (max-width: 600px) {
    * {
        margin: 0;
        padding: 0;
    }
}
</style>