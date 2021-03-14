<template>
  <section
    @click="closeModal"
    class="z-20 h-screen w-screen bg-gray-400 fixed top-0 left-0 opacity-60"
  >
    <div class="absolute inset-0">
      <div class="flex h-full">
        <div class="z-30 m-auto bg-white p-2 rounded shadow w-1/3">
          <div class="border p-2">
            <slot></slot>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  setup(_, { emit }) {
    const closeModal = () => emit("close-login-model");
    return { closeModal };
  },
};
</script>

<style></style>
