const mqtt = require('mqtt');

// to be changed to own local server/service
const client = mqtt.connect('http://broker.hivemq.com');

client.on('connect', () => {
  console.log("connected")
  client.subscribe('myTopic');
});

client.on('message', (topic, message) => {
  console.log('MSG: %s: %s', topic, message);
});
