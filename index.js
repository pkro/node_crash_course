const Logger = require('./logger');

myLogger = new Logger();

myLogger.on('message', data => console.log('Called listener:',  data));

myLogger.log("hello world");