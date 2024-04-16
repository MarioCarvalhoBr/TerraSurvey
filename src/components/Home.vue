<template>
  <v-container class="fill-height">
    <v-responsive class="align-center text-center fill-height">
      <v-img height="150" src="@/assets/logo.svg" />

      <div class="text-body-2 font-weight-light mb-n1">{{$t('message.page_home_label_wellcome')}}</div>

      <h1 class="text-h2 font-weight-bold">{{$t('message.app_name')}}</h1>

      <div class="py-14" />

      <v-row class="d-flex align-center justify-center">
        <v-col cols="auto">
          <v-btn @click="() => $router.push('/')" min-width="164" rel="noopener noreferrer" target="_blank"
            variant="text">
            <v-icon icon="mdi-view-dashboard" size="large" start />

            {{ $t('message.menu_drawer_label_home') }}
          </v-btn>
        </v-col>

        <v-col cols="auto">
          <v-btn color="primary" @click="() => $router.push('/survey/list')" min-width="228" rel="noopener noreferrer"
            size="x-large" target="_blank" variant="flat">
            <v-icon icon="mdi-book-open-variant" size="large" start />

            {{ $t('message.menu_drawer_label_surveys') }}
          </v-btn>
        </v-col>

        <v-col cols="auto">
          <v-btn @click="() => $router.push('/about')" min-width="164" rel="noopener noreferrer" target="_blank"
            variant="text">
            <v-icon icon="mdi-information" size="large" start />

            {{ $t('message.menu_drawer_label_about') }}
          </v-btn>

        </v-col>
      </v-row>
      <br>

      <v-btn @click="screenButtonInstall" color="error" size="small" v-if="pwaMode === 'browser' && !dialog">
        <v-icon right>mdi-download</v-icon>
        {{ $t('message.page_home_button_install_app_now') }}
      </v-btn>
      <br>
      <br>
      <v-btn @click="() => $router.go()" color="warning" size="small">
        <v-icon right>mdi-reload</v-icon>
        {{ $t('message.page_home_button_reload') }}
      </v-btn>

      <div class="text-center pa-4">

        <v-dialog v-model="dialog" max-width="400" persistent>
          <v-card prepend-icon="mdi-download" :text="$t('message.page_home_dialog_text_install_app_now')" :title="$t('message.page_home_dialog__title_install_app_now')">

            <template v-slot:actions>
              <v-spacer></v-spacer>

              <v-btn @click="dontOpenAgain" color="error">
                {{ $t('message.page_home_dialog_button_dont_show_again') }}
              </v-btn>

              <v-btn @click="hideInstallPromotion" color="secundary">
                {{ $t('message.page_home_dialog_button_close') }}
              </v-btn>

              <v-btn @click="buttonInstall" color="primary">
                {{ $t('message.page_home_dialog_button_install') }}
              </v-btn>

            </template>
          </v-card>
        </v-dialog>
      </div>

      <my-snackbar-component ref="mySnackbar"></my-snackbar-component>

    </v-responsive>
  </v-container>
</template>

<script setup>
import { ref, onMounted, defineComponent } from 'vue';
import MySnackbarComponent from '../components/MySnackbarComponent.vue';

// Import t
import { useI18n } from 'vue-i18n';
const { t } = useI18n();

const mySnackbar = ref(defineComponent(MySnackbarComponent));
const dialog = ref(false);
const pwaMode = ref('browser');
let deferredPrompt = null;
const keyDontOpenAgain = 'dontOpenAgain';
const valueDontOpenAgain = localStorage.getItem(keyDontOpenAgain) || 1;

function getPWADisplayMode() {
  const isStandalone = window.matchMedia('(display-mode: standalone)').matches;
  if (document.referrer.startsWith('android-app://')) {
    return 'twa';
  } else if (navigator.standalone || isStandalone) {
    return 'standalone';
  }
  return 'browser';
}

const showInstallPromotion = () => {
  dialog.value = true;
};

const hideInstallPromotion = () => {
  dialog.value = false;
};

const screenButtonInstall = () => {
  showInstallPromotion();
};

const dontOpenAgain = () => {
  hideInstallPromotion();
  deferredPrompt = null;
  localStorage.setItem(keyDontOpenAgain, 0);
};

const buttonInstall = async () => {
  hideInstallPromotion();
  if (!deferredPrompt) {
    mySnackbar.value.createSnackbar(t('message.page_home_snackbar_text_click_on_reload_button'), 'info', 5000);
    return;
  }

  deferredPrompt.prompt();
  const { outcome } = await deferredPrompt.userChoice;

  if (outcome === 'accepted') {
    pwaMode.value = getPWADisplayMode();
  }
  hideInstallPromotion();
  deferredPrompt = null;
};

onMounted(() => {
  pwaMode.value = getPWADisplayMode();
  if (['standalone', 'twa'].includes(pwaMode.value)) {
    hideInstallPromotion();
    localStorage.setItem(keyDontOpenAgain, 0);
  }
});

window.addEventListener('beforeinstallprompt', (e) => {
  console.log('beforeinstallprompt event fired');
  e.preventDefault();
  deferredPrompt = e;
  if (valueDontOpenAgain == 1) {
    showInstallPromotion();
  }
});

window.addEventListener('appinstalled', () => {
  hideInstallPromotion();
  deferredPrompt = null;
});

window.matchMedia('(display-mode: standalone)').addEventListener('change', (evt) => {
  if (evt.matches) {
    console.log('DISPLAY_MODE_CHANGED', 'standalone');
  }
});
</script>
