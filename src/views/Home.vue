<script setup>
import GitHubProject from '../components/GitHubProject.vue';

</script>

<template>
    <div class="home">
        <section class="aboutme">
            <article>
                <div class="aboutme-content">
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
                </div>

            </article>
        </section>

        <div class="main-content-container">
            <section>
                <article>
                    <div id="contant-container">
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
                    </div>
                </article>
            </section>
            <section>
                <article>
                    <div id="contant-container ">
                        <span id="content-header">Projekte</span>

                        <GitHubProject></GitHubProject>


                    </div>
                    Section 3
                </article>
            </section>
        </div>
        <div class="footer">Footer</div>
    </div>
</template>

