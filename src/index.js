import Socket from './web/Socket.js';
import TemperatureSensor from './devices/TemperatureSensor.js';
import LED from './devices/LED.js';

const client = new Socket('http://10.0.0.124:3333');

const tempSensor = new TemperatureSensor(11, 4);

const led1 = new LED(18);
const led2 = new LED(17);

setInterval(async () => {
  const temp = await tempSensor.read();

  client.shout('temp', temp);
}, 5000);

client.listen('led-1', (state) => {
  led1.write(Number(state.state));
});

client.listen('led-2', (state) => {
  led2.write(Number(state.state));
});
