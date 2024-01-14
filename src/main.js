import { createApp } from 'vue'
import App from './App.vue'
import Home from "./components/Home.vue";
import HelloWorld from "./components/HelloWorld.vue";
import {createRouter, createWebHashHistory} from "vue-router";

const routes = [
    {path: '/', component: Home},
    {path: '/about', component: HelloWorld}
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})


createApp(App).use(router).mount('#app')
