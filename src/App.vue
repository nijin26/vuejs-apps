<template>
  <!-- <DCHeros /> -->
  <AppHeader />
  <div class="w-full flex">
    <router-view> </router-view>
  </div>
</template>

<script>
// import DCHeros from "./components/DCHeros";
import AppHeader from "./components/AppHeader";
export default {
  components: {
    // DCHeros,
    AppHeader,
  },
};
</script>
