export default {
  message: {
    // App strings
    app_name: 'TerraSurvey',
    app_label_version: 'Versão',
    app_value_version: '1.0.0',
    app_text_copyrigth: 'Todos os direitos reservados 2023-' + new Date().getFullYear() + '. {app_name}©.',

    // ---------------------------------------------------------------------------------------------------------------------
    // CÓDIGO DA PÁGINA DE FORMULÁRIOS
    // Rótulos da Página de Códigos de Formulários
    page_survey_code_label_title: "Meus Formulários",
    page_survey_code_label_all_forms: "Todos os Formulários",
    page_survey_code_label_active_table: "Mostrar Tabela",
    // Botões da Página de Códigos de Formulários
    page_survey_code_button_new_form: "Novo Formulário",
    page_survey_code_button_export_csv: ".CSV",
    page_survey_code_button_export_xlsx: ".XLSX",
    // Títulos e Opções dos Diálogos da Página de Códigos de Formulários
    page_survey_code_dialog_view_form: "Visualizar Formulário",
    page_survey_code_dialog_edit_form: "Editar Formulário",
    page_survey_code_dialog_copy_form: "Copiar Formulário",
    page_survey_code_dialog_delete_form: "Excluir Formulário",
    page_survey_code_dialog_new_form: "Novo Formulário",
    // Mensagens Snackbar da Página de Códigos de Formulários
    page_survey_code_snackbar_form_created: "Formulário criado com sucesso.",
    page_survey_code_snackbar_form_updated: "Formulário atualizado com sucesso.",
    page_survey_code_snackbar_form_deleted: "Formulário excluído com sucesso.",
    // Mensagens de Alerta da Página de Códigos de Formulários
    page_survey_code_alert_no_forms_found: "Nenhum formulário encontrado",
    page_survey_code_alert_click_new_survey: 'Clique no botão "Novo Formulário" para criar um novo formulário',

    page_survey_code_alert_error: "Erro",
    // Confirmações dos Diálogos da Página de Códigos de Formulários
    page_survey_code_dialog_confirm_delete: "Tem certeza de que deseja excluir este formulário? Esta ação não pode ser desfeita.",
    page_survey_code_dialog_confirm_copy: "Tem certeza de que deseja copiar este formulário?",
    page_survey_code_dialog_confirm_edit: "Tem certeza de que deseja editar este formulário?",
    // Erros Snackbar da Página de Códigos de Formulários (Template para Erros)
    page_survey_code_snackbar_error_create: "Falha ao criar formulário: {error}",
    page_survey_code_snackbar_error_update: "Falha ao atualizar formulário: {error}",
    page_survey_code_snackbar_error_delete: "Falha ao excluir formulário: {error}",
    page_survey_code_snackbar_error_load: "Falha ao carregar formulários: {error}",
    // Diversos
    page_survey_code_label_search_forms: "Buscar Formulários",
    page_survey_code_menu_options: "OPÇÕES",
    page_survey_code_data_yes: "Sim",
    // ---------------------------------------------------------------------------------------------------------------------

    // LISTA DE PESQUISAS ARQUIVADAS
    page_archived_surveys_label_my_archived_surveys: 'Pesquisas Arquivadas',
    page_archived_surveys_label_updated: 'Atualizado',
    page_archived_surveys_label_created: 'Criado',
    // Mensagens de alerta
    page_archived_surveys_alert_no_surveys_found: 'Nenhuma pesquisa encontrada no arquivo!',
    // Mensagens do Snackbar
    page_archived_surveys_snackbar_survey_recovered: 'Pesquisa recuperada com sucesso.',
    page_archived_surveys_snackbar_survey_deleted: 'Pesquisa excluída com sucesso.',
    page_archived_surveys_snackbar_survey_updated: 'Pesquisa atualizada com sucesso.',
    page_archived_surveys_snackbar_error_recover: 'Falha ao recuperar a pesquisa: {error}',
    page_archived_surveys_snackbar_error_load: 'Falha ao carregar pesquisas: {error}',
    page_archived_surveys_snackbar_error_delete: 'Falha ao excluir a pesquisa: {error}',
    page_archived_surveys_snackbar_error_create: 'Falha ao criar pesquisa: {error}',
    page_archived_surveys_snackbar_error_update: 'Falha ao atualizar pesquisa: {error}',
    // Títulos e mensagens de Diálogo
    page_archived_surveys_dialog_title_delete_survey: 'Excluir pesquisa',
    page_archived_surveys_dialog_title_recover_survey: 'Recuperar pesquisa',
    page_archived_surveys_dialog_title_edit_survey: 'Editar pesquisa',
    page_archived_surveys_dialog_confirm_delete: 'Tem certeza de que deseja excluir esta pesquisa? Esta ação não pode ser desfeita.',
    page_archived_surveys_dialog_confirm_recover: 'Tem certeza de que deseja recuperar esta pesquisa?',
    // Botões
    page_archived_surveys_button_new_survey: 'Nova Pesquisa',
    page_archived_surveys_button_edit_survey: 'Editar Pesquisa',
    page_archived_surveys_button_dont_show_again: 'Não mostrar novamente',
    page_archived_surveys_button_close: 'Fechar',
    page_archived_surveys_button_install: 'Instalar',
    page_archived_surveys_button_edit: 'Editar',
    page_archived_surveys_button_archive: 'Arquivar',
    page_archived_surveys_button_recovery: 'Recuperar',
    page_archived_surveys_button_delete: 'Excluir',
    // PAGE SURVEYS LIST
    // Labels
    page_surveys_label_my_surveys: 'Minhas Pesquisas',
    page_surveys_label_updated: 'Atualizado',
    page_surveys_label_created: 'Criado',
    // Snackbar messages
    page_surveys_snackbar_survey_created: 'Pesquisa criada com sucesso.',
    page_surveys_snackbar_survey_updated: 'Pesquisa atualizada com sucesso.',
    page_surveys_snackbar_survey_deleted: 'Pesquisa excluída com sucesso.',
    page_surveys_snackbar_survey_archived: 'Pesquisa arquivada com sucesso.',
    // Alert messages
    page_surveys_alert_no_surveys_found: 'Nenhuma pesquisa encontrada',
    page_surveys_alert_click_new_survey: 'Clique no botão "Nova Pesquisa" para criar uma nova pesquisa',
    page_surveys_alert_load_surveys_error: 'Falha ao carregar pesquisas: {error}',
    page_surveys_alert_archive_survey_error: 'Falha ao arquivar pesquisa: {error}',
    page_surveys_alert_delete_survey_error: 'Falha ao excluir pesquisa: {error}',
    page_surveys_alert_create_survey_error: 'Falha ao criar pesquisa: {error}',
    page_surveys_alert_update_survey_error: 'Falha ao atualizar pesquisa: {error}',
    page_surveys_alert_title_error: 'Erro',
    // Dialog titles and messages
    page_surveys_dialog_title_delete_survey: 'Excluir pesquisa',
    page_surveys_dialog_message_delete_survey: 'Tem certeza de que deseja excluir esta pesquisa? Esta ação não pode ser desfeita.',
    page_surveys_dialog_title_archive_survey: 'Arquivar pesquisa',
    page_surveys_dialog_message_archive_survey: 'Tem certeza de que deseja arquivar esta pesquisa? Esta ação pode ser desfeita no menu "Arquivado".',
    // Buttons
    page_surveys_button_new_survey: 'Nova Pesquisa',
    page_surveys_button_edit_survey: 'Editar Pesquisa',
    page_surveys_button_dont_show_again: 'Não mostrar novamente',
    page_surveys_button_close: 'Fechar',
    page_surveys_button_install: 'Instalar',
    page_surveys_button_edit: 'Editar',
    page_surveys_button_archive: 'Arquivar',
    page_surveys_button_delete: 'Excluir',

    // PAGE SETTINGS
    page_settins_title: 'Configurações',
    page_settings_label_select_material_design_theme: 'Selecione o tema Material Design',
    page_settings_label_select_theme: 'Selecione o tema',
    page_settings_label_set_dark_mode_theme: 'Definir tema Modo Escuro',
    page_settings_label_set_dark_mode: 'Modo Escuro',
    page_settings_label_select_display_type_for_forms: 'Selecione o tipo de visualização para formulários',
    page_settings_label_select_display_type: 'Selecione o tipo de visualização',
    page_settings_label_save_settings: 'Salvar Configurações',
    page_settings_label_reset_settings: 'Redefinir Configurações',
    page_settings_text_send_email: 'Olá, gostaria de falar com vocês sobre o aplicativo TerraSurvey.',

    // HOME PAGE
    page_home_label_wellcome: 'Você  está no',
    page_home_button_reload: 'Recarregar',
    page_home_button_install_app_now: 'Instalar aplicativo',
    page_home_dialog_text_install_app_now: 'Você pode instalar este aplicativo em seu dispositivo.',
    page_home_dialog__title_install_app_now: 'Instalar Aplicativo?',
    page_home_dialog_button_dont_show_again: 'Não mostrar',
    page_home_dialog_button_close: 'Fechar',
    page_home_dialog_button_install: 'Instalar',
    page_home_snackbar_text_click_on_reload_button: 'Por favor, clique no botão Recarregar',

    // ABOUT PAGE
    page_about_title: 'Sobre',
    page_about_description: 'O TerraSurvey é uma solução inovadora e robusta projetada para atender às necessidades de coleta e gerenciamento de dados em diversos contextos. Ideal para organizações, pesquisadores e profissionais que precisam de uma ferramenta eficaz para coletar informações, o TerraSurvey oferece uma plataforma intuitiva e flexível, permitindo a criação de formulários personalizados para atender a qualquer necessidade específica de coleta de dados.',
    page_about_label_check_for_updates: 'Verificar atualizações',
    page_about_button_check_for_updates: 'Atualizar',
    page_about_label_hosting_site: 'Site de Hospedagem',
    page_about_link_hosting_site: 'https://terrasurveyapp.web.app',
    page_about_label_repository: 'Repositório',
    page_about_link_repository: 'https://github.com/TerraSurvey/TerraSurvey',
    page_about_label_title_license: 'Licença',
    page_about_label_name_license: 'MIT',
    page_about_link_license: 'https://github.com/TerraSurvey/TerraSurvey/blob/main/LICENSE',
    page_about_text_license: 'Todos os direitos reservados 2023-' + new Date().getFullYear() + '. {app_name}© é um software livre. Veja a Licença em: ',
    page_about_label_authors: 'Autores',
    page_about_value_authors: ['Mário de Araújo Carvalho'],
    page_about_label_contact_email: 'E-mail de Contato',
    page_about_value_contact_email: "mariodearaujocarvalho{'@'}gmail.com",

    //MENU DRAWER NAVIGATION
    menu_drawer_label_home: 'Tela Inicial',
    menu_drawer_label_surveys: 'Pesquisas',
    menu_drawer_label_archived: 'Arquivados',
    menu_drawer_label_settings: 'Configurações',
    menu_drawer_label_about: 'Sobre',

    hello: 'Olá {name}, bem-vindo ao seu aplicativo Vue.js',
    page_test_title: 'Teste',
  }
};
