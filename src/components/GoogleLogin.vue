<template>
  <section class="my-5 text-center">
    <button
      class="px-2 border border-gray-300 rounded"
      @click="loginWithGoogle"
    >
      Login With Google
    </button>
  </section>
</template>

<script>
import firebase from "../utilities/firebase";
export default {
  methods: {
    loginWithGoogle() {
      var provider = new firebase.auth.GoogleAuthProvider();
      firebase.auth().signInWithPopup(provider);
    },
  },
};
</script>

<style></style>
