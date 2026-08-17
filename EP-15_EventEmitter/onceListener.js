const EventEmitter = require('node:events');
const eventEmitter = new EventEmitter();

// once() only reacts the very first time the event fires
eventEmitter.once('start', () => {
    console.log('this only runs the first time');
});

eventEmitter.emit('start'); // logs "this only runs the first time"
eventEmitter.emit('start'); // nothing happens — listener already used up
eventEmitter.emit('start'); // still nothing