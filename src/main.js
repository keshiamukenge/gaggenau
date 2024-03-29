import { createApp } from "vue";
import { createPinia } from "pinia";
import { TroisJSVuePlugin } from "troisjs";

import App from "./App.vue";
import router from "./router";

import "./assets/scss/reset.scss";
import "./assets/scss/main.scss";
import "./assets/scss/locomotive-scroll.scss";

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(TroisJSVuePlugin);

app.mount("#app");
