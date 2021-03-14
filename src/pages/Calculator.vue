<template>
  <section class="flex w-full">
    <div class="m-auto">
      <h1 class="text-2xl text-center">
        Calculator
      </h1>
      <p
        class="text-3xl text-right mt-10 mb-2 w-43 overflow-x-scroll"
        style="direction:rtl"
        :value="currValue"
      >
        {{ currValue }}
      </p>
      <hr />
      <small> {{ selectedOperation }} </small>
      <hr />
      <button
        class="my-5 w-full border rounded border-gray-300"
        @click="currValue = ''"
      >
        Clear
      </button>
      <div class=" grid grid-cols-4 gap-1">
        <button
          @click="pressed('1')"
          class="p-2 border rounded shadow w-10 h-10"
        >
          1
        </button>
        <button
          @click="pressed('2')"
          class="p-2 border rounded shadow w-10 h-10"
        >
          2
        </button>
        <button
          @click="pressed('3')"
          class="p-2 border rounded shadow w-10 h-10"
        >
          3
        </button>
        <button
          @click="pressed('+')"
          class="p-2 border rounded shadow w-10 h-10"
        >
          +
        </button>
        <button
          @click="pressed('4')"
          class="p-2 border rounded shadow w-10 h-10"
        >
          4
        </button>
        <button
          @click="pressed('5')"
          class="p-2 border rounded shadow w-10 h-10"
        >
          5
        </button>
        <button
          @click="pressed('6')"
          class="p-2 border rounded shadow w-10 h-10"
        >
          6
        </button>
        <button
          @click="pressed('-')"
          class="p-2 border rounded shadow w-10 h-10"
        >
          -
        </button>
        <button
          @click="pressed('7')"
          class="p-2 border rounded shadow w-10 h-10"
        >
          7
        </button>
        <button
          @click="pressed('8')"
          class="p-2 border rounded shadow w-10 h-10"
        >
          8
        </button>
        <button
          @click="pressed('9')"
          class="p-2 border rounded shadow w-10 h-10"
        >
          9
        </button>
        <button
          @click="pressed('*')"
          class="p-2 border rounded shadow w-10 h-10"
        >
          *
        </button>
        <button
          @click="pressed('0')"
          class="p-2 border rounded shadow  h-10 col-span-2"
        >
          0
        </button>
        <button
          @click="pressed('=')"
          class="p-2 border rounded shadow  h-10 2-10"
        >
          =
        </button>
        <button
          @click="pressed('/')"
          class="p-2 border rounded shadow  h-10 2-10"
        >
          /
        </button>
      </div>
    </div>
  </section>
</template>

<script>
import { onMounted, ref } from "vue";
export default {
  setup() {
    const operations = ["+", "-", "*", "/"];
    const numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
    const currValue = ref("");
    const prevValue = ref("");
    const selectedOperation = ref("");

    onMounted(() => {
      window.addEventListener("keydown", (e) => {
        pressed(e.key);
        console.log(e);
      });
    });

    const pressed = (num) => {
      if (num === "=") calculate();
      else if (operations.includes(num)) applyOperation(num);
      else if (numbers.includes(num)) appendNum(num);
    };

    const appendNum = (num) => (currValue.value = currValue.value + num);
    const applyOperation = (num) => {
      prevValue.value = currValue.value;
      currValue.value = "";
      selectedOperation.value = num;
    };
    const calculate = () => {
      switch (selectedOperation.value) {
        case "+":
          currValue.value = +prevValue.value + +currValue.value;
          break;
        case "-":
          currValue.value = prevValue.value - currValue.value;
          break;
        case "*":
          currValue.value = prevValue.value * currValue.value;
          break;
        case "/":
          currValue.value = prevValue.value / currValue.value;
          break;
      }
    };

    return { pressed, currValue, selectedOperation };
  },
};
</script>

<style></style>
