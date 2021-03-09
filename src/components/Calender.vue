<template>
  <div class="m-auto">
    <h1 class="text-2xl my-2 font-bold text-center">Calendar</h1>
    <section class="mx-4 flex justify-between">
      <h2 class="font-bold">{{ currentMonthName }}</h2>
      <h2 class="font-bold">{{ currentYear }}</h2>
    </section>

    <section class="flex  my-2">
      <p
        class="text-center"
        style="width:14.28%"
        v-for="day in days"
        :key="day"
      >
        {{ day }}
      </p>
    </section>
    <section class="flex flex-wrap">
      <p
        class="w-1/5 text-center"
        style="width:14.28%"
        v-for="num in startDay()"
        :key="num"
      ></p>
      <p
        class="w-1/5 text-center"
        style="width:14.28%"
        v-for="num in daysInMonth()"
        :key="num"
        :class="currentDateClass(num)"
      >
        {{ num }}
      </p>
    </section>
    <section class="flex justify-between my-4">
      <button class="border rounded-sm px-2" @click="prev">Prev</button>
      <button class="border rounded-sm px-2" @click="next">Next</button>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentDate: new Date().getDate(),
      currentMonth: new Date().getMonth(),
      currentYear: new Date().getFullYear(),
      days: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
    };
  },
  methods: {
    daysInMonth() {
      return new Date(this.currentYear, this.currentMonth + 1, 0).getDate();
    },
    startDay() {
      return new Date(this.currentYear, this.currentMonth - 1, 1).getDay();
    },
    next() {
      if (this.currentMonth === 11) {
        this.currentMonth = 0;
        this.currentYear++;
      } else {
        this.currentMonth++;
      }
    },
    prev() {
      if (this.currentMonth === 0) {
        this.currentMonth = 11;
        this.currentYear--;
      } else {
        this.currentMonth--;
      }
    },
    currentDateClass(num) {
      const calendarDate = new Date(
        this.currentYear,
        this.currentMonth,
        num
      ).toDateString();
      const currentDate = new Date().toDateString();
      return calendarDate === currentDate ? "text-blue-700 font-extrabold" : "";
    },
  },
  computed: {
    currentMonthName() {
      return new Date(this.currentYear, this.currentMonth).toLocaleString(
        "default",
        {
          month: "long",
        }
      );
    },
  },
};
</script>

<style></style>
