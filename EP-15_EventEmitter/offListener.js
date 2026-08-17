const EventEmitter = require('node:events');
const eventEmitter = new EventEmitter();

function onStart() {
    console.log('started');
}

eventEmitter.on('start', onStart);

eventEmitter.emit('start'); // logs "started"

// Remove the listener — it stops reacting from now on
eventEmitter.off('start', onStart);

eventEmitter.emit('start'); // nothing logs this time