import { Vehicle } from '../vehicle/vehicle';

export abstract class VehicleFactory {
  // Factory Method
  abstract vehicleFactory(vehicleName: string): Vehicle;
}
