const usuario = JSON.parse(localStorage.getItem('usuario'))
import Router from 'src/router/index'
import checkTicketFilter from 'src/utils/checkTicketFilter'
import { socketIO } from 'src/utils/socket'
import { ConsultarTickets } from 'src/service/tickets'

const socket = socketIO()

const userId = +localStorage.getItem('userId')

socket.on(`tokenInvalid:${socket.id}`, () => {
  socket.disconnect()
  localStorage.removeItem('token')
  localStorage.removeItem('username')
  localStorage.removeItem('profile')
  localStorage.removeItem('userId')
  localStorage.removeItem('usuario')
  setTimeout(() => {
    Router.push({
      name: 'login'
    })
  }, 1000)
})

export default {
  created() {
    this.setupSocketListeners()
    this.socketTicketList()
  },
  methods: {
    setupSocketListeners() {
      socket.on(`${usuario.tenantId}:mensagem-chat-interno`, data => {
        if (data.action === 'update' && (data.data.receiverId == usuario.userId || data.data.groupId != null)) {
          this.$store.commit('MENSAGEM_INTERNA_UPDATE', data)
        }
      })

      socket.on(`${usuario.tenantId}:unread-mensagem-chat-interno`, data => {
        if (data.action === 'update' && data.data.senderId == usuario.userId) {
          this.$store.commit('UNREAD_MENSAGEM_INTERNA_UPDATE', data)
        }
      })

      socket.on(`${usuario.tenantId}:mensagem-chat-interno-notificacao`, data => {
        if (data.action === 'update' && (data.data.receiverId == usuario.userId || data.data.groupId != null)) {
          this.$store.commit('NOTIFICACAO_CHAT_INTERNO_UPDATE', data)
        }
      })

      socket.on('verifyOnlineUsers', data => {
        this.$store.commit('LISTA_USUARIOS_CHAT_INTERNO', { action: 'updateAllUsers', data: {} })
        socket.emit(`${usuario.tenantId}:userVerified`, usuario)
      })

      socket.on(`${usuario.tenantId}:user-online`, data => {
        if (data.action === 'update' && data.data.userId !== usuario.userId) {
          this.$store.commit('USER_CHAT_UPDATE', data)
        }
      })
    },
    scrollToBottom () {
      setTimeout(() => {
        this.$root.$emit('scrollToBottomMessageChat')
      }, 200)
    },
    socketMessagesList () {
      // Implementação original da função socketMessagesList
      console.log('socketMessagesList function called')
      // Coloque aqui a lógica necessária para a função socketMessagesList
    },
    socketTicket () {
      // Implementação original da função socketTicket
      socket.on('connect', () => {
        socket.on(`${usuario.tenantId}:ticket`, data => {
          if (data.action === 'update' && data.ticket.userId === userId) {
            if (data.ticket.status === 'open' && !data.ticket.isTransference) {
              this.$store.commit('TICKET_FOCADO', data.ticket)
            }
          }
        })
      })
      // Coloque aqui a lógica necessária para a função socketTicket
    },
    socketTicketList () {
      // Implementação original da função socketTicketList
      this.socketTicketListNew()
      // Coloque aqui a lógica necessária para a função socketTicketList
    },
    socketTicketListNew () {
      // Implementação original da função socketTicketListNew
      socket.on('connect', () => {
        socket.on(`${usuario.tenantId}:ticketList`, async data => {
          if (data.type === 'chat:create') {
            if (
              !data.payload.read &&
              (data.payload.ticket.userId === userId || !data.payload.ticket.userId) &&
              data.payload.ticket.id !== this.$store.getters.ticketFocado.id
            ) {
              if (checkTicketFilter(data.payload.ticket)) {
                this.handlerNotifications(data.payload)
              }
            }
            this.$store.commit('UPDATE_MESSAGES', data.payload)
            this.scrollToBottom()
            // Atualiza notificações de mensagem
            const params = {
              searchParam: '',
              pageNumber: 1,
              status: ['open', 'pending', 'closed'],
              showAll: false,
              count: null,
              queuesIds: [],
              withUnreadMessages: [true, false],
              isNotAssignedUser: [true, false],
              includeNotQueueDefined: [true, false]
              // date: new Date(),
            }
            console.log('Definiu parametros')
            try {
              console.log('try')
              const { data } = await ConsultarTickets(params)
              console.log('try 1')
              this.countTickets = data.count // count total de tickets no status
              console.log('try 2')
              // this.ticketsList = data.tickets
              this.$store.commit('UPDATE_NOTIFICATIONS', data)
              console.log('try 3')
              // this.$store.commit('SET_HAS_MORE', data.hasMore)
              // console.log(this.notifications)
            } catch (err) {
              console.log('error try')
              this.$notificarErro('Algum problema', err)
              console.error(err)
            }
          }

          if (data.type === 'chat:ack' || data.type === 'chat:delete') {
            this.$store.commit('UPDATE_MESSAGE_STATUS', data.payload)
          }

          if (data.type === 'chat:update') {
            this.$store.commit('UPDATE_MESSAGE', data.payload)
          }
          if (data.type === 'ticket:update') {
            this.$store.commit('UPDATE_TICKET', data.payload)
            this.$store.commit('UPDATE_NOTIFICATIONS', data.payload)
          }
        })

        socket.on(`${usuario.tenantId}:ticketList`, async data => {
          var verify = []
          if (data.type === 'notification:new') {
            // console.log(data)
            // Atualiza notificações de mensagem
            // var data_noti = []
            const params = {
              searchParam: '',
              pageNumber: 1,
              status: ['open', 'pending', 'closed'],
              showAll: false,
              count: null,
              queuesIds: [],
              withUnreadMessages: false,
              isNotAssignedUser: false,
              includeNotQueueDefined: true
              // date: new Date(),
            }
            try {
              const data_noti = await ConsultarTickets(params)
              this.$store.commit('UPDATE_NOTIFICATIONS_P', data_noti.data)
              verify = data_noti
            } catch (err) {
              this.$notificarErro('Algum problema', err)
              console.error(err)
            }
            // Faz verificação para se certificar que notificação pertence a fila do usuário
            var pass_noti = false
            verify.data.tickets.forEach((element) => { pass_noti = (element.id == data.payload.id ? true : pass_noti) })
            // Exibe Notificação
            if (pass_noti) {
              const message = new self.Notification('Novo cliente pendente', {
                body: 'Cliente: ' + data.payload.contact.name,
                tag: 'simple-push-demo-notification'
              })
              console.log(message)
            }
          }
        })

        socket.on(`${usuario.tenantId}:contactList`, data => {
          this.$store.commit('UPDATE_CONTACT', data.payload)
        })
      })
    },
    handlerNotifications(payload) {
      // Implementação original da função handlerNotifications
      console.log('Handler notifications called', payload)
      // Coloque aqui a lógica necessária para a função handlerNotifications
    },
    socketDisconnect () {
      socket.disconnect()
    }
  }
}
