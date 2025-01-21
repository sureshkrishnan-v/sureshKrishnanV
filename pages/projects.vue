<template>
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-5">
    <div v-for="project in projects" :key="project.id" class="group relative rounded-lg bg-slate-800 shadow-lg hover:scale-105 transition-all">
      <img src="../public/portfolio-background.jpg" alt="Project Screenshot" class="w-full h-48 object-cover rounded-t-lg">
      <div class="p-4">
        <h3 class="text-xl font-semibold text-white mb-3">{{ project.title }}</h3>
        <p class="text-sm text-gray-300 mb-4">{{ project.description }}</p>
        <a  :href="project.link" class="text-blue-500 hover:text-blue-400 text-sm font-medium">View Project</a>
      </div>
      <div class="absolute top-0 left-0 right-0 bottom-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-all rounded-lg"></div>
    </div>
  </div>
</template>

<script setup>
const projects = [
  {
    id: 1,
    title: "Project 1",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum.",
    image: "/path/to/image1.jpg",
    link: "/projects/project1"
  },
  {
    id: 2,
    title: "Project 2",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum.",
    image: "",
    link: "/projects/project2"
  },  {
    id: 2,
    title: "Project 2",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum.",
    image: "",
    link: "/projects/project2"
  },
  // Add more projects here
];
</script>

<style scoped>
.group:hover .absolute {
  opacity: 1;
}
</style>
