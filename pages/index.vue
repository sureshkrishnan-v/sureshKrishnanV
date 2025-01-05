<template>
  <div class="relative bg-black text-white min-h-screen p-8 flex flex-col md:flex-row items-center">
    <div class="absolute inset-0 bg-cover bg-center opacity-50" style="background-image: '@/public/portfolio-background.jpg'"></div>
    <div class="relative md:w-1/2">
      <h1 class="text-6xl font-bold">Welcome to My Portfolio</h1>
      <p class="mt-5 ml-2 text-lg">
        Hi, I'm Suresh Krishnan V, 
        <span id="typedText" class="text-accent"></span>
      </p>
      <NuxtLink to="/projects" class="mt-3 bg-primary text-white hover:bg-red text-text font-medium py-2 ml-2 rounded inline-block">
        View My Work
      </NuxtLink>
    </div>
    <div class="relative md:w-1/2 mt-8 md:mt-0 md:ml-8 flex justify-center">
      <!-- <img 
        src="@/public/portfolio-background.jpg" 
        alt="An illustrative IT tech image" 
        class="rounded shadow-lg max-w-full h-auto"
      > -->
    </div>
  </div>
</template>

<script setup>
import { onMounted } from 'vue';
import Typed from 'typed.js';

onMounted(() => {
  const options = {
    strings: [
      "I am a Full Stack Developer.", 
      "I am a Problem Solver.", 
      "I am a Web Developer.", 
      "I am a Software Developer."
    ],
    typeSpeed: 50,
    backSpeed: 50,
    loop: true,
  };

  // Initialize Typed.js
  new Typed('#typedText', options);
});
</script>

