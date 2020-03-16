/* this gets automatically wrapped in a module wrapper function automatically:
Note the parameters we have access to (in ths example, __dirname)
(function(exports, require, module, __filename, __dirname)) {

})

*/

class Person  {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    greet() {
        const {name, age} = this;
        console.log(`My name is ${name} and i am ${age} and my class lives in ${__dirname}`);
    }
}

module.exports = Person;