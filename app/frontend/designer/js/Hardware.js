// just a simple mock object for the brainbox
// Hardware binding
//
export default {

  raspi: {
    set: function (pin, value) {
    },
    get: function (pin) {
      return false
    }
  },

  arduino: {
    set: function (pin, value) {
    },
    get: function (pin) {
      return false
    }
  }
}
