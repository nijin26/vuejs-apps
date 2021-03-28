<template>
  <div v-if="isOpen">
    <section
      @click="closeModel"
      class="z-20 h-screen w-screen bg-gray-400 fixed top-0 opacity-60"
    ></section>
    <div class="absolute inset-0">
      <div class="flex h-full">
        <div class="z-30 m-auto bg-white p-2 rounded shadow w-1/3">
          <div class="border p-2">
            <h1 class="text-xl text-center">Login</h1>
            <GoogleLogin />
            <form @submit.prevent="submit">
              <div class="my-4">
                <label> Email or Username:</label>
                <input
                  ref="username"
                  class="rounder shadow p-2 w-full"
                  placeholder="Email Or Username"
                  v-model="form.email"
                />
              </div>
              <div class="my-4">
                <label> Password:</label>
                <input
                  v-model="form.password"
                  type="password"
                  class="rounder shadow p-2 w-full"
                  placeholder="Password"
                />
              </div>
              <div class="my-4">
                <button
                  type="submit"
                  class="w-full rounded shadow-md bg-gradient-to-r from-red-800 to bg-pink-600 p2 text-white"
                >
                  <span v-if="!isLoading">
                    Login
                  </span>
                  <span v-else>⌛</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import firebase from "../utilities/firebase";
import GoogleLogin from "./GoogleLogin";

export default {
  components: {
    GoogleLogin,
  },
  computed: {
    isOpen() {
      return this.$store.state.isOpen;
    },
  },
  data() {
    return {
      form: {
        email: "nijin@vue.com",
        password: "vue@vue",
        isLoading: false,
      },
    };
  },
  methods: {
    submit() {
      this.isLoading = true;
      firebase
        .auth()
        .signInWithEmailAndPassword(this.form.email, this.form.password)
        .then(() => {
          this.isLoading = false;
          this.form = { email: "", password: "" };
          this.closeModel();
        })
        .catch((error) => {
          this.isLoading = false;
          console.log(error.code);
          console.log(error.message);
        });
    },
    closeModel() {
      this.$store.commit("setLoginModal", false);
    },
  },
  mounted() {
    // this.$refs.username.focus();
  },
};
</script>

<style></style>
