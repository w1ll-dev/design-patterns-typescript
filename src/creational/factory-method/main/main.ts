import { BicycleFactory } from '../factories/bicycle-factory';
import { CarFactory } from '../factories/car-factory';
import { randomNumber } from '../utils/random-numbers';
import { Vehicle } from '../vehicle/vehicle';

export function randomVehicleAlgorithm(): Vehicle {
  const carFactory = new CarFactory();
  const bicycleFactory = new BicycleFactory();
  const bicicle1 = bicycleFactory.createVehicle();
  const car1 = carFactory.createVehicle('FUSCA');
  const car2 = carFactory.createVehicle('CELTA');
  const car3 = carFactory.createVehicle('COROLLA');
  const vehicles = [bicicle1, car1, car2, car3];
  return vehicles[randomNumber(vehicles.length)];
}
