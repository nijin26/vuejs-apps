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
    <button v-if="!isAuth" class="mx-2" @click="openLogin">
      Login
    </button>
    <button v-if="isAuth" class="mx-2" @click="logOutUser">
      Logout
    </button>
  </nav>
</template>

<script>
import firebase from "../utilities/firebase";

export default {
  data() {
    return {
      list: [
        { title: "Home", to: "/" },
        { title: "Marvel Heros", to: "/marvel-heros" },
        { title: "Calendar", to: "/calendar" },
        { title: "Markdown", to: "/markdown" },
        { title: "Slider", to: "/slider" },
        { title: "Calculator", to: "/calculator" },
        { title: "Chats", to: "/chats" },
        { title: "User CRUD", to: "/usercrud" },
      ],
    };
  },
  computed: {
    isAuth() {
      return this.$store.state.isAuth;
    },
  },
  methods: {
    openLogin() {
      this.$store.commit("setLoginModal", true);
    },
    logOutUser() {
      firebase
        .auth()
        .signOut()
        .then(() => {
          console.log("Sign Out Succesfull");
        })
        .catch((error) => {
          console.log("Sign Out Error" + error);
        });
    },
  },
};
</script>

<style></style>
