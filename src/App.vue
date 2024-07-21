<script setup>
  import {RouterView} from 'vue-router'
  import Navbar from './components/Navbar.vue'
  import Footer from './components/Footer.vue'
</script>

<template>
  <div class="gradient-wrapper">
    <Navbar />
    
    <main class="relative min-h-full w-full">
      <RouterView />
    </main>

    <Footer />
  </div>
</template>
