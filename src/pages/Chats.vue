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
            :class="chat.uid === uid ? 'text-right' : ''"
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
import { computed, onMounted, reactive } from "vue";
import { chatRef } from "../utilities/firebase";
import { useStore } from "vuex";
export default {
  setup() {
    const state = reactive({
      chats: [],
      message: "",
    });

    const store = useStore();
    const uid = computed(() => store.state.authUser.uid);

    onMounted(async () => {
      chatRef.on("child_added", (snapshot) => {
        state.chats.push({ key: snapshot.key, ...snapshot.val() });
      });
    });

    const onSubmit = () => {
      const newChat = chatRef.push();
      newChat.set({ uid: state.uid, message: state.message });
    };

    return { state, onSubmit, uid };
  },
};
</script>

<style></style>
