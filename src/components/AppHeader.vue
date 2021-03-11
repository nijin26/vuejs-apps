<template>
  <nav
    class="w-full  bg-gradient-to-tr from-blue-800 to-blue-600 text-white px-4 py-2"
  >
    <router-link
      v-for="link in list"
      :key="link.title"
      class="mx-2"
      :to="link.to"
      >{{ link.title }}</router-link
    >
    <button class="mx-2" @click="$emit('open-login-model')">Login</button>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      list: [
        { title: "Home", to: "/" },
        { title: "Marvel Heros", to: "/marvel-heros" },
        { title: "Calendar", to: "/calendar" },
        { title: "Markdown", to: "/markdown" },
        { title: "Slider", to: "/slider" },
      ],
    };
  },
};
</script>

<style></style>
