/**
 * main.js
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */

// Plugins
import { registerPlugins } from "@/plugins";

// Components
import App from "./App.vue";

// Composables
import { createApp } from "vue";
import { createI18n } from 'vue-i18n'
import { surveyPlugin } from "survey-vue3-ui";

// Importando as mensagens de localização
import enMessages from "./locales/en-US";
import ptMessages from "./locales/pt-BR";

const i18n = createI18n({
  legacy: false,
  locale: 'en', // set locale
  fallbackLocale: 'en', // set fallback locale
  messages: {
    en: enMessages,
    pt: ptMessages
  }
})

const app = createApp(App);
app.use(surveyPlugin);
app.use(i18n);

registerPlugins(app);

app.mount("#app");
