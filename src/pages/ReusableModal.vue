<template>
  <section class="flex w-full">
    <div class="m-auto">
      <h1 class="text-2xl my-5">Reusable Modal</h1>
      <Modal v-if="isModalOpen" @close-login-model="isModalOpen = false">
        <h1>My Name is Nijin</h1>
      </Modal>
      <button @click="isModalOpen = true">Open Modal</button>
    </div>
  </section>
</template>

<script>
import Modal from "../components/Modal";
import { ref } from "vue";
export default {
  components: {
    Modal,
  },
  setup() {
    const isModalOpen = ref(false);

    return { isModalOpen };
  },
};
</script>

<style></style>
