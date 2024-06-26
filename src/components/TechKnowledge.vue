<template>
    <p class="fs-3 box-title">TECH KNOWLEDGE</p>
    <div class="row">
        <div class="col-6 p-3">
            <ul>
                <li @click="this.activeComp = 'front-end'">Front-End Development</li>
                <li @click="this.activeComp = 'back-end'">Back-End Development</li>
                <li @click="this.activeComp = 'cloud-computing'">Cloud Computing</li>
                <li @click="this.activeComp = 'web-design'">Web and Graphic Design</li>
                <li @click="this.activeComp = 'api'">Application Programming Interface</li>
            </ul>
        </div>
        <div class="col-6 bg-light p-3">
            <component :is="activeComp"></component>
        </div>
    </div>
</template>
<script>

export default {

    data() {
        return {
            activeComp: 'front-end',
        }
    }
}
</script>
<style scoped>
ul li {
    list-style: none;
    padding-top: 1em;
    transition: .5s ease-in;
}

ul li:hover {
    cursor: pointer;
    text-decoration: underline;
    text-shadow: 2px 2px 5px gray;
}
@media(max-width: 600px){
    .col-6{
        width: 100%;
        padding: 1em;
    }
}
</style>