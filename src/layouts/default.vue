<template>
  

    <v-app-bar>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

      <v-app-bar-title>TerraSurvey</v-app-bar-title>

      <v-menu>
        <template v-slot:activator="{ props }">
          <v-btn icon v-bind="props">
            <v-icon style="margin-right: 6px;">
              {{ selectedLanguage === 'en' ? 'mdi-translate' : 'mdi-translate' }}</v-icon> {{ locale }}
          </v-btn>
        </template>
        <v-list>
          <v-list-item v-for="(option, index) in languageOptions" :value="index" :key="option.value"
            @click="setLanguage(option.value)">
            <v-list-item-title>{{ option.text }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>

      <v-btn icon @click="toggleTheme" style="margin-left: 6px;">
        <v-icon>{{ theme.global.current.value.dark ? 'mdi-white-balance-sunny' : 'mdi-weather-night' }}</v-icon>
      </v-btn>


    </v-app-bar>

    <v-navigation-drawer v-model="drawer">

      <v-divider></v-divider>

      <v-list>
        <v-list-item v-for="[icon, text, link_url] in links" :key="icon" :prepend-icon="icon" :title="text" link
          @click="() => $router.push(link_url)"></v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app id="inspire">


    <v-main>
      <v-container class="py-0 px-6" fluid>
        <router-view></router-view>
      </v-container>
    </v-main>
  </v-app>

  <v-footer class="d-flex flex-column align-items-center justify-content-center">
    <div class="px-4 py-2 bg-primary text-center w-100">
      <p>
       {{ t('message.app_text_copyrigth', { app_name: $t('message.app_name') }) }}
      </p>
    </div>

  </v-footer>

</template>

<script setup>
// IMPORTS
import { ref } from 'vue'
import { useTheme } from 'vuetify'
import { useI18n } from 'vue-i18n';

// VARIABLES
const { t } = useI18n(); // Usando useI18n para acessar o método t

const { locale } = useI18n();
const selectedLanguage = ref(localStorage.getItem('preferredLanguage') || 'en');
locale.value = selectedLanguage.value;
const keyTheme = "theme";

// ARRAYS
const languageOptions = [
  { text: 'English (en_US)', value: 'en' },
  { text: 'Português (pt_BR)', value: 'pt' },
];

const refreshDrawer = () => {
  return  [
    // Home page
    ['mdi-home', t('message.menu_drawer_label_home'), '/'],
    // My Surveys
    ['mdi-form-select', t('message.menu_drawer_label_surveys'), '/survey/list'],
    // Archived
    ['mdi-archive', t('message.menu_drawer_label_archived'), '/survey/archived'],
    // Settings
    ['mdi-cog', t('message.menu_drawer_label_settings'), '/settings'],
    // About
    ['mdi-information', t('message.menu_drawer_label_about'), '/about'],
  ];
};

const links = ref(refreshDrawer());


const drawer = ref(null)
const theme = useTheme()

// INITIALIZE THEME
if (localStorage.getItem(keyTheme)) {
  let themeValue = localStorage.getItem(keyTheme)
  if (themeValue === 'dark') {
    theme.global.name.value = 'dark'
  } else {
    theme.global.name.value = 'light'
    localStorage.setItem(keyTheme, 'light')
  }
}

// FUNCTIONS
const setLanguage = (language) => {
  selectedLanguage.value = language;
  locale.value = language;
  localStorage.setItem('preferredLanguage', language);

  // Reload the page to apply the new language
  // Refresh drawer
  links.value = refreshDrawer();

};

// Toggle theme
function toggleTheme() {
  if (theme.global.current.value.dark) {
    theme.global.name.value = 'light'
    localStorage.setItem(keyTheme, 'light')
  } else {
    theme.global.name.value = 'dark'
    localStorage.setItem(keyTheme, 'dark')
  }
}

</script>
