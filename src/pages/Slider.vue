<template>
  <div class="flex w-full flex-wrap">
    <div v-for="(color, index) in sliders" class="w-full" :key="color">
      <transition name="slide">
        <div
          v-if="currentSlide === index"
          class="absolute w-full"
          :class="color"
          style="height:350px"
        ></div>
      </transition>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentSlide: 0,
      sliders: ["bg-blue-400", "bg-yellow-400", "bg-green-500"],
      interval: "",
    };
  },
  mounted() {
    this.interval = setInterval(() => {
      this.currentSlide = this.currentSlide === 2 ? 0 : this.currentSlide + 1;
    }, 2500);
  },
  beforeUnmount() {
    clearInterval(this.interval);
  },
};
</script>

<style>
.slide-enter-active {
  transition: all 1s ease;
}

.slide-enter-from {
  opacity: 1;

  transform: translateX(-100%);
}
.slide-leave-to {
  opacity: 0;
  transform: translateX(100%);
}
</style>
