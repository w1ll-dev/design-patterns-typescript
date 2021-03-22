import { CarFactory } from './factories/car-factory';

const carFactory = new CarFactory();
const fusca = carFactory.vehicleFactory('Fusca');
fusca.pickUp('Will');
fusca.stop();
