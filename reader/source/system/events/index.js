import GatewayEvents from './gateway'
import CardReaderEvents from './reader'

export default class SystemEvents {
  constructor () {
    this.gateway= new GatewayEvents()
    this.reader = new CardReaderEvents()
  }
}
