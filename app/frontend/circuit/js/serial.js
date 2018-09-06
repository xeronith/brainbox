class Port{
  constructor(device) {
    this.device_ = device
  }

  connect() {
    let readLoop = () => {
      this.device_.transferIn(5, 64).then(result => {
        this.onReceive(result.data)
        readLoop()
      }, error => {
        this.onReceiveError(error)
      })
    }

    return this.device_.open()
      .then(() => {
        if (this.device_.configuration === null) {
          return this.device_.selectConfiguration(1)
        }
      })
      .then(() => this.device_.claimInterface(2))
      .then(() => this.device_.controlTransferOut({
        'requestType': 'class',
        'recipient': 'interface',
        'request': 0x22,
        'value': 0x01,
        'index': 0x02
      }))
      .then(() => {
        readLoop()
      })
  }

  connect2() {
    let readLoop = () => {
      console.log('reading...')
      this.device_.transferIn(5, 64).then(result => {
        console.log('\tread=', result)
        if (result.status === 'ok') {
          this.onReceive(result.data)
          readLoop()
        }
        if (result.status === 'stall') {
          console.error('Endpoint stalled. Clearing.')
          this.device_.clearHalt(5)
        }
      }, error => {
        console.error(error)
        this.onReceiveError(error)
      })
    }

    return this.device_.open()
      .then(() => {
        console.log("\topening  ...")
        if (this.device_.configuration === null) {
          return this.device_.selectConfiguration(1)
        }

      })
      .then(() => {
        console.log("\tclaiming (2)...")
        this.device_.claimInterface(2)
        console.log("\t\tclaimed")
      })

      .then(() => {
        this.device_.controlTransferOut({
          'requestType': 'class',
          'recipient': 'interface',
          'request': 0x22,
          'value': 0x01,
          'index': 0x02
        })
        console.log('\tcontrol request done')
      })
      .then(() => {
        console.log('\tlistening')
        readLoop()
      })
      .catch(err => {
        console.error("USB Error ---", err)
      })
  };

  disconnect() {
    return this.device_.controlTransferOut({
      'requestType': 'class',
      'recipient': 'interface',
      'request': 0x22,
      'value': 0x00,
      'index': 0x02
    })
      .then(() => this.device_.close())
  };

  send(data) {
    return this.device_.transferOut(4, data)
  }
}


export default class Serial {
  constructor(){
  }

  static getPorts() {
    return navigator.usb.getDevices().then(devices => {
      return devices.map(device => new Port(device))
    })
  };

  static requestPort() {
    const filters = [
      {'vendorId': 0x2341, 'productId': 0x8036},
      {'vendorId': 0x2341, 'productId': 0x8037}
    ]
    return navigator.usb.requestDevice({'filters': filters}).then(
      device => new Port(device)
    )
  };
}
