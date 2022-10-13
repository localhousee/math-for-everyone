import { createRouter, createWebHistory } from "vue-router";
import Menu from "@/components/Menu.vue";

const routes = [
  { path: "/", name: "menu", component: Menu },
  { path: "/help", name: "help", component: () => import("@/components/Help.vue") }
];

const router = createRouter({
  history: createWebHistory(),
  routes: routes
});

export default router;