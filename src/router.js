import { createRouter, createWebHistory } from "vue-router";
import Home from "./pages/Home.vue";
import About from "./pages/About.vue";
import Contact from "./pages/Contact.vue";
import Fotoreportaje from "./pages/Fotoreportaje.vue";
import Portales from "./pages/Portales.vue";
import Desarrollo from "./pages/Desarrollo.vue";

const routes = [
  { path: "/", component: Home },
  { path: "/about", component: About },
  { path: "/contact", component: Contact },
  { path: "/shows", component: Contact },
  { path: "/fotoreportaje", component: Fotoreportaje },
  { path: "/desarrollo", component: Desarrollo },
  { path: "/portales", component: Portales },
];

const history = createWebHistory();

const router = createRouter({
  history,
  routes,
});

export default router;
