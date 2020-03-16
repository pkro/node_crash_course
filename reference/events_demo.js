const EventEmitter = require('events');

// create class
class MyEmitter extends EventEmitter { }

//Init object
const myEmitter = new MyEmitter();

// Event listener
myEmitter.on('eventBlah', () => console.log("event fired"));

myEmitter.emit('eventBlah');

// for usage, see logger.js in root