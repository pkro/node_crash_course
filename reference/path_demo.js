// core module
const path = require('path');

console.log(path.basename(__filename)); //path_demo.js
console.log(path.dirname(__filename)); // /home/pk/projects/traversy/node_crash_course
console.log(path.extname(__filename)); // .js
/*
{
  root: '/',
  dir: '/home/pk/projects/traversy/node_crash_course',
  base: 'path_demo.js',
  ext: '.js',
  name: 'path_demo'
}*/
console.log(path.parse(__filename)); 
console.log(path.parse(__filename).base);  // path_demo.js

console.log(path.join(  path.dirname(__filename), // uses system delimiter
                        'test',
                        'hello.html' ));  // /home/pk/projects/traversy/node_crash_course/test/hello.html


