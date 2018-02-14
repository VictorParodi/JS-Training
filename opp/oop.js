class Person {
  constructor(name, last) {
    this.name = name;
    this.last = last;
  }

  greet() {
    return `I'm ${this.name}`;
  }

  static talk() {
    return 'Static method';
  }
}

const person1 = new Person('Kate', 23);

console.log(person1.name);
console.log(person1.greet());
console.log(Person.talk());

