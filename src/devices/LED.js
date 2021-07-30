import Gpio from 'onoff';

export default class LED {
  constructor(pin) {
    this.gpio = new Gpio(pin, 'out');
  }

  async write(binValue) {
    this.gpio.write(binValue);
  }
}
