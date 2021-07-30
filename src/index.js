import Socket from './web/Socket.js';
import TemperatureSensor from './devices/TemperatureSensor.js';

const client = new Socket('http://10.0.0.124:3333');

const tempSensor = new TemperatureSensor(11, 4);

(async () => {
  const temp = await tempSensor.read();

  client.shout('temp', temp);
})();
