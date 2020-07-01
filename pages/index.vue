<template>
  <div class="index">
    <div class="container mx-auto">
      <h1 class="text-2xl">Firebase Auth Test</h1>
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
export default {};
</script>

<style>
</style>
