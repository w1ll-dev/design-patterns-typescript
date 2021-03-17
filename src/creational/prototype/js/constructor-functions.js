const personPrototype = {
  firstName: `Jhon`,
  lastName: `Dolle`,
  age: 23,
  fullName() {
    return `${this.firstName} ${this.lastName}`;
  },
};

function Person(firstName, lastName, age) {
  this.lastName = lastName; //shadowing last name of prototype
  this.age = age;
}

Person.prototype = Object.create(personPrototype);
Person.prototype.constructor = Person;

// inheritance

function SubPerson() {
  this.fromSubClass = `yes`;
}

SubPerson.prototype = Person.prototype;
SubPerson.prototype.constructor = SubPerson;

const newPerson = new Person();
const newSubPerson = new SubPerson();

console.log(newSubPerson);
