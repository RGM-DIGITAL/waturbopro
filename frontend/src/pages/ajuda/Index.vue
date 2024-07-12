<template>
  <div>
    <div class="q-pa-md row q-gutter-md">
      <div v-for="ajuda in ajudas" :key="ajuda.id" class="col-12 col-sm-6 col-md-4">
        <q-card @click="abrirModal(ajuda)">
          <q-card-section>
            <img :src="`https://img.youtube.com/vi/${ajuda.video}/hqdefault.jpg`" width="100%" height="100%" :alt="ajuda.title">
            <div class="text-h6">{{ ajuda.title }}</div>
            <div class="text-subtitle2">{{ ajuda.description }}</div>
          </q-card-section>
        </q-card>
      </div>
    </div>
    <q-dialog v-model="modalVisivel" persistent>
      <q-card style="width: 580px; height: 335px; position: relative;">
        <q-btn icon="close" @click="modalVisivel = false" style="position: absolute; top: 0; right: 0; z-index: 10;"></q-btn>
        <q-card-section>
          <iframe width="100%" height="290px" :src="modalVideoUrl" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </q-card-section>
      </q-card>
    </q-dialog>
  </div>
</template>

<script>
import { ListarHelpList } from 'src/service/help'

export default {
  name: 'Ajuda',
  data () {
    return {
      ajudas: [],
      modalVisivel: false,
      modalVideoUrl: ''
    }
  },
  methods: {
    async listarAjuda () {
      try {
        const { data } = await ListarHelpList()
        this.ajudas = data
        console.log('Dados das ajudas:', data)
      } catch (error) {
        console.error('Erro ao carregar ajudas:', error)
      }
    },
    abrirModal (ajuda) {
      this.modalVideoUrl = `https://www.youtube.com/embed/${ajuda.video}`
      this.modalVisivel = true
    }
  },
  mounted () {
    this.listarAjuda()
  }
}
</script>
