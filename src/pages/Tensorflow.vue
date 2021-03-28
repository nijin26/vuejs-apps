<template>
  <section class="flex w-full">
    <div class="m-auto">
      <div class="mt-10 ">
        <h1 class="text-2xl my-4">Tensorflow Object Detection</h1>
        <div class="flex justify-center">
          <img
            ref="imgRef"
            src="https://image.shutterstock.com/image-photo/mobile-smart-phone-on-white-260nw-1311685394.jpg"
            crossorigin="anonymous"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { onMounted, ref } from "vue";
require("@tensorflow/tfjs-backend-cpu");
require("@tensorflow/tfjs-backend-webgl");
const cocoSsd = require("@tensorflow-models/coco-ssd");
export default {
  setup() {
    const imgRef = ref("");
    const predictions = ref("");
    onMounted(async () => {
      const model = await cocoSsd.load();
      const predictions = await model.detect(imgRef);
      console.log("Predictions: " + predictions);
    });

    return { imgRef };
  },
};
</script>

<style></style>
