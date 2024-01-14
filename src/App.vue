<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import HelloWorld from './components/HelloWorld.vue'
import Home from "./components/Home.vue";
import NavBar from "./components/NavBar.vue";
</script>

<template>
  <div class="sm:max-w-6xl sm:mx-auto text-gray-500 transition-all">
    <NavBar />
    <router-view/>
  </div>
</template>

<style>
@tailwind base;
@tailwind components;
@tailwind utilities;
</style>
