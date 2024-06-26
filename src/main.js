import './assets/main.css'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'


import { createApp } from 'vue'
import App from './App.vue'
import Aboutme from './components/Aboutme.vue'
import Projects from './components/Projects.vue'
import TechKnowledge from './components/TechKnowledge.vue'
import Certifications from './components/Certifications.vue'
import FrontEnd from './components/FrontEnd.vue'
import BackEnd from './components/BackEnd.vue'
import CloudComputing from './components/CloudComputing.vue'
import WebDesign from './components/WebDesign.vue'
import API from './components/API.vue'

const app  = createApp(App);
app.component('about-me', Aboutme);
app.component('projects', Projects);
app.component('tech-knowledge', TechKnowledge);
app.component('certifications', Certifications);
app.component('front-end', FrontEnd);
app.component('back-end', BackEnd);
app.component('cloud-computing', CloudComputing);
app.component('web-design', WebDesign);
app.component('api', API);

app.mount('#app')
