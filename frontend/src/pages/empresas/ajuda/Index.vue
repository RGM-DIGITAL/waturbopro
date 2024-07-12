<template>
  <div>
    <template>
          <div>

            <div class="row">
              <div class="col-6">
                <h1>Ajuda</h1>
              </div>
              <div class="col-6" style="display: flex; justify-content: end; align-items: center;">
                <q-btn color="primary" label="Adicionar" @click="ajudaEdicao = {}; modalAjuda = true" />
              </div>
            </div>
            <q-table style="width: 100%;margin-left: 0;" flat bordered square hide-bottom
              class="my-sticky-dynamic q-ma-lg" :data="ajudas" :columns="columns" :loading="loading" row-key="id"
              :pagination.sync="pagination" :rows-per-page-options="[0]">

              <template v-slot:body-cell-acoes="props">
                <q-td class="text-center">
                  <q-btn flat round icon="edit" @click="editarAjuda(props.row)" />
                  <q-btn flat round icon="mdi-delete" @click="deletarAjuda(props.row)" />
                </q-td>
              </template>
            </q-table>
            <ModalAjuda :modalAjuda.sync="modalAjuda" :ajudaEdicao.sync="ajudaEdicao" @modal-ajuda:criada="ajudaCriada"
              @modal-ajuda:editada="ajudaEditada" />
    </template>
  </div>
</template>

<script>
import { ListarHelpList, DeleteHelp } from '../../../service/help'
import ModalAjuda from './ModalAjuda'
export default {
  name: 'Ajudas',
  components: {
    ModalAjuda
  },
  data() {
    return {
      tab: 'ajuda',
      ajudaEdicao: {},
      modalAjuda: false,
      ajudas: [],
      pagination: {
        rowsPerPage: 40,
        rowsNumber: 0,
        lastIndex: 0
      },
      loading: false,
      columns: [
        { name: 'id', label: '#', field: 'id', align: 'left' },
        { name: 'title', label: 'Título', field: 'title', align: 'left' },
        { name: 'description', label: 'Descrição', field: 'description', align: 'center' },
        { name: 'video', label: 'Vídeo', field: 'video', align: 'center' },
        { name: 'acoes', label: 'Ações', field: 'acoes', align: 'center' }
      ]
    }
  },
  methods: {
    async listarAjuda() {
      const { data } = await ListarHelpList()
      this.ajudas = data
    },
    editarAjuda(ajuda) {
      this.ajudaEdicao = { ...ajuda }
      this.modalAjuda = true
    },
    ajudaCriada(ajuda) {
      const newAjuda = [...this.ajudas]
      newAjuda.push(ajuda)
      this.ajudas = [...newAjuda]
    },
    ajudaEditada(ajuda) {
      const newAjuda = [...this.ajudas]
      const idx = newAjuda.findIndex(f => f.id === ajuda.id)
      if (idx > -1) {
        newAjuda[idx] = ajuda
      }
      this.ajudas = [...newAjuda]
    },
    deletarAjuda(ajuda) {
      this.$q.dialog({
        title: 'Atenção!!',
        message: `Deseja realmente deletar o Ajuda "${ajuda.title}"?`,
        cancel: {
          label: 'Não',
          color: 'primary',
          push: true
        },
        ok: {
          label: 'Sim',
          color: 'negative',
          push: true
        },
        persistent: true
      }).onOk(() => {
        this.loading = true
        DeleteHelp(ajuda.id) // Aqui passamos apenas o ID
          .then(res => {
            let newAjuda = [...this.ajudas]
            newAjuda = newAjuda.filter(f => f.id !== ajuda.id)

            this.ajudas = [...newAjuda]
            this.$q.notify({
              type: 'positive',
              progress: true,
              position: 'top',
              message: `Ajuda ${ajuda.title} deletado!`,
              actions: [{
                icon: 'close',
                round: true,
                color: 'white'
              }]
            })
          })
          .catch(error => {
            this.$q.notify({
              type: 'negative',
              progress: true,
              position: 'top',
              message: `Erro ao deletar a ajuda: ${error.message}`,
              actions: [{
                icon: 'close',
                round: true,
                color: 'white'
              }]
            })
          })
          .finally(() => {
            this.loading = false
          })
      })
    }
  },
  mounted() {
    this.listarAjuda()
  }
}
</script>

<style lang="scss" scoped></style>
