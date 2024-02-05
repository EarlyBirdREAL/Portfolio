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
    {path: '/', component: Home},
    {path: '/about', component: HelloWorld}
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})


createApp(App).use(router).use(vuetify).mount('#app')
