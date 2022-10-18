import { createRouter, createWebHistory } from "vue-router";
import Home from "@/components/layout/Home.vue";
import About from "@/components/layout/About.vue";
import Client from "@/components/layout/Client.vue";
import HowToUse from "@/components/layout/HowToUse.vue";
import Contact from "@/components/layout/Contact.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    component: About,
  },
  {
    path: "/client",
    name: "Client",
    component: Client,
  },
  {
    path: "/how-to-use",
    name: "HowToUse",
    component: HowToUse,
  },
  {
    path: "/contact",
    name: "Contact",
    component: Contact,
  },
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
