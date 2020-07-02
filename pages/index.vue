<template>
  <div class="index">
    <Header />
    <div class="container mx-auto">
      <h1 class="text-2xl my-4">Firebase Auth Test</h1>
      <button
        class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        @click="$router.push('/signup')"
      >Signup</button>
      <button
        class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        @click="$router.push('/login')"
      >Login</button>
    </div>
  </div>
</template>

<script>
import Header from '~/components/TheHeader.vue';

export default {
  components: {
    Header,
  },
};
</script>

<style>
</style>
