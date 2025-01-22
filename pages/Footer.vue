<template>
    <footer class="bg-gray-800 text-white py-8">
      <div class="container mx-auto px-6 md:px-12">
        
        <div class="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          
          <div class="text-center md:text-left">
            <h1 class="text-2xl font-bold">Your Company</h1>
            <p class="text-sm mt-2">© 2025 Your Company. All Rights Reserved.</p>
          </div>
  
          
          <div class="flex space-x-6 text-sm">
            <a href="#" class="hover:underline">Home</a>
            <a href="#" class="hover:underline">About</a>
            <a href="#" class="hover:underline">Services</a>
            <a href="#" class="hover:underline">Contact</a>
          </div>
  
          
          <div class="flex space-x-6">
            <a href="#" class="hover:text-gray-400">
              <i class="fab fa-facebook-f"></i> 
            </a>
            <a href="#" class="hover:text-gray-400">
              <i class="fab fa-twitter"></i> 
            </a>
            <a href="#" class="hover:text-gray-400">
              <i class="fab fa-linkedin-in"></i> 
            </a>
          </div>
        </div>
      </div>
    </footer>
  </template>
  
  <script>
  
  import { library } from '@fortawesome/fontawesome-svg-core';
  import { faFacebookF, faTwitter, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
  import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
  
  
  library.add(faFacebookF, faTwitter, faLinkedinIn);
  
  export default {
    components: {
      FontAwesomeIcon,
    },
  };
  </script>
  
  <style scoped>
  /* Optional: Additional styling for footer (if needed) */
  footer {
    font-family: 'Arial', sans-serif;
  }
  </style>
  