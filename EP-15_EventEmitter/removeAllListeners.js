const EventEmitter = require('node:events');
const eventEmitter = new EventEmitter();

eventEmitter.on('start', () => console.log('Listener 1'));
eventEmitter.on('start', () => console.log('Listener 2'));
eventEmitter.on('start', () => console.log('Listener 3'));

eventEmitter.emit('start'); // logs all three

eventEmitter.removeAllListeners('start');

eventEmitter.emit('start'); // nothing logs — all listeners removed at once