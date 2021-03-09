<template>
  <AppHeader />

  <div class="w-full flex">
    <div class="m-auto">
      <h3 class="text-2xl text-center">Marvel Heros {{ totalHeros }}</h3>

      <ol>
        <li
          class="flex justify-between"
          v-for="(hero, index) in marvelHeros"
          :key="index"
        >
          <div>
            {{ hero.name }}
          </div>
          <button @click="removeHero(hero.id)">x</button>
        </li>
      </ol>
      <form class="mt-10" @submit.prevent="addHero">
        <input
          class="border rounded "
          v-model.trim="newHero"
          placeholder="Type Hero Name"
        />
        <button
          class="border rounded-lg bg-gradient-to-r from-red-700 to-pink-500 text-sm text-white"
          type="submit"
          :disabled="newHero.length === 0"
        >
          ADD HERO
        </button>
      </form>
    </div>
  </div>
</template>

<script>
import AppHeader from "./AppHeader";
export default {
  components: {
    AppHeader,
  },
  data() {
    return {
      marvelHeros: [
        { id: 1, name: "Iron Man" },
        { id: 2, name: "Thor" },
        { id: 4, name: "Hulk" },
        { id: 5, name: "Spider Man" },
        { id: 6, name: "Captain America" },
      ],
      newHero: "",
    };
  },
  methods: {
    addHero() {
      this.marvelHeros.push({ id: Math.random(), name: this.newHero });
      this.newHero = "";
    },
    removeHero(id) {
      this.marvelHeros = this.marvelHeros.filter((hero) => hero.id !== id);
    },
  },
  computed: {
    totalHeros() {
      return this.marvelHeros.length;
    },
  },
};
</script>
