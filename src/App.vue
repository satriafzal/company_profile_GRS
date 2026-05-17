<script setup>
import Navbar from './components/Navbar.vue'
import { RouterView } from 'vue-router';
import Footer from './components/Footer.vue';
</script>

<template>
  <Navbar/>

  <RouterView />
  <Footer />
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

html, body {
  background-color: #f8f9fa;
  max-width: 100vw;
  overflow-x: hidden !important;
}
</style>
