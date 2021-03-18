export type Prototype = {
  clone(): Prototype;
};

export class Person implements Prototype {
  public name: string;
  public addresses: Address[] = [];
  constructor(name: string) {
    this.name = name;
  }

  clone(): Person {
    const newObject = new Person(this.name);
    return newObject;
  }

  addAddress(address: Address): void {
    this.addresses.push(address);
  }
}

class Address implements Prototype {
  constructor(public street: string, public num: number) {}

  clone(): Address {
    const newAddress = new Address(this.street, this.num);
    return newAddress;
  }
}

const person1 = new Person('Will');
const address1 = new Address('Rua Neide Maria', 71);
const person2 = person1.clone();
const address2 = new Address('Rua Lima', 20);

person1.addAddress(address1);
person2.addAddress(address2);

person1.addresses[0].street = 'Nova Rua X';

console.log(person1);
console.log(person2);
