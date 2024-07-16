<template>
  <q-dialog persistent :value="modalAjuda" @hide="fecharModal" @show="abrirModal">
    <q-card style="width: 500px" class="q-pa-lg">
      <q-card-section>
        <div class="text-h6">{{ ajudaEdicao.id ? 'Editar' : 'Criar' }} Ajuda</div>
      </q-card-section>
      <q-card-section>
            <q-input class="row col" square outlined v-model="ajuda.title" label="Título" />
            <q-input class="row col" square outlined v-model="ajuda.description" label="Descrição" />
            <q-input class="row col" square outlined v-model="ajuda.video" label="Código do Vídeo" />
      </q-card-section>
      <q-card-actions align="right" class="q-mt-md">
        <q-btn flat label="Cancelar" color="negative" v-close-popup class="q-mr-md" />
        <q-btn flat label="Salvar" color="primary" @click="handleAjuda" />
      </q-card-actions>
    </q-card>
  </q-dialog>
</template>

<script>
import { UpdateHelp, CriarHelp } from '../../../service/help'
export default {
  name: 'ModalAjuda',
  props: {
    modalAjuda: {
      type: Boolean,
      default: false
    },
    ajudaEdicao: {
      type: Object,
      default: () => {
        return { id: null }
      }
    }
  },
  data() {
    return {
      ajuda: {
        id: null,
        title: null,
        description: null,
        video: null
      }
    }
  },
  methods: {
    resetarAjuda() {
      this.ajuda = {
        id: null,
        title: null,
        description: null,
        video: null
      }
    },
    fecharModal() {
      this.resetarAjuda()
      this.$emit('update:ajudaEdicao', { id: null })
      this.$emit('update:modalAjuda', false)
    },
    abrirModal() {
      if (this.ajudaEdicao.id) {
        this.ajuda = { ...this.ajudaEdicao }
      } else {
        this.resetarAjuda()
      }
    },
    async handleAjuda() {
      try {
        this.loading = true
        if (this.ajuda.id) {
          const { data } = await UpdateHelp(this.ajuda.id, this.ajuda)
          this.$emit('modal-ajuda:editada', data)
          this.$q.notify({
            type: 'info',
            progress: true,
            position: 'top',
            textColor: 'black',
            message: 'Ajuda editado!',
            actions: [{
              icon: 'close',
              round: true,
              color: 'white'
            }]
          })
        } else {
          const { data } = await CriarHelp(this.ajuda)
          this.$emit('modal-ajuda:criada', data)
          this.$q.notify({
            type: 'positive',
            progress: true,
            position: 'top',
            message: 'Ajuda criado!',
            actions: [{
              icon: 'close',
              round: true,
              color: 'white'
            }]
          })
        }
        this.loading = false
        this.fecharModal()
      } catch (error) {
        console.error(error)
        this.$notificarErro('Ocorreu um erro!', error)
      }
    }
  }

}
</script>

<style lang="scss" scoped></style>
