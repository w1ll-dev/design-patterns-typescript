const personPrototype = {
  firstName: 'Name',
  lastName: 'LastName',
  age: 23,
  fullName() {
    return `${this.firstName} ${this.lastName}`;
  },
};

const anotherPerson = Object.create(personPrototype);

console.log(anotherPerson.firstName);
