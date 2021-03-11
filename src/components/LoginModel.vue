<template>
  <section
    @click="$emit('close-login-model')"
    class="z-20 h-screen w-screen bg-gray-400 fixed top-0 opacity-60"
  ></section>
  <div class="absolute inset-0">
    <div class="flex h-full">
      <div class="z-30 m-auto bg-white p-2 rounded shadow w-1/3">
        <div class="border p-2">
          <h1 class="text-xl text-center">Login</h1>

          <form @click.prevent="submit">
            <div class="my-4">
              <label> Email or Username:</label>
              <input
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
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        email: "",
        password: "",
      },
    };
  },
  methods: {
    submit() {},
  },
};
</script>

<style></style>
