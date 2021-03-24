import { Costumer } from '../costumer/costumer';
import { IndividualCostumer } from '../costumer/individual-costumer';
import { IndividualCar } from '../vehicle/individual-car';
import { VehicleProtocol } from '../vehicle/vehicle-protocol';
import { CreateCostumerVehicleFactory } from './costumer-vehicle-factory';

export class IndividualCostumerVehicleFactory
  implements CreateCostumerVehicleFactory {
  createCostumer(costumerName: string): Costumer {
    return new IndividualCostumer(costumerName);
  }
  createVehicle(vehicleName: string, costumerName: string): VehicleProtocol {
    const costumer = this.createCostumer(costumerName);
    return new IndividualCar(vehicleName, costumer);
  }
}
