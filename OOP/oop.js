function Person(name, lastname) {
 this.name = name;
 this.lastname = lastname;
}

const person1 = new Person('Johnny', 'Doe');
const person2 = new Person('Kate', 'Mack');

Person.prototype.greeting = function() {
 return `My name's ${this.name}`;
}

const Customer = function(name, lastname, age) {
 Person.call(this, name, lastname);
 // Person.apply(this, [name, lastname]);
 this.age = age;
}

Customer.prototype = Object.create(Person.prototype);

Customer.prototype.greeting = function() {
 return `My name's ${this.name} and I'm ${this.age}`;
}

// Customer.prototype.constructor = Customer;

const cust1 = new Customer('Allison', 'Mack', 25);

console.log(person1.greeting());
console.log(person2.greeting());
console.log(cust1.greeting());
console.log(cust1);
