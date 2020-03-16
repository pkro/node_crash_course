class Person  {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    greet() {
        const {name, age} = this;
        console.log(`My name is ${name} and i am ${age}`);
    }
}

module.exports = Person;