<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import HelloWorld from './components/HelloWorld.vue'
import Home from "./components/Home.vue";
import NavBar from "./components/NavBar.vue";
</script>

<template>
  <NavBar />
  <Home />
</template>

<style>
@tailwind base;
@tailwind components;
@tailwind utilities;
</style>
