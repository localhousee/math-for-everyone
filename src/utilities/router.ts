import { createRouter, createWebHistory } from "vue-router";
import Menu from "@/components/Menu.vue";

const routes = [
  { path: "/", name: "menu", component: Menu },
  { path: "/game/:level", name: "game", component: () => import("@/components/Level.vue") },
  { path: "/help", name: "help", component: () => import("@/components/Help.vue") }
];

const router = createRouter({
  history: createWebHistory(),
  routes: routes
});

export default router;