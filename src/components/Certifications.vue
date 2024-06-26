<template>
    <p class="fs-3 box-title">CERTIFICATIONS</p>
    <div class="row">
        <div class="col-6">
            <ul>
                <li v-for="x in certificates1"><a v-bind:href="x.link" target="_blank">{{ x.title }}</a></li>
            </ul>
        </div>
        <div class="col-6 ">
            <ul>
                <li v-for="x in certificates2"><a v-bind:href="x.link" target="_blank">{{ x.title }}</a></li>
            </ul>
        </div>
    </div>
</template>
<script>

export default {

    data() {
        return {
            certificates1: [
                { link: 'cert.html', title: 'Basic Level of Cloud Computing', },
                { link: '', title: 'Basic Level of Software Engineering', },
                { link: '', title: 'Intermediate Level of Software Engineering', },
                { link: '', title: 'Advance Level of Software Engineering', },
                { link: '', title: 'Principles of Web Development and Introduction to HTML', },
            ],
            certificates2: [
                { link: '', title: 'Using HTML and CSS to Design a Website', },
                { link: '', title: 'Basic Javascript for Web Development', },
            ],
        }
    }
}
</script>
<style scoped>
a {
    color: black;
    text-decoration: none;
}

ul li {
    list-style: disc;
    padding-top: 1em;
    transition: .5s ease-in;
}

a:hover {
    cursor: pointer;
    text-decoration: underline;
    text-shadow: 2px 2px 5px gray;
    color: blue;
}
@media(max-width: 600px){
    .col-6{
        width: 100%;
        padding: 1em;
    }
}
</style>