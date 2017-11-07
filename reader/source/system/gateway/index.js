import io from 'socket.io-client'
import constants from 'config/constants'

export default class GatewayClient {
  constructor (events) {
    this.events = events
    this.socket = io('http://server:8000')

    this.socket.connect()

    this.subscribe()
  }

  subscribe () {
    this.socket.on('neighbours', (list) => {
      this.events.gateway.receiveNeighbours(list)
    })

    this.socket.on('spawn-player', (player) => {
      this.events.player.spawn(player)
    })
    this.socket.on('destroy-player', (player) => {
      this.events.player.destroy(player)
    })
    this.socket.on('move-player', (player, direction) => {
      this.events.player.move(player, direction)
    })
  }
}
