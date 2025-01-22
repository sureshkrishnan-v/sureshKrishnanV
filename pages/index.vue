<template>
    <div class="relative  overflow-y-scroll snap-y snap-mandatory scroll-smooth">
      <!-- Sections -->
      <section id="page1" class="snap-start  flex justify-center items-center">
        <PageOne />
      </section>
      <section id="page2" class="snap-start min-h-screen flex justify-center items-center">
        <PageTwo />
      </section>
      <section id="page3" class="snap-start min-h-screen flex justify-center items-center">
        <PageThree />
      </section>
      <section id="page4" class="snap-start min-h-screen flex justify-center items-center">
        <PageFour />
      </section>
  
      <!-- Scroll to Top Button -->
      <button
        v-if="showScrollToTop"
        @click="scrollToTop"
        class="fixed bottom-5 right-5 bg-gray-800 text-white p-4 rounded-full shadow-md hover:bg-gray-700 hover:scale-105 transition-all duration-300"
      >
        ↑
      </button>

    <Footer />
    </div>
  </template>
  
  <script>
  import { defineAsyncComponent, ref, onMounted, onUnmounted } from 'vue';
  
  export default {
    components: {
      PageOne: defineAsyncComponent(() => import('./Home.vue')),
      PageTwo: defineAsyncComponent(() => import('./about.vue')),
      PageThree: defineAsyncComponent(() => import('./projects.vue')),
      PageFour: defineAsyncComponent(() => import('./contact.vue')),
      Footer: defineAsyncComponent(() => import('./Footer.vue')),
      
    },
    setup() {
      const showScrollToTop = ref(false);
  
      const handleScroll = () => {
        showScrollToTop.value = window.scrollY > 300;
      };
  
      const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      };
  
      onMounted(() => {
        window.addEventListener('scroll', handleScroll);
      });
  
      onUnmounted(() => {
        window.removeEventListener('scroll', handleScroll);
      });
  
      return { showScrollToTop, scrollToTop };
    },
  };
  </script>
  
  <style scoped>
  /* Custom scrollbar styling (Optional) */
  ::-webkit-scrollbar {
    width: 8px;
  }
  ::-webkit-scrollbar-thumb {
    background: rgba(128, 128, 128, 0.6);
    border-radius: 4px;
  }
  </style>
  