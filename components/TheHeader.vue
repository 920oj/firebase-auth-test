<template>
  <div class="header h-12 w-full bg-gray-800 text-white px-4 flex justify-between items-center">
    <h1>Firebase Auth Test</h1>
    <div class="flex">
      <p class="mx-4" v-if="$store.getters.mail">{{$store.getters.mail}}でログイン中</p>
      <p class="cursor-pointer" v-if="$store.getters.isLoggedIn" @click="logout()">ログアウト</p>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    logout() {
      this.$fireAuth.signOut().then(() => {
        this.$store.commit('logout');
        this.$router.push('/');
      });
    },
  },
};
</script>

<style>
</style>