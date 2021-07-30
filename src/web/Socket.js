import socketIoClient from 'socket.io-client';

export default class Socket {
  constructor(url) {
    this.io = socketIoClient(url);
  }

  listen(on, callback) {
    this.io.on(on, callback);
  }

  shout(to, ...params) {
    this.io.emit(to, params);
  }
}
