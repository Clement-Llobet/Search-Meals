import NavBar from './NavBar.vue';

<template>
  <div class="bg-gray-100 h-100">
    <Navbar />
    <main>
      <RouterView />
    </main>
  </div>
</template>

<script setup>
import Navbar from "./Navbar.vue";
</script>
