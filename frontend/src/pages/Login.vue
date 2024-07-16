<template>
  <div class="q-pa-md bg-video">
    <video autoplay muted loop>
      <source src="/videologin.mp4" type="video/mp4" />
    </video>
    <q-layout class="vertical-center">
      <q-page-container>
        <q-page class="flex justify-center items-center">
          <q-ajax-bar position="top" color="primary" size="5px" />
          <q-card bordered class="card q-pa-md shadow-10" style="border-top: 5px solid #3E72AF; background-color: rgba(255,255,255,0.75); border-radius: 20px">
            <q-card-section class="text-primary text-center">
              <q-img src="/logo.png" spinner-color="white" style="height: 110px; max-width: 290px" class="q-mb-lg q-px-md" />
              <q-separator spaced />
            </q-card-section>
            <q-card-section class="text-primary">
              <div class="text-h6">Bem vindo!</div>
              <div class="text-caption text-grey">Faça login...</div>
            </q-card-section>

            <q-card-section>
              <q-input class="q-mb-md" clearable v-model="form.email" placeholder="meu@email.com" @blur="$v.form.email.$touch" :error="$v.form.email.$error" error-message="Deve ser um e-mail válido." outlined @keypress.enter="fazerLogin">
                <template v-slot:prepend>
                  <q-icon name="mdi-email-outline" class="cursor-pointer" color='primary' />
                </template>
              </q-input>

              <q-input outlined v-model="form.password" :type="isPwd ? 'password' : 'text'" @keypress.enter="fazerLogin">
                <template v-slot:prepend>
                  <q-icon name="mdi-shield-key-outline" class="cursor-pointer" color='primary' />
                </template>
                <template v-slot:append>
                  <q-icon :name="isPwd ? 'visibility_off' : 'visibility'" class="cursor-pointer" @click="isPwd = !isPwd" />
                </template>
              </q-input>

              <q-btn flat color="info" no-caps dense class="q-px-sm" label="Esqueci a senha" @click="modalEsqueciSenha = true" />
            </q-card-section>
            <q-card-actions>
              <q-btn flat color="info" no-caps dense class="q-px-sm" label="Registre-se, agora mesmo!" @click="redirecionarParaCadastro" />
              <q-btn class="q-mr-sm q-my-lg" style="width: 150px" color="primary" :loading="loading" @click="fazerLogin">
                Login
                <span slot="loading">
                  <q-spinner-puff class="on-left" />Logando...
                </span>
              </q-btn>
            </q-card-actions>

            <q-inner-loading :showing="loading" />
          </q-card>
        </q-page>
      </q-page-container>
    </q-layout>

    <!-- Modal de Recuperação de Senha -->
    <q-dialog v-model="modalEsqueciSenha" persistent>
      <q-card>
        <q-card-section>
        <q-card-actions align="right">
          <q-btn dense flat round icon="close" @click="modalEsqueciSenha = false" class="modal-close-btn" />
        </q-card-actions>
          <div class="text-h6">Recuperar Senha</div>
        </q-card-section>
        <q-card-section>
          <q-form @submit.prevent="enviarEmail">
            <q-input v-model="emailRedefinicao" label="Email" outlined />
            <q-btn type="submit" label="Enviar Email" color="primary" class="q-mt-md" />
          </q-form>
          <div v-if="showAdditionalFields">
            <q-input v-model="codigoVerificacao" label="Código de Verificação" outlined class="q-mt-md" />
            <q-input v-model="novaSenha" type="password" label="Nova Senha" outlined class="q-mt-md" />
            <q-input v-model="confirmarNovaSenha" type="password" label="Confirmar Nova Senha" outlined class="q-mt-md" />
            <q-btn @click="redefinirSenha" label="Redefinir Senha" color="primary" class="q-mt-md" />
          </div>
        </q-card-section>
      </q-card>
    </q-dialog>
  </div>
</template>

<script>
import { required, email } from 'vuelidate/lib/validators'
import { enviarEmailRedefinicao, redefinirSenha } from 'src/service/redifinirsenhas'

export default {
  name: 'Login',
  data () {
    return {
      modalEsqueciSenha: false,
      emailRedefinicao: '',
      codigoVerificacao: '',
      novaSenha: '',
      confirmarNovaSenha: '',
      showAdditionalFields: false,
      form: {
        email: null,
        password: null
      },
      contasCliente: {},
      isPwd: true,
      loading: false
    }
  },
  validations: {
    form: {
      email: { required, email },
      password: { required }
    },
    emailRedefinicao: { required, email },
    codigoVerificacao: { required },
    novaSenha: { required },
    confirmarNovaSenha: { required }
  },
  methods: {
    redirecionarParaCadastro() {
      this.$router.push('/signup')
    },
    fazerLogin () {
      this.$v.form.$touch()
      if (this.$v.form.$error) {
        this.$q.notify('Informe usuário e senha corretamente.')
        return
      }
      this.loading = true
      this.$store.dispatch('UserLogin', this.form)
        .then(data => {
          this.loading = false
        })
        .catch(err => {
          console.error('exStore', err)
          this.loading = false
        })
    },
    clear () {
      this.form.email = ''
      this.form.password = ''
      this.$v.form.$reset()
    },
    enviarEmail() {
      if (this.$v.emailRedefinicao.$invalid) {
        this.$v.emailRedefinicao.$touch()
        return
      }
      enviarEmailRedefinicao(this.emailRedefinicao)
        .then(response => {
          if (response.data.status === 404) {
            this.$q.notify({
              type: 'negative',
              message: 'Email não encontrado'
            })
          } else {
            this.$q.notify({
              type: 'positive',
              message: 'Email enviado com sucesso!'
            })
            this.showAdditionalFields = true
          }
        })
        .catch(err => {
          console.log('API Error:', err)
          this.$q.notify({
            type: 'negative',
            message: 'Erro ao enviar email'
          })
        })
    },
    redefinirSenha() {
      if (this.novaSenha !== this.confirmarNovaSenha) {
        this.$q.notify({
          type: 'negative',
          message: 'As senhas não correspondem'
        })
        return
      }
      redefinirSenha(this.emailRedefinicao, this.codigoVerificacao, this.novaSenha)
        .then(() => {
          this.$q.notify({
            type: 'positive',
            message: 'Senha redefinida com sucesso.'
          })
          this.modalEsqueciSenha = false
          this.showAdditionalFields = false
        })
        .catch(err => {
          console.log('API Error:', err)
          this.$q.notify({
            type: 'negative',
            message: 'Erro ao redefinir senha'
          })
        })
    }
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
  height: 580px;
  padding: 0px;
  border-radius: 20px;
}

.vertical-center {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
}

.bg-video video {
  min-width: 100%;
  min-height: 100%;
}

.bg-video {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  z-index: -1;
}
</style>
