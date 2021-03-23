import { Vehicle } from './vehicle';

export class Bicycle implements Vehicle {
  name = 'Bicycle';
  constructor() {}

  pickUp(costumerName: string): void {
    console.log(`The ${costumerName} get an bicycle.`);
  }

  stop(): void {
    console.log(`The bicycle stopped.`);
  }
}
