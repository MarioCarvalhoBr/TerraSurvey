<template>
  <v-app id="inspire">

    <v-app-bar class="">
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

      <v-app-bar-title>TerraSurvey</v-app-bar-title>

      <v-spacer></v-spacer>

      <v-btn icon @click="toggleTheme">
        <v-icon>{{ theme.global.current.value.dark ? 'mdi-white-balance-sunny' : 'mdi-weather-night' }}</v-icon>
      </v-btn>

    </v-app-bar>

    <v-navigation-drawer v-model="drawer">

      <v-divider></v-divider>

      <v-list>
        <v-list-item
          v-for="[icon, text, link_url] in links"
          :key="icon"
          :prepend-icon="icon"
          :title="text"
          link
          @click="() => $router.push(link_url)"

        ></v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-main>
      <v-container
        class="py-0 px-6"
        fluid
      >
      <router-view></router-view>
      </v-container>
    </v-main>
  </v-app>

  <v-footer class="d-flex flex-column align-items-center justify-content-center">
  <div class="px-4 py-2 bg-primary text-center w-100">
    <p>Todos os direitos reservados 2023-{{ new Date().getFullYear() }}. TerraSurvey©.</p>
  </div>

</v-footer>

</template>

<script setup>
  import { ref } from 'vue'
  import { useTheme } from 'vuetify'

  const links = [
    // Home page
    ['mdi-home', 'Tela Inicial', '/'],
    // My Surveys
    ['mdi-form-select', 'Pesquisas', '/survey/list'],
    // Archived
    ['mdi-archive', 'Arquivados', '/survey/archived'],
    // Settings
    ['mdi-cog', 'Configurações', '/settings'],
    // About
    ['mdi-information', 'Sobre', '/about'],
  ]

  const drawer = ref(null)
  const theme = useTheme()

  // Toggle theme
  function toggleTheme () {
    if (theme.global.current.value.dark) {
      theme.global.name.value = 'light'
      localStorage.setItem('theme', 'light')
    } else {
      theme.global.name.value = 'dark'
      localStorage.setItem('theme', 'dark')
    }
  }
  // Verify if the user has a theme preference
  if (localStorage.getItem('theme')) {
    let themeValue = localStorage.getItem('theme')
    if (themeValue === 'dark') {
      theme.global.name.value = 'dark'
    } else {
      theme.global.name.value = 'light'
      localStorage.setItem('theme', 'light')
    }
  }


</script>
