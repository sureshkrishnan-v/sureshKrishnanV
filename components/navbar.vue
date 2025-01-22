<template>
  <nav class="navbar bg-black p-4 sticky top-0 z-50">
    <div class="flex items-center justify-between">
      <!-- Brand/Name -->
      <div ><NuxtLink to="/" class="text-white text-2xl  font-semibold tracking-wide ml-12">Suresh Krishnan V</NuxtLink></div>
      
      <!-- Navigation Links -->
      <ul class="flex space-x-6 mr-20">
        <li>
          <NuxtLink to="/" class="nav-link text-white hover:bg-red">
            Home
          </NuxtLink>
        </li>
        <li>
          <NuxtLink to="/about" class="nav-link text-white hover:bg-red">
            About
          </NuxtLink>
        </li>
        <li>
          <NuxtLink to="/projects" class="nav-link text-white hover:bg-red">
            Projects
          </NuxtLink>
        </li>
        <li>
          <NuxtLink to="/contact" class="nav-link text-white hover:bg-red">
            Contact
          </NuxtLink>
        </li>
      </ul>
      
    </div><div></div>
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
