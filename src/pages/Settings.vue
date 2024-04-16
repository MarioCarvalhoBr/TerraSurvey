<template>
  <div>
    <div class="d-flex align-center">
      <h1 class="flex-grow-1">
        {{ $t('message.page_settins_title') }}
      </h1>
    </div>



    <v-card class="elevation-2" outlined>
      <v-card-title>

    <div class="d-flex align-center">
      <h1 class="flex-grow-1"></h1>
      <v-btn color="error" size="small" @click="resetSettings()" style="margin-right: 0px;">
      {{ $t('message.page_settings_label_reset_settings') }}
      </v-btn>
    </div>
      </v-card-title>
      <v-card-text>
        <v-list>

          <v-list-item>
            <h3>
              {{ $t('message.page_settings_label_select_material_design_theme') }}
            </h3>
            <p>
              <v-select v-model="settings.blueprint.selected" :items="settings.blueprint.items"
                :label="$t('message.page_settings_label_select_theme')"></v-select>
            </p>
          </v-list-item>

          <v-list-item>
            <h3>
              {{ $t('message.page_settings_label_set_dark_mode_theme') }}
            </h3>
            <p>
              <v-switch v-model="settings.darkmode" :label="$t('message.page_settings_label_set_dark_mode')">
              </v-switch>
            </p>
          </v-list-item>

          <v-list-item>
            <h3>
              {{ $t('message.page_settings_label_select_display_type_for_forms') }}
            </h3>
            <p>
              <v-select v-model="settings.forms_display_type.selected" :items="settings.forms_display_type.items"
                :label="$t('message.page_settings_label_select_display_type')"></v-select>
            </p>
          </v-list-item>

          <v-btn @click="saveSettings()" color="primary" dark large outlined>
            {{ $t('message.page_settings_label_save_settings') }}
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

const resetSettings = () => {
  // Reset blueprint theme settings
  console.log("Reset blueprint theme settings")
  localStorage.removeItem('blueprint')
  settings.value.blueprint.selected = "md1"

  // Reset dark mode settings
  console.log("Reset dark mode settings")
  localStorage.removeItem('theme')
  settings.value.darkmode = false

  // Reset forms display settings
  console.log("Reset forms display settings")
  localStorage.removeItem('forms_display_type')
  settings.value.forms_display_type.selected = "Cards"

  // Set en as default language
  console.log("Set en as default language")
  localStorage.setItem('preferredLanguage', 'en')

  // Reload the page
  location.reload()
}

</script>

<style scoped></style>
