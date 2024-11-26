import { createApp } from "vue";
import "./style.css";

// Import the App component
import App from "./App.vue";

// Import the global styles
import './scss/main.scss';

// Import the Vuetify plugin
import vuetify from "./plugins/vuetify";

// Create a new Vue app instance
createApp(App).use(vuetify).mount("#app");
