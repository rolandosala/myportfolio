<template>
    <p class="fs-3 box-title">MY PROJECTS</p>
    <div class="row">
        <div class="card bg-light text-white p-2 mx-2" style="width: 18rem;" v-for="x in projects">
            <img class="card-img-top" :src="x.img" alt="Card image cap">
            <div class="card-img-overlay ">
                <h5 class="card-title">{{ x.title }}</h5>
                <span :class='y.badge' v-for="y in x.technology">{{ y.lang }}</span>
                <p class="card-text">{{ x.description }}</p>
            </div>
            <a v-bind:href='x.demo' target="_blank" class="btn btn-primary mt-2">Live Demo</a>
            <a v-bind:href='x.repository' class="btn btn-primary mt-2" target="_blank">Repository</a>
        </div>

    </div>
</template>
<script>
export default {
    data() {
        return {
            projects: [
                {
                    title: 'Vegan Website',
                    description: 'Static landing page for a vegan website.',
                    technology: [
                        { lang: 'Javascript', badge: 'badge bg-success mx-1' },
                        { lang: 'HTML', badge: 'badge bg-primary mx-1' },
                        { lang: 'CSS', badge: 'badge bg-danger mx-1' },
                    ],
                    demo: 'https://rolandosala.github.io/Vegan-Food/',
                    repository: 'https://github.com/rolandosala/Vegan-Food.git',
                    img: '/vegan.jpg',
                },
                {
                    title: 'Digital Clock',
                    description: '',
                    technology: [
                        { lang: 'Javascript', badge: 'badge bg-success mx-1' },
                        { lang: 'HTML', badge: 'badge bg-primary mx-1' },
                        { lang: 'CSS', badge: 'badge bg-danger mx-1' },
                    ],
                    demo: 'https://rolandosala.github.io/Clock/',
                    repository: 'https://github.com/rolandosala/Clock.git',
                    img: '/clock.jpg'
                },
            ]
        }
    }
}
</script>
<style scoped>
.card-text, .card-title{
    text-shadow: 2px 2px 2px black;
}
.card-img-overlay{
    background-color: rgba(255, 255, 255, 0.3);
    backdrop-filter: blur(.5px);
}
.btn {
    z-index: 1;
}

.btn:hover {
    cursor: pointer;
}

.box-title {
    position: fixed;
}

.row {
    position: absolute;
    width: calc(15rem * 3);
    overflow-x: none;
    bottom: 5%;
    display: flex;
    justify-content: left;
    flex-direction: row;
}
</style>