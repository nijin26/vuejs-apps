<template>
  Chats
</template>

<script>
import { onMounted } from "vue";

import firebase from "../utilities/firebase";
export default {
  setup() {
    onMounted(() => {
      const db = firebase.database();
      console.log(db);
    });
  },
};
</script>

<style></style>
