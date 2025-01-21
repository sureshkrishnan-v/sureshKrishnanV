<template>
  <div class=" text-white min-h-fit mt-10 flex items-center justify-center">
    <div class="max-w-4xl bg-gray-800 bg-opacity-90 p-10 rounded-xl shadow-2xl">
      <h1 class="text-5xl font-extrabold mb-6 text-center bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500">
        About Me
      </h1>
      <p class="text-lg leading-relaxed text-gray-300">
        Hi, I’m <span class="text-blue-400 font-bold">Suresh Krishnan V</span>, a passionate and adaptable <span class="text-green-400 font-bold">Software Developer</span> with an year of professional experience in 
        developing and maintaining web applications. My expertise lies in <span class="text-purple-400 font-bold">Golang</span>, <span class="text-purple-400 font-bold">Vue.js</span>, and <span class="text-purple-400 font-bold">SQL</span>, 
        with a focus on designing efficient back-end systems and seamless front-end integrations.
      </p>

      <p class="mt-4 text-lg leading-relaxed text-gray-300">
        I take pride in creating impactful solutions, as showcased by projects like a <span class="text-green-400 font-bold">Medicine Billing Application</span> 
        and a <span class="text-green-400 font-bold">Bus Reservation System</span>. These projects highlight my ability to design secure user authentication systems, 
        optimize database operations, and craft intuitive user interfaces.
      </p>

      <p class="mt-4 text-lg leading-relaxed text-gray-300">
        Transitioning from <span class="text-yellow-400 font-bold">Mechanical Engineering</span> to software development reflects my commitment to 
        adaptability and growth. I thrive on tackling challenges, learning new technologies, and collaborating with teams to build innovative solutions.
      </p>

      <div class="mt-6 flex justify-center">
        <button
          href="https://github.com/sureshkrishnan-v"
          target="_blank"
          class="text-white bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded-lg mx-2 shadow-lg transition"
        >
          GitHub
        </button>
        <button
          href="https://www.linkedin.com/in/sureshkrishnanv"
          target="_blank"
          class="text-white bg-green-500 hover:bg-green-600 px-4 py-2 rounded-lg mx-2 shadow-lg transition"
        >
          LinkedIn
        </button>
        <button
        @click="routeToContact"
          class="text-white bg-gray-700 hover:bg-gray-800 px-4 py-2 rounded-lg mx-2 shadow-lg transition"
        >
          Contact Me
        </button>
      </div>
    </div>
  </div>
</template>

<script>

import {useRouter} from "vue-router"

export default {
  setup() {
    const router = useRouter();
    const routeToContact = ()=> {
  router.push("/contact")
}
return {
  routeToContact
}

  }
}
</script>
