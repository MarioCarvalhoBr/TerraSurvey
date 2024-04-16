export default {
  message: {
    // App strings
    app_name: 'TerraSurvey',
    app_label_version: 'Version',
    app_value_version: '1.0.0',
    app_text_copyrigth: 'All rights reserved 2023-'+ new Date().getFullYear() + '. {app_name}©.',

    // MY SURVEYJS
    my_surveyjs_page_prev_text: "Previous",
    my_surveyjs_page_next_text: "Next",
    my_surveyjs_complete_text: "Save",
    my_surveyjs_response_default: "Response registered",

    // MY COMPONENTS
    my_components_dialog_label_required_field: '* Indicates required field',

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
    page_survey_code_alert_click_new_survey: 'Click on the "New Form" button to create a new form',

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
    page_survey_code_data_yes: "Yes",
    // ---------------------------------------------------------------------------------------------------------------------

    // ---------------------------------------------------------------------------------------------------------------------
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
    page_archived_surveys_snackbar_error_create: 'Failed to create survey: {error}',
    page_archived_surveys_snackbar_error_update: 'Failed to update survey: {error}',
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
    // ---------------------------------------------------------------------------------------------------------------------

    // ---------------------------------------------------------------------------------------------------------------------
    // PAGE SURVEYS LIST
    // Labels
    page_surveys_label_my_surveys: 'My Surveys',
    page_surveys_label_updated: 'Updated',
    page_surveys_label_created: 'Created',
    // Snackbar messages
    page_surveys_snackbar_survey_created: 'Survey created successfully.',
    page_surveys_snackbar_survey_updated: 'Survey updated successfully.',
    page_surveys_snackbar_survey_deleted: 'Survey deleted successfully.',
    page_surveys_snackbar_survey_archived: 'Survey moved to archive successfully.',
    // Alert messages
    page_surveys_alert_no_surveys_found: 'No surveys found',
    page_surveys_alert_click_new_survey: 'Click on the "New Survey" button to create a new survey',
    page_surveys_alert_load_surveys_error: 'Failed to load surveys: {error}',
    page_surveys_alert_archive_survey_error: 'Failed to archive survey: {error}',
    page_surveys_alert_delete_survey_error: 'Failed to delete survey: {error}',
    page_surveys_alert_create_survey_error: 'Failed to create survey: {error}',
    page_surveys_alert_update_survey_error: 'Failed to update survey: {error}',
    page_surveys_alert_title_error: 'Error',
    // Dialog titles and messages
    page_surveys_dialog_title_delete_survey: 'Delete survey',
    page_surveys_dialog_message_delete_survey: 'Are you sure you want to delete this survey? This action cannot be undone.',
    page_surveys_dialog_title_archive_survey: 'Archive survey',
    page_surveys_dialog_message_archive_survey: 'Are you sure you want to archive this survey? This action can be undone in \'Archived\' menu.',
    // Buttons
    page_surveys_button_new_survey: 'New Survey',
    page_surveys_button_edit_survey: 'Edit Survey',
    page_surveys_button_dont_show_again: "Don't Show Again",
    page_surveys_button_close: 'Close',
    page_surveys_button_install: 'Install',
    page_surveys_button_edit: 'Edit',
    page_surveys_button_archive: 'Archive',
    page_surveys_button_delete: 'Delete',
    // ---------------------------------------------------------------------------------------------------------------------

    // ---------------------------------------------------------------------------------------------------------------------
    // PAGE SETTINGS
    page_settins_title: 'Settings',
    page_settings_label_select_material_design_theme: 'Select Material Design theme',
    page_settings_label_select_theme: 'Select theme',
    page_settings_label_set_dark_mode_theme: 'Set Dark Mode theme',
    page_settings_label_set_dark_mode: 'Dark Mode',
    page_settings_label_select_display_type_for_forms: 'Select the display view type for forms',
    page_settings_label_select_display_type: 'Select display type',
    page_settings_label_save_settings: 'Save Settings',
    page_settings_label_reset_settings: 'Reset Settings',
    page_settings_text_send_email: 'Hello, I would like to talk to you about the TerraSurvey app.',
    // ---------------------------------------------------------------------------------------------------------------------

    // ---------------------------------------------------------------------------------------------------------------------
    // HOME PAGE
    page_home_label_wellcome: 'Welcome to',
    page_home_button_reload: 'Reload',
    page_home_button_install_app_now: 'Install app now',
    page_home_dialog_text_install_app_now: 'You can install this app on your device.',
    page_home_dialog__title_install_app_now: 'Install App?',
    page_home_dialog_button_dont_show_again: 'Don\'t show again',
    page_home_dialog_button_close: 'Close',
    page_home_dialog_button_install: 'Install',
    page_home_snackbar_text_click_on_reload_button: 'Click on the "Reload" button to update the app.',
    // ---------------------------------------------------------------------------------------------------------------------

    // ---------------------------------------------------------------------------------------------------------------------
    // ABOUT PAGE
    page_about_title: 'About',
    page_about_description: 'TerraSurvey is a system designed to support the collection of data and information with the perspective of assessing the impacts produced by the land regularization of federal settlement projects under the Programa Nacional de Reforma Agrária (PNRA). The system was developed as part of studies conducted in partnership between the Universidade Federal de Mato Grosso do Sul (UFMS) and the Instituto Nacional de Colonização e Reforma Agrária (INCRA).',
    page_about_label_check_for_updates: 'Check for updates',
    page_about_button_check_for_updates: 'Update',
    page_about_label_hosting_site: 'Hosting Site',
    page_about_link_hosting_site: 'https://terrasurveyapp.web.app',
    page_about_label_repository: 'Repository',
    page_about_link_repository: 'https://github.com/MarioCarvalhoBr/TerraSurvey',
    page_about_label_title_license: 'License',
    page_about_label_name_license: 'TerraSurvey License',
    page_about_link_license: 'https://github.com/MarioCarvalhoBr/TerraSurvey/blob/main/LICENSE',
    page_about_text_license: 'All rights reserved 2023-'+ new Date().getFullYear() +'. {app_name}© is a free software. You can use it for non-commercial purposes. Questions about the use of the software, contact the project coordinator. See the License at: ',
    page_about_label_authors: 'Authors',

    page_about_value_authors: ['João Batista Sarmento dos Santos Neto', 'José Marcato Junior', 'Mário de Araújo Carvalho', 'Wesley Nunes Gonçalves', 'Kassia Tonheiro Rodrigues', 'Carolina Lino Martins P. de Camargo', 'Nadya Kalache', 'Janusa Soares de Araújo', 'Mauricio de Souza', 'Hudson Silva Borges', 'Saulo Gomes Moreira', 'Marcio Santos Araújo', 'Heber Xavier'],
    page_about_label_contact_email: 'Contact e-mail',
    page_about_value_contact_email: "joao.sarmento{'@'}ufms.br",
    page_about_label_support: 'Partners',
    // ---------------------------------------------------------------------------------------------------------------------

    // ---------------------------------------------------------------------------------------------------------------------
    //MENU DRAWER NAVIGATION
    menu_drawer_label_home: 'Home',
    menu_drawer_label_surveys: 'My Surveys',
    menu_drawer_label_archived: 'Archived',
    menu_drawer_label_settings: 'Settings',
    menu_drawer_label_about: 'About',
    // ---------------------------------------------------------------------------------------------------------------------

    hello: 'Hello {name}, welcome to your Vue.js app',
    page_test_title: 'Test',
  }
};
