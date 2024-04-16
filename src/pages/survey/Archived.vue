<template>
  <!--
    Strins do i8n:
    // PAGE ARCHIVED SURVEYS LIST
    page_archived_surveys_label_my_archived_surveys: 'My archived surveys',
    page_archived_surveys_label_updated: 'Updated',
    page_archived_surveys_label_created: 'Created',
    // Alert messages
    page_archived_surveys_alert_no_surveys_found: 'No surveys found in archive!',
    // Snackbar messages
    page_archived_surveys_snackbar_survey_recovered: 'Survey recovered successfully.',
    page_archived_surveys_snackbar_survey_deleted: 'Survey deleted successfully.',
    page_archived_surveys_snackbar_survey_updated: 'Survey updated successfully.',
    page_archived_surveys_snackbar_error_recover: 'Failed to recover survey: {error}',
    page_archived_surveys_snackbar_error_load: 'Failed to load surveys: {error}',
    page_archived_surveys_snackbar_error_delete: 'Failed to delete survey: {error}',
    // Dialog titles and messages
    page_archived_surveys_dialog_title_delete_survey: 'Delete survey',
    page_archived_surveys_dialog_title_recover_survey: 'Recover survey',
    page_archived_surveys_dialog_title_edit_survey: 'Edit survey',
    page_archived_surveys_dialog_confirm_delete: 'Are you sure you want to delete this survey? This action cannot be undone.',
    page_archived_surveys_dialog_confirm_recover: 'Are you sure you want to recover this survey?',
    // Buttons
    page_archived_surveys_button_new_survey: 'New Survey',
    page_archived_surveys_button_edit_survey: 'Edit Survey',
    page_archived_surveys_button_dont_show_again: "Don't Show Again",
    page_archived_surveys_button_close: 'Close',
    page_archived_surveys_button_install: 'Install',
    page_archived_surveys_button_edit: 'Edit',
    page_archived_surveys_button_archive: 'Archive',
    page_archived_surveys_button_recovery: 'Recover',
    page_archived_surveys_button_delete: 'Delete',
    Use sempre: message.string...
  -->
  <div>
    <div class="d-flex align-center">
      <h1 class="flex-grow-1">
        {{ $t('message.page_archived_surveys_label_my_archived_surveys') }}
      </h1>
    </div>

    <!-- My Components -->
    <my-alert-component ref="myAlert"></my-alert-component>

    <v-row>
      <v-col v-for="survey in surveys" :key="survey.id" cols="12" md="6" lg="3">
        <v-card class="elevation-8" color="secondary" dark>
          <v-card-title>{{ survey.data.name }} </v-card-title>
          <v-card-subtitle>{{ survey.data.description }}</v-card-subtitle>
          <v-card-text>{{ survey.data.city }}, {{ survey.data.state }}, {{ survey.data.country}}</v-card-text>
          <div class="">
            <v-card-subtitle> {{$t('message.page_archived_surveys_label_updated') }}: {{ new Date(survey.changed).toLocaleDateString("pt-BR") }}</v-card-subtitle>
            <v-card-subtitle> {{$t('message.page_archived_surveys_label_created') }}: {{ new Date(survey.created).toLocaleDateString("pt-BR") }}</v-card-subtitle>
          </div>
          <br>
          <v-divider></v-divider>
          <v-col cols="12">
            <v-row justify="center">
              <v-btn size="small" class="ma-2" color="blue-darken-4" icon="mdi-eye"
              @click="() => $router.push('/survey/' + survey.code)"></v-btn>
              <v-btn size="small" class="ma-2" color="orange-darken-2" icon="mdi-pencil"
                @click="openDialogEditSurvey(survey)"></v-btn>
              <v-btn size="small" class="ma-2" color="yellow-darken-2" icon="mdi-backup-restore"
                @click="openDialogRecoverySurvey(survey)"></v-btn>
              <v-btn size="small" class="ma-2" color="red-darken-2" icon="mdi-delete"
                @click="openDialogDeleteSurvey(survey)"></v-btn>
            </v-row>
          </v-col>
        </v-card>
      </v-col>
    </v-row>

    <!-- My Components -->
    <my-snackbar-component ref="mySnackbar"></my-snackbar-component>
    <my-dialog-component ref="myDialogDelete" @confirm="confirmDialogDelete"
      @close="closeDialogDelete"></my-dialog-component>
    <my-dialog-component ref="myDialogArchive" @confirm="confirmDialogArchive"
      @close="closeDialogArchive"></my-dialog-component>
    <my-dialog-survey-component ref="myDialogSurvey" @close="closeDialogSurvey"></my-dialog-survey-component>

  </div>

</template>

<script setup>
// Libraries
import { ref, onMounted, defineComponent, onUpdated } from 'vue';

// Extra libraries
import 'survey-core/defaultV2.min.css';
import { Model } from 'survey-core';
import { useI18n } from 'vue-i18n';
const { t } = useI18n();

// Components
import MySnackbarComponent from '../../components/MySnackbarComponent.vue';
import MyAlertComponent from '../../components/MyAlertComponent.vue';
import MyDialogComponent from '@/components/MyDialogComponent.vue';
import MyDialogSurveyComponent from '@/components/MyDialogSurveyComponent.vue';

// Imports relativos (de outros arquivos do projeto)
import surveyJson from '../../model_survey_survey.json';
import { createSurveyDB, updateSurveyDB, deleteSurveyDB, readAllArchivedSurveysDB, setActiveSurveyDB } from '../../database/surveyDAO';

// SETUP SURVEYJS
// -----------------------------------------------------------------------------
const onCompleteSurveyResults = (sender) => {
  console.log('onCompleteSurveyResults:', JSON.stringify(sender.data, null, 3));
  createOrUpdateSurvey(sender.data);
  getAllSurveys();
}
// Model SurveyJS
const surveyModel = new Model(surveyJson);
surveyModel.onComplete.add(onCompleteSurveyResults);
// -----------------------------------------------------------------------------

// VARIABLES AND ARRAYS
// -----------------------------------------------------------------------------
// Uso de componente
const mySnackbar = ref(defineComponent(MySnackbarComponent));
const myAlert = ref(defineComponent(MyAlertComponent));
const myDialogDelete = ref(defineComponent(MyDialogComponent));
const myDialogArchive = ref(defineComponent(MyDialogComponent));

const myDialogSurvey = ref(defineComponent(MyDialogSurveyComponent));

// VARS
const is_edit_survey_dialog = ref(false)

// Arrays
let surveys = ref([])
const survey_to_edit = ref(null)
const survey_to_delete = ref(null)
// -----------------------------------------------------------------------------

// DIALOG FUNCTIONS
// -----------------------------------------------------------------------------
// DELETE: Functions and methods to utilize the dialog component
const openDialogDeleteSurvey = (survey) => {
  console.log('openDialogDeleteSurvey to survey:', JSON.stringify(survey, null, 3));
  survey_to_delete.value = survey;
  myDialogDelete.value.createDialog(t('message.page_archived_surveys_dialog_title_delete_survey'), t('message.page_archived_surveys_dialog_confirm_delete'), 'error', 'mdi-delete', { confirm: t('message.page_archived_surveys_button_delete'), cancel: t('message.page_archived_surveys_button_close') }, { confirm: 'red', cancel: 'grey' });
}
const closeDialogDelete = () => {
  console.log('Closed from MyDialogComponent');
};
const confirmDialogDelete = () => {
  console.log('Confirmed from MyDialogComponent');
  deleteSurvey(survey_to_delete).then(() => {
    getAllSurveys();
  });

};
// ARCHIVE: Functions and methods to utilize the dialog component
const openDialogRecoverySurvey = (survey) => {
  console.log('openDialogRecoverySurvey to survey:', JSON.stringify(survey, null, 3));
  survey_to_delete.value = survey;
  myDialogArchive.value.createDialog(t('message.page_archived_surveys_dialog_title_recover_survey'), t('message.page_archived_surveys_dialog_confirm_recover'), 'primary', 'mdi-backup-restore', { confirm: t('message.page_archived_surveys_button_recovery'), cancel: t('message.page_archived_surveys_button_close') }, { confirm: 'green', cancel: 'grey' });
}
const closeDialogArchive = () => {
  console.log('Closed from MyDialogComponent');
};
const confirmDialogArchive = () => {
  console.log('Confirmed from MyDialogComponent');
  setActiveSurvey(survey_to_delete);
  getAllSurveys();
};

// SURVEY: Functions and methods to utilize the dialog component
/*
const openDialogViewSurvey = (survey) => {
  console.log('View survey:', survey);
  // Setup SurveyJS
  surveyModel.data = survey.data;
  surveyModel.showProgressBar = 'none';
  surveyModel.mode = 'display';
  // View mode
  is_edit_survey_dialog.value = false

  myDialogSurvey.value.createDialog('View survey', 'View survey', 'primary', 'mdi-eye', surveyModel);
}
*/
const openDialogEditSurvey = (survey) => {
  console.log('openDialogEditSurvey to survey:', JSON.stringify(survey, null, 3));

  // Edit mode
  is_edit_survey_dialog.value = true
  survey_to_edit.value = survey;

  // Setup SurveyJS
  surveyModel.clear();
  surveyModel.data = survey.data;
  surveyModel.mode = 'edit';
  surveyModel.showProgressBar = 'bottom';

  // Create the dialog
  myDialogSurvey.value.createDialog(t('message.page_archived_surveys_dialog_title_edit_survey'), t('message.page_archived_surveys_dialog_title_edit_survey'), 'primary', 'mdi-pencil', surveyModel);
}
const closeDialogSurvey = () => {
  console.log('Closed from MyDialogSurveyComponent');
  // Clear the survey
  surveyModel.clear();
};
// -----------------------------------------------------------------------------

// SURVEY DAO OPERATIONS
// -----------------------------------------------------------------------------
const createOrUpdateSurvey = async (data) => {
  try {
    let color = 'green';
    let idKey = 0;

    if (is_edit_survey_dialog.value) {
      // Update survey
      color = 'blue-darken-4';
      await updateSurveyDB(survey_to_edit.value.id, data);
      idKey = survey_to_edit.value.id;
    } else {
      // Create survey
      const id = await createSurveyDB(data);
      idKey = id;
    }
    let message = is_edit_survey_dialog.value ? t('message.page_archived_surveys_snackbar_survey_updated') : t('message.page_archived_surveys_snackbar_survey_created');

    mySnackbar.value.createSnackbar(message, color, 3000);
    console.log(message + ` Got id ${idKey}. Survey: ${JSON.stringify(data, null, 3)}`);

  } catch (error) {
    let text = is_edit_survey_dialog.value ? t('message.page_archived_surveys_snackbar_error_update', { error: error }) : t('message.page_archived_surveys_snackbar_error_create', { error: error });

    let color = 'red-darken-4';
    mySnackbar.value.createSnackbar(text, color, 5000);
    console.log(text);
  }
}
const deleteSurvey = async (survey) => {
  try {
    await deleteSurveyDB(survey.value);
    // let message = `Survey deleted successfully.`;
    let message = t('message.page_archived_surveys_snackbar_survey_deleted');

    mySnackbar.value.createSnackbar(message, 'red-darken-4', 3000);
    console.log(message + ` Got id ${survey.value.id}. Survey: ${JSON.stringify(survey, null, 3)}`);
  } catch (error) {
    let text = t('message.page_archived_surveys_snackbar_error_delete', { error: error });

    let color = 'red-darken-4';
    mySnackbar.value.createSnackbar(text, color, 5000);
    console.log(text + ` Got id ${survey.value.id}. Survey: ${JSON.stringify(survey, null, 3)}`);
  }
}
const setActiveSurvey = async (survey) => {
  try {
    await setActiveSurveyDB(survey.value.id);
    let text = t('message.page_archived_surveys_snackbar_survey_recovered');

    mySnackbar.value.createSnackbar(text, 'green', 3000);
    console.log(text + ` Got id ${survey.value.id}. Survey: ${JSON.stringify(survey, null, 3)}`);
  } catch (error) {
    let text = t('message.page_archived_surveys_snackbar_error_recover', { error: error });
    let color = 'red-darken-4';
    mySnackbar.value.createSnackbar(text, color, 5000);mySnackbar.value.createSnackbar(text, color, 5000);
    console.log(text);
  }
}
const getAllSurveys = async (survey_code) => {
  try {
    surveys.value = await readAllArchivedSurveysDB(survey_code);
    surveys.value.sort((a, b) => b.id - a.id);

    // Verifica se o surveys está vazio
    if (surveys.value.length === 0) {
      myAlert.value.createAlert(t('message.page_archived_surveys_alert_no_surveys_found'), '', 'info', 'mdi-information');
    }else{
      myAlert.value.alert.show = false;
    }

    console.log(`Loaded ${surveys.value.length} surveys`);
  } catch (error) {
    let text = t('message.page_archived_surveys_snackbar_error_load', { error: error });

    let color = 'red-darken-4';
    mySnackbar.value.createSnackbar(text, color, 5000);
    console.log(text);
  }
}
// -----------------------------------------------------------------------------

// LIFECYCLE HOOKS
// -----------------------------------------------------------------------------
onMounted(async () => {
  console.log('onMounted');
  getAllSurveys();
})
onUpdated(() => {
  console.log('onUpdated');
  getAllSurveys();
})
// -----------------------------------------------------------------------------

</script>

<style></style>
