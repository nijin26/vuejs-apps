import { createRouter, createWebHistory } from "vue-router";

import Home from "./pages/Home";
import MarvelHeros from "./pages/MarvelHeros";
import Calendar from "./pages/Calender";
import Markdown from "./pages/Markdown";
import Slider from "./pages/Slider";
import Calculator from "./pages/Calculator";
import Chats from "./pages/Chats";
import UserCrud from "./pages/UserCrud";
import { store } from "./store/index";

const routes = [
  { path: "/", component: Home },
  { path: "/marvel-heros", component: MarvelHeros },
  { path: "/calendar", component: Calendar },
  { path: "/markdown", component: Markdown },
  { path: "/slider", component: Slider },
  { path: "/calculator", component: Calculator },
  { path: "/usercrud", component: UserCrud },
  {
    path: "/chats",
    component: Chats,
    meta: { middleware: "auth" },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, _, next) => {
  if (to.meta.middleware) {
    const middleware = require(`./middleware/${to.meta.middleware}`);
    if (middleware) middleware.default(next, store);
  } else next();
});

export default router;
