const raspi = require('./gpio');

module.exports = {

  connect: function(socketio){
    // =================================================================

    let pins = {
      gpi_1:  raspi.export(1,  {direction: "out"}),
      gpi_2:  raspi.export(2,  {direction: "out"}),
      gpi_3:  raspi.export(3,  {direction: "out"}),
      gpi_4:  raspi.export(4,  {direction: "out"}),
      gpi_5:  raspi.export(5,  {direction: "out"}),
      gpi_6:  raspi.export(6,  {direction: "out"}),
      gpi_7:  raspi.export(7,  {direction: "out"}),
      gpi_8:  raspi.export(8,  {direction: "out"}),

      gpo_9:  raspi.export(9,  {direction: "in"}),
      gpo_10: raspi.export(10, {direction: "in"}),
      gpo_11: raspi.export(11, {direction: "in"}),
      gpo_12: raspi.export(12, {direction: "in"}),
      gpo_13: raspi.export(13, {direction: "in"}),
      gpo_14: raspi.export(14, {direction: "in"}),
      gpo_15: raspi.export(15, {direction: "in"}),
      gpo_16: raspi.export(16, {direction: "in"})
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
