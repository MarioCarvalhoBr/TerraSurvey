<template>
  <div>
    <div class="d-flex align-center">
      <h1 class="flex-grow-1">About</h1>
    </div>

    <v-card class="elevation-12" outlined>
      <v-card-text>
        <v-list>
          <v-list-item>
            <v-list-item-title><strong>{{ appName }}</strong></v-list-item-title>
            <p>
              {{ appDescription }}
            </p>
          </v-list-item>

          <v-list-item>
            <v-list-item-title>Atualizar aplicativo</v-list-item-title>
            <v-list-item-subtitle>
              <v-btn size="small" color="primary" @click="loading = !loading" :loading="loading">
                Checar atualizações

                <template v-slot:loader>
                  <v-progress-linear indeterminate></v-progress-linear>
                </template>
              </v-btn>
            </v-list-item-subtitle>
          </v-list-item>

          <v-list-item>
            <h3>Site de hospedagem</h3>
            <v-list-item-subtitle><a :href="site_deploy" target="_blank">{{ site_deploy }}</a></v-list-item-subtitle>
          </v-list-item>

          <v-list-item>
            <h3>Versão</h3>
            <v-list-item-subtitle>{{ version }}</v-list-item-subtitle>
          </v-list-item>

          <v-list-item>
            <h3>
              Código-fonte
            </h3>
            <v-list-item-subtitle><a :href="repository" target="_blank">{{ repository }}</a></v-list-item-subtitle>
          </v-list-item>

          <v-list-item>
            <h3>
              Licença
            </h3>
              Todos os direitos reservados 2023-{{ new Date().getFullYear() }}.  {{ appName }}© é um software gratuito. Você pode usá-lo para fins não comerciais. Dúvidas sobre o uso do software, entre em contato com o coordenador do projeto.
              <br>
              Consulte a Licença em: <a href="https://github.com/MarioCarvalhoBr/TerraSurvey/blob/main/LICENSE" target="_blank">{{ license
                }}</a>
            </v-list-item>

          <v-list-item>
            <h3>Autores</h3>
            <i>{{ formatadorLista.format(autors) }}</i>
          </v-list-item>

          <v-list-item>
            <h3>
              Entre em contato com o coordenador do projeto
            </h3>
            <v-list-item-subtitle>
              <a
                href="mailto:joao.sarmento@ufms.br?subject=TerraSurvey App&body=Olá João, gostaria de falar com vocês sobre o aplicativo TerraSurvey.">{{ email
                }}</a>
            </v-list-item-subtitle>
          </v-list-item>

        </v-list>
      </v-card-text>
    </v-card>

  </div>

</template>

<script>
export default {
  data() {
    return {
      appName: 'TerraSurvey',
      appDescription: 'TerraSurvey é um aplicativo que tem o objetivo apoiar a coleta de dados e informações com perspectivas de avaliar os impactos produzidos pela regularização fundiária dos projetos de assentamento federais do Programa Nacional de Reforma Agrária – PNRA. O sistema foi desenvolvido como parte de estudos realizados em parceria entre a Universidade Federal de Mato Grosso do Sul (UFMS) e o Instituto Nacional de Colonização e Reforma Argária (INCRA).',
      version: '1.0.0',
      author: 'Mário de Araújo Carvalho',
      autors: ['João Batista Sarmento dos Santos Neto', 'José Marcato Junior', 'Mário de Araújo Carvalho', 'Wesley Nunes Gonçalves', 'Kassia Tonheiro Rodrigues', 'Carolina Lino Martins P. de Camargo', 'Nadya Kalache', 'Janusa Soares de Araújo', 'Mauricio de Souza', 'Hudson Silva Borges', 'Saulo Gomes Moreira', 'Marcio Santos Araújo', 'Heber Xavier'],
      formatadorLista: new Intl.ListFormat('pt', { style: 'long', type: 'conjunction' }),
      email: 'joao.sarmento@ufms.br',
      license: 'Licença TerraSurvey',
      repository: 'https://github.com/MarioCarvalhoBr/TerraSurvey',
      site_deploy: 'https://terrasurveyapp.web.app',
      loading: false,
    };
  },
  methods: {
  },
  watch: {
    loading(val) {
      if (!val) return
      setTimeout(() => {
        this.loading = false
        window.location.reload();

      }, 2000)
    },
  },
};
</script>

<style scoped></style>
