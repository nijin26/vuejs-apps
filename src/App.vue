<template>
  <AppHeader />
  <div class="w-full flex">
    <router-view> </router-view>
  </div>
  <LoginModel />
</template>

<script>
import AppHeader from "./components/AppHeader";
import LoginModel from "./components/LoginModel";
import firebase from "./utilities/firebase";
export default {
  mounted() {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.$store.commit("setIsAuth", true);
        this.$store.commit("setAuthUser", user);
        this.isOpen = false;
      } else {
        this.$store.commit("setIsAuth", false);
        this.$store.commit("setAuthUser", {});
      }
    });
  },
  components: {
    AppHeader,
    LoginModel,
  },
};
</script>
