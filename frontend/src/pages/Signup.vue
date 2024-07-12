<template>
  <div class="q-pa-md bg-video">
    <video autoplay muted loop>
      <source src="/videologin.mp4" type="video/mp4" />
    </video>
    <q-layout class="vertical-center">
      <q-page-container>
        <q-page class="flex justify-center items-center">
          <q-ajax-bar position="top" color="primary" size="5px" />
          <q-card
            bordered
            class="card q-pa-md shadow-10"
            style="border-top: 5px solid #3E72AF; background-color: rgba(255,255,255,0.75); border-radius: 20px"
          >
            <q-card-section class="text-primary text-center">
              <q-img
                src="/logo.png"
                spinner-color="white"
                style="height: 110px; max-width: 290px"
                class="q-mb-lg q-px-md"
              />
              <q-separator spaced />
            </q-card-section>

            <q-card-section>
              <!-- Nome da Empresa -->
              <q-input
                class="q-mb-md"
                clearable
                v-model="form.nomeEmpresa"
                placeholder="Nome da Empresa"
                outlined
              >
                <!-- Ícone para Nome da Empresa -->
                <template v-slot:prepend>
                  <q-icon
                    name="mdi-domain"
                    class="cursor-pointer"
                    color="primary"
                  />
                </template>
              </q-input>

              <!-- cnpj -->
              <q-input
                class="q-mb-md"
                clearable
                mask="##.###.###/####-##"
                v-model="form.cnpj"
                placeholder="CNPJ"
                outlined
              >
                <!-- Ícone para cnpj -->
                <template v-slot:prepend>
                  <q-icon
                    name="mdi-numeric-0-box-outline"
                    class="cursor-pointer"
                    color="primary"
                  />
                </template>
              </q-input>

              <!-- whatsapp -->
              <q-input
                class="q-mb-md"
                clearable
                mask="(##)#####-####"
                v-model="form.whatsapp"
                placeholder="Whatsapp"
                outlined
              >
                <!-- Ícone para whatsapp -->
                <template v-slot:prepend>
                  <q-icon
                    name="mdi-whatsapp"
                    class="cursor-pointer"
                    color="primary"
                  />
                </template>
              </q-input>

              <!-- nomeResponsavel -->
              <q-input
                class="q-mb-md"
                clearable
                v-model="form.nomeResponsavel"
                placeholder="Nome do Responsavel"
                outlined
              >
                <!-- Ícone para nomeResponsavel -->
                <template v-slot:prepend>
                  <q-icon
                    name="mdi-account-star"
                    class="cursor-pointer"
                    color="primary"
                  />
                </template>
              </q-input>

              <!-- email -->
              <q-input
                class="q-mb-md"
                clearable
                v-model="form.email"
                placeholder="meu@email.com"
                :error="$v.form.email.$error"
                error-message="Deve ser um e-mail válido."
                outlined
              >
                <!-- Ícone para email -->
                <template v-slot:prepend>
                  <q-icon
                    name="mdi-email-outline"
                    class="cursor-pointer"
                    color="primary"
                  />
                </template>
              </q-input>

              <!-- senha -->
              <q-input
                class="q-mb-md"
                clearable
                placeholder="SENHA"
                v-model="form.password"
                :type="isPwd ? 'password' : 'text'"
                @keypress.enter="fazerLogin"
                outlined
              >
                <!-- Ícone para senha -->
                <template v-slot:prepend>
                  <q-icon
                    name="mdi-shield-key-outline"
                    class="cursor-pointer"
                    color="primary"
                  />
                </template>
                <template v-slot:append>
                  <q-icon
                    :name="isPwd ? 'visibility_off' : 'visibility'"
                    class="cursor-pointer"
                    @click="isPwd = !isPwd"
                  />
                </template>
              </q-input>

              <!-- Plano (seleção) -->
              <q-select
                v-model="form.plano"
                :options="options"
                label="Plano"
                outlined
              />
            </q-card-section>
            <q-card-actions>
              <q-space />
              <q-btn
                class="q-mr-sm q-my-lg"
                style="width: 150px"
                color="primary"
                :loading="loading"
                @click="handleTenant"
              >
                Fazer Cadastro
                <span slot="loading">
                  <q-spinner-puff class="on-left" />Logando...
                </span>
              </q-btn>
            </q-card-actions>

            <q-btn
              flat
              color="info"
              no-caps
              dense
              class="q-px-sm"
              label="Já tem uma conta? Entre!"
              @click="redirecionarParaLogin"
            />

            <q-inner-loading :showing="loading" />
          </q-card>
        </q-page>
      </q-page-container>
    </q-layout>
  </div>
</template>

<script>
import { required, email } from 'vuelidate/lib/validators'
import { listPublic } from 'src/service/plans'
import { CriarTeste } from 'src/service/empresas'

export default {
  name: 'Signup',
  data() {
    return {
      isPwd: true,
      loading: false,
      form: {
        nomeEmpresa: '',
        cnpj: '',
        whatsapp: '',
        nomeResponsavel: '',
        email: '',
        password: '',
        plano: null
      },
      planos: []
    }
  },
  computed: {
    options() {
      return this.formattedPlanos()
    }
  },
  validations: {
    form: {
      email: { required, email },
      password: { required }
    },
    emailRedefinicao: { required, email }
  },
  methods: {
    async fetchPlanData() {
      try {
        const response = await listPublic()
        this.planos = response.data
        console.log('Planos fetched:', this.planos) // Log para verificar os dados recebidos
      } catch (error) {
        console.error('Error fetching plan data:', error)
      }
    },
    formattedPlanos() {
      const formatted = this.planos.map(plan => ({
        label: `${plan.name} - Atendentes: ${plan.maxUsers} - Canais: ${plan.maxConnections} - R$ ${plan.value.toFixed(2).replace('.', ',')}`,
        value: plan.id,
        maxUsers: plan.maxUsers,
        maxConnections: plan.maxConnections
      }))
      console.log('Formatted Planos:', formatted) // Log para verificar os dados formatados
      return formatted
    },
    redirecionarParaLogin() {
      this.$router.push('/login')
    },
    async handleTenant() {
      if (this.$v.form.$invalid) {
        this.$v.$touch()
        this.$q.notify('Informe todos os dados corretamente.')
        return
      }
      const data = {
        name: this.form.nomeResponsavel,
        email: this.form.email,
        password: this.form.password,
        tenantName: this.form.nomeEmpresa,
        cnpj: this.form.cnpj,
        phone: this.form.whatsapp,
        plano: this.form.plano
      }

      this.loading = true

      try {
        await CriarTeste(data)
        this.redirecionarParaLogin()
        this.$q.notify({
          type: 'positive',
          message: 'Teste cadastrado com sucesso.',
          position: 'top',
          progress: true,
          actions: [{ icon: 'close', round: true, color: 'white' }]
        })
      } catch (error) {
        this.$q.notify({
          type: 'negative',
          message: 'Erro ao cadastrar teste. Tente novamente.',
          position: 'top',
          progress: true,
          actions: [{ icon: 'close', round: true, color: 'white' }]
        })
        console.error('Error creating tenant:', error)
      } finally {
        this.loading = false
      }
    },
    clear() {
      this.form.email = ''
      this.form.password = ''
      this.$v.form.$reset()
    }
  },
  mounted() {
    this.fetchPlanData()
  }
}
</script>

<style scoped>
#login-app {
  background: none;
}

.index {
  width: 100%;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  text-align: center;
  background-repeat: no-repeat;
  background-size: cover;
  overflow: hidden;
}

.index h1 {
  height: 150px;
}

.index h1 img {
  height: 100%;
}

.index h2 {
  color: #666;
  margin-bottom: 200px;
}

.index h2 p {
  margin: 0 0 50px;
}

.index .ivu-row-flex {
  height: 100%;
}

#indexLizi {
  position: absolute;
  width: 100%;
  top: 0;
  bottom: 0;
  overflow: hidden;
}

.bg {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.card {
  width: 100%;
  max-width: 430px;
}

.q-img__image {
  background-repeat: no-repeat;
  background-size: contain;
}
</style>
