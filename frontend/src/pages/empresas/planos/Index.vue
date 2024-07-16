<template>
  <div>
    <template>
          <div>

            <div class="row">
              <div class="col-6">
                <h1>Planos</h1>
              </div>
              <div class="col-6" style="display: flex; justify-content: end; align-items: center;">
                <q-btn color="primary" label="Adicionar" @click="planoEdicao = {}; modalPlano = true" />
              </div>
            </div>
            <q-table style="width: 100%;margin-left: 0;" flat bordered square hide-bottom
              class="my-sticky-dynamic q-ma-lg" :data="planos" :columns="columns" :loading="loading" row-key="id"
              :pagination.sync="pagination" :rows-per-page-options="[0]">

              <template v-slot:body-cell-value="props">
                <q-td class="text-center">
          R$ {{ props.value.toFixed(2).replace('.', ',') }}
                </q-td>
              </template>

              <template v-slot:body-cell-isPublic="props">
                <q-td class="text-center">
                  <q-icon size="24px" :name="props.value ? 'mdi-check-circle-outline' : 'mdi-close-circle-outline'"
                    :color="props.value ? 'positive' : 'negative'" />
                </q-td>
              </template>
              <template v-slot:body-cell-acoes="props">
                <q-td class="text-center">
                  <q-btn flat round icon="edit" @click="editarPlano(props.row)" />
                  <q-btn flat round icon="mdi-delete" @click="deletarPlano(props.row)" />
                </q-td>
              </template>
            </q-table>
            <ModalPlano :modalPlano.sync="modalPlano" :planoEdicao.sync="planoEdicao" @modal-plano:criada="planoCriada"
              @modal-plano:editada="planoEditada" />
    </template>
  </div>
</template>

<script>
import { list, Deletarplano } from '../../../service/plans'
import ModalPlano from './ModalPlano'
export default {
  name: 'Planos',
  components: {
    ModalPlano
  },
  data() {
    return {
      tab: 'planos',
      planoEdicao: {},
      modalPlano: false,
      planos: [],
      pagination: {
        rowsPerPage: 40,
        rowsNumber: 0,
        lastIndex: 0
      },
      loading: false,
      columns: [
        { name: 'id', label: '#', field: 'id', align: 'left' },
        { name: 'name', label: 'Nome', field: 'name', align: 'left' },
        { name: 'maxUsers', label: 'Máx. Usuários', field: 'maxUsers', align: 'center' },
        { name: 'maxConnections', label: 'Máx. Conexões', field: 'maxConnections', align: 'center' },
        { name: 'value', label: 'value', field: 'value', align: 'center' },
        { name: 'isPublic', label: 'Publico', field: 'isPublic', align: 'center' },
        { name: 'acoes', label: 'Ações', field: 'acoes', align: 'center' }
      ]
    }
  },
  methods: {
    async listarPlanos() {
      const { data } = await list()
      this.planos = data
    },
    editarPlano(plano) {
      this.planoEdicao = { ...plano }
      this.modalPlano = true
    },
    planoCriada(plano) {
      const newPlanos = [...this.planos]
      newPlanos.push(plano)
      this.planos = [...newPlanos]
    },
    planoEditada(plano) {
      const newPlanos = [...this.planos]
      const idx = newPlanos.findIndex(f => f.id === plano.id)
      if (idx > -1) {
        newPlanos[idx] = plano
      }
      this.planos = [...newPlanos]
    },
    deletarPlano(plano) {
      this.$q.dialog({
        title: 'Atenção!!',
        message: `Deseja realmente deletar o Plano "${plano.name}"?`,
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
        Deletarplano(plano)
          .then(res => {
            let newPlanos = [...this.planos]
            newPlanos = newPlanos.filter(f => f.id !== plano.id)

            this.planos = [...newPlanos]
            this.$q.notify({
              type: 'positive',
              progress: true,
              position: 'top',
              message: `Plano ${plano.name} deletado!`,
              actions: [{
                icon: 'close',
                round: true,
                color: 'white'
              }]
            })
          })
        this.loading = false
      })
    }
  },
  mounted() {
    this.listarPlanos()
  }
}
</script>

<style lang="scss" scoped></style>
