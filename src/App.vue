<script setup>
import Navbar from './components/Navbar.vue'
import { RouterView } from 'vue-router';
</script>

<template>
  <Navbar/>

  <RouterView />
</template>

<style>
  body {
  font-family: 'Poppins', sans-serif; 
  background-color: #f8f9fa;
  overflow-x: hidden;
}

h1, h2, h3, h4, h5, h6 {
  font-family: 'Poppins', sans-serif;
}
</style>
