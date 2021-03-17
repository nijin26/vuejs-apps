import { createRouter, createWebHistory } from "vue-router";

import Home from "./pages/Home";
import MarvelHeros from "./pages/MarvelHeros";
import Calendar from "./pages/Calender";
import Markdown from "./pages/Markdown";
import Slider from "./pages/Slider";
import Calculator from "./pages/Calculator";
import Chats from "./pages/Chats";

const routes = [
  { path: "/", component: Home },
  { path: "/marvel-heros", component: MarvelHeros },
  { path: "/calendar", component: Calendar },
  { path: "/markdown", component: Markdown },
  { path: "/slider", component: Slider },
  { path: "/calculator", component: Calculator },
  { path: "/chats", component: Chats },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
