import nodeDht from 'node-dht-sensor';

const dht = nodeDht.promises;

export default class TemperatureSensor {
  constructor(type, pin) {
    this.type = type;
    this.pin = pin;
  }

  async read() {
    return dht.read(this.type, this.pin);
  }
}
