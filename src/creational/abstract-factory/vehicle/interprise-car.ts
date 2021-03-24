import { Costumer } from '../costumer/costumer';
import { VehicleProtocol } from './vehicle-protocol';

export class InterpriseCar implements VehicleProtocol {
  constructor(public name: string, private readonly costumer: Costumer) {}
  pickUp(): void {
    console.log(
      `The ${this.name}-interprise is getting ${this.costumer.name}.`,
    );
  }
}
