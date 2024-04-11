<template>
  <div>
    <div class="d-flex align-center">
      <h1 class="flex-grow-1">Configurações</h1>
    </div>

    <v-card class="elevation-2" outlined>
      <v-card-text>
        <v-list>

          <v-list-item>
            <v-list-item-title>
              Selecione o tema do aplicativo
            </v-list-item-title>
            <v-list-item-subtitle>
              <v-select v-model="settings.blueprint.selected" :items="settings.blueprint.items"
                label="Clique para selecionar"></v-select>
            </v-list-item-subtitle>
          </v-list-item>

          <v-list-item>
            <v-list-item-title>Ativar tema escuro</v-list-item-title>
            <v-list-item-subtitle>
              <v-switch v-model="settings.darkmode" label="Tema Escuro"></v-switch>
            </v-list-item-subtitle>
          </v-list-item>

          <v-list-item>
            <v-list-item-title>
              Selecione o tipo de exibição para formulários

            </v-list-item-title>
            <v-list-item-subtitle>
              <v-select v-model="settings.forms_display_type.selected" :items="settings.forms_display_type.items"
                label="Clique para selecionar"></v-select>
            </v-list-item-subtitle>
          </v-list-item>

          <v-btn @click="saveSettings()" color="primary" dark large outlined>
            Salvar Configurações
          </v-btn>

        </v-list>
      </v-card-text>
    </v-card>
  </div>

</template>


<script setup>
// ref
import { ref } from 'vue'
import { useTheme } from 'vuetify'

// VARS
const theme = useTheme()
const settings = ref({
  darkmode: ref(localStorage.getItem('theme') === 'dark' || false),
  blueprint: {
    items: [
      "md1",
      "md2",
      "md3"
    ],
    selected: ref(localStorage.getItem('blueprint') || "md1")
  },
  forms_display_type: {
    items: [
      "Table",
      "Cards"
    ],
    selected: ref(localStorage.getItem('forms_display_type') || "Cards")
  }
})

// METHODS
const saveSettings = () => {
  // Save blueprint theme settings
  console.log("Save blueprint theme settings")
  localStorage.setItem('blueprint', settings.value.blueprint.selected)

  // Save dark mode settings
  console.log("Save dark mode settings")
  if (settings.value.darkmode === true) {
    theme.global.name.value = 'dark'
    localStorage.setItem('theme', 'dark')
  } else {
    theme.global.name.value = 'light'
    localStorage.setItem('theme', 'light')
  }

  // Save forms display settings
  console.log("Save forms display settings")
  localStorage.setItem('forms_display_type', settings.value.forms_display_type.selected)

  // Reload the page
  location.reload()
}

</script>

<style scoped></style>
