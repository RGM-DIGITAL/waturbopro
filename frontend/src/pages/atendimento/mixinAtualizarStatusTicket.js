import { AtualizarStatusTicket, EnviarMensagemTexto, LocalizarMensagens } from 'src/service/tickets'
import { ListarConfiguracoes } from 'src/service/configuracoes'
import { uid } from 'quasar'
const userId = +localStorage.getItem('userId')
const username = localStorage.getItem('username')
const userProfile = localStorage.getItem('profile')

export default {
  methods: {
    async listarConfiguracoes() {
      const { data } = await ListarConfiguracoes()
      this.configuracoes = data
      const enabledspyticket = this.configuracoes.filter(item => item.key === 'spyticket')[0]
      if (userProfile === 'admin') {
        this.enablespyticket = true
      } else if (enabledspyticket.value === 'enabled') {
        this.enablespyticket = true
      } else {
        this.enablespyticket = false
      }
      const GreetingAccepted = this.configuracoes.filter(item => item.key === 'sendGreetingAccepted')[0]

      if (GreetingAccepted.value === 'enabled') {
        this.Greeting = true
      }
    },
    getGreeting() {
      const hour = new Date().getHours()
      if (hour >= 6 && hour <= 11) {
        return 'Bom dia'
      } else if (hour > 11 && hour <= 17) {
        return 'Boa tarde'
      } else if (hour > 17 && hour <= 23) {
        return 'Boa noite'
      } else {
        return 'Olá!'
      }
    },
    async iniciarAtendimento(ticket) {
      this.loading = true
      try {
        await this.listarConfiguracoes()
        await AtualizarStatusTicket(ticket.id, 'open', userId)
        this.loading = false
        if (this.Greeting) {
          const message = {
            read: 1,
            fromMe: true,
            mediaUrl: '',
            body: `${this.getGreeting()} ${ticket.name}, meu nome é ${username} e agora vou prosseguir com seu atendimento!`,
            scheduleDate: null,
            quotedMsg: null,
            idFront: uid()
          }

          try {
            await EnviarMensagemTexto(ticket.id, message)
          } catch (error) {
            console.error('Erro ao enviar mensagem automática', error)
          }
        }
        this.$q.notify({
          message: `Atendimento Iniciado || ${ticket.name} - Ticket: ${ticket.id}`,
          type: 'positive',
          progress: true,
          position: 'top',
          actions: [{
            icon: 'close',
            round: true,
            color: 'white'
          }]
        })
        this.$store.commit('TICKET_FOCADO', {})
        this.$store.commit('SET_HAS_MORE', false)
        this.$store.dispatch('AbrirChatMensagens', ticket)
      } catch (error) {
        this.loading = false
        console.error(error)
        this.$notificarErro('Não foi possível atualizar o status', error)
      }
    },
    espiarAtendimento (ticket) {
      this.loading = true
      AtualizarStatusTicket(ticket.id, 'pending')
        .then(res => {
          this.loading = false
          this.$q.notify({
            message: `Espiando || ${ticket.name} - Ticket: ${ticket.id}`,
            type: 'positive',
            progress: true,
            position: 'top',
            actions: [{
              icon: 'close',
              round: true,
              color: 'white'
            }]
          })
          this.$store.commit('TICKET_FOCADO', {})
          this.$store.commit('SET_HAS_MORE', true)
          this.$store.dispatch('AbrirChatMensagens', ticket)
        })
        .catch(error => {
          this.loading = false
          console.error(error)
          this.$notificarErro('Não foi possível atualizar o status', error)
        })
    },
    async fetchMessagesForTicket(ticket) {
      try {
        const response = await LocalizarMensagens({ ticketId: ticket.id })
        this.currentTicket = { ...ticket, messages: response.data.messages }
        this.isTicketModalOpen = true
      } catch (error) {
        console.error('Failed to fetch messages:', error)
        this.isTicketModalOpen = false
      }
    },
    async espiarAtendimentoPainel (ticket) {
      try {
        this.fetchMessagesForTicket(ticket)
        this.$q.notify({
          message: `Espiando - Ticket: ${ticket.id}`,
          type: 'positive',
          progress: true,
          position: 'top',
          actions: [{
            icon: 'close',
            round: true,
            color: 'white'
          }]
        })
      } catch (e) {
        console.log('Erro ao espiar: ', e)
      }

      // AtualizarStatusTicket(ticket.id, 'pending').then(res => {
      //   this.$q.notify({
      //     message: `Espiando - Ticket: ${ticket.id}`,
      //     type: 'positive',
      //     progress: true,
      //     position: 'top',
      //     actions: [{
      //       icon: 'close',
      //       round: true,
      //       color: 'white'
      //     }]
      //   });
      //   this.$store.commit('TICKET_FOCADO', ticket);
      //   // Aqui, você pode optar por não chamar ações de roteamento ou outras lógicas que foram deslocadas para o modal.
      // }).catch(error => {
      //   console.error(error);
      //   this.$notificarErro('Não foi possível atualizar o status', error);
      // });
    },
    atualizarStatusTicket (status) {
      const contatoName = this.ticketFocado.contact.name || ''
      const ticketId = this.ticketFocado.id
      const title = {
        open: 'Atendimento será iniciado, ok?',
        pending: 'Retornar à fila?',
        closed: 'Encerrar o atendimento?'
      }
      const toast = {
        open: 'Atendimento iniciado!',
        pending: 'Retornado à fila!',
        closed: 'Atendimento encerrado!'
      }

      this.$q.dialog({
        title: title[status],
        message: `Cliente: ${contatoName} || Ticket: ${ticketId}`,
        cancel: {
          label: 'Não',
          color: 'negative',
          push: true
        },
        ok: {
          label: 'Sim',
          color: 'primary',
          push: true
        },
        persistent: true
      }).onOk(() => {
        this.loading = true
        AtualizarStatusTicket(ticketId, status, userId)
          .then(res => {
            this.loading = false
            this.$q.notify({
              message: `${toast[status]} || ${contatoName} (Ticket ${ticketId})`,
              type: 'positive',
              progress: true,
              actions: [{
                icon: 'close',
                round: true,
                color: 'white'
              }]
            })
            this.$store.commit('TICKET_FOCADO', {})
            if (status !== 'open') this.$router.push({ name: 'chat-empty' })
          })
          .catch(error => {
            this.loading = false
            console.error(error)
            this.$notificarErro('Não foi possível atualizar o status', error)
          })
      })
    }
  }
}
