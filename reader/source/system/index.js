import SystemEvents from './events'

import GatewayClient from './gateway'
import Reader from './reader'

export default class System {
  constructor () {
    this.events = new SystemEvents()

    this.gatewayClient = new GatewayClient(this.events)
    this.reader = new Reader(this.events)
  }
}
