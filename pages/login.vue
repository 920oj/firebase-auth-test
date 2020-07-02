<template>
  <div class="login">
    <Header />
    <div class="w-full h-screen flex justify-center items-center flex-col">
      <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div class="mb-4">
          <label class="block text-gray-700 text-sm font-bold mb-2" for="username">Email</label>
          <input
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            v-model="mail"
            id="mail"
            type="mail"
            placeholder="Email"
          />
        </div>
        <div class="mb-6">
          <label class="block text-gray-700 text-sm font-bold mb-2" for="password">Password</label>
          <input
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            v-model="password"
            id="password"
            type="password"
            placeholder="******************"
          />
        </div>
        <div class="flex items-center justify-between">
          <button
            class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="button"
            @click="login()"
          >Login</button>
        </div>
      </form>
      <nuxt-link to="/signup">Sign up</nuxt-link>
      <nuxt-link to="/">←Back to home</nuxt-link>
    </div>
  </div>
</template>

<script>
import Header from '~/components/TheHeader.vue';
export default {
  data() {
    return {
      mail: '',
      password: '',
    };
  },
  components: {
    Header,
  },
  methods: {
    login() {
      this.$fireAuth
        .signInWithEmailAndPassword(this.mail, this.password)
        .then(user => {
          console.log('ログインに成功しました。');
          this.$store.commit('logout');
          this.$router.push('/');
        })
        .catch(err => {
          console.log(err);
        });
    },
  },
};
</script>

<style>
</style>