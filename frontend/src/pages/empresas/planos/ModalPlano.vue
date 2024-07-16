<template>
  <q-dialog persistent :value="modalPlano" @hide="fecharModal" @show="abrirModal">
    <q-card style="width: 500px" class="q-pa-lg">
      <q-card-section>
        <div class="text-h6">{{ planoEdicao.id ? 'Editar' : 'Criar' }} Plano</div>
      </q-card-section>
      <q-card-section>
            <q-input class="row col" square outlined v-model="plano.name" label="Nome do Plano" />
            <q-input class="row col" square outlined v-model="plano.maxUsers" label="Máx. Usuários" />
            <q-input class="row col" square outlined v-model="plano.maxConnections" label="Máx. Conexões" />
            <q-input class="row col" square outlined v-model="plano.value" label="Valor" />
        <q-checkbox
          v-model="plano.isPublic"
          label="Publico"
        />
      </q-card-section>
      <q-card-actions align="right" class="q-mt-md">
        <q-btn flat label="Cancelar" color="negative" v-close-popup class="q-mr-md" />
        <q-btn flat label="Salvar" color="primary" @click="handlePlano" />
      </q-card-actions>
    </q-card>
  </q-dialog>
</template>

<script>
import { AlterarPlano, CriarPlano } from '../../../service/plans'
export default {
  name: 'ModalPlano',
  props: {
    modalPlano: {
      type: Boolean,
      default: false
    },
    planoEdicao: {
      type: Object,
      default: () => {
        return { id: null }
      }
    }
  },
  data() {
    return {
      plano: {
        id: null,
        name: null,
        maxUsers: null,
        maxConnections: null,
        value: null,
        isPublic: true
      }
    }
  },
  methods: {
    resetarPlano() {
      this.plano = {
        id: null,
        name: null,
        maxUsers: null,
        maxConnections: null,
        value: null,
        isPublic: true
      }
    },
    fecharModal() {
      this.resetarPlano()
      this.$emit('update:planoEdicao', { id: null })
      this.$emit('update:modalPlano', false)
    },
    abrirModal() {
      if (this.planoEdicao.id) {
        this.plano = { ...this.planoEdicao }
      } else {
        this.resetarPlano()
      }
    },
    async handlePlano() {
      try {
        this.loading = true
        if (this.plano.id) {
          const { data } = await AlterarPlano(this.plano)
          this.$emit('modal-plano:editada', data)
          this.$q.notify({
            type: 'info',
            progress: true,
            position: 'top',
            textColor: 'black',
            message: 'Plano editado!',
            actions: [{
              icon: 'close',
              round: true,
              color: 'white'
            }]
          })
        } else {
          const { data } = await CriarPlano(this.plano)
          this.$emit('modal-plano:criada', data)
          this.$q.notify({
            type: 'positive',
            progress: true,
            position: 'top',
            message: 'Plano criado!',
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
