import EventEmitter from 'events'

export const PLAYER_CONNECT = 'internal/player/connect'
export const PLAYER_DISCONNECT = 'internal/player/disconnect'
export const PLAYER_DROP_CONNECTION = 'internal/player/drop-connection'

export default class GatewayEvents extends EventEmitter {
  connect (id) {
    this.emit(PLAYER_CONNECT, id)
  }

  disconnect (id) {
    this.emit(PLAYER_DISCONNECT, id)
  }

  move (id, direction) {
    this.emit(PLAYER_MOVE, id, direction)
  }

  moveNotifyTentacle (player, direction) {
    this.emit(PLAYER_MOVE_NOTIFY, player, direction)
  }

  dropConnection (player) {
    this.emit(PLAYER_DROP_CONNECTION, player)
  }

  spawn (player) {
    this.emit(PLAYER_SPAWN, player)
  }

  destroy (player) {
    this.emit(PLAYER_DESTROY, player)
  }
}
