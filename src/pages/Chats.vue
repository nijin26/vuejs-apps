<template>
  <section class="flex w-full">
    <div class="m-auto">
      <h1 class="text-center text-2xl">Real Time Chat</h1>
      <div class="border rounded-lg">
        <div class="h-64 p-2">
          <div
            v-for="chat in state.chats"
            :key="chat.message"
            class="w-full"
            :class="chat.uid === state.uid ? 'text-right' : ''"
          >
            {{ chat.message }}
          </div>
        </div>
        <div class="h-8 p-2">
          <input
            type="text"
            v-model="state.message"
            class="p-1 border rounder shadow"
            @keydown.enter="onSubmit"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { onMounted, reactive } from "vue";

import firebase from "../utilities/firebase";
export default {
  setup() {
    const state = reactive({
      chats: {},
      message: "",
      collection: null,
      uid: null,
    });
    onMounted(async () => {
      state.uid = firebase.auth().currentUser.uid;
      state.collection.on("child_added", (snapshot) => {
        state.chats = snapshot.val();
        state.message = "";
      });
    });

    const onSubmit = () => {
      const newChat = state.collection.push();
      newChat.set({ uid: state.uid, message: state.message });
    };

    return { state, onSubmit };
  },
};
</script>

<style></style>
