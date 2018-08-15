const mqtt = require('mqtt');

module.exports = {
  connect: function( topic){
    // to be changed to own local server/service
    const client = mqtt.connect('http://broker.hivemq.com');

    client.on('connect', () => {
      console.log("connected")
    });

    client.on('message', (topic, message) => {
      console.log('MSG: %s: %s', topic, message);
    });
  },


  subscribe: function(topic){
    client.subscribe(topic);
  }
}
