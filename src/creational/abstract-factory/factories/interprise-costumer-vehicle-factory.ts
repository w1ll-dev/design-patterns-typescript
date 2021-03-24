import { Costumer } from '../costumer/costumer';
import { InterpriseCostumer } from '../costumer/interprise-costumer';
import { InterpriseCar } from '../vehicle/interprise-car';
import { VehicleProtocol } from '../vehicle/vehicle-protocol';
import { CreateCostumerVehicleFactory } from './costumer-vehicle-factory';

export class InterpriseCostumerVehicleFactory
  implements CreateCostumerVehicleFactory {
  createCostumer(costumerName: string): Costumer {
    return new InterpriseCostumer(costumerName);
  }
  createVehicle(vehicleName: string, costumerName: string): VehicleProtocol {
    const costumer = this.createCostumer(costumerName);
    return new InterpriseCar(vehicleName, costumer);
  }
}
