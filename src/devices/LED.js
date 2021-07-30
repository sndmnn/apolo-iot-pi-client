import Gpio from 'onoff';

class LED {
  constructor(pin) {
    this.gpio = new Gpio(pin, 'out');
  }

  async write(binValue) {
    this.gpio.write(binValue);
  }
}

module.exports = LED;
