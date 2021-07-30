import socketIoClient from 'socket.io-client';

export default class Socket {
  constructor(url) {
    this.socket = socketIoClient.connect(url);
  }

  listen(on, callback) {
    this.socket.on(on, callback);
  }

  shout(to, ...params) {
    this.socket.emit(to, ...params);
  }
}
