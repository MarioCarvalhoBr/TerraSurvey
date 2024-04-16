<template>
  <div>
    <div class="d-flex align-center">
      <h1 class="flex-grow-1">{{ $t('message.page_about_title') }}</h1>
    </div>

    <v-card class="elevation-1" outlined>
      <v-card-text>
        <v-list>
          <v-list-item>
            <h3><strong>{{ $t('message.app_name') }}</strong></h3>
            <p align="justify">
              {{ $t('message.page_about_description') }}
            </p>
          </v-list-item>

          <v-list-item>
            <h3>
              <strong>{{ $t('message.page_about_label_check_for_updates') }}</strong>
            </h3>
            <p>
              <v-btn size="small" color="primary" @click="loading = !loading" :loading="loading">
                {{ $t('message.page_about_button_check_for_updates') }}

                <template v-slot:loader>
                  <v-progress-linear indeterminate></v-progress-linear>
                </template>
              </v-btn>
            </p>
          </v-list-item>

          <v-list-item>
            <h3>
              <strong>{{ $t('message.page_about_label_hosting_site') }}</strong>
            </h3>
            <p><a :href="$t('message.page_about_link_hosting_site')" target="_blank">{{
              $t('message.page_about_link_hosting_site') }}</a></p>
          </v-list-item>

          <v-list-item>
            <h3>
              <strong>{{ $t('message.app_label_version') }}</strong>
            </h3>
            <p>{{ $t('message.app_value_version') }}</p>
          </v-list-item>

          <v-list-item>
            <h3>
              <strong>{{ $t('message.page_about_label_repository') }}</strong>
            </h3>
            <p>
              <a :href="$t('message.page_about_link_repository')" target="_blank">{{
                $t('message.page_about_link_repository')
                }}</a>
            </p>
          </v-list-item>

          <v-list-item>
            <h3>
              <strong>{{ $t('message.page_about_label_title_license') }}</strong>
            </h3>
            <p align="justify">
              {{ $t("message.page_about_text_license", { app_name: $t('message.app_name') }) }}
              <a :href="$t('message.page_about_link_license')" target="_blank">{{
                $t('message.page_about_label_name_license')
                }}</a>
            </p>

          </v-list-item>

          <v-list-item>
            <h3>
              <strong>{{ $t('message.page_about_label_authors') }}</strong>
            </h3>
            <p align="justify">
              {{ myFormatterList.format($tm('message.page_about_value_authors')) }}
            </p>
          </v-list-item>

          <v-list-item>
            <h3>
              <strong>{{ $t('message.page_about_label_contact_email') }}</strong>
            </h3>
            <p align="justify">
              <a :href="myHref">{{ $t('message.page_about_value_contact_email')}}</a>


            </p>
          </v-list-item>

        </v-list>
      </v-card-text>
    </v-card>

  </div>

</template>

<script setup>
import { ref, watch, onUpdated } from 'vue';
// Import t
import { useI18n } from 'vue-i18n';
const { t } = useI18n();

const getTextHref = () => {
  return `mailto:${t('message.page_about_value_contact_email')}?subject=${t('message.app_name')} App&body=${t('message.page_settings_text_send_email')}`;
};
const myHref = ref(getTextHref());

// VARIABLES
const loading = ref(false);
const myFormatterList = ref(new Intl.ListFormat('pt', { style: 'long', type: 'conjunction' }));

watch(loading, (val) => {
  if (!val) return;
  setTimeout(() => {
    loading.value = false;
    window.location.reload();
  }, 2000);
});

onUpdated(() => {
  myHref.value = getTextHref();
});

</script>

<style scoped></style>
