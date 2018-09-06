// just a simple mock object for the brainbox
// Hardware binding
//
export default {

  gpio: {
    set: function (pin, value) {
    },
    get: function (pin) {
      return false
    }
  },

  webusb: {
    set: function (pin, value) {
    },
    get: function (pin) {
      return false
    }
  },

  bloc: {
    set: function (blocId, value) {
    },
    get: function (blocId) {
      return false
    },
    on: function () {
    },
    off: function () {
    },
    isConnected: function (blocId) {
      return true
    }
  }
}
