import { createRouter, createWebHistory } from 'vue-router';
import HomePage from './pages/HomePage.vue';
import ProjectPage from './pages/ProjectPage.vue';
import AboutPage from './pages/AboutPage.vue';


const router = createRouter({
history: createWebHistory(),
routes: [
{
path: '/',
name: 'home',
component: HomePage
},
{
path: '/progetti-definiti',
name: 'Projects',
component: ProjectPage
},
{
path: '/chi-sono',
name: 'AboutMe',
component: AboutPage
},
]
});
export { router };