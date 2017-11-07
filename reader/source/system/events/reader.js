import EventEmitter from 'events'

export const READER_SCAN = 'reader/scan'

export default class CardReaderEvents extends EventEmitter {
  scan (rfid) {
    console.log('scanned', rfid)
    this.emit(READER_SCAN, rfid)
  }
}
