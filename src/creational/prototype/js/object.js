const personPrototype = {
  firstName: 'Name',
  lastName: 'LastName',
  age: 23,
  fullName() {
    return `${this.firstName} ${this.lastName}`;
  },
};

const anotherPerson = Object.create(personPrototype);
anotherPerson.firstName = `Will`;
console.log(anotherPerson.age);
console.log(anotherPerson.firstName);
