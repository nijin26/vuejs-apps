<template>
  <div class="flex w-full flex-wrap">
    <h1 class="w-full text-center text-2xl font-bold my-5">Markdown App</h1>
    <section class="flex m-auto w-10/12 h-screen">
      <article class="w-1/2 border">
        <textarea
          class="w-full h-full p-2 text-lg"
          :value="text"
          @input="update"
        ></textarea>
      </article>
      <article
        class="w-1/2 border bg-gray-100 p-2 text-lg"
        v-html="markedText"
      ></article>
    </section>
  </div>
</template>

<script>
import marked from "marked";
import { debounce } from "../utilities/mixins/debounce";
export default {
  mixins: [debounce],
  data() {
    return {
      text: "",
    };
  },
  methods: {
    update(e) {
      this.text = e.target.value;
      const task = () => (this.text = e.target.value);
      this.debounce(task, 500);
    },
  },
  computed: {
    markedText() {
      return marked(this.text);
    },
  },
};
</script>

<style></style>
