import { Costumer } from '../costumer/costumer';
import { VehicleProtocol } from '../vehicle/vehicle-protocol';

export type CreateCostumerVehicleFactory = {
  createCostumer(costumerName: string): Costumer;
  createVehicle(vehicleName: string, costumerName: string): VehicleProtocol;
};
