<template>
  <button class="px-2 py-1 border rounded my-4" @click="isModalOpen = true">
    Add User
  </button>
  <teleport to="body">
    <Modal v-if="isModalOpen" @close-login-model="isModalOpen = false">
      <template #title>
        Add New User
      </template>
      <template #body>
        <form @submit.prevent="submit">
          <div class="p-2">
            <label>User Name</label>
            <input
              class="w-full p-2 rounded border"
              placeholder="User Name"
              type="text"
              v-model="state.form.name"
            />
          </div>
          <div class="p-2">
            <label>Email</label>
            <input
              class="w-full p-2 rounded border"
              placeholder="User Email"
              type="email"
              v-model="state.form.email"
            />
          </div>
          <div class="p-2">
            <label>Avatar</label>
            <input
              class="w-full p-2 rounded border"
              placeholder="Avatar URL"
              type="text"
              v-model="state.form.avatar"
            />
          </div>
          <div class="p-2">
            <input
              class="w-full p-2 rounded border hover:bg-grey-300"
              type="submit"
              value="Create"
            />
          </div>
        </form>
      </template>
    </Modal>
  </teleport>
</template>

<script>
import Modal from "../Modal";
import axios from "../../utilities/axios";

import { reactive, ref } from "vue";

export default {
  setup() {
    const isModalOpen = ref(false);
    const state = reactive({
      form: {
        name: "",
        email: "",
        avatar: "",
      },
    });

    const submit = async () => {
      await axios.post("/users", state.form);
      state.form.name = "";
      state.form.email = "";
      state.form.avatar = "";
      isModalOpen.value = false;
    };

    return { state, isModalOpen, submit };
  },

  components: {
    Modal,
  },
};
</script>

<style></style>
