<template>
  <q-layout view="hHh Lpr lFf">

    <q-header class="bg-white text-grey-8 q-py-xs " height-hint="58" bordered v-if="showMenu">
      <q-toolbar>
        <q-btn flat
          dense
          round
          @click="leftDrawerOpen = !leftDrawerOpen"
          aria-label="Menu"
          icon="menu">
          <q-tooltip>Menu</q-tooltip>
        </q-btn>

        <!-- <q-btn flat
          no-caps
          no-wrap
          dense
          class="q-ml-sm"
          v-if="$q.screen.gt.xs">
          <q-img src="/logo.png"
            spinner-color="primary"
            style="height: 50px; width: 140px" />
        </q-btn> -->
        <q-space />
        <div v-if="$q.screen.gt.xs">
        <vencimento />
        </div>
            <q-btn round
            dense
            flat
            color="grey-8" icon="refresh"
            @click="reloadPage">
            <q-tooltip >
              Atualizar Página
            </q-tooltip>
          </q-btn>

        <div class="q-gutter-sm row items-center no-wrap">
           <q-btn round
            dense
            flat
            color="grey-8"
            icon="notifications">
            <q-badge color="red"
              text-color="white"
              floating
              v-if="(this.notificacaoInternaNaoLida + parseInt(notifications_p.count) + parseInt(notifications.count)) > 0">
              {{ this.notificacaoInternaNaoLida + parseInt(notifications_p.count) + parseInt(notifications.count)}}
            </q-badge>
            <q-menu>
              <q-list style="min-width: 300px">
                <q-item v-if="(parseInt(notificacoesChat) + parseInt(notifications_p.count)) == 0">
                  <q-item-section style="cursor: pointer;">
                    Nada de novo por aqui!
                  </q-item-section>
                </q-item>
                <q-item v-if="parseInt(notificacoesChat) > 0">
                  <q-item-section avatar @click="() => $router.push({ name: 'chat-interno' })" style="cursor: pointer;">
                    <q-avatar style="width: 60px; height: 60px" color="blue" text-color="white">
                      {{ notificacoesChat }}
                    </q-avatar>
                  </q-item-section>
                  <q-item-section @click="() => $router.push({ name: 'chat-interno' })" style="cursor: pointer;">
                    Novas mensagens não lidas no chat interno!
                  </q-item-section>
                </q-item>
                <q-item v-if="parseInt(notificacaoInternaNaoLida) > 0">
                  <q-item-section avatar @click="() => $router.push({ name: 'chat-interno' })" style="cursor: pointer;">
                    <q-avatar style="width: 60px; height: 60px" color="primary" text-color="white">
                      {{ notificacaoInternaNaoLida }}
                    </q-avatar>
                  </q-item-section>
                  <q-item-section @click="() => $router.push({ name: 'chat-interno' })" style="cursor: pointer;">
                    Mensagens não lidas no chat interno!
                  </q-item-section>
                </q-item>
                <q-item v-if="parseInt(notifications_p.count) > 0">
                  <q-item-section avatar
                    @click="() => $router.push({ name: 'chat-empty' })"
                    style="cursor: pointer;">
                    <q-avatar style="width: 60px; height: 60px"
                      color="blue"
                      text-color="white">
                      {{ notifications_p.count }}
                    </q-avatar>
                  </q-item-section>
                  <q-item-section @click="() => $router.push({ name: 'chat-empty' })"
                    style="cursor: pointer;">
                    Clientes pendentes na fila
                  </q-item-section>
                </q-item>
                <q-item v-for="ticket in notifications.tickets"
                  :key="ticket.id"
                  style="border-bottom: 1px solid #ddd; margin: 5px;">
                  <q-item-section avatar
                    @click="abrirAtendimentoExistente(ticket.name, ticket)"
                    style="cursor: pointer;">
                    <q-avatar style="width: 60px; height: 60px">
                      <img :src="ticket.profilePicUrl">
                    </q-avatar>
                  </q-item-section>
                  <q-item-section @click="abrirAtendimentoExistente(ticket.name, ticket)"
                    style="cursor: pointer;">
                    <q-list>
                      <q-item style="text-align:center; font-size: 17px; font-weight: bold; min-height: 0">{{ ticket.name
                      }}</q-item>
                      <q-item style="min-height: 0; padding-top: 0"><b>Mensagem: </b> {{ ticket.lastMessage }}</q-item>
                    </q-list>
                  </q-item-section>
                </q-item>
              </q-list>
            </q-menu>
            <q-tooltip >Notificações</q-tooltip>
          </q-btn>
          <q-avatar :color="usuario.status === 'offline' ? 'negative' : 'positive'"
            text-color="white"
            size="25px"
            :icon="usuario.status === 'offline' ? 'mdi-account-off' : 'mdi-account-check'"
            rounded
            class="q-ml-lg">
            <q-tooltip>
              {{ usuario.status === 'offline' ? 'Usuário Offiline' : 'Usuário Online' }}
            </q-tooltip>
          </q-avatar>
          <q-btn round
            flat
            class="bg-padrao text-bold q-mx-sm q-ml-lg">
            <q-avatar size="26px">
              {{ $iniciaisString(username) }}
            </q-avatar>
            <q-menu>
              <q-list style="min-width: 100px">
                <q-item-label header> Olá! <b> {{ username }} </b> </q-item-label>
                <cStatusUsuario @update:usuario="atualizarUsuario"
                  :usuario="usuario" />
                <q-item clickable
                  v-close-popup
                  @click="abrirModalUsuario">
                  <q-item-section>Perfil</q-item-section>
                </q-item>
                <q-item clickable
                  v-close-popup
                  @click="efetuarLogout">
                  <q-item-section>Sair</q-item-section>
                </q-item>
                <q-separator />
                <q-item>
                  <q-item-section>
                    <cSystemVersion />
                  </q-item-section>
                </q-item>

              </q-list>
            </q-menu>

            <q-tooltip>Usuário</q-tooltip>
          </q-btn>
        </div>
      </q-toolbar>
    </q-header>

    <q-drawer v-model="leftDrawerOpen" show-if-above bordered :mini="miniState" @mouseover="miniState = false"
      v-if="showMenu" @mouseout="miniState = true" mini-to-overlay content-class="bg-white text-grey-9">
      <q-scroll-area class="fit">
        <q-list padding :key="userProfile">
          <!-- <q-item-label
            header
            class="text-grey-8"
          >
            Menu
          </q-item-label> -->
          <EssentialLink v-for="item in menuData" :key="item.title" v-bind="item" />
          <div v-if="userProfile === 'admin'">
            <q-separator spaced />
            <div class="q-mb-lg"></div>
            <!-- <q-item-label header>Administração</q-item-label> -->
            <template v-for="item in menuDataAdmin">
              <EssentialLink v-if="exibirMenuBeta(item) && validaTelaAdmin(item)" :key="item.title" v-bind="item" />
            </template>
          </div>

        </q-list>
      </q-scroll-area>
      <div class="absolute-bottom text-center row justify-start"
        :class="{ 'bg-grey-3': $q.dark.isActive }"
        style="height: 40px">
        <q-toggle size="xl"
          keep-color
          dense
          class="text-bold q-ml-xs"
          :icon-color="$q.dark.isActive ? 'black' : 'white'"
          :value="$q.dark.isActive"
          :color="$q.dark.isActive ? 'grey-3' : 'black'"
          checked-icon="mdi-white-balance-sunny"
          unchecked-icon="mdi-weather-sunny"
          @input="$setConfigsUsuario({ isDark: !$q.dark.isActive })">
          <q-tooltip content-class="text-body1 hide-scrollbar">
            {{ $q.dark.isActive ? 'Desativar' : 'Ativar' }} Modo Escuro (Dark Mode)
          </q-tooltip>
        </q-toggle>
      </div>
    </q-drawer>

    <q-page-container>
        <informative />
      <q-page class="q-pa-xs">
        <router-view />
      </q-page>
    </q-page-container>
    <audio ref="audioNotification">
      <source :src="alertSound"
        type="audio/mp3">
    </audio>
    <ModalUsuario :isProfile="true"
      :modalUsuario.sync="modalUsuario"
      :usuarioEdicao.sync="usuario" />
  </q-layout>
</template>

<script>
// const userId = +localStorage.getItem('userId')
import cSystemVersion from '../components/cSystemVersion.vue'
import { ListarWhatsapps } from 'src/service/sessoesWhatsapp'
import EssentialLink from 'components/EssentialLink.vue'
import socketInitial from './socketInitial'
import alertSound from 'src/assets/sound.mp3'
import alertInterno from 'src/assets/chatInterno.mp3'
import { format } from 'date-fns'
const username = localStorage.getItem('username')
import ModalUsuario from 'src/pages/usuarios/ModalUsuario'
import { mapGetters } from 'vuex'
import { ListarConfiguracoes } from 'src/service/configuracoes'
import { RealizarLogout } from 'src/service/login'
import cStatusUsuario from '../components/cStatusUsuario.vue'
import vencimento from '../components/vencimento.vue'
import informative from '../components/informative.vue'
import { socketIO } from 'src/utils/socket'
import { ConsultarTickets } from 'src/service/tickets'
import { listCountUnreadMessage } from 'src/service/chatInterno'
const socket = socketIO()

const objMenu = [
  {
    title: 'Dashboard',
    caption: '',
    icon: 'mdi-home',
    routeName: 'home-dashboard'
  },

  {
    title: 'Atendimentos',
    caption: 'Lista de atendimentos',
    icon: 'mdi-whatsapp',
    routeName: 'atendimento'
  },
  {
    title: 'Contatos',
    caption: 'Lista de contatos',
    icon: 'mdi-card-account-mail',
    routeName: 'contatos'
  },
  {
    title: 'Chat Interno',
    caption: 'Chat Interno',
    icon: 'mdi-forum-outline',
    routeName: 'chat-interno'
  },
  {
    title: 'Mensagens Rápidas',
    caption: 'Mensagens pré-definidas',
    icon: 'mdi-reply-all-outline',
    routeName: 'mensagens-rapidas'
  }
  // {
  //   title: 'Ajuda',
  //   caption: 'Ajuda',
  //   icon: 'mdi-help',
  //   routeName: 'ajuda'
  // }
]

const objMenuAdmin = [
  {
    title: 'Empresas SaaS',
    caption: 'Lista de empresas',
    icon: 'mdi-office-building',
    routeName: 'empresas',
    submenu: [
      {
        title: 'Subitem 1',
        caption: 'Descrição do Subitem 1',
        icon: 'mdi-office-building',
        routeName: 'empresas'
      },
      {
        title: 'Subitem 2',
        caption: 'Descrição do Subitem 2',
        icon: 'mdi-office-building',
        routeName: 'empresas'
      }
    ]
  },
  {
    title: 'Canais',
    caption: 'Canais de Comunicação',
    icon: 'mdi-cellphone-wireless',
    routeName: 'sessoes'
  },
  {
    title: 'Painel Atendimentos',
    caption: 'Visão geral dos atendimentos',
    icon: 'mdi-view-dashboard-variant',
    routeName: 'painel-atendimentos'
  },
  {
    title: 'Relatórios',
    caption: 'Relatórios gerais',
    icon: 'mdi-file-chart',
    routeName: 'relatorios'
  },
  {
    title: 'Usuarios',
    caption: 'Admin de usuários',
    icon: 'mdi-account-group',
    routeName: 'usuarios'
  },
  {
    title: 'Filas | Grupos',
    caption: 'Cadastro de Filas',
    icon: 'mdi-arrow-decision-outline',
    routeName: 'filas'
  },
  {
    title: 'Chatbot',
    caption: 'Robô de atendimento',
    icon: 'mdi-robot',
    routeName: 'chat-flow'
  },
  {
    title: 'Etiquetas',
    caption: 'Cadastro de etiquetas',
    icon: 'mdi-tag-text',
    routeName: 'etiquetas'
  },
  {
    title: 'Horário de Atendimento',
    caption: 'Horário de funcionamento',
    icon: 'mdi-calendar-clock',
    routeName: 'horarioAtendimento'
  },
  {
    title: 'Configurações',
    caption: 'Configurações gerais',
    icon: 'mdi-cog',
    routeName: 'configuracoes'
  },
  // {
  //   title: 'Financeiro',
  //   caption: 'Financeiro',
  //   icon: 'mdi-cash-multiple',
  //   routeName: 'financeiro'
  // },
  {
    title: 'Campanha',
    caption: 'Campanhas de envio',
    icon: 'mdi-message-bookmark-outline',
    routeName: 'campanhas'
    // isBeta: true
  },
  {
    title: 'API',
    caption: 'Integração sistemas externos',
    icon: 'mdi-call-split',
    routeName: 'api-service'
    // isBeta: true
  }
]

export default {
  name: 'MainLayout',
  mixins: [socketInitial],
  components: { EssentialLink, ModalUsuario, cStatusUsuario, cSystemVersion, vencimento, informative },
  data () {
    return {
      username,
      domainExperimentalsMenus: ['@'],
      miniState: true,
      userProfile: 'user',
      modalUsuario: false,
      usuario: {},
      alertSound,
      alertInterno,
      leftDrawerOpen: false,
      menuData: objMenu,
      menuDataAdmin: objMenuAdmin,
      countTickets: 0,
      ticketsList: [],
      notificacaoInternaNaoLida: ''
    }
  },
  computed: {
    ...mapGetters(['notifications', 'notifications_p', 'whatsapps', 'showMenu', 'chatFocado', 'notificacaoChatInterno', 'notificacoesChat', 'notificacaoTicket']),
    cProblemaConexao () {
      const idx = this.whatsapps.findIndex(w =>
        ['PAIRING', 'TIMEOUT', 'DISCONNECTED'].includes(w.status)
      )
      return idx !== -1
    },
    cQrCode () {
      const idx = this.whatsapps.findIndex(
        w => w.status === 'qrcode' || w.status === 'DESTROYED'
      )
      return idx !== -1
    },
    cOpening () {
      const idx = this.whatsapps.findIndex(w => w.status === 'OPENING')
      return idx !== -1
    },
    cUsersApp () {
      return this.$store.state.usersApp
    },
    cObjMenu () {
      if (this.cProblemaConexao) {
        return objMenu.map(menu => {
          if (menu.routeName === 'sessoes') {
            menu.color = 'negative'
          }
          return menu
        })
      }
      return objMenu
    }
  },
  watch: {
    notificacaoChatInterno: {
      handler() {
        if (this.$router.currentRoute.fullPath.indexOf('atendimento-Interno') < 0 || !this.chatFocado.id || this.chatFocado.id !== this.notificacaoChatInterno.senderId) {
          this.$store.commit('LISTA_NOTIFICACOES_CHAT_INTERNO', { action: 'update', data: 1 })
          this.listarMensagens()
          const audio = new Audio(alertInterno)
          audio.play()
        }
      }
    },
    notificacaoTicket: {
      handler() {
        this.$nextTick(() => {
          this.$refs.audioNotification.play()
        })
      }
    }
  },
  methods: {
    async listarMensagens() {
      try {
        const { data } = await listCountUnreadMessage(this.usuario.userId)
        this.notificacaoInternaNaoLida = data.count
      } catch (e) {

      }
    },
    reloadPage() {
      window.location.reload()
    },
    exibirMenuBeta(itemMenu) {
      if (!itemMenu?.isBeta) return true
      for (const domain of this.domainExperimentalsMenus) {
        if (this.usuario.email.indexOf(domain) !== -1) return true
      }
      return false
    },
    validaTelaAdmin(itemMenu) {
      const user = JSON.parse(localStorage.getItem('usuario'))
      if (itemMenu.routeName === 'empresas' && user.tenantId != 1) return false
      return true
    },
    async listarWhatsapps() {
      const { data } = await ListarWhatsapps()
      this.$store.commit('LOAD_WHATSAPPS', data)
    },
    handlerNotifications(data) {
      const { body, contact, ticket } = data
      console.log(data)
      if ('Notification' in window && Notification.permission === 'granted') {
        const options = {
          body: `${body} - ${format(new Date(), 'HH:mm')}`,
          icon: contact.profilePicUrl,
          tag: ticket.id,
          renotify: true
        }

        const notification = new Notification(
          `Mensagem de ${contact.name}`,
          options
        )

        notification.onclick = e => {
          e.preventDefault()
          window.focus()
          this.$store.dispatch('AbrirChatMensagens', ticket)
          this.$router.push({ name: 'atendimento' })
        }

        this.$nextTick(() => {
          this.$refs.audioNotification.play()
        })
      }
    },
    async abrirModalUsuario () {
      this.modalUsuario = true
    },
    async efetuarLogout () {
      try {
        await RealizarLogout(this.usuario)
        localStorage.removeItem('token')
        localStorage.removeItem('username')
        localStorage.removeItem('profile')
        localStorage.removeItem('userId')
        localStorage.removeItem('queues')
        localStorage.removeItem('usuario')
        localStorage.removeItem('filtrosAtendimento')

        this.$router.go({ name: 'login', replace: true })
      } catch (error) {
        this.$notificarErro('Não foi possível realizar logout', error)
      }
    },
    async listarConfiguracoes () {
      const { data } = await ListarConfiguracoes()
      localStorage.setItem('configuracoes', JSON.stringify(data))
    },
    conectarSocket (usuario) {
      socket.on(`${usuario.tenantId}:chat:updateOnlineBubbles`, data => {
        this.$store.commit('SET_USERS_APP', data)
      })
    },
    atualizarUsuario () {
      this.usuario = JSON.parse(localStorage.getItem('usuario'))
      if (this.usuario.status === 'offline') {
        socket.emit(`${this.usuario.tenantId}:setUserIdle`)
      }
      if (this.usuario.status === 'online') {
        socket.emit(`${this.usuario.tenantId}:setUserActive`)
      }
    },
    async consultarTickets () {
      const params = {
        searchParam: '',
        pageNumber: 1,
        status: ['open'],
        showAll: false,
        count: null,
        queuesIds: [],
        withUnreadMessages: true,
        isNotAssignedUser: false,
        includeNotQueueDefined: true
        // date: new Date(),
      }
      try {
        const { data } = await ConsultarTickets(params)
        this.countTickets = data.count // count total de tickets no status
        // this.ticketsList = data.tickets
        // console.log(data)
        this.$store.commit('UPDATE_NOTIFICATIONS', data)
        setTimeout(() => {
          this.$store.commit('UPDATE_NOTIFICATIONS', data)
        }, 500)
        // this.$store.commit('SET_HAS_MORE', data.hasMore)
        // console.log(this.notifications)
      } catch (err) {
        this.$notificarErro('Algum problema', err)
        console.error(err)
      }
      const params2 = {
        searchParam: '',
        pageNumber: 1,
        status: ['pending'],
        showAll: false,
        count: null,
        queuesIds: [],
        withUnreadMessages: false,
        isNotAssignedUser: false,
        includeNotQueueDefined: true
        // date: new Date(),
      }
      try {
        const { data } = await ConsultarTickets(params2)
        this.countTickets = data.count // count total de tickets no status
        // this.ticketsList = data.tickets
        // console.log(data)
        this.$store.commit('UPDATE_NOTIFICATIONS_P', data)
        setTimeout(() => {
          this.$store.commit('UPDATE_NOTIFICATIONS_P', data)
        }, 500)
        // this.$store.commit('SET_HAS_MORE', data.hasMore)
        // console.log(this.notifications)
      } catch (err) {
        this.$notificarErro('Algum problema', err)
        console.error(err)
      }
    },
    abrirChatContato (ticket) {
      // caso esteja em um tamanho mobile, fechar a drawer dos contatos
      if (this.$q.screen.lt.md && ticket.status !== 'pending') {
        this.$root.$emit('infor-cabecalo-chat:acao-menu')
      }
      if (!(ticket.status !== 'pending' && (ticket.id !== this.$store.getters.ticketFocado.id || this.$route.name !== 'chat'))) return
      this.$store.commit('SET_HAS_MORE', true)
      this.$store.dispatch('AbrirChatMensagens', ticket)
    },
    abrirAtendimentoExistente (contato, ticket) {
      this.$q.dialog({
        title: 'Atenção!!',
        message: `${contato} possui um atendimento em curso (Atendimento: ${ticket.id}). Deseja abrir o atendimento?`,
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
      }).onOk(async () => {
        try {
          this.abrirChatContato(ticket)
        } catch (error) {
          this.$notificarErro(
            'Não foi possível atualizar o token',
            error
          )
        }
      })
    }
  },
  async mounted () {
    this.atualizarUsuario()
    await this.listarWhatsapps()
    await this.listarConfiguracoes()
    await this.consultarTickets()
    await this.listarMensagens()
    this.socket.on('disconnect', () => {
      console.log('Socket disconnected. Trying to reconnect...')
      this.socket.connect()
    })
    if ('Notification' in window) {
      if (Notification.permission !== 'granted') {
        await Notification.requestPermission()
      }

      this.usuario = JSON.parse(localStorage.getItem('usuario'))
      this.userProfile = localStorage.getItem('profile')

      await this.conectarSocket(this.usuario)

      this.atualizarUsuario()
      await this.listarWhatsapps()
      await this.listarConfiguracoes()
      await this.consultarTickets()

      this.socket.on('chat:update', this.handlerNotifications)
    }
    this.usuario = JSON.parse(localStorage.getItem('usuario'))
    this.userProfile = localStorage.getItem('profile')
    await this.conectarSocket(this.usuario)
  },
  destroyed () {
    socket.disconnect()
  }
}
</script>
<style scoped>
.q-img__image {
  background-size: contain;
}
</style>
