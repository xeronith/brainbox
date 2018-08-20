const gpio = require('./gpio-lib');

module.exports = {

  connect: function(socketio){
    // =================================================================

    let pins = {
      gpi_1:  gpio.export(1,  {direction: "out"}),
      gpi_2:  gpio.export(2,  {direction: "out"}),
      gpi_3:  gpio.export(3,  {direction: "out"}),
      gpi_4:  gpio.export(4,  {direction: "out"}),
      gpi_5:  gpio.export(5,  {direction: "out"}),
      gpi_6:  gpio.export(6,  {direction: "out"}),
      gpi_7:  gpio.export(7,  {direction: "out"}),
      gpi_8:  gpio.export(8,  {direction: "out"}),

      gpo_9:  gpio.export(9,  {direction: "in"}),
      gpo_10: gpio.export(10, {direction: "in"}),
      gpo_11: gpio.export(11, {direction: "in"}),
      gpo_12: gpio.export(12, {direction: "in"}),
      gpo_13: gpio.export(13, {direction: "in"}),
      gpo_14: gpio.export(14, {direction: "in"}),
      gpo_15: gpio.export(15, {direction: "in"}),
      gpo_16: gpio.export(16, {direction: "in"})
    };

    // Browser => GPIO output pin
    //
    socketio.on('connection', socket => {
      socket.on('gpi:set',  msg => {
        let pin = pins[msg.pin];
        pin.set(1 - msg.value);
      });
    });

    // GPIO input pin => Browser
    //
    pins.gpo_9.on("change",  val => socketio.sockets.emit("gpo:change", {pin: "gpo_9",  value: val}));
    pins.gpo_10.on("change", val => socketio.sockets.emit("gpo:change", {pin: "gpo_10", value: val}));
    pins.gpo_11.on("change", val => socketio.sockets.emit("gpo:change", {pin: "gpo_11", value: val}));
    pins.gpo_12.on("change", val => socketio.sockets.emit("gpo:change", {pin: "gpo_12", value: val}));
    pins.gpo_13.on("change", val => socketio.sockets.emit("gpo:change", {pin: "gpo_13", value: val}));
    pins.gpo_14.on("change", val => socketio.sockets.emit("gpo:change", {pin: "gpo_14", value: val}));
    pins.gpo_15.on("change", val => socketio.sockets.emit("gpo:change", {pin: "gpo_15", value: val}));
    pins.gpo_16.on("change", val => socketio.sockets.emit("gpo:change", {pin: "gpo_16", value: val}));

    return this;
  }

}
