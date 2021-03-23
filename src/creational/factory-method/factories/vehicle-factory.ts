import { Vehicle } from '../vehicle/vehicle';

export abstract class VehicleFactory {
  // Factory Method
  abstract createVehicle(vehicleName: string): Vehicle;
}
