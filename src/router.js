import { createRouter, createWebHistory } from "vue-router";

import Home from "./pages/Home";
import MarvelHeros from "./pages/MarvelHeros";
import Calendar from "./pages/Calender";

const routes = [
  { path: "/", component: Home },
  { path: "/marvel-heros", component: MarvelHeros },
  { path: "/calendar", component: Calendar },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
