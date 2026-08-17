const EventEmitter = require('node:events');
const eventEmitter = new EventEmitter();

eventEmitter.on('start', (number) => {
    console.log(`started ${number}`);
});

eventEmitter.emit('start', 23);

eventEmitter.on('range', (start, end) => {
    console.log(`started from ${start} to ${end}`);
});

eventEmitter.emit('range', 1, 100);