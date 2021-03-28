<template>
  <section class="flex w-full">
    <div class="mt-10 m-auto">
      <div>
        <Create />
        <table>
          <thead>
            <tr>
              <th class="px-4 py-2 border">ID</th>
              <th class="px-4 py-2 border">Avatar</th>
              <th class="px-4 py-2 border">Name</th>
              <th class="px-4 py-2 border">Email</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="user in state.users" :key="user.id">
              <td class="border px-4 py-2">{{ user.id }}</td>
              <td class="border px-4 py-2">
                <img :src="user.avatar" alt="user.name" class="rounded-xl" />
              </td>
              <td class="border px-4 py-2">{{ user.name }}</td>
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
</template>

<script>
import { onMounted, reactive } from "vue";
import axios from "../utilities/axios";
import Create from "../components/UserCRUD/Create";

export default {
  components: {
    Create,
  },
  setup() {
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

    return { state, next, prev };
  },
};
</script>

<style></style>
