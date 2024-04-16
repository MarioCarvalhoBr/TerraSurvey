<template>
  <!--
    Variáveis para usar no i8n $t('message.page_survey_code_xxxx')

    // ---------------------------------------------------------------------------------------------------------------------
    // PAGE SURVEY CODE
    // Page Survey Code Labels
    page_survey_code_label_title: "My Forms",
    page_survey_code_label_all_forms: "All Forms",
    page_survey_code_label_active_table: "Active Table",
    // Page Survey Code Buttons
    page_survey_code_button_new_form: "New Form",
    page_survey_code_button_export_csv: ".CSV",
    page_survey_code_button_export_xlsx: ".XLSX",
    // Page Survey Code Dialog Titles and Options
    page_survey_code_dialog_view_form: "View form",
    page_survey_code_dialog_edit_form: "Edit form",
    page_survey_code_dialog_copy_form: "Copy form",
    page_survey_code_dialog_delete_form: "Delete form",
    page_survey_code_dialog_new_form: "New form",
    // Page Survey Code Snackbar Messages
    page_survey_code_snackbar_form_created: "Form created successfully.",
    page_survey_code_snackbar_form_updated: "Form updated successfully.",
    page_survey_code_snackbar_form_deleted: "Form deleted successfully.",
    // Page Survey Code Alert Messages
    page_survey_code_alert_no_forms_found: "No forms found",
    page_survey_code_alert_error: "Error",
    // Page Survey Code Dialog Confirmations
    page_survey_code_dialog_confirm_delete: "Are you sure you want to delete this form? This action cannot be undone.",
    page_survey_code_dialog_confirm_copy: "Are you sure you want to copy this form?",
    page_survey_code_dialog_confirm_edit: "Are you sure you want to edit this form?",
    // Page Survey Code Snackbar Errors (Template for Errors)
    page_survey_code_snackbar_error_create: "Failed to create form: {error}",
    page_survey_code_snackbar_error_update: "Failed to update form: {error}",
    page_survey_code_snackbar_error_delete: "Failed to delete form: {error}",
    page_survey_code_snackbar_error_load: "Failed to load forms: {error}",
    // Miscellaneous
    page_survey_code_label_search_forms: "Search forms",
    page_survey_code_menu_options: "OPTIONS",
    // ---------------------------------------------------------------------------------------------------------------------

  -->
  <div>
    <div class="d-flex align-center">
      <h1 class="flex-grow-1">{{ $t('message.page_survey_code_label_title') }}</h1>
    </div>
    <div class="button-container">
      <v-btn color="primary" size="small" @click="openDialogAddForm">{{ $t('message.page_survey_code_button_new_form') }}</v-btn>
      <v-btn color="error" size="small" @click="exportFileSheet('csv')">.CSV</v-btn>
      <v-btn color="success" size="small" @click="exportFileSheet('xlsx')" style="margin-bottom: 10px;">.XLSX</v-btn>
    </div>

    <!-- My Components -->
    <my-alert-component ref="myAlert"></my-alert-component>

    <div class="d-flex align-center">
      <h3 class="flex-grow-1">{{ $t('message.page_survey_code_label_all_forms') }}</h3>
      <v-switch v-model="type_switch_active_table" :label="`${$t('message.page_survey_code_label_active_table')}`"
       hide-details color="indigo"
        @change="changeDisplayMode"></v-switch>
    </div>

    <!-- YOUR DATA HERE -->
    <!-- Forms display -->
    <v-row v-if="forms_display_type === 'Cards'">

      <v-col v-for="form in data_objects" :key="form.id" cols="12" md="6" lg="3">
        <v-card class="elevation-8" color="primary" dark>
          <v-card-title>{{ form.first_name }} {{ form.last_name }}</v-card-title>
          <v-card-text>{{ form.street_address }}, {{ form.city }}, {{ form.state }}, {{
            form.zip }},
            {{ form.country
            }}</v-card-text>
          <div class="">
            <v-card-subtitle> {{ $t('message.page_surveys_label_updated') }}: {{ new Date(form.changed).toLocaleDateString("pt-BR") }}</v-card-subtitle>
            <v-card-subtitle> {{ $t('message.page_surveys_label_created') }}: {{ new Date(form.created).toLocaleDateString("pt-BR") }}</v-card-subtitle>
          </div>
          <br>
          <v-divider></v-divider>
          <v-col cols="12">
            <v-row justify="center">
              <v-btn size="small" class="ma-2" color="blue-darken-4" icon="mdi-eye"
                @click="openDialogViewForm(form)"></v-btn>

              <v-btn size="small" class="ma-2" color="orange-darken-2" icon="mdi-pencil"
                @click="openDialogEditForm(form)"></v-btn>

              <v-btn size="small" class="ma-2" color="green-darken-2" icon="mdi-content-copy"
                @click="openDialogCopyForm(form)"></v-btn>

              <v-btn size="small" class="ma-2" color="red-darken-2" icon="mdi-delete"
                @click="openDialogDeleteForm(form)"></v-btn>
            </v-row>
          </v-col>
        </v-card>
      </v-col>
    </v-row>

    <v-row v-else-if="forms_display_type === 'Table'">

      <v-col cols="12" md="12" lg="12">

        <v-card class="elevation-2" outlined>
          <template v-slot:text>
            <v-text-field v-model="search" :label="`${$t('message.page_survey_code_label_search_forms')}`" prepend-inner-icon="mdi-magnify" variant="outlined"
              hide-details single-line></v-text-field>
          </template>

          <v-card-text>
            <v-data-table :items="data_objects" :search="search" :items-per-page="5" class="elevation-1">

              <!-- Ocultar a coluna 'Form'-->
              <template v-slot:item.data="{ item }">
                {{$t('message.page_survey_code_data_yes')}}
              </template>


              <template v-slot:item.created="{ item }">
                {{ new Date(item.created).toLocaleDateString("pt-BR") }}
              </template>
              <template v-slot:item.changed="{ item }">
                {{ new Date(item.changed).toLocaleDateString("pt-BR") }}
              </template>

              <template v-slot:item.actions="{ item }">

                <div class="d-flex align-center fill-height">
                  <v-menu>
                    <template v-slot:activator="{ props }">
                      <v-btn size="small" color="primary" v-bind="props">
                        {{ $t('message.page_survey_code_menu_options') }}
                      </v-btn>
                    </template>
                    <v-card>
                      <v-card-text>
                        <v-row justify="center">
                          <v-btn size="small" class="ma-2" color="blue-darken-4" icon="mdi-eye"
                            @click="openDialogViewForm(item)"></v-btn>

                          <v-btn size="small" class="ma-2" color="orange-darken-2" icon="mdi-pencil"
                            @click="openDialogEditForm(item)"></v-btn>

                          <v-btn size="small" class="ma-2" color="green-darken-2" icon="mdi-content-copy"
                            @click="openDialogCopyForm(item)"></v-btn>

                          <v-btn size="small" class="ma-2" color="red-darken-2" icon="mdi-delete"
                            @click="openDialogDeleteForm(item)"></v-btn>

                        </v-row>
                      </v-card-text>
                    </v-card>
                  </v-menu>
                </div>
              </template>

            </v-data-table>
          </v-card-text>
        </v-card>

      </v-col>
    </v-row>
    <!-- YOUR DATA HERE -->


    <!-- My Components -->
    <my-snackbar-component ref="mySnackbar"></my-snackbar-component>
    <my-dialog-component ref="myDialogDelete" @confirm="confirmDialogDelete"
      @close="closeDialogDelete"></my-dialog-component>
    <my-dialog-survey-component ref="myDialogSurvey" @close="closeDialogSurvey"></my-dialog-survey-component>

  </div>

</template>

<script setup>
// Libraries
import { ref, onMounted, defineComponent, onUpdated } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { utils, writeFileXLSX } from 'xlsx';


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
import surveyJson from '../../model_survey_form.json';
import { createFormDB, updateFormDB, deleteFormDB, readAllFormsDB } from '../../database/formDAO';
import { getByCodeSurveyDB } from '../../database/surveyDAO';

// SETUP SURVEYJS
// -----------------------------------------------------------------------------
const onCompleteSurveyResults = (sender) => {
  console.log('onCompleteSurveyResults:', JSON.stringify(sender.data, null, 3));
  createOrUpdateForm(sender.data);
  getAllForms(survey_code_route.value);
}
// Model SurveyJS
const survey = new Model(surveyJson);
survey.onComplete.add(onCompleteSurveyResults);
// -----------------------------------------------------------------------------

// VARIABLES AND ARRAYS
// -----------------------------------------------------------------------------
// Router and route
const router = useRouter();
const route = useRoute();

// Uso de componente
const mySnackbar = ref(defineComponent(MySnackbarComponent));
const myAlert = ref(defineComponent(MyAlertComponent));
const myDialogDelete = ref(defineComponent(MyDialogComponent));
const myDialogSurvey = ref(defineComponent(MyDialogSurveyComponent));

// VARS
const is_edit_form_dialog = ref(false)
const survey_code_route = ref(route.params.code);
const survey_search = ref(null);
const forms_display_type = ref(localStorage.getItem('forms_display_type') || "Cards");
const type_switch_active_table = ref((forms_display_type.value === 'Table') ? true : false);
const search = ref('');

// Arrays
let forms = ref([])
let data_objects = ref(null)
const form_to_edit = ref(null)
const form_to_delete = ref(null)
// -----------------------------------------------------------------------------
// DIALOG FUNCTIONS
// -----------------------------------------------------------------------------
const openDialogCopyForm = (form) => {
  console.log('openDialogCopyForm to form:', JSON.stringify(form, null, 3));

  // Edit mode
  is_edit_form_dialog.value = false
  form_to_edit.value = form;

  // Setup SurveyJS
  survey.clear();
  survey.data = form.data;
  survey.mode = 'edit';
  survey.showProgressBar = 'bottom';

  // Create the dialog
  myDialogSurvey.value.createDialog(t('message.page_survey_code_dialog_copy_form'), t('message.page_survey_code_dialog_copy_form'), 'primary', 'mdi-pencil', survey);
}
// DELETE: Functions and methods to utilize the dialog component
const openDialogDeleteForm = (form) => {
  console.log('openDialogDeleteForm to form:', JSON.stringify(form, null, 3));
  form_to_delete.value = form;
  myDialogDelete.value.createDialog(t('message.page_survey_code_dialog_delete_form'), t('message.page_survey_code_dialog_confirm_delete'), 'error', 'mdi-delete', { confirm: 'Delete', cancel: 'Close' }, { confirm: 'red', cancel: 'black' });
}
const closeDialogDelete = () => {
  console.log('Closed from MyDialogComponent');
};
const confirmDialogDelete = () => {
  console.log('Confirmed from MyDialogComponent');
  deleteForm(form_to_delete);
  getAllForms(survey_code_route.value);
};
// SURVEY: Functions and methods to utilize the dialog component
const openDialogAddForm = () => {
  // Clear the survey
  survey.clear();
  survey.mode = 'edit';
  survey.showProgressBar = 'bottom';
  // Edit mode
  is_edit_form_dialog.value = false

  myDialogSurvey.value.createDialog(t('message.page_survey_code_dialog_new_form'), t('message.page_survey_code_dialog_new_form'), 'primary', 'mdi-plus', survey);
}
const openDialogViewForm = (form) => {
  console.log('View form:', form);
  // Setup SurveyJS
  survey.data = form.data;
  survey.showProgressBar = 'none';
  survey.mode = 'display';
  // View mode
  is_edit_form_dialog.value = false

  myDialogSurvey.value.createDialog(t('message.page_survey_code_dialog_view_form'), t('message.page_survey_code_dialog_view_form'), 'primary', 'mdi-eye', survey);
}
const openDialogEditForm = (form) => {
  console.log('openDialogEditForm to form:', JSON.stringify(form, null, 3));

  // Edit mode
  is_edit_form_dialog.value = true
  form_to_edit.value = form;

  // Setup SurveyJS
  survey.clear();
  survey.data = form.data;
  survey.mode = 'edit';
  survey.showProgressBar = 'bottom';

  // Create the dialog
  myDialogSurvey.value.createDialog(t('message.page_survey_code_dialog_edit_form'), t('message.page_survey_code_dialog_edit_form'), 'primary', 'mdi-pencil', survey);
}
const closeDialogSurvey = () => {
  console.log('Closed from MyDialogSurveyComponent');
  // Clear the survey
  survey.clear();
};
// -----------------------------------------------------------------------------

// FORM DAO OPERATIONS
// -----------------------------------------------------------------------------
const createOrUpdateForm = async (data) => {
  try {
    let color = 'green';
    let idKey = 0;

    if (is_edit_form_dialog.value) {
      color = 'blue-darken-4';
      // Update form
      await updateFormDB(form_to_edit.value.id, data);
      idKey = form_to_edit.value.id;
    } else {
      const id = await createFormDB(survey_code_route.value, data);
      idKey = id;
    }
    let message = is_edit_form_dialog.value ? t('message.page_survey_code_snackbar_form_updated') : t('message.page_survey_code_snackbar_form_created');
    mySnackbar.value.createSnackbar(message, color, 3000);
    console.log(message + `. Got id: ${idKey}`);

  } catch (error) {
    let text = ''
    if (is_edit_form_dialog.value) {
      text = t('message.page_survey_code_snackbar_error_update', { error: error });
    } else {
      text = t('message.page_survey_code_snackbar_error_create', { error: error });
    }

    let color = 'red-darken-4';
    mySnackbar.value.createSnackbar(text, color, 5000);
    console.log(text);
  }
}
const deleteForm = async (form) => {
  console.log('deleteForm:', form);
  try {
    await deleteFormDB(form.value.id);
    // let message = `Form deleted successfully.`;
    let message = t('message.page_survey_code_snackbar_form_deleted');

    mySnackbar.value.createSnackbar(message, 'red-darken-4', 3000);
    console.log(message + `. Got id: ${form.value.id}`);

  } catch (error) {
    // let text = `Failed to delete form: ${error}`;
    let text = t('message.page_survey_code_snackbar_error_delete', { error: error });

    let color = 'red-darken-4';
    mySnackbar.value.createSnackbar(text, color, 5000);
    console.log(text);
  }
}
const getAllForms = async (survey_code) => {
  try {
    forms.value = await readAllFormsDB(survey_code);
    forms.value.sort((a, b) => b.id - a.id);

    // Verifica se o forms está vazio
    if (forms.value.length === 0) {
      myAlert.value.createAlert(t('message.page_survey_code_alert_no_forms_found'), t('message.page_survey_code_alert_click_new_survey'), 'info', 'mdi-information');
      data_objects.value = [];

    } else {
      myAlert.value.alert.show = false;

      data_objects.value = [];

      forms.value.forEach((form) => {
        data_objects.value.push({
          // Active Actions
          actions: true,

          // --->> YOUR DATA HERE <---
          // Info
          first_name: form.data.first_name,
          last_name: form.data.last_name,
          age_range: form.data.age_range,

          // Address
          street_address: form.data.street_address,
          city: form.data.city,
          state: form.data.state,
          zip: form.data.zip,
          country: form.data.country,

          // Contact
          email: form.data.email,
          phone: form.data.phone,
          // --->> YOUR DATA HERE <---

          // Date
          created: form.created,
          changed: form.changed,

          // Active
          active: form.active,

          // Identification
          id: form.id,
          code: form.code,
          survey_code: form.survey_code,

          // Name
          name: form.name,

          // NO MODIFY
          data: form.data
        });
      }
      );
    }

    console.log(`Loaded ${forms.value.length} forms`);
  } catch (error) {
    let text = t('message.page_survey_code_snackbar_error_load', { error: error });

    let color = 'red-darken-4';
    mySnackbar.value.createSnackbar(text, color, 5000);
    console.log(text);
  }
}
// -----------------------------------------------------------------------------

// SURVEY DAO OPERATIONS
// -----------------------------------------------------------------------------
const verifySurveyByCode = async (code) => {
  try {
    survey_search.value = await getByCodeSurveyDB(code);

    if (survey_search.value.length === 0) {
      console.log('Survey not found');
      router.push('/');
    } else {
      console.log('Survey found');
    }
  } catch (error) {
    let text = t('message.page_survey_code_snackbar_error_load', { error: error });
    console.log(text);
    router.push('/');
  }

}
// -----------------------------------------------------------------------------

// LIFECYCLE HOOKS
// -----------------------------------------------------------------------------
onMounted(async () => {
  console.log('onMounted');
  verifySurveyByCode(survey_code_route.value);
  getAllForms(survey_code_route.value);
})
onUpdated(() => {
  console.log('onUpdated');
  getAllForms(survey_code_route.value);
})
// -----------------------------------------------------------------------------

// UTILITIES FUCTIONS
const changeDisplayMode = () => {
  forms_display_type.value = type_switch_active_table.value ? 'Table' : 'Cards';
  localStorage.setItem('forms_display_type', forms_display_type.value);
  console.log('Display mode changed to:', forms_display_type.value);
}

const exportCSV = (data_objects_export, type) => {
  let csvContent = "data:text/csv;charset=utf-8,";
  csvContent += "survey_name|first_name|last_name|age_range|street_address|city|state|zip|country|email|phone|created|changed|id|code|survey_code\n";

  data_objects_export.forEach((form_data) => {
    let row = `${form_data.survey_name}|${form_data.first_name}|${form_data.last_name}|${form_data.age_range}|${form_data.street_address}|${form_data.city}|${form_data.state}|${form_data.zip}|${form_data.country}|${form_data.email}|${form_data.phone}|${new Date(form_data.created).toLocaleDateString("pt-BR")}|${new Date(form_data.changed).toLocaleDateString("pt-BR")}|${form_data.id}|${form_data.code}|${form_data.survey_code}\n`;
    csvContent += row;
  });

  var encodedUri = encodeURI(csvContent);
  var link = document.createElement("a");
  link.setAttribute("href", encodedUri);
  link.setAttribute("download", "Forms survey " + survey_search.value[0].data.name + "." + type);
  document.body.appendChild(link); // Required for FF

  link.click(); // This will download the data file named "my_data.csv".
}

const exporXLSX = (data_objects_export, type) => {
  // Convert to XLSX or XLS
  const ws = utils.json_to_sheet(data_objects_export);
  /* create workbook and append worksheet */
  const wb = utils.book_new();
  utils.book_append_sheet(wb, ws, "Data");
  /* export to XLSX or XLS*/
  if (type === 'xls') {
    writeFileXLSX(wb, "Forms survey " + survey_search.value[0].data.name + "." + type);
  } else {
    writeFileXLSX(wb, "Forms survey " + survey_search.value[0].data.name + "." + type);
  }
}


const exportFileSheet = (type) => {
  // Clone the data
  const data_objects_export = JSON.parse(JSON.stringify(data_objects.value));

  // Remove some columns
  data_objects_export.forEach((row) => {
    delete row.actions;
    delete row.active;
    delete row.data;
    delete row.name;
  });

  // Setar survey nome para todas as linhas da coluna survey_name
  data_objects_export.forEach((row) => {
    row.survey_name = survey_search.value[0].data.name;
  });

  if (type === 'xlsx' || type === 'xls') {
    exporXLSX(data_objects_export, type);
  } else if (type === 'csv') {
    exportCSV(data_objects_export, type);
  } else {
    exporXLSX(data_objects_export, 'xlsx');
  }
}

</script>

<style></style>
