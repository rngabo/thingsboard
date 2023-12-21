const mqtt = require('mqtt');
const client = mqtt.connect('mqtt://localhost:1883', {
  username: '7yFN2axokxKWTmsyWME8'  // Token of the virtual device
});

client.on('connect', () => {
  console.log("Connected to Thingsboard");
  client.subscribe('v1/devices/me/rpc/request/+');
});

client.on('message', (topic, message) => {
  console.log("Received a message: " + message.toString());
  // React to the message as needed
});
