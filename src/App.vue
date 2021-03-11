<template>
  <AppHeader @open-login-model="isOpen = true" />
  <div class="w-full flex">
    <router-view> </router-view>
  </div>
  <LoginModel v-if="isOpen" @close-login-model="isOpen=false" />
</template>

<script>
import AppHeader from "./components/AppHeader";
import LoginModel from "./components/LoginModel";
export default {
  data() {
    return {
      isOpen: false,
    };
  },
  components: {
    AppHeader,
    LoginModel,
  },
};
</script>
