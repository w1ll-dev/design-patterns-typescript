import { Vehicle } from './vehicle';

export class Car implements Vehicle {
  constructor(private name: string) {}

  pickUp(costumerName: string): void {
    console.log(`The ${this.name} will get ${costumerName}.`);
  }

  stop(): void {
    console.log(`The ${this.name} stopped.`);
  }
}
