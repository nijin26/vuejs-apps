<template>
  <AppHeader
    @open-login-model="isOpen = true"
    @logout-user="logOutUser"
    :isAuth="isAuth"
  />
  <div class="w-full flex">
    <router-view> </router-view>
  </div>
  <LoginModel v-if="isOpen" @close-login-model="isOpen = false" />
</template>

<script>
import AppHeader from "./components/AppHeader";
import LoginModel from "./components/LoginModel";
import firebase from "./utilities/firebase";
export default {
  data() {
    return {
      isOpen: false,
      isAuth: false,
      authUser: {},
    };
  },
  mounted() {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.isOpen = false;
        this.isAuth = true;
        this.authUser = user;
      } else {
        this.isAuth = false;
        this.authUser = {};
      }
    });
  },
  methods: {
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
  components: {
    AppHeader,
    LoginModel,
  },
};
</script>
