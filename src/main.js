import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap";
import "jquery";
import "popper.js";
import "bootstrap/dist/js/bootstrap.bundle.min";

createApp(App).use(router).mount("#app");
