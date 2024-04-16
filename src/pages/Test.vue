<template>
  <div>
    <div class="d-flex align-center">
      <h1 class="flex-grow-1">{{ $t('message.page_test_title') }}</h1>

      <v-menu>
      <template v-slot:activator="{ props }">
        <v-btn icon v-bind="props">
            <v-icon>{{ selectedLanguage === 'en' ? 'mdi-translate' : 'mdi-translate' }}</v-icon>
          </v-btn>
      </template>
      <v-list>
        <v-list-item
          v-for="(option, index) in languageOptions"
          :value="index"
          :key="option.value" @click="setLanguage(option.value)"
        >
          <v-list-item-title>{{ option.text }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>

    </div>

    <div id="app">
      <p>{{ $t("message.hello", { name: userName }) }}</p>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useI18n } from 'vue-i18n';

const userName = ref('Mário');
const { locale } = useI18n();
const { t } = useI18n(); // Usando useI18n para acessar o método t

const selectedLanguage = ref(localStorage.getItem('preferredLanguage') || 'pt');

const languageOptions = [
  { text: 'en', value: 'en' },
  { text: 'pt', value: 'pt' },
];

const setLanguage = (language) => {
  selectedLanguage.value = language;
  locale.value = language;
  localStorage.setItem('preferredLanguage', language);
};

onMounted(() => {
  locale.value = selectedLanguage.value;
  console.log('Locale:', locale.value);
  console.log('Selected Language:', selectedLanguage.value);
  console.log('languageOptions:', languageOptions);
});
</script>
