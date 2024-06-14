import { createApp } from 'vue'
import App from './App.vue'
import Home from "./components/Home.vue";
import HelloWorld from "./components/HelloWorld.vue";
import {createRouter, createWebHashHistory} from "vue-router";
import 'vuetify/styles'
import { createVuetify} from "vuetify";
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import { aliases, mdi } from 'vuetify/iconsets/mdi'
import NewHome from "./components/NewHome.vue";
import Les1 from "./components/Les1.vue";
import Les2 from "./components/Les2.vue";
import Les3 from "./components/Les3.vue";
import Les4 from "./components/Les4.vue";
import Les2Deel1 from "./components/Les2Deel1.vue";
import Les2Deel2 from "./components/Les2Deel2.vue";
import Les2Deel3 from "./components/Les2Deel3.vue";

const vuetify = createVuetify({
    icons: {
      defaultSet: 'mdi',
      aliases,
      sets: {
          mdi,
      },
    },
    components,
    directives,
})


const routes = [
    {path: '/', component: NewHome},
    {path: '/about', component: HelloWorld},
    {path: '/les1', component: Les1},
    {path: '/les2', component: Les2},
    {path: '/les3', component: Les3},
    {path: '/les4', component: Les4},
    {path: '/les2deel1', component: Les2Deel1},
    {path: '/les2deel2', component: Les2Deel2},
    {path: '/les2deel3', component: Les2Deel3},
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})


createApp(App).use(router).use(vuetify).mount('#app')
