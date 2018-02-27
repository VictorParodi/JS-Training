// ES5
// var Person = function(name, last) {
//   this.name = name;
//   this.last = last;
// }

// Person.prototype.greet = function() {
//   return `My name is ${this.name}`;
// }

// const Customer = function(name, last, age) {
//   Person.call(this, name, last);
//   this.age = age;
// }

// Customer.prototype = Object.create(Person.prototype);

// const person1 = new Person('Kate', 'Doe');
// console.log(person1.greet());

// const cust1 = new Customer('John', 'Doe', 23);
// console.log(cust1.greet());

//ES6
// class Person {
//   constructor(name, last) {
//     this.name = name;
//     this.last = last;
//   }

//   greet() {
//     return `Hi there I'm ${this.name}`
//   }

//   static bye() {
//     return `Bye Bye`;
//   }
// }

// const person2 = new Person('Mark', 'Larson');
// console.log(person2.greet());

// class Customer extends Person {
//   constructor(name, last, age) {
//     super(name, last);
//     this.age = age;
//   }
// }

// const cus1 = new Customer('Kate', 'Mack', 23);
// console.log(cus1.greet());

// console.log(Person.bye());