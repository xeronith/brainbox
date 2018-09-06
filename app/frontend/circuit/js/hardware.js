/**
 * Registry of all available devices (connected via RF24 adapter) and of the hub GPIO pins.
 * The hub could be an RaspberryPi or and Arduino.
 *
 * The "hub" is the receiver for the connected devices and expose its own
 * GPIO pins as well.
 */
import conf from "./Configuration"
import serial from "./serial"

let eventSubscriptions = {} // event listener to the registry

let values = {}
let blocs = []
let socket = null
let usbPort = null
let onLed = new TextEncoder().encode('H')
let offLed = new TextEncoder().encode('L')

let fireEvent = function (event, args) {
  if (typeof eventSubscriptions[event] === 'undefined') {
    return
  }

  let subscribers = eventSubscriptions[event]
  for (let i = 0; i < subscribers.length; i++) {
    try {
      subscribers[i](args)
    }
    catch (exc) {
      console.log(exc)
      console.log(subscribers[i])
    }
  }
}

export default {
  /**
   * Init the listener for the socket.io events
   * Events could be
   *  - changes on the GPIO pins
   *  - new registered devices (blocs)
   *  - unregister of devices (blocs)
   *  - provides events of devices (blocs)
   *
   * @param s
   */
  init: function (s) {
    socket = s
    // GPIO from RasperyPi
    //
    socket.on("gpo:change", function (msg) {
      values[msg.pin] = !!parseInt(msg.value)
    })

    // bloc...connected Arduino via WLAN
    //
    socket.on("bloc:value", function (msg) {
      values[msg.blocId] = !!parseInt(msg.value)
    })
    socket.on("bloc:register", function (msg) {
      blocs = blocs.filter(function (bloc) {
        return bloc.blocId != msg.blocId
      })
      blocs.push(msg)
      fireEvent("bloc:register", msg)
    })
    socket.on("bloc:unregister", function (msg) {
      blocs = blocs.filter(function (bloc) {
        return bloc.blocId != msg.blocId
      })
      fireEvent("bloc:unregister", msg)
    })
    socket.on('connect', function () {
      if (conf.backend.bloc.list !== null) {
        $.ajax({url: conf.backend.bloc.list, method: "GET"})
          .done(function (content) {
            blocs = content
          })
      }
    })


    // Init the WEBUSB stuff
    //
    serial.getPorts().then(ports => {
      if (ports.length == 0) {
        console.log('No device found.')
      } else {
        console.log('Connecting...')
        this.webusb.connectPort(ports[0])
      }
    })
    navigator.usb.addEventListener('connect', device => {
      // Add |device| to the UI.
      console.log('connected')
      serial.getPorts().then(ports => {
        if (ports.length == 0) {
          console.log('No device found.')
        } else {
          console.log('Connecting...')
          this.webusb.connectPort(ports[0])
        }
      })
    })
  },

  webusb: {
    set: function (pin, value) {
      /*
       * 1 = Wright:
       *     1 = analog:
       *         "pin number"
       *         "frequency (0-255)"
       *     2 = digital:
       *         "pin number"
       *         "1 for LOW"
       *         "2 for HIGH"
       *  2 = Read:
       *     1 = analog:
       *         "pin number"
       *     2 = digital:
       *         "pin number"
       *
       *  '1/2/7/1/' will turn pin 7 on HIGH
       *  '1/2/7/0/' would turn pin 7 off
       *  '1/1/7/255/' would turn pin 7 on at a analog rate of 255 or full power
       *
       */
      let cmd = [
        "1/",           // write
        "2/",           // digital
        pin,"/",        // pin number
        value?"2/":"1/" // on/off
      ].join("")
      console.log(cmd)
      usbPort.send(new TextEncoder().encode(cmd))
    },

    get: function (pin) {
      return values[pin]
    },

    connect: function () {
      if (usbPort) {
        usbPort.disconnect()
        console.log("disconnected")
        usbPort = null
      } else {
        serial.requestPort().then(selectedPort => {
          connectPort(selectedPort)
        }).catch(error => {
          console.log(error)
        })
      }
    },

    connectPort: function (port) {
      port.connect().then(() => {
        usbPort = port
        console.log("port connected", usbPort)
        usbPort.onReceive = data => {
          let textDecoder = new TextDecoder()
          let txt = textDecoder.decode(data)
          console.log('-', txt)
        }
        usbPort.onReceiveError = error => {
          console.error(error)
        }
      }, error => {
        console.log(error)
      })
    }
  },


  gpio: {
    set: function (pin, value) {
      socket.emit('gpi:set', {
        pin: pin,
        value: value
      })
    },
    get: function (pin) {
      return values[pin]
    }
  },

  bloc: {
    set: function (blocId, value) {
      socket.emit('bloc:set', {
        blocId: blocId,
        value: value
      })
    },
    get: function (blocId) {
      return values[blocId]
    },
    connected: function () {
      return blocs
    },

    isConnected: function (blocId) {
      return $.grep(blocs, function (e) {
        return e.blocId == blocId
      }).length > 0
    },

    /**
     * @method
     * Attach an event handler function to "bloc" based events
     *
     * possible events are:<br>
     * <ul>
     *   <li>bloc:register</li>
     *   <li>bloc:unregister</li>
     * </ul>
     *
     * @param {String}   event One or more space-separated event types
     * @param {Function} callback A function to execute when the event is triggered.
     *
     * @since 5.0.0
     */
    on: function (event, callback) {
      let events = event.split(" ")
      for (let i = 0; i < events.length; i++) {
        if (typeof eventSubscriptions[events[i]] === 'undefined') {
          eventSubscriptions[events[i]] = []
        }
        eventSubscriptions[events[i]].push(callback)
      }
      return this
    },

    /**
     * @method
     * The .off() method removes event handlers that were attached with {@link #on}.<br>
     * Calling .off() with no arguments removes all handlers attached to the registry.<br>
     *
     * @param {String|Function} eventOrFunction the event name of the registered function
     * @since 5.0.0
     */
    off: function (eventOrFunction) {
      if (typeof eventOrFunction === "undefined") {
        eventSubscriptions = {}
      }
      else if (typeof eventOrFunction === 'string') {
        eventSubscriptions[eventOrFunction] = []
      }
      else {
        let check = function (callback) {
          return callback !== eventOrFunction
        }
        for (let event in this.eventSubscriptions) {
          eventSubscriptions[event] = $.grep(eventSubscriptions[event], check)
        }
      }

      return this
    }
  }
}
