/*
// commonjs
const Person = require('./person');
/* Note: 
import Person from './person' doesn't work in nodejs (yet), ES6 Syntax is only supported by babbel
-> pkr: it might be supported now with additional 
*/

const me = new Person('Pkro', 40);
me.greet();

export default me;