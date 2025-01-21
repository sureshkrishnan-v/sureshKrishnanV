<template>
  <div class="bg-black text-white  flex flex-col items-center">
    <h1 class="text-4xl font-bold mb-4">Contact Me</h1>
    <p class="mb-8 text-lg text-gray-400">
      Feel free to reach out to me through the form below.
    </p>
    <form 
      @submit.prevent="handleSubmit" 
      class="bg-gray-800 p-6 rounded-lg shadow-lg max-w-md w-full space-y-4"
    >
      <div>
        <label for="name" class="block text-sm font-medium mb-2">Name</label>
        <input
          v-model="formData.name"
          id="name"
          type="text"
          placeholder="Enter your name"
          class="w-full p-3 rounded bg-gray-700 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
      </div>
      <div>
        <label for="email" class="block text-sm font-medium mb-2">Email</label>
        <input
          v-model="formData.email"
          id="email"
          type="email"
          placeholder="Enter your email"
          class="w-full p-3 rounded bg-gray-700 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
      </div>
      <div>
        <label for="message" class="block text-sm font-medium mb-2">Message</label>
        <textarea
          v-model="formData.message"
          id="message"
          placeholder="Write your message"
          class="w-full p-3 rounded bg-gray-700 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          rows="4"
          required
        ></textarea>
      </div>
      <button
        type="submit"
        class="w-full py-3 bg-blue-600 text-white rounded hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-400 font-semibold"
      >
        Submit
      </button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      formData: {
        name: '',
        email: '',
        message: '',
      },
    };
  },
  methods: {
    async handleSubmit() {
      try {
        const response = await this.$axios.post('/api/send-email', this.formData);

        if (response.status === 200) {
          alert('Your message has been sent successfully!');
          this.formData = { name: '', email: '', message: '' }; 
        } else {
          alert('Failed to send your message. Please try again later.');
        }
      } catch (error) {
        console.error('Error sending message:', error);
        alert('An error occurred. Please try again.');
      }
    },
  },
};
</script>
