const person = {
 rol: 'user',
 greet: function() {
  return `I'm ${this.name}`;
 }
}

const john = Object.create(person);
john.name = 'Jonh';

console.log(john.rol);
console.log(john.greet());

