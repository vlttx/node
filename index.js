const person = require('./person');
const Logger = require('./logger');

const Cat = require('./cat');

console.log(person);

const myKitty = new Cat('Priscilla', 2);

const logger = new Logger();

logger.on('message', data => console.log('Called Listener', data));
logger.log('Hi there');
myKitty.greeting();
