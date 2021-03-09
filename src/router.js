import { createRouter, createWebHistory } from "vue-router";

import DCHeros from "./components/DCHeros";
import Calendar from "./components/Calender";

const routes = [
  { path: "/marvel-heros", component: DCHeros },
  { path: "/calendar", component: Calendar },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
