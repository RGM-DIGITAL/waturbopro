<template>
  <div>
    <q-list class="text-weight-medium">
      <q-item-label header class="text-bold text-h6 q-mb-lg">Configurações</q-item-label>

      <q-item-label caption class="q-mt-lg q-pl-sm">Módulo: SaaS</q-item-label>
      <q-separator spaced />

      <q-item tag="label" v-ripple>
        <q-item-section>
          <q-item-label>Permitir solicitação de teste</q-item-label>
          <q-item-label caption>Habilitando essa opção poderá ser feito a solicitação de teste automático</q-item-label>
        </q-item-section>
        <q-item-section avatar>
          <q-toggle v-model="allowSignup" false-value="disabled" true-value="enabled" checked-icon="check"
            keep-color :color="allowSignup === 'enabled' ? 'green' : 'negative'" size="md"
            unchecked-icon="clear" @input="atualizarConfiguracao('allowSignup')" />
        </q-item-section>
      </q-item>

      <div class="row q-px-md" v-if="allowSignup === 'enabled'">
        <div class="col-12">
          <q-input v-model="timeTest" type="number" autogrow dense outlined
            label="Tempo em dias teste:" input-style="min-height: 6vh; max-height: 9vh;" debounce="700"
            @input="atualizarConfiguracao('timeTest')" />
        </div>
      </div>

      <q-item tag="label" v-ripple>
        <q-item-section>
          <q-item-label>Exibir informativo</q-item-label>
          <q-item-label caption>Mostrará uma informação em todas as páginas</q-item-label>
        </q-item-section>
        <q-item-section avatar>
          <q-toggle v-model="informative" false-value="disabled" true-value="enabled" checked-icon="check"
            keep-color :color="informative === 'enabled' ? 'green' : 'negative'" size="md"
            unchecked-icon="clear" @input="atualizarConfiguracao('informative')" />
        </q-item-section>
      </q-item>

      <div class="row q-px-md" v-if="informative === 'enabled'">
        <div class="col-12">
          <q-input v-model="textinformative" type="textarea" autogrow dense outlined
            label="Informativo:" input-style="min-height: 6vh; max-height: 9vh;" debounce="700"
            @input="atualizarConfiguracao('textinformative')" />
        </div>
      </div>

      <div class="row q-px-md" v-if="informative === 'enabled'">
        <div class="col-12">
          <q-input
            label="Cor do Fundo do informativo:"
            autogrow dense outlined
            :style="`background: ${colorinformative}`"
            v-model="colorinformative"
            input-style="min-height: 6vh; max-height: 9vh;" debounce="700"
            :dark="false"
            @input="atualizarConfiguracao('colorinformative')"
          >
            <template v-slot:preappend></template>
            <template v-slot:append>
              <q-icon
                name="colorize"
                class="cursor-pointer"
                @click="openColorPicker = true"
              ></q-icon>
              <q-popup-proxy
                v-model="openColorPicker"
                transition-show="scale"
                transition-hide="scale"
              >
                <q-color
                  format-model="hex"
                  square
                  default-view="palette"
                  no-header
                  bordered
                  v-model="colorinformative"
                  @input="atualizarConfiguracao('colorinformative')"
                />
              </q-popup-proxy>
            </template>
          </q-input>
        </div>
      </div>

      <div class="row q-px-md" v-if="informative === 'enabled'">
        <div class="col-12">
          <q-input
            label="Cor do Texto do informativo:"
            autogrow dense outlined
            :style="`background: ${colorinformativetext}`"
            v-model="colorinformativetext"
            input-style="min-height: 6vh; max-height: 9vh;" debounce="700"
            :dark="false"
            @input="atualizarConfiguracao('colorinformativetext')"
          >
            <template v-slot:preappend></template>
            <template v-slot:append>
              <q-icon
                name="colorize"
                class="cursor-pointer"
                @click="openColorPicker2 = true"
              ></q-icon>
              <q-popup-proxy
                v-model="openColorPicker2"
                transition-show="scale"
                transition-hide="scale"
              >
                <q-color
                  format-model="hex"
                  square
                  default-view="palette"
                  no-header
                  bordered
                  v-model="colorinformativetext"
                  @input="atualizarConfiguracao('colorinformativetext')"
                />
              </q-popup-proxy>
            </template>
          </q-input>
        </div>
      </div>

      <q-item tag="label" v-ripple>
        <q-item-section>
          <q-item-label>Selecionar Gateway de Pagamento</q-item-label>
          <q-item-label caption>Selecione qual sistema de pagamentos pretende usar</q-item-label>
        </q-item-section>
        <q-item-section avatar>
          <q-select style="width: 300px" outlined dense v-model="paymentGateway" :options="optionsWhatsappsTypes" map-options
            emit-value option-value="value" option-label="label" @input="atualizarConfiguracao('paymentGateway')" />
        </q-item-section>
      </q-item>

      <div class="row q-px-md" v-if="paymentGateway === 'efi'">
        <div class="col-12">
          <q-input v-model="efiClientId" type="textarea" autogrow dense outlined
            label="Chave Client ID:" input-style="min-height: 6vh; max-height: 9vh;" debounce="700"
            @input="atualizarConfiguracao('efiClientId')" />
          <q-input v-model="efiClientSecret" type="textarea" autogrow dense outlined
            label="Chave Client Secret:" input-style="min-height: 6vh; max-height: 9vh;" debounce="700"
            @input="atualizarConfiguracao('efiClientSecret')" />
          <q-input v-model="efiPixKey" type="textarea" autogrow dense outlined
            label="Chave PIX:" input-style="min-height: 6vh; max-height: 9vh;" debounce="700"
            @input="atualizarConfiguracao('efiPixKey')" />
      <!-- Campo de Upload -->
          <q-input v-model="efiCertFile" readonly type="textarea" autogrow dense outlined
            label="Certificado:" input-style="min-height: 6vh; max-height: 9vh;" debounce="700"
             />
      <q-item tag="label" v-ripple>
        <q-item-section>
          <q-item-label>Enviar certificado EFI</q-item-label>
        </q-item-section>
        <q-item-section avatar>
          <input type="file" @change="onFileChange" ref="fileInput" class="q-mt-md" />
        </q-item-section>
      </q-item>
        </div>
      </div>

      <div class="row q-px-md" v-if="paymentGateway === 'owen'">
        <div class="col-12">
          <q-input v-model="owenCnpj" type="textarea" autogrow dense outlined
            label="CNPJ:" input-style="min-height: 6vh; max-height: 9vh;" debounce="700"
            @input="atualizarConfiguracao('owenCnpj')" />
          <q-input v-model="owenToken" type="textarea" autogrow dense outlined
            label="Token:" input-style="min-height: 6vh; max-height: 9vh;" debounce="700"
            @input="atualizarConfiguracao('owenToken')" />
          <q-input v-model="owenSecretKey" type="textarea" autogrow dense outlined
            label="Secret Key:" input-style="min-height: 6vh; max-height: 9vh;" debounce="700"
            @input="atualizarConfiguracao('owenSecretKey')" />
        </div>
      </div>

      <div class="row q-px-md">
        <div class="col-12">
        <q-item-section>
          <q-item-label>Configuração servidor email para opção esqueci senha</q-item-label>
        </q-item-section>
          <q-input v-model="smtp" type="textarea" autogrow dense outlined
            label="SMTP:" input-style="min-height: 6vh; max-height: 9vh;" debounce="700"
            @input="atualizarConfiguracao('smtp')" />
          <q-input v-model="usuariosmtp" type="textarea" autogrow dense outlined
            label="Usuario SMTP:" input-style="min-height: 6vh; max-height: 9vh;" debounce="700"
            @input="atualizarConfiguracao('usuariosmtp')" />
          <q-input v-model="senhasmtp" type="textarea" autogrow dense outlined
            label="Senha SMTP:" input-style="min-height: 6vh; max-height: 9vh;" debounce="700"
            @input="atualizarConfiguracao('senhasmtp')" />
          <q-input v-model="fromemail" type="textarea" autogrow dense outlined
            label="FROM:" input-style="min-height: 6vh; max-height: 9vh;" debounce="700"
            @input="atualizarConfiguracao('fromemail')" />
          <q-input v-model="portasmtp" type="number" autogrow dense outlined
            label="Porta SMTP:" input-style="min-height: 6vh; max-height: 9vh;" debounce="700"
            @input="atualizarConfiguracao('portasmtp')" />
      <q-item tag="label" v-ripple>
        <q-item-section>
          <q-item-label>Habilitar SSL/TLS</q-item-label>
        </q-item-section>
        <q-item-section avatar>
          <q-toggle v-model="smtpsecure" false-value="false" true-value="true" checked-icon="check"
            keep-color :color="smtpsecure === 'true' ? 'green' : 'negative'" size="md"
            unchecked-icon="clear" @input="atualizarConfiguracao('smtpsecure')" />
        </q-item-section>
      </q-item>
        </div>
      </div>

    </q-list>

  </div>
</template>

<script>
import { ListarConfiguracoesGeneral, AlterarConfiguracaoGeneral, enviarArquivoPrivado } from '../../../service/configuracoesgeneral'
export default {
  name: 'ConfiguracoesSaaS',
  data() {
    return {
      optionsWhatsappsTypes: [
        { label: 'Desativar', value: 'disabled' },
        { label: 'EFI Bank', value: 'efi' },
        { label: 'Owen Payments', value: 'owen' }
      ],
      configuracoes: [],
      allowSignup: null,
      timeTest: '',
      informative: null,
      paymentGateway: null,
      textinformative: '',
      colorinformative: '',
      colorinformativetext: '',
      openColorPicker: false,
      openColorPicker2: false,
      efiClientId: '',
      efiClientSecret: '',
      efiPixKey: '',
      owenCnpj: '',
      owenToken: '',
      owenSecretKey: '',
      efiCertFile: '',
      smtp: '',
      usuariosmtp: '',
      senhasmtp: '',
      fromemail: '',
      portasmtp: '',
      smtpsecure: ''
    }
  },
  methods: {
    async listarConfiguracoes() {
      const { data } = await ListarConfiguracoesGeneral()
      this.configuracoes = data
      this.configuracoes.forEach(el => {
        const value = el.value
        this.$data[el.key] = value
      })
    },
    async atualizarConfiguracao(key) {
      const params = {
        key,
        value: this.$data[key]
      }
      try {
        await AlterarConfiguracaoGeneral(params)
        this.$q.notify({
          type: 'positive',
          message: 'Configuração alterada!',
          progress: true,
          actions: [{
            icon: 'close',
            round: true,
            color: 'white'
          }]
        })
      } catch (error) {
        console.error('error - AlterarConfiguracao', error)
        this.$data[key] = this.$data[key] === 'enabled' ? 'disabled' : 'enabled'
        this.$notificarErro('Ocorreu um erro!', error)
      }
    },
    async onFileChange(event) {
      const file = event.target.files[0]
      if (file) {
        try {
          await enviarArquivoPrivado(file)
          this.efiCertFile = file.name
          this.$q.notify({
            type: 'positive',
            message: 'Arquivo enviado com sucesso!',
            progress: true,
            actions: [{
              icon: 'close',
              round: true,
              color: 'white'
            }]
          })
        } catch (error) {
          console.error('Erro ao enviar arquivo', error)
          this.$q.notify({
            type: 'negative',
            message: 'Erro ao enviar arquivo!',
            progress: true,
            actions: [{
              icon: 'close',
              round: true,
              color: 'white'
            }]
          })
        }
      }
    }
  },
  async mounted() {
    await this.listarConfiguracoes()
  }
}
</script>

<style lang="scss" scoped></style>
