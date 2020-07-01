<template>
  <div class="header h-12 w-full bg-gray-800 text-white px-4 flex justify-between items-center">
    <h1>Firebase Auth Test</h1>
    <p v-if="$store.getters.mail">{{$store.getters.mail}}でログイン中</p>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>