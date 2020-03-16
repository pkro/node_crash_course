const EventEmitter = require('events');
const uuid = require('uuid'); // creates an unique id, https://en.wikipedia.org/wiki/Universally_unique_identifier

class Logger extends EventEmitter {
    log(msg) {
        this.emit('message', {id: uuid.v4(), msg});
    }
}

module.exports = Logger;