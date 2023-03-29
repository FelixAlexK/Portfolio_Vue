<script setup>


</script>


<template>
    <section>
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
                        <td>JavaScript</td>
                        <td>git</td>
                    </tr>
                    <tr>
                        <td>HTML</td>
                        <td>Windows</td>
                    </tr>
                    <tr>
                        <td>CSS</td>
                        <td>Visual Studio Code</td>
                    </tr>
                    <tr>
                        <td>Node.js</td>
                        <td>Android Studio</td>
                    </tr>
                    <tr>
                        <td>Vue.js</td>
                        <td>IntelliJ</td>
                    </tr>
                    <tr>
                        <td>Java</td>
                    </tr>
                    <tr>
                        <td>Kotlin</td>
                    </tr>
                </tbody>
            </table>

        </article>
    </section>
</template>


<style scoped>
section {
    width: 100%;
    display: flex;
    justify-content: center;
    gap: 1.5rem;
    padding: 9rem 9rem 9rem 9rem;
}

article {
    display: flex;
    align-items: flex-start;
    flex-direction: column;
}

table {
    border-collapse: collapse;
    margin: 2rem 0;
    font-size: 2rem;
    min-width: 400px;
}

thead tr {
    text-align: left;
}

th,
td {

    color: var(--text-color-primary);
    padding: 2rem 0;
    padding-right: 4rem;
}

tbody td {
    color: var(--text-color-second);
}

tbody td:hover {
    color: var(--second);
    scale: 0.95;
    transition: all 0.2s ease-in-out;
}
</style>