<template>
  <nav class="navbar bg-black p-4">
    <div class="flex items-center justify-between">
      <!-- Brand/Name -->
      <div class="text-white text-2xl font-semibold tracking-wide">Suresh Krishnan V</div>
      
      <!-- Navigation Links -->
      <ul class="flex space-x-6">
        <li>
          <NuxtLink to="/" class="nav-link text-white hover:text-red-500">
            Home
          </NuxtLink>
        </li>
        <li>
          <NuxtLink to="/about" class="nav-link text-white hover:text-red-500">
            About
          </NuxtLink>
        </li>
        <li>
          <NuxtLink to="/projects" class="nav-link text-white hover:text-red-500">
            Projects
          </NuxtLink>
        </li>
        <li>
          <NuxtLink to="/contact" class="nav-link text-white hover:text-red-500">
            Contact
          </NuxtLink>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Navbar",
};
</script>

<style scoped>
/* Add custom styles for the navbar if needed */
</style>
