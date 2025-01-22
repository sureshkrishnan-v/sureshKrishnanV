<template>
  <div class="text-white p-7 pt-36 mx-12 flex flex-col justify-between md:flex-row items-center ">
    <!-- Left Section (Text and Button) -->
    <div class="md:w-1/2 text-center md:text-left mb-8 md:mb-0" >
      <h1 class="text-5xl font-extrabold text-transparent bg-clip-text text-white">
        Welcome to My Portfolio
      </h1>
      <p class="mt-3 text-lg md:text-xl text-gray-200">
        Hi, I'm Suresh Krishnan V,
        <span id="typedText" class=" text-lg font-semibold"></span>
      </p>

      <div class="mt-5">
        <NuxtLink to="/projects" class="bg-primary text-white hover:bg-red-600 py-2 px-6 rounded-full shadow-lg transition-all duration-300">
          View My Work
        </NuxtLink>
        <a href="/resume.pdf" class="ml-4 bg-gray-800 text-white hover:bg-gray-700 py-2 px-6 rounded-full shadow-lg transition-all duration-300">
          Download Resume
        </a>
      </div>
    </div>

    <!-- Right Section (Profile Image) -->
    <div class="w-1/2 mt-8 md:mt-0 flex justify-center">
      <img 
        src="@/public/portfolio-background.jpg" 
        alt="An illustrative IT tech image" 
        class="w-3/4 rounded-lg shadow-xl transform hover:scale-105 transition-transform duration-500"
      />
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

<style scoped>
/* Gradient text */
.text-accent {
  background-image: linear-gradient(to right, #f5a623, #d400ff);
  background-clip: text;
  color: transparent;
}

/* Button hover effect */
.bg-primary {
  background-color: #4f46e5;
}

.bg-primary:hover {
  background-color: #4338ca;
}

/* Smooth hover zoom effect on images */
img:hover {
  transform: scale(1.05);
  transition: transform 0.3s ease-in-out;
}

/* Skills section */
.bg-gray-800 {
  background-color: #2d2d2d;
}

.bg-gray-900 {
  background-color: #1f1f1f;
}

/* Scrollable skill section */
.skills-wrapper {
  overflow-x: auto;
}

/* Icons and layout for skills */
i {
  font-size: 1.5rem;
  color: white;
}
</style>
