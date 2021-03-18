export type Prototype = {
  clone(): Prototype;
};

export class Person implements Prototype {
  public name: string;
  public addresses: Address[] = [];
  constructor(name: string) {
    this.name = name;
  }

  clone(): this {
    const newObject = Object.create(this);
    return newObject;
  }

  addAddress(address: Address): void {
    this.addresses.push(address);
  }
}

class Address {
  constructor(public street: string, public num: number) {}
}

const person1 = new Person('Will');
const person2 = person1.clone();
const address1 = new Address('Neide Maria', 71);
person2.addAddress(address1);

console.log(person1);
console.log(person2);
