//import rc522 from 'rc522/build/Release/rc522'

export default class Reader {
  constructor (events) {
    this.events = events

    this.init()
  }

  init () {
    setInterval(() => {
      this.events.reader.scan('kekkek1')
    }, 3000)
  }
}
