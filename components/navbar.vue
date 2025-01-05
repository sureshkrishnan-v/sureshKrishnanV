<template>
    <nav class="bg-gray-800 p-4">
      <div class="flex items-center justify-between">
        <div class="text-white text-lg font-bold">Your Portfolio</div>
        <ul class="flex space-x-6">
          <li><NuxtLink to="/" class="text-white hover:text-gray-400">Home</NuxtLink></li>
          <li><NuxtLink to="/about" class="text-white hover:text-gray-400">About</NuxtLink></li>
          <li><NuxtLink to="/projects" class="text-white hover:text-gray-400">Projects</NuxtLink></li>
          <li><NuxtLink to="/contact" class="text-white hover:text-gray-400">Contact</NuxtLink></li>
        </ul>
      </div>
    </nav>
  </template>
  
  <script>
  export default {
    name: 'Navbar',
  }
  </script>
  
  <style scoped>
  /* Add styles specific to the Navbar component if necessary */
  </style>
  