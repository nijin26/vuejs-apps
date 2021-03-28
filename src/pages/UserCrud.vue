<template>
  <section class="flex w-full">
    <div class="mt-10 m-auto">
      <div>
        <button
          class="px-2 py-1 border rounded my-4"
          @click="isModalOpen = true"
        >
          Add User
        </button>
        <table>
          <thead>
            <tr>
              <th class="px-4 py-2 border">ID</th>
              <th class="px-4 py-2 border">Avatar</th>
              <th class="px-4 py-2 border">First Name</th>
              <th class="px-4 py-2 border">Last Name</th>
              <th class="px-4 py-2 border">Email</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="user in state.users.data" :key="user.id">
              <td class="border px-4 py-2">{{ user.id }}</td>
              <td class="border px-4 py-2">
                <img
                  :src="user.avatar"
                  alt="user.first_name"
                  class="rounded-xl"
                />
              </td>
              <td class="border px-4 py-2">{{ user.first_name }}</td>
              <td class="border px-4 py-2">{{ user.last_name }}</td>
              <td class="border px-4 py-2">{{ user.email }}</td>
            </tr>
          </tbody>
        </table>
        <div class="flex justify-between my-5">
          <button
            class="px-3 py-2 border rounded hover:shadow"
            @click="prev"
            :disabled="state.users.page === 1"
            :class="state.users.page === 1 && 'bg-gray-100'"
          >
            Prev
          </button>
          <button
            class="px-3 py-2 border rounded hover:shadow"
            @click="next"
            :disabled="state.users.page === state.users.total_pages"
            :class="
              state.users.page === state.users.total_pages && 'bg-gray-100'
            "
          >
            Next
          </button>
        </div>
      </div>
    </div>
  </section>
  <teleport to="body">
    <Modal v-if="isModalOpen" @close-login-model="isModalOpen = false">
      <template #title>
        Add New User
      </template>
      <template #body>
        <form>
          <div class="p-2">
            <label>User Name</label>
            <input
              class="w-full p-2 rounded border"
              placeholder="User Name"
              type="text"
            />
          </div>
          <div class="p-2">
            <label>Email</label>
            <input
              class="w-full p-2 rounded border"
              placeholder="User Email"
              type="email"
            />
          </div>
          <div class="p-2">
            <label>Avatar</label>
            <input
              class="w-full p-2 rounded border"
              placeholder="Avatar URL"
              type="text"
            />
          </div>
          <div class="p-2">
            <label>Avatar</label>
            <input
              class="w-full p-2 rounded border hover:bg-grey-300"
              placeholder="Avatar URL"
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
import { onMounted, reactive, ref } from "vue";
import axios from "../utilities/axios";
import Modal from "../components/Modal";

export default {
  components: {
    Modal,
  },
  setup() {
    const isModalOpen = ref(false);
    const state = reactive({
      users: {},
    });

    onMounted(async () => {
      const { data } = await axios.get(`/users`);
      state.users = data;
    });

    const next = async () => {
      const { data } = await axios.get(`/users?page=2`);
      state.users = data;
    };

    const prev = async () => {
      const { data } = await axios.get(`/users`);
      state.users = data;
    };

    return { state, next, prev, isModalOpen };
  },
};
</script>

<style></style>
