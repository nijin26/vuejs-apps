<template>
  <AppHeader
    @open-login-model="isOpen = true"
    @logout-user="logOutUser"
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
    };
  },
  mounted() {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.$store.commit('setIsAuth',true)
        this.$store.commit('setAuthUser',user)
        this.isOpen = false;
      } else {
        this.$store.commit('setIsAuth',false)
       this.$store.commit('setAuthUser',{})
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
